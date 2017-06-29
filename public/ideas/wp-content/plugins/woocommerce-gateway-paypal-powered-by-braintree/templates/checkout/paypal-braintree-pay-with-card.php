<?php
/**
 * The checkout page Pay with Card form
 *
 * @param string $description
 *
 * @since 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

if ( array_key_exists( 'description', $model ) && ! empty( $model['description'] ) ) {
	echo wpautop( wptexturize( $model['description'] ) );
}
?>
<label for="wc-paypal-braintree-card-number"><?php esc_html_e( 'Card Number', 'woocommerce-gateway-paypal-braintree' ); ?></label>
<div id="wc-paypal-braintree-card-number"></div>
<div id="wc-paypal-braintree-card-meta">
	<label for="wc-paypal-braintree-expiration-date"><?php esc_html_e( 'Expiration Date', 'woocommerce-gateway-paypal-braintree' ); ?></label>
	<div id="wc-paypal-braintree-expiration-date"></div>
	<label for="wc-paypal-braintree-cvv"><?php esc_html_e( 'CVV', 'woocommerce-gateway-paypal-braintree' ); ?></label>
	<div id="wc-paypal-braintree-cvv"></div>
</div>