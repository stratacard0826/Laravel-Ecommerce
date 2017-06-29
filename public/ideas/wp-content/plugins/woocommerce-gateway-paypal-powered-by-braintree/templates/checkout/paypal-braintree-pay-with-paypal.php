<?php
/**
 * The checkout page Pay with PayPal form
 *
 * @param array $payment_method_details
 * @param string $payment_method_image url to the payment method image
 *
 * @since 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

if ( array_key_exists( 'description', $model ) && ! empty( $model['description'] ) ) {
	echo wpautop( wptexturize( $model['description'] ) );
}
?>
<?php
if ( array_key_exists( 'paypalbraintree_nonce', $model ) && ! empty( $model['paypalbraintree_nonce'] ) ) {
?>
	<input type="hidden" name="paypalbraintree_nonce" id="paypalbraintree_nonce" value="<?php echo esc_attr( $model['paypalbraintree_nonce'] ); ?>"/>
<?php
}