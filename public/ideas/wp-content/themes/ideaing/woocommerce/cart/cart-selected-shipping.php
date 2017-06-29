<?php

/**
 * Shipping Methods Display
 *
 * In 2.1 we show methods per package. This allows for multiple methods per order if so desired.
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/cart/cart-shipping.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see 	    https://docs.woocommerce.com/document/template-structure/
 * @author 		WooThemes
 * @package 	WooCommerce/Templates
 * @version     2.5.0
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>
<tr class="selected-shipping-method">
  <?php if ( 1 < count( $available_methods ) ) : ?>
  		<?php
      foreach ( $available_methods as $method ) :
      if ( $method->id != $chosen_method ) continue;
  					printf( '%s', ideaing_cart_totals_shipping_method_label( $method ) );
  		endforeach;
      ?>
  <?php elseif ( 1 === count( $available_methods ) ) :  ?>
  	<?php
  		$method = current( $available_methods );
  		printf( '%3$s <input type="hidden" name="shipping_method[%1$d]" data-index="%1$d" id="shipping_method_%1$d" value="%2$s" class="shipping_method says" />', $index, esc_attr( $method->id ), ideaing_cart_totals_shipping_method_label( $method ) );
  	?>
  <?php elseif ( ! WC()->customer->has_calculated_shipping() ) : ?>
      <th><?php _e('Shipping'); ?></th>
      <td>---</td>
  <?php endif; ?>
</tr>
