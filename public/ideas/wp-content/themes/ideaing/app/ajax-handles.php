<?php
/**
 * Ajax handles for this theme.
 *
 * Eventually, some of the functionality here could be replaced by core features.
 *
 * @package WordPress
 * @since Boost up Integration 1.0
 */

/**
 * Ajax handle for author posts
 *
 * @param action (string) wp_posts / required
 * @param author (int) / optional
 * @param posts_per_page (int) / -1 == all / @default 5 / optional
 * @param post__in (string) / separated by commas / optional
 * @link /ideas/wp-admin/admin-ajax.php
 * @return return string
 */
function ideaing_wp_posts(){

  $site_url = site_url('wp-content', 'https');

  $cdn_url = 'https://d3f8t323tq9ys5.cloudfront.net';

  $data = array(
    'total' => 0,
    'posts' => array()
  );

  $args = array(
    'posts_per_page' => 5, // default
  );

  if ( isset($_REQUEST['posts_per_page']) ) {
    $args['posts_per_page'] = intval($_REQUEST['posts_per_page']);
  }

  if ( isset($_REQUEST['author']) ) {
    $args['author'] = absint($_REQUEST['author']);
  }

  if ( isset($_REQUEST['author_name']) ) {
    $args['author_name'] = trim($_REQUEST['author_name']);
  }

  if ( isset($_REQUEST['post__in']) ) {
    $args['post__in'] = explode(',', $_REQUEST['post__in']);
  }

  $query = new WP_Query( $args );

  if ( $query->have_posts() ) {

  	while ( $query->have_posts() ) {

  		$query->the_post();

      $data['total']++;

      $data['posts'][] = array(
        'id' => get_the_ID(),
        'title' => get_the_title(),
        'link' => get_permalink(),
        'feed_image' => str_replace( $site_url, $cdn_url, wp_get_attachment_url(get_post_meta(get_the_ID(), 'feed_image', true)))
      );
  	}

  	wp_reset_postdata();
  }

  wp_send_json_success( $data );
}
add_action( 'wp_ajax_wp_posts', 'ideaing_wp_posts' );
add_action( 'wp_ajax_nopriv_wp_posts', 'ideaing_wp_posts' );
