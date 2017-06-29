<?php
/**
 * Review order table
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/checkout/review-order.php.
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
 * @version     2.3.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>
<div class="shop_table wc-checkout-review-order">
	<p data-live="#billing_email"></p>

	<ul>
		<li><span data-live="#billing_first_name"></span> <span data-live="#billing_last_name"></span></li>
		<li data-live="#billing_address_1"></li>
		<li data-live="#billing_country" data-live-type="select"></li>
		<li data-live="#billing_phone"></li>
	<ul>

	<label class="sc-checkbox sc-checkbox-alt sc-checkbox-off normal" data-live=".shipping_method" data-live-type="radio"></label>
</div>
