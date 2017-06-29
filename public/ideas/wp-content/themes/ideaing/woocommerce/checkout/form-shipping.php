<?php
/**
 * Checkout shipping information form
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/checkout/form-shipping.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @author  WooThemes
 * @package WooCommerce/Templates
 * @version 2.2.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

?>
<div class="woocommerce-shipping-fields">

	<?php if ( true === WC()->cart->needs_shipping_address() ) : ?>

		<header class="entry-header">
			<h3 class="entry-title-alt"><?php _e('Shipping address'); ?></h3>
		</header><!-- .entry-header -->

		<?php $shipping = apply_filters( 'woocommerce_ship_to_different_address_checked', 'shipping' === get_option( 'woocommerce_ship_to_destination' ) ? 1 : 0 );
		?>
		<div id="ship-to-different-address" <?php echo $shipping ? 'class="on-add-billing"' : '' ?>>
			<input id="ship-to-different-address-checkbox" class="input-checkbox" <?php checked( $shipping, 1 ); ?> type="checkbox" name="ship_to_different_address" value="1" />
		</div>

		<label class="ship-to-diff-address sc-checkbox normal same-address"><?php _e( 'Same as billing address', 'woocommerce' ); ?></label>
		<label class="ship-to-diff-address sc-checkbox normal"><?php _e( 'Add a shipping address', 'woocommerce' ); ?></label>

		<div class="shipping_address">

			<header class="entry-header">
			  <?php printf( '<h1 class="entry-title">%s</h1>', __('Enter shipping address', 'woocommerce') ); ?>
			</header><!-- .entry-header -->

			<?php do_action( 'woocommerce_before_checkout_shipping_form', $checkout ); ?>

			<?php foreach ( $checkout->checkout_fields['shipping'] as $key => $field ) : ?>

				<?php woocommerce_form_field( $key, $field, $checkout->get_value( $key ) ); ?>

			<?php endforeach; ?>

			<?php do_action( 'woocommerce_after_checkout_shipping_form', $checkout ); ?>

		</div>

	<?php endif; ?>

	<?php do_action( 'woocommerce_before_order_notes', $checkout ); ?>

	<?php if ( apply_filters( 'woocommerce_enable_order_notes_field', get_option( 'woocommerce_enable_order_comments', 'yes' ) === 'yes' ) ) : ?>

		<?php foreach ( $checkout->checkout_fields['order'] as $key => $field ) : ?>

			<?php woocommerce_form_field( $key, $field, $checkout->get_value( $key ) ); ?>

		<?php endforeach; ?>

	<?php endif; ?>

	<?php do_action( 'woocommerce_after_order_notes', $checkout ); ?>
</div>

<div class="form-row place-order text-right">
	<noscript>
		<?php _e( 'Since your browser does not support JavaScript, or it is disabled, please ensure you click the <em>Update Totals</em> button before placing your order. You may be charged more than the amount stated above if you fail to do so.', 'woocommerce' ); ?>
		<br/><input type="submit" class="button alt" name="woocommerce_checkout_update_totals" value="<?php esc_attr_e( 'Update totals', 'woocommerce' ); ?>" />
	</noscript>

	<?php wc_get_template( 'checkout/terms.php' ); ?>

	<?php do_action( 'woocommerce_review_order_before_submit' ); ?>

	<?php $order_button_text = __('Place your order', 'woocommerce'); ?>

	<?php echo apply_filters( 'woocommerce_order_button_html', '<input type="submit" class="button button-primary" name="woocommerce_checkout_place_order" id="place_order" value="' . esc_attr( $order_button_text ) . '" data-value="' . esc_attr( $order_button_text ) . '" />' ); ?>

	<?php do_action( 'woocommerce_review_order_after_submit' ); ?>

	<?php wp_nonce_field( 'woocommerce-process_checkout' ); ?>
</div>
<?php
if ( ! is_ajax() ) {
	do_action( 'woocommerce_review_order_after_payment' );
}
