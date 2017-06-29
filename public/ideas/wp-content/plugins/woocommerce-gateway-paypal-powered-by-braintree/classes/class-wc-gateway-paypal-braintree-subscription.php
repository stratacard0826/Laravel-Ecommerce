<?php
/**
 * WC_Gateway_Paypal_Braintree_Subscription class.
 *
 * @extends WC_Gateway_Paypal_Braintree
 */
abstract class WC_Gateway_Paypal_Braintree_Subscription extends WC_Gateway_Paypal_Braintree {

	/**
	 * Constructor
	 */
	public function __construct() {
		parent::__construct();

		// Add subscription support
		$this->supports = array_merge( $this->supports, array(
			'subscriptions',
			'subscription_cancellation',
			'subscription_suspension',
			'subscription_reactivation',
			'subscription_amount_changes',
			'subscription_date_changes',
			'multiple_subscriptions',
			'subscription_payment_method_change_admin',
			'subscription_payment_method_change_customer',
			)
		);

		// process renewals
		add_action( 'woocommerce_scheduled_subscription_payment_' . $this->id, array( $this, 'scheduled_subscription_payment' ), 10, 2 );

		// filter javascript options
		add_filter( 'wc_gateway_paypal_braintree_data', array( $this, 'filter_paypal_braintree_data' ), 10 );
	}

	/**
	 * Check if order contains subscriptions.
	 *
	 * @param  int $order_id
	 * @return bool
	 */
	protected function order_contains_subscription( $order_id ) {
		return function_exists( 'wcs_order_contains_subscription' ) && ( wcs_order_contains_subscription( $order_id ) || wcs_order_contains_renewal( $order_id ) );
	}

