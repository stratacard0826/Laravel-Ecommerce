<?php
/**
 * The template for the sidebar containing the main widget area
 *
 * @package WordPress
 * @subpackage Ideaing
 * @since WooCommerce Integration 1.0
 */
?>
<?php if ( is_active_sidebar( 'sidebar-2' ) && !apply_filters('is_ideaing_cart_empty', true) ) : ?>
	<aside id="secondary" class="sidebar widget-area widget-area-checkout" role="complementary">
		<?php dynamic_sidebar( 'sidebar-2' ); ?>
	</aside><!-- .sidebar .widget-area -->
<?php endif; ?>
