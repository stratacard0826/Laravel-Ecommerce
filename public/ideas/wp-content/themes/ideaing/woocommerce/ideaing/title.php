<?php
/**
 * Page Title
 *
 * @since WooCommerce Integration 1.0
 */

if ( is_checkout() ) return;

$extra = '';
if ( is_cart() && ! apply_filters('is_ideaing_cart_empty', false) ){
  $extra = sprintf(
    '<span class="sc-m--info"><span>%s</span><span>%s</span></span>'
    , __( 'Price', 'woocommerce' )
    , __( 'Quantity', 'woocommerce' )
  );
}
?>

<header class="entry-header">
  <?php the_title( '<h1 class="entry-title">', $extra . '</h1>' ); ?>
</header><!-- .entry-header -->
