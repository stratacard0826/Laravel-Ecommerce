<?php
/**
 * Checkout login form
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/checkout/form-login.php.
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
 * @version     2.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

if ( is_user_logged_in() || 'no' === get_option( 'woocommerce_enable_checkout_login_reminder' ) ) {
	return;
}

?>
<div id="sc-login-form">
	<header class="entry-header">
	  <?php the_title( '<h1 class="entry-title">', '<mark>'.__('Step 1 of 2').'</mark></h1>' ); ?>
	</header><!-- .entry-header -->
	<input type="checkbox" id="show--login" class="screen-reader-text">
	<?php

	printf('<p>%s</p>', __('Checking out is easier when you are <label for="show--login">signed in</label>. Or continue as a guest'));

		woocommerce_login_form(
			array(
				'message'  => sprintf('<div class="woocommerce-info">%s</div>', __( 'If you have shopped with us before, please enter your details in the boxes below. <br>If you are a new customer, please proceed to the Billing &amp; Shipping section.', 'woocommerce' )),
				'redirect' => wc_get_page_permalink( 'checkout' ),
				'hidden'   => false
			)
		);
	?>
</div>