	/**
	 * process_payment
	 *
	 * Completes the initial payment on the subscription order
	 *
	 * Although PayPal Braintree supports subscription products (they call them plans),
	 * they don't support the wide variety of intervals we do, nor multiple subscription
	 * products in a single order.
	 *
	 * So, this extension does all the subscription work itself, storing a customer
	 * in the vault on the first payment, and using those stored credentials for
	 * renewal orders
	 *
	 * @param  int $order_id
	 * @return mixed
	 */
	public function process_payment( $order_id ) {

		// If the order contains no subscriptions, just let the parent process it
		if ( ! $this->order_contains_subscription( $order_id ) ) {
			return parent::process_payment( $order_id );
		}

		$order = new WC_Order( $order_id );
		$this->log( __FUNCTION__, "Info: Beginning processing of payment for (subscription) order $order_id for the amount of {$order->order_total}" );
		$this->log( __FUNCTION__, "Info: Merchant ID = {$this->merchant_id}" );

		$paypal_braintree_nonce = self::get_posted_variable( 'paypalbraintree_nonce' );
		if ( empty( $paypal_braintree_nonce ) ) {
			$this->log( __FUNCTION__, 'Error: The paypal_braintree_nonce was unexpectedly empty' );
			wc_add_notice( __( 'Error: PayPal Powered by Braintree did not supply a payment nonce. Please try again later or use another means of payment.', 'woocommerce-gateway-paypal-braintree' ), 'error' );
			return false;
		}

		$user_id = $order->get_user_id();
		if ( ! is_user_logged_in() ) {
			$this->log( __FUNCTION__, 'Error: No user logged in / being created for the initial subscription payment' );
			wc_add_notice( __( 'Error: You must login or create an account before you can purchase a subscription.', 'woocommerce-gateway-paypal-braintree' ), 'error' );
			return false;
		}

		// Create the gateway instance up front
		require_once( dirname( __FILE__ ) . '/../braintree_sdk/lib/Braintree.php' );
		$gateway = new Braintree_Gateway( array(
			'accessToken' => $this->merchant_access_token,
		) );

		// Check their user meta for a stored braintree customer id
		$braintree_customer_id = get_user_meta( $user_id, '_wc_paypal_braintree_customer_id', true );
		if ( empty( $braintree_customer_id ) ) {

			$this->log( __FUNCTION__, 'Info: Did not find braintree customer id on user meta. Need to create customer' );

			// Create a new customer id, passing the nonce so we can add the card to the vault
			// ref https://developers.braintreepayments.com/reference/request/customer/create/php
			$customer_args = array(
				'firstName'				=> $order->billing_first_name,
				'lastName'				=> $order->billing_last_name,
				'company'				=> $order->billing_company,
				'phone'					=> $order->billing_phone,
				'email'					=> $order->billing_email,
				'paymentMethodNonce'	=> $paypal_braintree_nonce,
			);

			try {
				$result = $gateway->customer()->create( $customer_args );
			} catch ( Exception $e ) {
				$this->log( __FUNCTION__, 'Error: Unable to create customer. Reason: ' . $e->getMessage() );
				wc_add_notice( __( 'Error: PayPal Powered by Braintree was unable to create a customer record for you. Please try again later or use another means of payment.', 'woocommerce-gateway-paypal-braintree' ), 'error' );
				return false;
			}

			if ( ! $result->success ) {
				$this->log( __FUNCTION__, "Error: Unable to create customer: {$result->message}" );
				wc_add_notice( __( 'Error: PayPal Powered by Braintree was unable to create a customer record for you. Please try again later or use another means of payment.', 'woocommerce-gateway-paypal-braintree' ), 'error' );
				return false;
			}

			$braintree_customer_id = $result->customer->id;
			update_user_meta( $user_id, '_wc_paypal_braintree_customer_id', $braintree_customer_id );
			$this->log( __FUNCTION__, "Info: Created customer successfully - braintree customer id = $braintree_customer_id" );

			$payment_methods = $result->customer->paymentMethods;
			$payment_method_token = '';
			foreach ( (array) $payment_methods as $payment_method ) {
				if ( $payment_method->default ) {
					$payment_method_token = $payment_method->token;
				}
			}

			$authentication = array(
				'paymentMethodToken' => $payment_method_token, // can only use the nonce once :)
			);

		} else {

			// We found the braintree customer id in the customer's meta
			$this->log( __FUNCTION__, "Info: Found a braintree customer id in the users meta - customer id = $braintree_customer_id" );
			$authentication = array(
				'paymentMethodNonce' => $paypal_braintree_nonce,
			);

		}

		$sale_args = $this->generate_sales_args( $order, $braintree_customer_id );
		$sale_args = array_merge( $sale_args, $authentication );
		$transaction_id = '';

		// Process trial periods and possible coupon discounts.
		if ( isset( $sale_args['amount'] ) && 0.00 === doubleval( $sale_args['amount'] ) ) {

			$user_id = $order->get_user_id();
			$this->log( __FUNCTION__, "Zero payment amount for trial or coupon. Order ID: $order_id, User ID:  $user_id" );
			$customer = $gateway->customer()->find( $braintree_customer_id );

			$payment_method_token = '';
			foreach ( (array) $customer->paymentMethods as $payment_method ) {
				if ( $payment_method->default ) {
					$payment_method_token = $payment_method->token;
				}
			}

		} else { // charges more than zero should be sent away

			// We have a customer id now, so let's do the sale and store the payment method in the vault.
			$result = $gateway->transaction()->sale( $sale_args );
			if ( ! $result->success ) {
				$notice = sprintf( __( 'Error: PayPal Powered by Braintree was unable to complete the transaction. Please try again later or use another means of payment. Reason: %s', 'woocommerce-gateway-paypal-braintree' ), $error_message );
				wc_add_notice( $notice, 'error' );
				$this->log( __FUNCTION__, "Error: Unable to complete transaction. Reason: {$result->message}" );
				return false;
			}

			$transaction_id = $result->transaction->id;
			$this->log( __FUNCTION__, "Info: Successfully processed initial payment, transaction id = $transaction_id" );
			$credit_card_meta = $result->transaction->creditCard;
			$payment_method_token = $credit_card_meta['token'];

			if ( empty( $payment_method_token ) ) {
				$this->log( __FUNCTION__, 'Info: Customer used the paypal subflow' );
				$paypal_meta = $result->transaction->paypal;
				$payment_method_token = $paypal_meta['token'];
			} else {
				$this->log( __FUNCTION__, 'Info: Customer used the credit card subflow' );
			}

			$braintree_customer_id = $result->transaction->customer['id'];
		}


		if ( empty( $payment_method_token ) ) {
			$this->log( __FUNCTION__, 'Warning: Initial payment succeeded, but no token was provided by the gateway for recurring payments.' );
		}

		// Save the customer ID in each subscription for this order for later use during renewal
		if ( empty( $braintree_customer_id ) ) {
			$this->log( __FUNCTION__, 'Warning: Initial payment succeeded, but no braintree customer ID was provided by the gateway for recurring payments.' );
		} else {
			$this->log( __FUNCTION__, "Info: Saving to subscription(s) recurring payment braintree customer ID $braintree_customer_id" );
		}

		// Note: A single order may contain multiple subscriptions
		// Save the token in each subscription for this order for later use during renewal
		foreach ( wcs_get_subscriptions_for_order( $order->id ) as $subscription ) {
			update_post_meta( $subscription->id, '_wc_paypal_braintree_payment_method_token', $payment_method_token );
			update_post_meta( $subscription->id, '_wc_paypal_braintree_customer_id', $braintree_customer_id );
		}

		$order->payment_complete( $transaction_id );
		$this->log( __FUNCTION__, "Info: Completed processing of payment for order $order_id" );

		return array(
			'result' 	=> 'success',
			'redirect'	=> $this->get_return_url( $order ),
		);
	}

