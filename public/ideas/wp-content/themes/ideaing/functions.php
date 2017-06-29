<?php
/*
 *  Author: Todd Motto | @toddmotto
 *  URL: html5blank.com | @html5blank
 *  Custom functions, support, custom post types and more.
 */

/*------------------------------------*\
	External Modules/Files
\*------------------------------------*/

// Load any external files you have here

/*------------------------------------*\
	Theme Support
\*------------------------------------*/

if (!isset($content_width))
{
    $content_width = 900;
}

if (function_exists('add_theme_support'))
{
    // Add Menu Support
    add_theme_support('menus');

    // Add Thumbnail Theme Support
    add_theme_support('post-thumbnails');
    add_image_size('large', 700, '', true); // Large Thumbnail
    add_image_size('medium', 250, '', true); // Medium Thumbnail
    add_image_size('small', 120, '', true); // Small Thumbnail
    add_image_size('custom-size', 700, 200, true); // Custom Thumbnail Size call using the_post_thumbnail('custom-size');

    // Add Support for Custom Backgrounds - Uncomment below if you're going to use
    /*add_theme_support('custom-background', array(
	'default-color' => 'FFF',
	'default-image' => get_template_directory_uri() . '/img/bg.jpg'
    ));*/

    // Add Support for Custom Header - Uncomment below if you're going to use
    /*add_theme_support('custom-header', array(
	'default-image'			=> get_template_directory_uri() . '/img/headers/default.jpg',
	'header-text'			=> false,
	'default-text-color'		=> '000',
	'width'				=> 1000,
	'height'			=> 198,
	'random-default'		=> false,
	'wp-head-callback'		=> $wphead_cb,
	'admin-head-callback'		=> $adminhead_cb,
	'admin-preview-callback'	=> $adminpreview_cb
    ));*/

    // Enables post and comment RSS feed links to head
    add_theme_support('automatic-feed-links');

    // Localisation Support
    load_theme_textdomain('html5blank', get_template_directory() . '/languages');
}

/*------------------------------------*\
	Functions
\*------------------------------------*/

// HTML5 Blank navigation
function html5blank_nav()
{
	wp_nav_menu(
	array(
		'theme_location'  => 'header-menu',
		'menu'            => '',
		'container'       => 'div',
		'container_class' => 'menu-{menu slug}-container',
		'container_id'    => '',
		'menu_class'      => 'menu',
		'menu_id'         => '',
		'echo'            => true,
		'fallback_cb'     => 'wp_page_menu',
		'before'          => '',
		'after'           => '',
		'link_before'     => '',
		'link_after'      => '',
		'items_wrap'      => '<ul>%3$s</ul>',
		'depth'           => 0,
		'walker'          => ''
		)
	);
}


// Register HTML5 Blank Navigation
function register_html5_menu()
{
    register_nav_menus(array( // Using array to specify more menus if needed
        'header-menu' => __('Header Menu', 'html5blank'), // Main Navigation
        'sidebar-menu' => __('Sidebar Menu', 'html5blank'), // Sidebar Navigation
        'extra-menu' => __('Extra Menu', 'html5blank') // Extra Navigation if needed (duplicate as many as you need!)
    ));
}

// Remove the <div> surrounding the dynamic navigation to cleanup markup
function my_wp_nav_menu_args($args = '')
{
    $args['container'] = false;
    return $args;
}

// Remove Injected classes, ID's and Page ID's from Navigation <li> items
function my_css_attributes_filter($var)
{
    return is_array($var) ? array() : '';
}

// Remove invalid rel attribute values in the categorylist
function remove_category_rel_from_category_list($thelist)
{
    return str_replace('rel="category tag"', 'rel="tag"', $thelist);
}

// Add page slug to body class, love this - Credit: Starkers Wordpress Theme
function add_slug_to_body_class($classes)
{
    global $post;
    if (is_home()) {
        $key = array_search('blog', $classes);
        if ($key > -1) {
            unset($classes[$key]);
        }
    } elseif (is_page()) {
        $classes[] = sanitize_html_class($post->post_name);
    } elseif (is_singular()) {
        $classes[] = sanitize_html_class($post->post_name);
    }

    return $classes;
}

