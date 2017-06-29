<?php

/**
 * Order summary widget
 */
class IdeaingOrderSummary extends WP_Widget {

  /**
	 * Register widget with WordPress.
	 */
	function __construct() {
		parent::__construct(
			'ideaing-order-summary-widget', // Base ID
			__( 'Ideaing: Order summary', 'ideaing' ), // Name
			array( 'description' => __( 'Won\'t show up if cart is empty.', 'ideaing' ), 'classname' => 'gray-widget ideaing-order-summary-widget' ) // Args
		);
	}

	/**
	 * Front-end display of widget.
	 *
	 * @see WP_Widget::widget()
	 *
	 * @param array $args     Widget arguments.
	 * @param array $instance Saved values from database.
	 */
	public function widget( $args, $instance ) {

    // Won't show up if cart is empty.
    if (apply_filters('is_ideaing_cart_empty', true)) return;

		echo $args['before_widget'];
		if ( ! empty( $instance['title'] ) ) {
			printf('<h3 class="widget-title-alt">%s</h3>', apply_filters( 'widget_title', $instance['title'] ));
		}

    echo '<div class="cart-collaterals">';

      do_action('get_ideaing_woocommerce_cart_totals');

      do_action('after_order_summary_widget_cart_totals');

    echo '</div><!-- .cart-collaterals -->';

		echo $args['after_widget'];
	}

	/**
	 * Back-end widget form.
	 *
	 * @see WP_Widget::form()
	 *
	 * @param array $instance Previously saved values from database.
	 */
	public function form( $instance ) {
		$title = ! empty( $instance['title'] ) ? $instance['title'] : __( 'Order Summary', 'ideaing' );
		?>
		<p>
		<label for="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>"><?php _e( esc_attr( 'Title:' ) ); ?></label>
		<input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'title' ) ); ?>" type="text" value="<?php echo esc_attr( $title ); ?>">
		</p>
    <p>
		<?php
	}

	/**
	 * Sanitize widget form values as they are saved.
	 *
	 * @see WP_Widget::update()
	 *
	 * @param array $new_instance Values just sent to be saved.
	 * @param array $old_instance Previously saved values from database.
	 *
	 * @return array Updated safe values to be saved.
	 */
	public function update( $new_instance, $old_instance ) {
		$instance = array();
    $instance['title'] = isset( $instance['title'] ) && ! empty( $instance['title'] ) ? strip_tags( $new_instance['title'] ) : '';

		return $instance;
	}
}

add_action( 'widgets_init', function(){

	register_widget( 'IdeaingOrderSummary' );
});
