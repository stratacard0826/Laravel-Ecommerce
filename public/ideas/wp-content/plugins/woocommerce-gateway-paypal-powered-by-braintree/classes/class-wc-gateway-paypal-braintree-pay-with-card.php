<?php
/**
 * WC_Gateway_Paypal_Braintree_Pay_With_Card class.
 *
 * @extends WC_Gateway_Paypal_Braintree
 */

class WC_Gateway_Paypal_Braintree_Pay_With_Card extends WC_Gateway_Paypal_Braintree {

	/**
	 * WC_Gateway_Paypal_Braintree_Pay_With_Card constructor.
	 */
	public function __construct() {

		$this->id = 'paypalbraintree_cards';

		parent::__construct();

		/**
		 * Filter the accepted credit card icons for Paypal Powered by Braintree.
		 *
		 * @param string $card_icons_url disployed on the checkout page.
		 */
		$this->icon              = apply_filters( 'wc_gateway_paypal_braintree_card_icons_image_url', plugins_url( '../assets/images/payments/payment-method-cards.png', __FILE__ ) );
		$this->checkout_template = 'checkout/paypal-braintree-pay-with-card.php';
		$this->title             = $this->get_option( 'title_cards' );
		$this->description       = $this->get_option( 'description_cards' );

	}
}
