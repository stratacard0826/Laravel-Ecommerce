<?php
/**
 * Plugin Name: WooCommerce PayPal Powered by Braintree Gateway
 * Plugin URI: https://docs.woothemes.com/document/woocommerce-gateway-paypal-powered-by-braintree/
 * Description: Receive payments using Paypal Powered by Braintree.  A server with cURL, SSL support, and a valid SSL certificate is required (for security reasons) for this gateway to function. Requires PHP 5.4+
 * Author: WooThemes
 * Author URI: http://woothemes.com/
 * Version: 1.2.4
 *
 * Copyright (c) 2016 WooThemes
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Required minimums
 */
define( 'WC_PAYPAL_BRAINTREE_MIN_PHP_VER', '5.4.0' );

class WC_PayPal_Braintree_Loader {

	/**
	 * @var Singleton The reference the *Singleton* instance of this class
	 */
	private static $instance;

	/**
	 * Returns the *Singleton* instance of this class.
	 *
	 * @return Singleton The *Singleton* instance.
	 */
	public static function getInstance() {
		if ( null === self::$instance ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	/**
	 * Private clone method to prevent cloning of the instance of the
	 * *Singleton* instance.
	 *
	 * @return void
	 */
	private function __clone() {
	}

	/**
	 * Private unserialize method to prevent unserializing of the *Singleton*
	 * instance.
	 *
	 * @return void
	 */
	private function __wakeup() {
	}

	/** @var whether or not we need to load code for / support subscriptions */
	private $subscription_support_enabled = false;

	/**
	 * Notices (array)
	 * @var array
	 */
	public $notices = array();

	/**
	 * Protected constructor to prevent creating a new instance of the
	 * *Singleton* via the `new` operator from outside of this class.
	 */
	protected function __construct() {

		add_action( 'admin_init', array( $this, 'check_environment' ) );
		// admin_notices is prioritized later to allow concrete classes to use admin_notices to push entries to the notices array
		add_action( 'admin_notices', array( $this, 'admin_notices' ), 15 );

		// Don't hook anything else in the plugin if we're in an incompatible environment
		if ( self::get_environment_warning() ) {
			return;
		}

		add_action( 'plugins_loaded', array( $this, 'init_gateways' ), 0 );

		add_filter( 'plugin_action_links_' . plugin_basename( __FILE__ ), array( $this, 'plugin_action_links' ) );
		add_action( 'woocommerce_proceed_to_checkout', array( $this, 'possibly_add_paypal_checkout_button_to_cart' ), 50 );
		add_action( 'wp', array( $this, 'possibly_cancel_checkout_with_paypal' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'possibly_enqueue_scripts' ) );

		add_action( 'woocommerce_available_payment_gateways', array( $this, 'possibly_disable_other_gateways' ) );
		add_action( 'woocommerce_review_order_after_submit', array( $this, 'possibly_render_cancel_link' ) );
		add_action( 'woocommerce_cart_emptied', array( $this, 'possibly_clear_session_data' ) );

		add_filter( 'woocommerce_get_sections_checkout', array( $this, 'filter_checkout_sections' ) );
		add_action( 'woocommerce_order_status_on-hold_to_processing', array( $this, 'capture_payment' ) );
		add_action( 'woocommerce_order_status_on-hold_to_completed', array( $this, 'capture_payment' ) );
		add_action( 'woocommerce_order_status_on-hold_to_cancelled', array( $this, 'cancel_payment' ) );
		add_action( 'woocommerce_order_status_on-hold_to_refunded', array( $this, 'cancel_payment' ) );

		add_filter( 'woocommerce_gateway_title', array( $this, 'filter_gateway_title' ), 10, 2 );

		if ( is_admin() ) {
			add_filter( 'woocommerce_order_actions', array( $this, 'add_capture_charge_order_action' ) );
			add_action( 'woocommerce_order_action_paypalbraintree_paypal_capture_charge', array( $this, 'maybe_capture_charge' ) );
			add_action( 'woocommerce_order_action_paypalbraintree_cards_capture_charge', array( $this, 'maybe_capture_charge' ) );
		}
	}

	/**
	 * Add capture action in edit order screen.
	 *
	 * @since  1.2.0
	 * @param  array $actions Actions
	 * @return array Actions
	 */
	public function add_capture_charge_order_action( $actions ) {
		if ( ! isset( $_REQUEST['post'] ) ) {
			return $actions;
		}

		$order = wc_get_order( $_REQUEST['post'] );

		// bail if the order wasn't paid for with this gateway
		if ( 'paypalbraintree_paypal' !== $order->payment_method && 'paypalbraintree_cards' !== $order->payment_method ) {
			return $actions;
		}

		if ( 'yes' === get_post_meta( $order->id, '_pp_braintree_charge_captured', true ) ) {
			return $actions;
		}

		if ( ! is_array( $actions ) ) {
			$actions = array();
		}
		$actions['paypalbraintree_paypal_capture_charge'] = esc_html__( 'Capture Charge', 'woocommerce-gateway-paypal-braintree' );

		return $actions;
	}

	/**
	 * Allow this class and other classes to add slug keyed notices (to avoid duplication)
	 */
	public function add_admin_notice( $slug, $class, $message ) {
		$this->notices[ $slug ] = array(
			'class' => $class,
			'message' => $message
		);
	}

	/**
	 * The primary sanity check, automatically disable the plugin on activation if it doesn't
	 * meet minimum requirements.
	 *
	 * Based on http://wptavern.com/how-to-prevent-wordpress-plugins-from-activating-on-sites-with-incompatible-hosting-environments
	 */
	public static function activation_check() {
		$environment_warning = self::get_environment_warning( true );
		if ( $environment_warning ) {
			deactivate_plugins( plugin_basename( __FILE__ ) );
			wp_die( $environment_warning );
		}
	}

	/**
	 * The backup sanity check, in case the plugin is activated in a weird way,
	 * or the environment changes after activation.
	 */
	public function check_environment() {
		$environment_warning = self::get_environment_warning();
		if ( $environment_warning && is_plugin_active( plugin_basename( __FILE__ ) ) ) {
			deactivate_plugins( plugin_basename( __FILE__ ) );
			$this->add_admin_notice( 'bad_environment', 'error', $environment_warning );
			if ( isset( $_GET['activate'] ) ) {
				unset( $_GET['activate'] );
			}
		}

		$access_token = get_option( 'wc_paypal_braintree_merchant_access_token', '' );
		if ( empty( $access_token ) && is_plugin_active( plugin_basename( __FILE__ ) ) ) {
			$setting_link = $this->get_setting_link();

			$this->add_admin_notice( 'prompt_connect', 'notice notice-warning', __( 'PayPal powered by Braintree is almost ready. To get started, <a href="' . $setting_link . '">connect your Braintree account</a>.', 'woocommerce-gateway-paypal-braintree' ) );
		}
	}

	/**
	 * Checks the environment for compatibility problems.  Returns a string with the first incompatibility
	 * found or false if the environment has no problems.
	 */
	static function get_environment_warning( $during_activation = false ) {

		if ( version_compare( phpversion(), WC_PAYPAL_BRAINTREE_MIN_PHP_VER, '<' ) ) {
			if ( $during_activation ) {
				$message = __( 'The plugin could not be activated. The minimum PHP version required for this plugin is %1$s. You are running %2$s.', 'woocommerce-gateway-paypal-braintree', 'woocommerce-gateway-paypal-braintree' );
			} else {
				$message = __( 'The WooCommerce PayPal Powered by Braintree plugin has been deactivated. The minimum PHP version required for this plugin is %1$s. You are running %2$s.', 'woocommerce-gateway-paypal-braintree' );
			}
			return sprintf( $message, WC_PAYPAL_BRAINTREE_MIN_PHP_VER, phpversion() );
		}

		if ( ! function_exists( 'curl_init' ) ) {
			if ( $during_activation ) {
				return __( 'The plugin could not be activated. cURL is not installed.', 'woocommerce-gateway-paypal-braintree' );
			}

			return __( 'The WooCommerce PayPal Powered by Braintree plugin has been deactivated. cURL is not installed.', 'woocommerce-gateway-paypal-braintree' );
		}

		return false;
	}


	/**
	 * Adds plugin action links
	 *
	 * @since 1.0.0
	 */
	public function plugin_action_links( $links ) {

		// On the plugin action links, we include a link to the gateway that lets you pay with credit/debit cards
		// (we could include a link to the PayPal one too, but that would be a lot of links, and you
		// can get to the PayPal one from the same page as the credit/debit cards one)
		if ( $this->subscription_support_enabled ) {
			$section_slug = strtolower( 'WC_Gateway_Paypal_Braintree_Pay_With_Card_Subscription' );
		} else {
			$section_slug = strtolower( 'WC_Gateway_Paypal_Braintree_Pay_With_Card' );
		}

		$setting_link = $this->get_setting_link();

		$plugin_links = array(
			'<a href="' . $setting_link . '">' . __( 'Settings', 'woocommerce-gateway-paypal-braintree' ) . '</a>',
			'<a href="http://docs.woothemes.com/document/woocommerce-gateway-paypal-powered-by-braintree/">' . __( 'Docs', 'woocommerce-gateway-paypal-braintree' ) . '</a>',
			'<a href="http://support.woothemes.com/">' . __( 'Support', 'woocommerce-gateway-paypal-braintree' ) . '</a>',
		);
		return array_merge( $plugin_links, $links );
	}

	/**
	 * Get setting link.
	 *
	 * @return string Braintree checkout setting link
	 */
	public function get_setting_link() {
		$use_id_as_section = true;
		if ( function_exists( 'WC' ) ) {
			$use_id_as_section = version_compare( WC()->version, '2.6', '>=' );
		}

		if ( $this->subscription_support_enabled ) {
			$section_slug = $use_id_as_section ? 'paypalbraintree_cards' : strtolower( 'WC_Gateway_Paypal_Braintree_Pay_With_Card_Subscription' );
		} else {
			$section_slug = $use_id_as_section ? 'paypalbraintree_cards' : strtolower( 'WC_Gateway_Paypal_Braintree_Pay_With_Card' );
		}

		return admin_url( 'admin.php?page=wc-settings&tab=checkout&section=' . $section_slug );
	}

	/**
	 * Display any notices we've collected thus far (e.g. for connection, disconnection)
	 */
	public function admin_notices() {
		foreach ( (array) $this->notices as $notice_key => $notice ) {
			echo "<div class='" . esc_attr( $notice['class'] ) . "'><p>";
			echo wp_kses( $notice['message'], array( 'a' => array( 'href' => array() ) ) );
			echo "</p></div>";
		}
	}

	/**
	 * Initialize the gateway. Called very early - in the context of the plugins_loaded action
	 *
	 * @since 1.0.0
	 */
	public function init_gateways() {

		if ( class_exists( 'WC_Subscriptions_Order' ) && function_exists( 'wcs_create_renewal_order' ) ) {
			$this->subscription_support_enabled = true;
		}

		if ( ! class_exists( 'WC_Payment_Gateway' ) ) {
			return;
		}

		require_once( plugin_basename( 'classes/class-wc-gateway-paypal-braintree.php' ) );
		require_once( plugin_basename( 'classes/class-wc-gateway-paypal-braintree-pay-with-card.php' ) );
		require_once( plugin_basename( 'classes/class-wc-gateway-paypal-braintree-pay-with-paypal.php' ) );

		load_plugin_textdomain( 'woocommerce-gateway-paypal-braintree', false, trailingslashit( dirname( plugin_basename( __FILE__ ) ) ) );
		add_filter( 'woocommerce_payment_gateways', array( $this, 'add_gateways' ) );

		if ( $this->subscription_support_enabled ) {
			require_once( plugin_basename( 'classes/class-wc-gateway-paypal-braintree-subscription.php' ) );
			require_once( plugin_basename( 'classes/class-wc-gateway-paypal-braintree-pay-with-card-subscription.php' ) );
			require_once( plugin_basename( 'classes/class-wc-gateway-paypal-braintree-pay-with-paypal-subscription.php' ) );
		}
	}


	/**
	 * Add the gateways to WooCommerce
	 *
	 * @since 1.0.0
	 */
	public function add_gateways( $methods ) {
		if ( $this->subscription_support_enabled ) {
			$methods[] = 'WC_Gateway_Paypal_Braintree_Pay_With_Card_Subscription';
			$methods[] = 'WC_Gateway_Paypal_Braintree_Pay_With_PayPal_Subscription';
		} else {
			$methods[] = 'WC_Gateway_Paypal_Braintree_Pay_With_Card';
			$methods[] = 'WC_Gateway_Paypal_Braintree_Pay_With_PayPal';
		}

		return $methods;
	}


	/**
	 * Only if there are no subscriptions in the cart is it OK to add the Checkout with PayPal button to the cart view.
	 * This is because we are unable to obtain a reusable token from the Checkout with PayPal flow that the cart view
	 * uses.
	 *
	 * @since 1.0.0
	 */
	public function possibly_add_paypal_checkout_button_to_cart() {

		if ( $this->does_cart_contain_any_subscriptions() ) {
			return;
		}

		// We need to pass amount and currency as data attribute to checkout
		// with PayPal container so that when cart is updated via AJAX we could
		// teardown and setup the button.
		$amount   = WC()->cart->total;
		$currency = get_woocommerce_currency();
		?>
		<div id="paypal-braintree-button-container" data-amount="<?php echo esc_attr( $amount ); ?>" data-currency="<?php echo esc_attr( $currency ); ?>">
		</div>
		<?php
	}

	/**
	 * Helper to scan the cart for subscriptions (since we do not want to show a Checkout with PayPal
	 * button in the cart view if there are any)
	 *
	 * @since 1.0.0
	 */
	public function does_cart_contain_any_subscriptions() {

		if ( ! $this->subscription_support_enabled ) {
			return false;
		}

		if ( ! class_exists( 'WC_Subscriptions_Cart' ) ) {
			return false;
		}

		return WC_Subscriptions_Cart::cart_contains_subscription();
	}

	/**
	 * possibly_enqueue_scripts
	 *
	 * Loads front side scripts when viewing cart or checkout pages
	 *
	 * @since 1.0.0
	 */
	function possibly_enqueue_scripts() {
		if ( ! function_exists( 'is_checkout' ) || ! function_exists( 'is_cart' ) ) {
			return;
		}

		if ( ! is_checkout() && ! is_cart() ) {
			return;
		}

		// Make sure our gateways are enabled before we do anything
		if ( ! $this->are_our_gateways_enabled() ) {
			return;
		}

		// A merchant token is required for everything
		$merchant_access_token = get_option( 'wc_paypal_braintree_merchant_access_token', '' );
		if ( empty( $merchant_access_token ) ) {
			return;
		}

		// Always enqueue styles for simplicity's sake (because not all styles are related to JavaScript manipulated elements)
		if ( is_checkout() ) {
			wp_register_style( 'paypal_braintree_styles', plugins_url( 'assets/css/checkout.css', __FILE__ ) );
		} else { // cart
			wp_register_style( 'paypal_braintree_styles', plugins_url( 'assets/css/cart.css', __FILE__ ) );
		}
		wp_enqueue_style( 'paypal_braintree_styles' );

		// See if we should enqueue any JavaScript at all.
		$should_enqueue_checkout_script = $this->_is_hosted_fields_supported();
		$should_enqueue_cart_script     = $this->_is_checkout_from_cart_supported();

		if ( ! $should_enqueue_cart_script && ! $should_enqueue_checkout_script ) {
			return;
		}

		$checkout_with_paypal = $this->_get_checkout_with_paypal_params();
		$hosted_fields        = $this->_get_hosted_field_params();

		// Sanity check.
		if ( ! $checkout_with_paypal && ! $hosted_fields ) {
			return;
		}

		require_once( dirname( __FILE__ ) . '/braintree_sdk/lib/Braintree.php' );
		$braintree_gateway = new Braintree_Gateway( array(
			'accessToken' => $merchant_access_token,
		) );

		try {
			$client_token = $braintree_gateway->clientToken()->generate();
		} catch ( Exception $e ) {
			$this->log( __FUNCTION__, 'Error: Unable to generate client token. Reason: ' . $e->getMessage() );
			return;
		}

		$paypal_braintree_data = array(
			'token'                       => $client_token,
			'checkoutWithPayPal'          => $checkout_with_paypal,
			'checkoutWithPayPalContainer' => 'paypal-braintree-button-container',
			'hostedFields'                => $hosted_fields,
		);

		// Allow things like subscriptions to filter the setup (e.g. to set checkoutWithPayPal singleUse to false)
		$paypal_braintree_data = apply_filters( 'wc_gateway_paypal_braintree_data', $paypal_braintree_data );

		wp_register_script( 'paypal_braintree', 'https://js.braintreegateway.com/js/braintree-2.24.1.min.js', array( 'jquery' ) );
		if ( $should_enqueue_checkout_script ) {
			wp_register_script( 'gateway_paypal_braintree', plugins_url( 'assets/js/checkout.js', __FILE__ ), array( 'jquery', 'paypal_braintree' ) );
		} else if ( $should_enqueue_cart_script ) {
			wp_register_script( 'gateway_paypal_braintree', plugins_url( 'assets/js/cart.js', __FILE__ ), array( 'jquery', 'paypal_braintree', 'jquery-blockui' ) );
		}

		wp_localize_script( 'gateway_paypal_braintree', 'paypalBraintreeData', $paypal_braintree_data );
		wp_enqueue_script( 'gateway_paypal_braintree' );

	}

	/**
	 * Whether checkout with PayPal from cart page is supported.
	 *
	 * @since 1.2.2
	 *
	 * @return bool Returns true if supported
	 */
	private function _is_checkout_from_cart_supported() {
		return is_cart() && $this->does_checkout_with_paypal_support_shop_currency() && ! $this->does_cart_contain_any_subscriptions();
	}

	/**
	 * Whether rendering hosted fields in checkout page is supported.
	 *
	 * @since 1.2.2
	 *
	 * @return bool Returns true if supported
	 */
	private function _is_hosted_fields_supported() {
		return is_checkout() && ! $this->does_session_have_postback_data();
	}

	/**
	 * Get hosted field params that will be replaced by iframe via braintree JS.
	 *
	 * @since 1.2.2
	 *
	 * @return bool|array False if hosted field is not supported otherwise returns
	 *                    hosted field params
	 */
	private function _get_hosted_field_params() {
		if ( ! $this->_is_hosted_fields_supported( ) ) {
			return false;
		}

		return array(
			'number' => array(
				'selector'    => '#wc-paypal-braintree-card-number',
				'placeholder' => '0000000000000000',
			),
			'cvv' => array(
				'selector'    => '#wc-paypal-braintree-cvv',
				'placeholder' => 'CVV',
			),
			'expirationDate' => array(
				'selector'    => '#wc-paypal-braintree-expiration-date',
				'placeholder' => 'MM/YY',
			),
			'styles' => array(
				'input' => array(
					'font-size'   => '12pt',
					'color'       => '#3A3A3A',
					'font-family' => 'monospace',
				)
			),
		);
	}

	/**
	 * Get checkout with PayPal params.
	 *
	 * This params will be passed via wp_localize_script as options to braintree.setup
	 * to render checkout with PayPal button in cart page.
	 *
	 * @since 1.2.2
	 *
	 * @return bool|array
	 */
	private function _get_checkout_with_paypal_params() {
		$postback_class = 'WC_Gateway_Paypal_Braintree_Pay_With_PayPal';
		if ( $this->subscription_support_enabled ) {
			$postback_class = 'WC_Gateway_Paypal_Braintree_Pay_With_PayPal_Subscription';
		}

		// Note: The postback URL is only used for cart initiated Checkout with PayPal flow.
		$details_postback_url = false;
		if ( $this->_is_checkout_from_cart_supported() ) {
			$details_postback_url = WC()->api_request_url( $postback_class );
			$details_postback_url = add_query_arg( 'action', 'checkout_details', $details_postback_url );
		}

		// Only bother including Checkout with PayPal if the currency is supported
		// (Checkout with PayPal supports fewer currencies than hosted fields).
		$checkout_with_paypal = false;
		if ( $this->does_checkout_with_paypal_support_shop_currency() ) {
			$checkout_with_paypal = array(
				'amount'             => WC()->cart->total,
				'currency'           => get_woocommerce_currency(),
				'singleUse'          => true,
				'detailsPostbackURL' => $details_postback_url
			);
		}

		return $checkout_with_paypal;
	}

	/**
	 * Returns true if our gateways are enabled, false otherwise
	 *
	 * @since 1.0.0
	 */
	public function are_our_gateways_enabled() {

		// It doesn't matter which gateway we check, since setting changes are cloned between them
		$gateway_settings = get_option( 'woocommerce_paypalbraintree_paypal_settings', array() );

		if ( empty( $gateway_settings ) ) {
			return false;
		}

		return ( "yes" === $gateway_settings['enabled'] );

	}


	/**
	 * When cart based Checkout with PayPal is in effect, disable other gateways on checkout
	 *
	 * @since 1.0.0
	 * @param array $gateways
	 * @return array
	 */
	public function possibly_disable_other_gateways( $gateways ) {

		if ( WC_PayPal_Braintree_Loader::getInstance()->does_session_have_postback_data() ) {
			foreach ( $gateways as $id => $gateway ) {
				if ( $id !== 'paypalbraintree_paypal' ) {
					unset( $gateways[ $id ] );
				}
			}
		}

		return $gateways;
	}


	/**
	 * Gives the user a means to break out of the cart initiated Checkout with PayPal flow
	 *
	 * @since 1.0.0
	 */
	public function possibly_cancel_checkout_with_paypal() {

		if ( function_exists( 'is_cart' ) && is_cart() && ! empty( $_GET['wc_paypal_braintree_clear_session'] ) ) {
			$this->possibly_clear_session_data();
			wc_add_notice( __( 'You have cancelled Checkout with PayPal. Please try to process your order again.', 'woocommerce-gateway-paypal-braintree' ), 'notice' );
		}
	}


	/**
	 * When cart based Checkout with PayPal is in effect, we need to include a Cancel button on the
	 * checkout form to give the user a means to throw away the token PayPal provided and possibly select
	 * a different payment gateway.
	 *
	 * @since 1.0.0
	 */
	public function possibly_render_cancel_link() {

		if ( ! $this->does_session_have_postback_data() ) {
			return;
		}

		echo sprintf(
			'<a href="%s" class="wc-gateway-paypal-braintree-cancel">%s</a>',
			 esc_url( add_query_arg( array( 'wc_paypal_braintree_clear_session' => true ), WC()->cart->get_cart_url() ) ),
			esc_html__( 'Cancel', 'woocommerce-gateway-paypal-braintree' )
		);
	}


	/**
	 * Validate checkout with paypal supports the shop currency
	 * Note: This is a narrower list than what braintree supports
	 * https://developers.braintreepayments.com/guides/paypal/checkout-with-paypal/javascript/v2#currency-support
	 *
	 * @since 1.0.0
	 */
	public function does_checkout_with_paypal_support_shop_currency() {
		$supported_currencies = array(
			'USD', // US Dollar
			'EUR', // Euro
			'GBP', // British Pounds
			'CAD', // Canadian Dollar
			'AUD', // Australian Dollar
			'DKK', // Danish Krone
			'NOK', // Norwegian Krone
			'PLN', // Polish Zloty
			'SEK', // Swedish Krona
			'CHF'  // Swiss Franc
			);

		return ( in_array( get_woocommerce_currency(), $supported_currencies ) );
	}


	/**
	 * Check if postback data is present
	 *
	 * @since 1.0.0
	 * @return bool
	 */
	public function does_session_have_postback_data() {
		return isset( WC()->session->paypal_braintree_postback );
	}


	/**
	 * Used when cart based Checkout with PayPal is in effect. Hooked to woocommerce_cart_emptied
	 * Also called by WC_PayPal_Braintree_Loader::possibly_cancel_checkout_with_paypal
	 *
	 * @since 1.0.0
	 */
	public function possibly_clear_session_data() {
		if (  $this->does_session_have_postback_data() ) {
			unset( WC()->session->paypal_braintree_postback );
		}
	}


	/**
	 * Returns form fields common to all the gateways this extension supports
	 *
	 * @since 1.0.0
	 */
	public function get_shared_form_fields () {

		return array(
			'enabled' => array(
				'title'       => __( 'Enable PayPal Powered by Braintree', 'woocommerce-gateway-paypal-braintree' ),
				'label'       => '',
				'type'        => 'checkbox',
				'description' => __( 'This controls whether or not this gateway is enabled within WooCommerce.', 'woocommerce-gateway-paypal-braintree' ),
				'default'     => 'yes',
				'desc_tip'    => true
			),
			'title_paypal' => array(
				'title'       => __( 'PayPal Title', 'woocommerce-gateway-paypal-braintree' ),
				'type'        => 'text',
				'description' => __( 'This controls the title which the user sees during checkout for PayPal.', 'woocommerce-gateway-paypal-braintree' ),
				'default'     => __( 'PayPal Account', 'woocommerce-gateway-paypal-braintree' ),
				'desc_tip'    => true
			),
			'description_paypal' => array(
				'title'       => __( 'PayPal Description', 'woocommerce-gateway-paypal-braintree' ),
				'type'        => 'text',
				'description' => __( 'This controls the description which the user sees during checkout for PayPal.', 'woocommerce-gateway-paypal-braintree' ),
				'default'     => '',
				'desc_tip'    => true
			),
			'title_cards' => array(
				'title'       => __( 'Cards Title', 'woocommerce-gateway-paypal-braintree' ),
				'type'        => 'text',
				'description' => __( 'This controls the title which the user sees during checkout for credit and debit cards.', 'woocommerce-gateway-paypal-braintree' ),
				'default'     => __( 'Credit or Debit Card (PayPal)', 'woocommerce-gateway-paypal-braintree' ),
				'desc_tip'    => true
			),
			'description_cards' => array(
				'title'       => __( 'Cards Description', 'woocommerce-gateway-paypal-braintree' ),
				'type'        => 'text',
				'description' => __( 'This controls the description which the user sees during checkout for credit and debit cards.', 'woocommerce-gateway-paypal-braintree' ),
				'default'     => '',
				'desc_tip'    => true
			),
			'capture' => array(
				'title'       => __( 'Capture', 'woocommerce-gateway-paypal-braintree' ),
				'label'       => __( 'Capture charge immediately', 'woocommerce-gateway-paypal-braintree' ),
				'type'        => 'checkbox',
				'description' => __( 'Whether or not to immediately capture the charge. When unchecked, the charge issues an authorization and will need to be captured later.', 'woocommerce-gateway-paypal-braintree' ),
				'default'     => 'yes'
			),
			'debug' => array(
				'title'       => __( 'Debug', 'woocommerce-gateway-paypal-braintree' ),
				'label'       => __( 'Enable debugging messages', 'woocommerce-gateway-paypal-braintree' ),
				'type'        => 'checkbox',
				'description' => __( 'Sends debug messages to the WooCommerce System Status log.', 'woocommerce-gateway-paypal-braintree' ),
				'default'     => 'yes'
			)
		);

	}


	/**
	 * Clones options from the passed gateway ID to its sibling
	 *
	 * @since 1.0.0
	 */
	public function clone_fields_from_id( $src_gateway_id ) {

		$dest_gateway_id = ( $src_gateway_id === 'paypalbraintree_paypal' ) ? 'paypalbraintree_cards' : 'paypalbraintree_paypal';
		$src_options = get_option( 'woocommerce_' . $src_gateway_id . '_settings' );
		update_option( 'woocommerce_' . $dest_gateway_id . '_settings', $src_options );

	}


	/**
	 * We don't need both in the submenu, so filter out one or the other, depending
	 * on what section we are looking at
	 *
	 * @since 1.0.0
	 */
	public function filter_checkout_sections( $sections ) {

		// First, let's remove one of this extensions' gateways, since we don't want both
		// and we clone settings between them anyways

		// Take care not to filter away the current section we're on if it is one of ours
		$paypal_sections = array(
			'paypalbraintree_paypal',
		);

		$card_sections = array(
			'paypalbraintree_cards',
		);

		if ( version_compare( WC()->version, '2.6', '<' ) ) {
			$paypal_sections = array(
				'wc_gateway_paypal_braintree_pay_with_paypal',
				'wc_gateway_paypal_braintree_pay_with_paypal_subscription',
			);

			$card_sections = array(
				'wc_gateway_paypal_braintree_pay_with_card',
				'wc_gateway_paypal_braintree_pay_with_card_subscription',
			);
		}

		$current_section = isset( $_GET['section'] ) ? $_GET['section'] : '';

		// If the current section is a paypal section, remove the card section,
		// otherwise, remove the paypal section
		$sections_to_remove = in_array( $current_section, $paypal_sections ) ? $card_sections : $paypal_sections;

		// And, let's also remove simplify commerce from the sections if it is not enabled and it is not the
		// current section. (Note: The option will be empty if it has never been enabled)

		$simplify_commerce_options = get_option( 'woocommerce_simplify_commerce_settings', array() );
		$simplify_commerce_section = version_compare( WC()->version, '2.6', '<' ) ? 'wc_gateway_simplify_commerce' : 'simplify_commerce';
		if ( empty( $simplify_commerce_options ) || ( "no" === $simplify_commerce_options['enabled'] ) ) {
			if ( $simplify_commerce_section !== $current_section ) {
				$sections_to_remove[] = $simplify_commerce_section;
			}
			if ( $simplify_commerce_section !== $current_section ) {
				$sections_to_remove[] = $simplify_commerce_section;
			}
		}

		foreach( $sections_to_remove as $section_to_remove ) {
			unset( $sections[$section_to_remove] );
		}

		return $sections;

	}

	public function maybe_capture_charge( $order ) {
		if ( ! is_object( $order ) ) {
			$order = wc_get_order( $order );
		}

		$this->capture_payment( $order->id );

		return true;
	}

	/**
	 * Capture payment when the order is changed from on-hold to complete or processing
	 *
	 * @param int $order_id
	 */
	public function capture_payment( $order_id ) {
		$order = wc_get_order( $order_id );

		if ( in_array( $order->payment_method, array( 'paypalbraintree_cards', 'paypalbraintree_paypal' ) ) ) {
			$trans_id = get_post_meta( $order_id, '_transaction_id', true );
			$captured = get_post_meta( $order_id, '_pp_braintree_charge_captured', true );

			require_once( dirname( __FILE__ ) . '/braintree_sdk/lib/Braintree.php' );

			$token = get_option( 'wc_paypal_braintree_merchant_access_token', '' );

			$gateway = new Braintree_Gateway( array(
				'accessToken' => $token,
			) );

			$transaction_details = false;
			if ( $trans_id ) {
				try {
					$transaction_details = $gateway->transaction()->find( $trans_id );
				} catch ( Exception $e ) {
					$order->add_order_note( __( 'Unable to capture charge!', 'woocommerce-gateway-paypal-braintree' ) . ' ' . $e->getMessage() );
					$this->log( __FUNCTION__, "Error: Unable to find transaction with transaction ID {$trans_id}. Reason: " . $e->getMessage() );
					return;
				}
			}

			if ( $trans_id && 'authorized' === $transaction_details->status ) {
				try {
					$result = $gateway->transaction()->submitForSettlement( $trans_id, floatval( $order->order_total ) );

					$order->add_order_note( sprintf( __( 'PayPal Braintree charge complete (Charge ID: %s)', 'woocommerce-gateway-paypal-braintree' ), $result->transaction->id ) );
					update_post_meta( $order->id, '_pp_braintree_charge_captured', 'yes' );
				} catch ( Exception $e ) {
					$order->add_order_note( __( 'Unable to capture charge!', 'woocommerce-gateway-paypal-braintree' ) . ' ' . $result->get_error_message() );
				}
			}
		}
	}

	/**
	 * Cancel authorization
	 *
	 * @param  int $order_id
	 */
	public function cancel_payment( $order_id ) {
		$order = wc_get_order( $order_id );

		if ( in_array( $order->payment_method, array( 'paypalbraintree_cards', 'paypalbraintree_paypal' ) ) ) {
			require_once( dirname( __FILE__ ) . '/braintree_sdk/lib/Braintree.php' );

			$trans_id = get_post_meta( $order_id, '_transaction_id', true );

			$token = get_option( 'wc_paypal_braintree_merchant_access_token', '' );

			$gateway = new Braintree_Gateway( array(
				'accessToken' => $token,
			) );

			$transaction_details = false;
			if ( $trans_id ) {
				try {
					$transaction_details = $gateway->transaction()->find( $trans_id );
				} catch ( Exception $e ) {
					$this->log( __FUNCTION__, "Error: Unable to find transaction with transaction ID {$trans_id}. Reason: " . $e->getMessage() );
					$order->add_order_note( __( 'Unable to void charge!', 'woocommerce-gateway-paypal-braintree' ) . ' ' . $e->getMessage() );
					return;
				}
			}

			if ( $trans_id && 'authorized' === $transaction_details->status ) {
				try {
					$result = $gateway->transaction()->void( $trans_id );

					$order->add_order_note( sprintf( __( 'PayPal Braintree charge voided (Charge ID: %s)', 'woocommerce-gateway-paypal-braintree' ), $result->transaction->id ) );
					delete_post_meta( $order->id, '_pp_braintree_charge_captured' );
					delete_post_meta( $order->id, '_transaction_id' );
				} catch ( Exception $e ) {
					$this->log( __FUNCTION__, 'Error: Unable to void charge. Reason: ' . $e->getMessage() );
					$order->add_order_note( __( 'Unable to void charge!', 'woocommerce-gateway-paypal-braintree' ) . ' ' . $e->getMessage() );
				}
			}
		}
	}

	/**
	 * Filter payment gateway title in edit order so that when title is empty
	 * it will use default title.
	 *
	 * @param string $title Gateway title
	 * @param string $id    Gateway ID
	 *
	 * @return string Gateway title
	 */
	public function filter_gateway_title( $title, $id ) {
		if ( ! function_exists( 'get_current_screen' ) ) {
			return $title;
		}

		$screen = get_current_screen();

		if ( is_object( $screen ) && 'shop_order' !== $screen->id ) {
			return $title;
		}

		if ( in_array( $id, array( 'paypalbraintree_paypal', 'paypalbraintree_cards' ) ) && empty( $title ) ) {
			$title = __( 'PayPal Powered by Braintree', 'woocommerce-gateway-paypal-braintree' );
		}

		return $title;
	}

	/**
	 * What rolls down stairs
	 * alone or in pairs,
	 * and over your neighbor's dog?
	 * What's great for a snack,
	 * And fits on your back?
	 * It's log, log, log
	 *
	 * @since 1.0.0
	 */
	public function log( $context, $message ) {
		if ( empty( $this->log ) ) {
			$this->log = new WC_Logger();
		}

		$this->log->add( 'woocommerce-gateway-paypal-braintree', $context . " - " . $message );

		if ( defined( 'WP_DEBUG' ) && WP_DEBUG ) {
			error_log( $context . " - " . $message );
		}
	}
}

$GLOBALS['wc_paypal_braintree_loader'] = WC_PayPal_Braintree_Loader::getInstance();
register_activation_hook( __FILE__, array( 'WC_PayPal_Braintree_Loader', 'activation_check' ) );