	/**
	 * Create sales args.
	 * @param $order
	 * @param $braintree_customer_id
	 *
	 * @return array
	 */
	public function generate_sales_args( $order, $braintree_customer_id ) {
		$billing = array(
			'firstName'         => $order->billing_first_name,
			'lastName'          => $order->billing_last_name,
			'company'           => $order->billing_company,
			'streetAddress'     => $order->billing_address_1,
			'extendedAddress'   => $order->billing_address_2,
			'locality'          => $order->billing_city,
			'region'            => $order->billing_state,
			'postalCode'        => $order->billing_postcode,
			'countryCodeAlpha2' => $order->billing_country,
		);

		// Shipping data, assemble
		$shipping = array(
			'firstName'         => $order->shipping_first_name,
			'lastName'          => $order->shipping_last_name,
			'company'           => $order->shipping_company,
			'streetAddress'     => $order->shipping_address_1,
			'extendedAddress'   => $order->shipping_address_2,
			'locality'          => $order->shipping_city,
			'region'            => $order->shipping_state,
			'postalCode'        => $order->shipping_postcode,
			'countryCodeAlpha2' => $order->shipping_country,
		);

		$sale_args = array(
			'amount'     => $order->order_total,
			'billing'    => $billing,
			'shipping'   => $shipping,
			'customerId' => $braintree_customer_id,
			'channel'    => 'WooThemes_BT', // aka BN tracking code
			'orderId'    => $order->id,
			'options'    => array(
				'submitForSettlement'   => true,
				'storeInVaultOnSuccess' => true,
			),
		);

		return $sale_args;
	}

	/**
	 * scheduled_subscription_payment
	 *
	 * Hooked to woocommerce_scheduled_subscription_payment_{gateway_id}
	 * Completes recurring payments for a subscription
	 */
	public function scheduled_subscription_payment( $amount_to_charge, $order ) {

		$this->log( __FUNCTION__, "Info: Beginning processing of scheduled payment for order {$order->id} for the amount of $amount_to_charge" );
		$this->log( __FUNCTION__, "Info: Merchant ID = {$this->merchant_id}" );

		// token is required
		$payment_method_token = get_post_meta( $order->id, '_wc_paypal_braintree_payment_method_token', true );
		if ( empty( $payment_method_token ) ) {
			$this->log( __FUNCTION__, "Error: Payment method token is missing on order meta" );
			WC_Subscriptions_Manager::process_subscription_payment_failure_on_order( $order );
			return;
		}

		// as is the customer id
		$braintree_customer_id = get_post_meta( $order->id, '_wc_paypal_braintree_customer_id', true );
		if ( empty( $braintree_customer_id ) ) {
			$this->log( __FUNCTION__, "Error: Braintree customer ID is missing on order meta" );
			WC_Subscriptions_Manager::process_subscription_payment_failure_on_order( $order );
			return;
		}

		// Create the gateway instance
		require_once( dirname( __FILE__ ) . '/../braintree_sdk/lib/Braintree.php' );
		$gateway = new Braintree_Gateway( array(
			'accessToken' => $this->merchant_access_token,
		) );

		// Process the sale with the stored token and customer
		$sale_args = array(
			'amount' => $amount_to_charge,
			'paymentMethodToken' => $payment_method_token,
			'recurring' => true,
			'customerId' => $braintree_customer_id,
			'channel' => 'WooThemes_BT', // aka BN tracking code
			'orderId' => $order->id,
			'options' => array(
				'submitForSettlement' => true,
				'storeInVaultOnSuccess' => true
			)
		);

		try {
			$result = $gateway->transaction()->sale( $sale_args );
		} catch ( Exception $e ) {
			$this->log( __FUNCTION__, 'Error: Unable to process scheduled payment. Reason: ' . $e->getMessage() );
			return false;
		}

		if ( ! $result->success ) {
			$this->log( __FUNCTION__, "Error: Unable to process scheduled payment: {$result->message}" );
			return false;
		}

		$transaction_id = $result->transaction->id;
		$this->log( __FUNCTION__, "Info: Successfully processed schedule payment, transaction id = $transaction_id" );

		WC_Subscriptions_Manager::process_subscription_payments_on_order( $order );
		$this->log( __FUNCTION__, "Info: Completed processing of scheduled payment for order {$order->id}" );
		$order->add_order_note( sprintf( __( 'PayPal Braintree charge complete (Charge ID: %s)', 'woocommerce-gateway-paypal-braintree' ), $transaction_id ) );
		$order->payment_complete( $transaction_id );
	}

	/**
	 * filter_paypal_braintree_data
	 *
	 * For subscriptions, set the singleUse flag to false so paypal-braintree knows we need a token
	 * for recurring payments
	 */
	public function filter_paypal_braintree_data( $paypal_braintree_data ) {

		if ( array_key_exists( 'checkoutWithPayPal' , $paypal_braintree_data ) ) {
			$paypal_braintree_data['checkoutWithPayPal']['singleUse'] = false;
		}

		return $paypal_braintree_data;
	}

}