/**
 * Registers a widget area.
 *
 * @link https://developer.wordpress.org/reference/functions/register_sidebar/
 *
 * @since WooCommerce Integration 1.0
 */
function ideaing_widgets_init() {
	register_sidebar( array(
		'name'          => __( 'Sidebar', 'ideaing' ),
		'id'            => 'sidebar-1',
		'description'   => __( 'Add widgets here to appear in your sidebar.', 'ideaing' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );

	register_sidebar( array(
		'name'          => __( 'After add to card sidebar', 'ideaing' ),
		'id'            => 'sidebar-2',
		'description'   => __( 'Appears instead of "Sidebar" when cart is not empty on checkout pages.', 'ideaing' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
}
add_action( 'widgets_init', 'ideaing_widgets_init' );

// Remove wp_head() injected Recent Comment styles
function my_remove_recent_comments_style()
{
    global $wp_widget_factory;
    remove_action('wp_head', array(
        $wp_widget_factory->widgets['WP_Widget_Recent_Comments'],
        'recent_comments_style'
    ));
}

// Pagination for paged posts, Page 1, Page 2, Page 3, with Next and Previous Links, No plugin
function html5wp_pagination()
{
    global $wp_query;
    $big = 999999999;
    echo paginate_links(array(
        'base' => str_replace($big, '%#%', get_pagenum_link($big)),
        'format' => '?paged=%#%',
        'current' => max(1, get_query_var('paged')),
        'total' => $wp_query->max_num_pages
    ));
}

// Custom Excerpts
function html5wp_index($length) // Create 20 Word Callback for Index page Excerpts, call using html5wp_excerpt('html5wp_index');
{
    return 20;
}

// Create 40 Word Callback for Custom Post Excerpts, call using html5wp_excerpt('html5wp_custom_post');
function html5wp_custom_post($length)
{
    return 40;
}

// Create the Custom Excerpts callback
function html5wp_excerpt($length_callback = '', $more_callback = '')
{
    global $post;
    if (function_exists($length_callback)) {
        add_filter('excerpt_length', $length_callback);
    }
    if (function_exists($more_callback)) {
        add_filter('excerpt_more', $more_callback);
    }
    $output = get_the_excerpt();
    $output = apply_filters('wptexturize', $output);
    $output = apply_filters('convert_chars', $output);
    $output = '<p>' . $output . '</p>';
    echo $output;
}

// Custom View Article link to Post
function html5_blank_view_article($more)
{
    global $post;
    return '... <a class="view-article" href="' . get_permalink($post->ID) . '">' . __('View Article', 'html5blank') . '</a>';
}

// Remove Admin bar
function remove_admin_bar()
{
    return false;
}

// Remove 'text/css' from our enqueued stylesheet
function html5_style_remove($tag)
{
    return preg_replace('~\s+type=["\'][^"\']++["\']~', '', $tag);
}

// Remove thumbnail width and height dimensions that prevent fluid images in the_thumbnail
function remove_thumbnail_dimensions( $html )
{
    $html = preg_replace('/(width|height)=\"\d*\"\s/', "", $html);
    return $html;
}

// Custom Gravatar in Settings > Discussion
function html5blankgravatar ($avatar_defaults)
{
    $myavatar = get_template_directory_uri() . '/img/gravatar.jpg';
    $avatar_defaults[$myavatar] = "Custom Gravatar";
    return $avatar_defaults;
}

// Threaded Comments
function enable_threaded_comments()
{
    if (!is_admin()) {
        if (is_singular() AND comments_open() AND (get_option('thread_comments') == 1)) {
            wp_enqueue_script('comment-reply');
        }
    }
}

// Custom Comments Callback
function html5blankcomments($comment, $args, $depth)
{
	$GLOBALS['comment'] = $comment;
	extract($args, EXTR_SKIP);

	if ( 'div' == $args['style'] ) {
		$tag = 'div';
		$add_below = 'comment';
	} else {
		$tag = 'li';
		$add_below = 'div-comment';
	}
?>
    <!-- heads up: starting < for the html tag (li or div) in the next line: -->
    <<?php echo $tag ?> <?php comment_class(empty( $args['has_children'] ) ? '' : 'parent') ?> id="comment-<?php comment_ID() ?>">
	<?php if ( 'div' != $args['style'] ) : ?>
	<div id="div-comment-<?php comment_ID() ?>" class="comment-body">
	<?php endif; ?>
	<div class="comment-author vcard">
	<?php if ($args['avatar_size'] != 0) echo get_avatar( $comment, $args['180'] ); ?>
	<?php printf(__('<cite class="fn">%s</cite> <span class="says">says:</span>'), get_comment_author_link()) ?>
	</div>
<?php if ($comment->comment_approved == '0') : ?>
	<em class="comment-awaiting-moderation"><?php _e('Your comment is awaiting moderation.') ?></em>
	<br />
<?php endif; ?>

	<div class="comment-meta commentmetadata"><a href="<?php echo htmlspecialchars( get_comment_link( $comment->comment_ID ) ) ?>">
		<?php
			printf( __('%1$s at %2$s'), get_comment_date(),  get_comment_time()) ?></a><?php edit_comment_link(__('(Edit)'),'  ','' );
		?>
	</div>

	<?php comment_text() ?>

	<div class="reply">
	<?php comment_reply_link(array_merge( $args, array('add_below' => $add_below, 'depth' => $depth, 'max_depth' => $args['max_depth']))) ?>
	</div>
	<?php if ( 'div' != $args['style'] ) : ?>
	</div>
	<?php endif; ?>
<?php }

/*------------------------------------*\
	Actions + Filters + ShortCodes
\*------------------------------------*/

// Add Actions
//add_action('init', 'html5blank_header_scripts'); // Add Custom Scripts to wp_head
//add_action('wp_print_scripts', 'html5blank_conditional_scripts'); // Add Conditional Page Scripts
add_action('get_header', 'enable_threaded_comments'); // Enable Threaded Comments
//add_action('wp_enqueue_scripts', 'html5blank_styles'); // Add Theme Stylesheet
add_action('init', 'register_html5_menu'); // Add HTML5 Blank Menu
add_action('init', 'create_post_type_html5'); // Add our HTML5 Blank Custom Post Type
add_action('widgets_init', 'my_remove_recent_comments_style'); // Remove inline Recent Comment Styles from wp_head()
add_action('init', 'html5wp_pagination'); // Add our HTML5 Pagination

// Remove Actions
remove_action('wp_head', 'feed_links_extra', 3); // Display the links to the extra feeds such as category feeds
remove_action('wp_head', 'feed_links', 2); // Display the links to the general feeds: Post and Comment Feed
remove_action('wp_head', 'rsd_link'); // Display the link to the Really Simple Discovery service endpoint, EditURI link
remove_action('wp_head', 'wlwmanifest_link'); // Display the link to the Windows Live Writer manifest file.
remove_action('wp_head', 'index_rel_link'); // Index link
remove_action('wp_head', 'parent_post_rel_link', 10, 0); // Prev link
remove_action('wp_head', 'start_post_rel_link', 10, 0); // Start link
remove_action('wp_head', 'adjacent_posts_rel_link', 10, 0); // Display relational links for the posts adjacent to the current post.
remove_action('wp_head', 'wp_generator'); // Display the XHTML generator that is generated on the wp_head hook, WP version
remove_action('wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0);
remove_action('wp_head', 'rel_canonical');
remove_action('wp_head', 'wp_shortlink_wp_head', 10, 0);

// Add Filters
add_filter('avatar_defaults', 'html5blankgravatar'); // Custom Gravatar in Settings > Discussion
add_filter('body_class', 'add_slug_to_body_class'); // Add slug to body class (Starkers build)
add_filter('widget_text', 'do_shortcode'); // Allow shortcodes in Dynamic Sidebar
add_filter('widget_text', 'shortcode_unautop'); // Remove <p> tags in Dynamic Sidebars (better!)
add_filter('wp_nav_menu_args', 'my_wp_nav_menu_args'); // Remove surrounding <div> from WP Navigation
// add_filter('nav_menu_css_class', 'my_css_attributes_filter', 100, 1); // Remove Navigation <li> injected classes (Commented out by default)
// add_filter('nav_menu_item_id', 'my_css_attributes_filter', 100, 1); // Remove Navigation <li> injected ID (Commented out by default)
// add_filter('page_css_class', 'my_css_attributes_filter', 100, 1); // Remove Navigation <li> Page ID's (Commented out by default)
add_filter('the_category', 'remove_category_rel_from_category_list'); // Remove invalid rel attribute
add_filter('the_excerpt', 'shortcode_unautop'); // Remove auto <p> tags in Excerpt (Manual Excerpts only)
add_filter('the_excerpt', 'do_shortcode'); // Allows Shortcodes to be executed in Excerpt (Manual Excerpts only)
add_filter('excerpt_more', 'html5_blank_view_article'); // Add 'View Article' button instead of [...] for Excerpts
add_filter('show_admin_bar', 'remove_admin_bar'); // Remove Admin bar
add_filter('style_loader_tag', 'html5_style_remove'); // Remove 'text/css' from enqueued stylesheet
add_filter('post_thumbnail_html', 'remove_thumbnail_dimensions', 10); // Remove width and height dynamic attributes to thumbnails
add_filter('image_send_to_editor', 'remove_thumbnail_dimensions', 10); // Remove width and height dynamic attributes to post images

// Remove Filters
remove_filter('the_excerpt', 'wpautop'); // Remove <p> tags from Excerpt altogether

// Shortcodes
add_shortcode('html5_shortcode_demo', 'html5_shortcode_demo'); // You can place [html5_shortcode_demo] in Pages, Posts now.
add_shortcode('html5_shortcode_demo_2', 'html5_shortcode_demo_2'); // Place [html5_shortcode_demo_2] in Pages, Posts now.

// Shortcodes above would be nested like this -
// [html5_shortcode_demo] [html5_shortcode_demo_2] Here's the page title! [/html5_shortcode_demo_2] [/html5_shortcode_demo]

/*------------------------------------*\
	Custom Post Types
\*------------------------------------*/

// Create 1 Custom Post type for a Demo, called HTML5-Blank
function create_post_type_html5()
{
    register_taxonomy_for_object_type('category', 'html5-blank'); // Register Taxonomies for Category
    register_taxonomy_for_object_type('post_tag', 'html5-blank');
    register_post_type('html5-blank', // Register Custom Post Type
        array(
        'labels' => array(
            'name' => __('HTML5 Blank Custom Post', 'html5blank'), // Rename these to suit
            'singular_name' => __('HTML5 Blank Custom Post', 'html5blank'),
            'add_new' => __('Add New', 'html5blank'),
            'add_new_item' => __('Add New HTML5 Blank Custom Post', 'html5blank'),
            'edit' => __('Edit', 'html5blank'),
            'edit_item' => __('Edit HTML5 Blank Custom Post', 'html5blank'),
            'new_item' => __('New HTML5 Blank Custom Post', 'html5blank'),
            'view' => __('View HTML5 Blank Custom Post', 'html5blank'),
            'view_item' => __('View HTML5 Blank Custom Post', 'html5blank'),
            'search_items' => __('Search HTML5 Blank Custom Post', 'html5blank'),
            'not_found' => __('No HTML5 Blank Custom Posts found', 'html5blank'),
            'not_found_in_trash' => __('No HTML5 Blank Custom Posts found in Trash', 'html5blank')
        ),
        'public' => true,
        'hierarchical' => true, // Allows your posts to behave like Hierarchy Pages
        'has_archive' => true,
        'supports' => array(
            'title',
            'editor',
            'excerpt',
            'thumbnail'
        ), // Go to Dashboard Custom HTML5 Blank post for supports
        'can_export' => true, // Allows export in Tools > Export
        'taxonomies' => array(
            'post_tag',
            'category'
        ) // Add Category and Post Tags support
    ));
}

/*------------------------------------*\
	ShortCode Functions
\*------------------------------------*/

// Shortcode Demo with Nested Capability
function html5_shortcode_demo($atts, $content = null)
{
    return '<div class="shortcode-demo">' . do_shortcode($content) . '</div>'; // do_shortcode allows for nested Shortcodes
}

// Shortcode Demo with simple <h2> tag
function html5_shortcode_demo_2($atts, $content = null) // Demo Heading H2 shortcode, allows for nesting within above element. Fully expandable.
{
    return '<h2>' . $content . '</h2>';
}


// CUSTOM FUNCTIONS for CONNECTION TO LARAVEL

global $laravelViewsDir; // So that we can easily fetch the view files
$laravelViewsDir = '/var/www/ideaing/resources/views/';

function loadLaravelView($templateName){ // and even faster
    return include('/var/www/ideaing/resources/views/layouts/parts/' . $templateName . '.blade.php');
}

function getThumbnailLink($postID){
    return wp_get_attachment_url( get_post_thumbnail_id($postID) );
}

// ADD EXTRA AUTHOR FIELDS

add_action( 'show_user_profile', 'my_show_extra_profile_fields' );
add_action( 'edit_user_profile', 'my_show_extra_profile_fields' );

function my_show_extra_profile_fields( $user ) {

   echo '<table class="form-table">

        <tr>
            <th><label for="role">About</label></th>

            <td>
                <input type="text" name="about" id="about" value="'. esc_attr( get_the_author_meta( "about", $user->ID ) ) . '" class="regular-text" /><br />
                <span class="description">E.g. a chief editor at NY Times</span>
            </td>
        </tr>

    </table>';
}


add_action( 'personal_options_update', 'my_save_extra_profile_fields' );
add_action( 'edit_user_profile_update', 'my_save_extra_profile_fields' );

function my_save_extra_profile_fields( $user_id ) {

    if ( !current_user_can( 'edit_user', $user_id ) )
        return false;

    /* Copy and paste this line for additional fields. */
    update_usermeta( $user_id, 'about', $_POST['about'] );
}

// Replace WP-Login with a redirect to Laravel Login
//add_action( 'wp_logout', 'auto_redirect_external_after_logout');
//function auto_redirect_external_after_logout(){
//    wp_redirect( 'https://ideaing.com/login#?from=cms' );
//    exit();
//}

add_action('init','custom_login');
function custom_login(){

    global $pagenow;
    if( 'wp-login.php' == $pagenow ) {

        if($token = $_COOKIE['_wptk']){

            $username = base64_decode($token);
            $explode = explode(' ', $username);
            $username = $explode[0];

            if(!$userID = username_exists( $username )){
                // echo  'This user does not exist';
            }else{
                wp_set_current_user($userID, $username);
                wp_set_auth_cookie($userID);

                wp_redirect(get_admin_url()); exit;
            }

        }else{
            wp_redirect($_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['SERVER_NAME'] . '/login#?from=cms');
            exit();
        }
    }
}



/*
 * CUSTOM GLOBAL VARIABLES, mostly for Single Sing-on
 */
function ideaingGlobalVars() {

    // SSO variables
    global $userData;
    global $isAdmin;

    if(is_user_logged_in()){
      $user = wp_get_current_user();
      $token = base64_encode($user->user_email);
    }else{
      $token = isset($_COOKIE['_wptk']) ? $_COOKIE['_wptk'] : '';
    }


    if($token && is_connected()){

        $ch = curl_init();

       $url = $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['SERVER_NAME'] . '/api/info';

        $data = array('_wptk' => $token);

        // use key 'http' even if you send the request to https://...
        $options = array(
            'http' => array(
                'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
                'method'  => 'POST',
                'content' => http_build_query($data)
            ),
            "ssl" => array(
                "verify_peer"=>false,
                "verify_peer_name"=>false,
            )
        );
        $context  = stream_context_create($options);
        $result = file_get_contents($url, false, $context);

        if ($result === FALSE) { /* Handle error */ }

        $result = unserialize(base64_decode($result));


        $userData = $result['data']['user-data'];
        $isAdmin = $result['IsAdmin'];

    }

}
add_action( 'parse_query', 'ideaingGlobalVars' );

function create_dwb_menu() {
    global $wp_admin_bar;

    $menu_id = 'dwb';
    $wp_admin_bar->add_menu(array('id' => $menu_id, 'title' => __('App Admin Panel'), 'href' => '/admin/dashboard'));
}
add_action('admin_bar_menu', 'create_dwb_menu', 2000);
add_filter( 'the_content', 'wpse44503_filter_content' );

function wpse44503_filter_content( $content ) {

     $newURL = str_replace('ideaing-ideas.s3.amazonaws.com', 'd3f8t323tq9ys5.cloudfront.net', $content);

    return $newURL;
}


function getHeroSliderContent() {
    $args = [
//        'cat' => $postCat,
        'posts_per_page' => 4,
//        'offset' => $offset,

    ];

    $args['meta_query'] = [
            'relation'  => 'AND',
            [
                'key'  => 'slider_content',
                'value' => 'yes',
                'compare' => '='
            ]
    ];

    $the_query = new WP_Query( $args );

if ( $the_query->have_posts() ) {
    while ( $the_query->have_posts() ) {
        $the_query->the_post();
        $ID = get_the_ID();
        $data['url'] = get_the_permalink();
        $data['title'] = get_the_title();

//        $data = (array)$post;
        $laravelUser = file_get_contents('https://ideaing.com/api/info-raw/' . get_the_author_email());
        $laravelUser = json_decode($laravelUser, true);

        if (has_post_thumbnail($ID)) {
            $image = get_the_post_thumbnail_url($ID, 'full', false);
        } else {
            $files = get_children('post_parent=' . $ID . '&post_type=attachment&post_mime_type=image');
            if ($files) :
                $keys = array_reverse(array_keys($files));
                $j = 0;
                $num = $keys[$j];
                $image = wp_get_attachment_image_url($num, 'full', false);
            endif;
        }
        $data['image'] = str_replace('ideaing-ideas.s3.amazonaws.com', 'd3f8t323tq9ys5.cloudfront.net', $image);


        $data['author'] = get_the_author();
        $data['author_id'] = get_the_author_meta('ID');
        $data['authorlink'] = $laravelUser['permalink'];

        if (isset($laravelUser['medias'][0])) {
            $data['avator'] = $laravelUser['medias'][0]['media_link'];
        } else {
            $data['avator'] = get_avatar_url(get_the_author_email(), '80');
        }
        $return[] = $data;

    }
}

    return $return;
}

// Add specific CSS class by filter
add_filter( 'body_class', 'single_post_tag_classes' );
function single_post_tag_classes( $classes ) {
  if ( is_single() ) {
    global $post;
    $posttags = get_the_tags( $post->ID );
    if ( $posttags ) {
      foreach( $posttags as $tag ) {
        $classes[] = 'tag-' . $tag->name;
      }
    }
  }
return $classes;
}

/**
 * Disable responsive image support (test!)
 */
//
//// Clean the up the image from wp_get_attachment_image()
//add_filter( 'wp_get_attachment_image_attributes', function( $attr )
//{
//    if( isset( $attr['sizes'] ) )
//        unset( $attr['sizes'] );
//
//    if( isset( $attr['srcset'] ) )
//        unset( $attr['srcset'] );
//
//    return $attr;
//
//}, PHP_INT_MAX );
//
//// Override the calculated image sizes
//add_filter( 'wp_calculate_image_sizes', '__return_false',  PHP_INT_MAX );
//
//// Override the calculated image sources
//add_filter( 'wp_calculate_image_srcset', '__return_false', PHP_INT_MAX );
//
//// Remove the reponsive stuff from the content
//remove_filter( 'the_content', 'wp_make_content_images_responsive' );


// function to display number of posts.
function getPostViews($postID){
    $count_key = 'post_views_count';
    $count = get_post_meta($postID, $count_key, true);
    if($count==''){
        delete_post_meta($postID, $count_key);
        add_post_meta($postID, $count_key, '0');
        return "0";
    }
    return $count;
}

// function to count views.
function setPostViews($postID) {
    $count_key = 'post_views_count';
    $count = get_post_meta($postID, $count_key, true);
    if($count==''){
        $count = 0;
        delete_post_meta($postID, $count_key);
        add_post_meta($postID, $count_key, '0');
    }else{
        $count++;
        update_post_meta($postID, $count_key, $count);
    }
}

// [product_bar id="id_value"]
function product_bar_func( $atts ) {
    $json = file_get_contents('https://ideaing.com/api/products/get-for-bar/' . $atts['id']);
    $productData = json_decode($json, true);

    if(!$productData){
        return false;
    }

    $markup = '<div class="product-bar">';
        $markup .= '<div class="col-xs-12 col-sm-2 col-sm-2 no-padding overhid">';
            $markup .= '<img  style="width:100%; height:auto" class="img-responsive" src="'.$productData['image'].'">';
            $markup .= '<span class="merchant-widget__price">$'.round($productData['sale_price']).'</span>';
        $markup .= '</div>';
        $markup .= '<div class="col-xs-12 col-sm-9 overhide leftline">';
            $markup .= '<h4 class="col-xs-12"><a href="'.$productData['product_permalink'].'">'.$productData['product_name']."</a></h4>";
            $markup .= '<div class="col-xs-12"> from <img class="vendor-logo img-responsive" src="'.$productData['storeLogo'].'"></div>';
            $markup .= ' <a target="_blank" href="/open/'.$atts['id'].'/ideas" class="box-item__get-it">Get it</a>';
        $markup .= '</div>';
    $markup .= '</div>';

    return $markup;
}
add_shortcode( 'product_bar', 'product_bar_func' );


// [product_bar id="id_value"]
function product_thumbs_func( $atts ) {
    $ids = str_replace(' ', '', $atts['id']);

    if(!is_connected()){
        return false;
    }

    $json = file_get_contents('http://ideaing.dev/api/products/get-for-bar/' . $ids);
    $products = json_decode($json, true);

    $howMany = count($ids);

    if(!$products){
        return false;
    }
    $markup = '<div class="float-thumbs shortcode-thumbs">
                        <div class="inner count-'.$howMany.'">';
                            foreach($products as $prod){
                                $markup .= '<div class="thumb-box" style="text-align: center;">
                                                    <div class="get-it-inner">
                                                        <a href="https://ideaing.com/open/'.$prod['id'].'/idea" target="_blank">
                                                            <img class="wp-image-8464 aligncenter" src="'.$prod['image'].'" alt="Withings Smart Body Analyzer" width="398" height="250">
                                                        </a>

                                                            <strong><a class="heading-link" href="https://ideaing.com/product/'.$prod['product_permalink'].'" target="_blank">'.$prod['product_name'].' </a></strong>


                                                            <span class="merchant-widget__price">$'.round($prod['sale_price']).'</span>
                                                            <div class="merchant-widget__logo trans-all">
                                                                <span class="white">from <img class="vendor-logo img-responsive merchant-widget__store" src="'.$prod['storeLogo'].'"></span>
                                                            </div>
                                                    </div>
                                                </div>';
                            }
            $markup .=  '</div>
                    </div>';

    return $markup;
}
add_shortcode( 'product_thumbs', 'product_thumbs_func' );


// ADD STORIES (NEWS)

add_action( 'init', 'create_post_type' );
function create_post_type() {
    register_post_type( 'story',
        array(
            'labels' => array(
                'name' => __( 'Stories' ),
                'singular_name' => __( 'Story' )
            ),
            'public' => true,
            'has_archive' => true,
        )
    );
}

function getPostsFromYesterday(){
    $timeStamp = date('Y-m-d', strtotime('yesterday'));
    $date = date_create($timeStamp);

//    $args['date_query'][0] = [
//        'year' => date_format($date, 'Y'),
//        'monthnum' => date_format($date, 'm'),
//        'day' => date_format($date, 'Y')
//    ];
    $dateQuery = 'year='.date_format($date, 'Y').'&monthnum='.date_format($date, 'm').'&day='.date_format($date, 'd') ;

    $posts = new WP_Query($dateQuery . '&posts_per_page=4');

//    $return['regular'] = array_slice($posts, 0, 3);
//    $return['featured'] = array_slice($posts, 4, 1);

//    print_r($posts); die();
    return $posts;

}

add_filter('body_class','add_category_to_single');
function add_category_to_single($classes) {
    if (is_single() ) {
        global $post;
        foreach((get_the_category($post->ID)) as $category) {
            // add category slug to the $classes array
            $classes[] = 'category-' . $category->category_nicename;
        }
    }
    // return the $classes array
    return $classes;
}
  function is_connected(){
    $connected = @fsockopen("www.ideaing.com", 80);
    //website, port  (try 80 or 443)
    if ($connected){
      $is_conn = true; //action when connected
      fclose($connected);
    }else{
      $is_conn = false; //action in connection failure
    }
    return $is_conn;
  }

function login_classes( $classes ) {
    $classes[] = 'logged-in';
    return $classes;
}
add_filter( 'login_body_class', 'login_classes' );

if (! function_exists('timeAgo')) {
  function timeAgo($time_ago) {

    $d1 = new DateTime($time_ago);
    $d1 = $d1->format('M, d Y');
    $time_ago = strtotime($time_ago);
    $cur_time   = time();
    $time_elapsed   = $cur_time - $time_ago;
    $seconds    = $time_elapsed ;
    $minutes    = round($time_elapsed / 60 );
    $hours      = round($time_elapsed / 3600);
    $days       = round($time_elapsed / 86400 );
    $weeks      = round($time_elapsed / 604800);
    $months     = round($time_elapsed / 2600640 );
    $years      = round($time_elapsed / 31207680 );
    // Seconds
    if($seconds <= 60){
      return "now";
    }
    //Minutes
    else if($minutes <=60){
      if($minutes==1){
        return "1 minute ago";
      }
      else{
        return "$minutes minutes ago";
      }
    }
    //Hours
    else if($hours <=24){
      if($hours==1){
        return "1 hour ago";
      }else{
        return "$hours hours ago";
      }
    }
    //Days
    else if($days <= 7){
      if($days==1){
        return "yesterday";
      }else{
        return "$days days ago";
      }
    }
    //Weeks
    else if($weeks <= 4.3){
      if($weeks==1){
        return "1 week ago";
      }else{
        return "$weeks weeks ago";
      }
    }
    //Months
    else if($months <=12){
      return $d1;
    }
    //Years
    else{
      return $d1;
    }
  }
}



if (! function_exists('ideaing_is_plugin_active')){

	/**
	 * Helper to detect if plugin is already installed.
	 *
   * @since WooCommerce Integration 1.0
	 */
	function ideaing_is_plugin_active($plugin) {

    return in_array($plugin, (array) get_option('active_plugins', array()));
	}
}

if (! function_exists('ideaing_woocommerce_support')){

  /**
   * Declare WooCommerce support.
   *
   * @since WooCommerce Integration 1.0
   */
  function ideaing_woocommerce_support() {

    add_theme_support( 'woocommerce' );
  }
  add_action( 'after_setup_theme', 'ideaing_woocommerce_support' );
}

if (ideaing_is_plugin_active('woocommerce/woocommerce.php')){

  /**
   * WooCommerce template tags for this theme.
   *
   * @since WooCommerce Integration 1.0
   */
	require get_template_directory() . '/woocommerce/hooks.php';

  /**
   * WooCommerce widgets for this theme.
   *
   * @since WooCommerce Integration 1.0
   */
	require get_template_directory() . '/widgets/init.php';
}

/**
 * Ajax handles for this theme.
 *
 * @since WooCommerce Integration 1.0
 */
require get_template_directory() . '/app/ajax-handles.php';
