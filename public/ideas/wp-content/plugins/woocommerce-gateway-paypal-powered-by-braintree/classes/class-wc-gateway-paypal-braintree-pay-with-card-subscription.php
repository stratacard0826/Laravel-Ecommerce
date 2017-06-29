<?php
/**
 * WC_Gateway_Paypal_Braintree_Pay_With_Card_Subscription class.
 *
 * @extends WC_Gateway_Paypal_Braintree_Subscription
 */

class WC_Gateway_Paypal_Braintree_Pay_With_Card_Subscription extends WC_Gateway_Paypal_Braintree_Subscription {

	public function __construct() {

		$this->id = 'paypalbraintree_cards';

		parent::__construct();

		$this->icon              = plugins_url( '../assets/images/payments/payment-method-cards.png', __FILE__ );
		$this->checkout_template = 'checkout/paypal-braintree-pay-with-card.php';
		$this->title             = $this->get_option( 'title_cards' );
		$this->description       = $this->get_option( 'description_cards' );

	}

}
