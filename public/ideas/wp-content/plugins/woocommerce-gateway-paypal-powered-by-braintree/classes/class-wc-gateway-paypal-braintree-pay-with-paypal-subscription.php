<?php
/**
 * WC_Gateway_Paypal_Braintree_Pay_With_PayPal class.
 *
 * @extends WC_Gateway_Paypal_Braintree_Subscription
 */

class WC_Gateway_Paypal_Braintree_Pay_With_PayPal_Subscription extends WC_Gateway_Paypal_Braintree_Subscription {

	public function __construct() {

		$this->id = 'paypalbraintree_paypal';

		parent::__construct();

		$this->icon              = plugins_url( '../assets/images/payments/PP_logo_h_100x26.png', __FILE__ );
		$this->checkout_template = 'checkout/paypal-braintree-pay-with-paypal.php';
		$this->title             = $this->get_option( 'title_paypal' );
		$this->description       = $this->get_option( 'description_paypal' );

	}

}
