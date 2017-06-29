<?php

/**
 * Cart summary widget
 */
class IdeaingCartSummary extends WP_Widget {

  /**
	 * Register widget with WordPress.
	 */
	function __construct() {
		parent::__construct(
			'ideaing-cart-summary-widget', // Base ID
			__( 'Ideaing: Cart summary', 'ideaing' ), // Name
			array( 'description' => __( 'Won\'t show up on cart page.', 'ideaing' ), 'classname' => 'collapse-widget white-widget ideaing-cart-summary-widget' ) // Args
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

    if (apply_filters('is_ideaing_cart', false)) return;

		echo $args['before_widget'];

    do_action('ideaing_cart_widget_render');

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
    // Silence
    echo '<br>';
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
		// Silence
		return $new_instance;
	}
}

add_action( 'widgets_init', function(){

	register_widget( 'IdeaingCartSummary' );
});
