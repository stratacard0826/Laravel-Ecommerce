<?php
/**
 * Global cart summary
 *
 * @since WooCommerce Integration 1.0
 */

$count = apply_filters('get_ideaing_cart_contents_count', 0);
$user = wp_get_current_user();
?>
  <header>
    <div class="row">
      <div class="col-xs-4">
        <label class="ics--close m-icon--arrow_forward"></label>
      </div>
      <div class="col-xs-4">
        <strong>Cart</strong>
      </div>
      <div class="col-xs-4 u--i">
        <?php echo $user ? sprintf('<span class="u--n">%s</span>', $user->display_name) : ''; ?>
        <span class="u--c">
          <span class="m-icon--shopping-bag-light-green"></span>
          <?php echo $count ? sprintf('<mark>%s</mark>', $count) : ''; ?>
      </div>
    </div>
  </header>
  <?php if ( $count ): ?>
    <section>
      <?php do_action('ideaing_cart_widget_render'); ?>
    </section>
    <footer>
      <div class="cart-collaterals">
        <?php do_action('get_ideaing_woocommerce_cart_totals'); ?>
      </div><!-- .cart-collaterals -->
      <?php do_action( 'woocommerce_proceed_to_checkout'); ?>
    </footer>
  <?php else : ?>
    <section>
      <?php wc_get_template( 'cart/cart-empty.php' ); ?>
    </section>
  <?php endif; ?>
