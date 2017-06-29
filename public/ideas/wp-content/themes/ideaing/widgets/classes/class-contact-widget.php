<?php

/**
 * Contact info widget
 */
class IdeaingContact extends WP_Widget {

  /**
	 * Register widget with WordPress.
	 */
	function __construct() {
		parent::__construct(
			'ideaing-contact-widget', // Base ID
			__( 'Ideaing: Contact info', 'ideaing' ), // Name
			array( 'description' => __( 'A contact info widget', 'ideaing' ), 'classname' => 'gray-widget ideaing-contact-widget' ) // Args
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
		echo $args['before_widget'];
		if ( ! empty( $instance['title'] ) ) {
			echo $args['before_title'] . apply_filters( 'widget_title', $instance['title'] ) . $args['after_title'];
		}

    if ( ! empty( $instance['tel'] ) ) {
      printf(
        '<p><i class="m-icon--phone"></i><a href="tel:%s">%s</a></p>'
        , trim(preg_replace('/[^\+?\d]/', '', $instance['tel']))
        , $instance['tel']
      );
    }

    if ( ! empty( $instance['email'] ) ) {
      printf(
        '<p><i class="m-icon--markunread"></i><a href="mailto:%s">%s</a></p>'
        , trim(strtolower($instance['email']))
        , $instance['email']
      );
    }

    $schedule = '';

    for ($i=0; $i < 2; $i++) {

      $row = '';

      if ( ! empty( $instance['t__'.$i] ) ) {
        $row .= sprintf(
          '<span class="t">%s</span>'
          , $instance['t__'.$i]
        );
      }

      if ( ! empty( $instance['c__'.$i] ) ) {
        $row .= sprintf(
          '<span class="c"><i class="m-icon--schedule"></i><span>%s</span></span>'
          , $instance['c__'.$i]
        );
      }

      if ( ! empty($row) ) $schedule .= sprintf('<li>%s</li>', $row);
    }

    if ( ! empty( $schedule ) ) {
      echo '<ul>', $schedule,'</ul>';
    }

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
		$title = isset( $instance['title'] ) && ! empty( $instance['title'] ) ? $instance['title'] : __( 'Contact us', 'ideaing' );
    $tel = isset( $instance['tel'] ) && ! empty( $instance['tel'] ) ? $instance['tel'] : '';
    $email = isset( $instance['email'] ) && ! empty( $instance['email'] ) ? $instance['email'] : '';
    $t__0 = isset( $instance['t__0'] ) && ! empty( $instance['t__0'] ) ? $instance['t__0'] : '';
    $c__0 = isset( $instance['c__0'] ) && ! empty( $instance['c__0'] ) ? $instance['c__0'] : '';
    $t__1 = isset( $instance['t__1'] ) && ! empty( $instance['t__1'] ) ? $instance['t__1'] : '';
    $c__1 = isset( $instance['c__1'] ) && ! empty( $instance['c__1'] ) ? $instance['c__1'] : '';
		?>
		<p>
		<label for="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>"><?php _e( esc_attr( 'Title:' ) ); ?></label>
		<input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'title' ) ); ?>" type="text" value="<?php echo esc_attr( $title ); ?>">
		</p>
    <p>
		<label for="<?php echo esc_attr( $this->get_field_id( 'tel' ) ); ?>"><?php _e( esc_attr( 'Tel:' ) ); ?></label>
		<input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'tel' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'tel' ) ); ?>" type="text" value="<?php echo esc_attr( $tel ); ?>" placeholder="<?php esc_attr_e( '(888) 555 - 5555', 'ideaing' ); ?>">
		</p>
    <p>
		<label for="<?php echo esc_attr( $this->get_field_id( 'email' ) ); ?>"><?php _e( esc_attr( 'Email:' ) ); ?></label>
		<input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'email' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'email' ) ); ?>" type="text" value="<?php echo esc_attr( $email ); ?>" placeholder="HELP@IDEAING.COM">
		</p>
    <div style="padding: 1px 1em;margin:0 0 1em;background-color:#f6f6f6;">
      <p>
  		<label for="<?php echo esc_attr( $this->get_field_id( 't__0' ) ); ?>"><?php _e( esc_attr( 'Schedule days:' ) ); ?></label>
  		<input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 't__0' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 't__0' ) ); ?>" type="text" value="<?php echo esc_attr( $t__0 ); ?>" placeholder="<?php esc_attr_e( 'Monday - Friday', 'ideaing' ); ?>">
  		</p>
      <p>
  		<label for="<?php echo esc_attr( $this->get_field_id( 'c__0' ) ); ?>"><?php _e( esc_attr( 'Schedule hours:' ) ); ?></label>
  		<input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'c__0' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'c__0' ) ); ?>" type="text" value="<?php echo esc_attr( $c__0 ); ?>" placeholder="<?php esc_attr_e( '8:00am - 5:00pm  |  PST', 'ideaing' ); ?>">
  		</p>
      <p>
      <label for="<?php echo esc_attr( $this->get_field_id( 't__1' ) ); ?>"><?php _e( esc_attr( 'Schedule days:' ) ); ?></label>
      <input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 't__1' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 't__1' ) ); ?>" type="text" value="<?php echo esc_attr( $t__1 ); ?>" placeholder="<?php esc_attr_e( 'Weekends', 'ideaing' ); ?>">
      </p>
      <p>
      <label for="<?php echo esc_attr( $this->get_field_id( 'c__1' ) ); ?>"><?php _e( esc_attr( 'Schedule hours:' ) ); ?></label>
      <input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'c__1' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'c__1' ) ); ?>" type="text" value="<?php echo esc_attr( $c__1 ); ?>" placeholder="<?php esc_attr_e( '8:00am - Noon  |  PST', 'ideaing' ); ?>">
      </p>
    </div>
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
		$instance['title'] = ( ! empty( $new_instance['title'] ) ) ? strip_tags( $new_instance['title'] ) : '';
    $instance['tel'] = ( ! empty( $new_instance['tel'] ) ) ? strip_tags( $new_instance['tel'] ) : '';
    $instance['email'] = ( ! empty( $new_instance['email'] ) ) ? strip_tags( $new_instance['email'] ) : '';
    $instance['t__0'] = ( ! empty( $new_instance['t__0'] ) ) ? strip_tags( $new_instance['t__0'] ) : '';
    $instance['c__0'] = ( ! empty( $new_instance['c__0'] ) ) ? strip_tags( $new_instance['c__0'] ) : '';
    $instance['t__1'] = ( ! empty( $new_instance['t__1'] ) ) ? strip_tags( $new_instance['t__1'] ) : '';
    $instance['c__1'] = ( ! empty( $new_instance['c__1'] ) ) ? strip_tags( $new_instance['c__1'] ) : '';

		return $instance;
	}
}

add_action( 'widgets_init', function(){

	register_widget( 'IdeaingContact' );
});
