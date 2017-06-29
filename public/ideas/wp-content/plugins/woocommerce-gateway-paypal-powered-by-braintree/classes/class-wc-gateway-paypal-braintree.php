<?php
/**
 * PayPal Powered by Braintree Payment Gateway
 *
 * Provides a Payment Gateway for PayPal Powered by Braintree.
 *
 * @class 		WC_Gateway_Paypal_Braintree
 * @package		WooCommerce
 * @category	Payment Gateways
 * @author		WooThemes
 */

abstract class WC_Gateway_Paypal_Braintree extends WC_Payment_Gateway {

	/**
	 * Version
	 * @var string
	 */
	public $version = '1.2.1';

	/**
	 * Checkout template for payment fields
	 */
	public $checkout_template = '';

	/**
	 * Whether or not the gateway is enabled in wp-admin
	 * This is initialized from the option, but can differ from $this->enabled
	 * in the event the gateway is declared not-valid-for-use during construction.
	 */
	protected $enabled_original_setting = '';

	/**
	 * Whether or not debug is enabled in wp-admin
	 */
	protected $debug = false;

	/**
	 * Constructor
	 */
	public function __construct() {

		$this->icon        = false;
		$this->has_fields  = true;
		$this->title       = '';
		$this->description = '';

		$this->method_title = __( 'PayPal Powered by Braintree', 'woocommerce-gateway-paypal-braintree' );
		$this->method_description = sprintf(
			__( 'Works by accepting payment information in a secure form hosted by %sBraintree, a PayPal company%s.', 'woocommerce-gateway-paypal-braintree' ),
			'<a href="https://www.braintreepayments.com/">', '</a>'
		);
		$this->supports = array(
			'products',
			'refunds'
		);

		$this->capture = $this->get_option( 'capture', 'yes' ) === 'yes' ? true : false;

		$just_connected = $this->possibly_save_access_token();
		$just_disconnected = $this->possibly_discard_access_token();

		// After the merchant uses the Connect to Braintree button, they will
		// have an access token we can use. Note - this is stored in WP options
		$this->merchant_access_token = get_option( 'wc_paypal_braintree_merchant_access_token', '' );
		$this->merchant_id = get_option( 'wc_paypal_braintree_merchant_id', '' );
		$this->testmode = get_option( 'wc_paypal_braintree_environment', 'sandbox' ) === 'sandbox';

		$this->init_form_fields();
		$this->init_settings();

		$this->debug = $this->get_option( 'debug' ) === 'yes';
		$this->enabled_original_setting = $this->enabled;

		// Now that $this->debug is set, we can use logging
		if ( $just_connected ) {
			$this->log( __FUNCTION__, "Info: Connected to PayPal Braintree successfully. Merchant ID = {$this->merchant_id}" );
		}

		if ( $just_disconnected ) {
			$this->log( __FUNCTION__, "Info: Disconnected from PayPal Braintree." );
		}

		add_action( 'admin_notices', array( $this, 'admin_notices' ) );

		add_action( 'woocommerce_update_options_payment_gateways_' . $this->id, array( $this, 'process_admin_options' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'admin_enqueue_scripts' ) );

		if ( ! $this->is_valid_for_use() ) {
			$this->enabled = 'no';
			return;
		}

		// Hooks related to the cart Checkout with PayPal flow
		add_action( 'woocommerce_api_' . strtolower( get_class( $this ) ), array( $this, 'handle_wc_api' ) );
		add_action( 'woocommerce_checkout_billing', array( $this, 'possibly_set_chosen_payment_method' ) );
		add_filter( 'woocommerce_checkout_get_value', array( $this, 'possibly_set_checkout_value' ), 10, 2 );
		add_filter( 'woocommerce_ship_to_different_address_checked', array( $this, 'possibly_set_ship_to_different_address' ) );
	}

	/**
	 * If we see an access token, save it and add a notice. Returns true on successful connection
	 *
	 * @return bool
	 * @since 1.0.0
	 */
	public function possibly_save_access_token() {

		if ( ! is_admin() || ! is_user_logged_in() ) {
			return false;
		}

		// Require the access token
		if ( ! isset( $_GET['braintree_access_token'] ) ) {
			return false;
		}

		// Require the nonce
		if ( ! isset( $_GET['wc_paypal_braintree_admin_nonce'] ) ) {
			return false;
		}

		// Verify the nonce
		if ( ! wp_verify_nonce( $_GET['wc_paypal_braintree_admin_nonce'], 'connect_paypal_braintree') ) {
			wp_die( __( 'Invalid connection request', 'woocommerce-gateway-paypal-braintree' ) );
		}

		// Require the access token
		$access_token = isset( $_GET['braintree_access_token'] ) ? sanitize_text_field( urldecode( $_GET['braintree_access_token'] ) ) : '';
		if ( empty( $access_token ) ) {
			return false;
		}

		// If we already have a token, ignore this request
		$existing_access_token = get_option( 'wc_paypal_braintree_merchant_access_token' , '' );
		if ( ! empty( $existing_access_token ) ) {
			return false;
		}

		update_option( 'wc_paypal_braintree_merchant_access_token', $access_token );

		// Fetch the merchant ID and save it
		require_once( dirname( __FILE__ ) . '/../braintree_sdk/lib/Braintree.php' );
		$gateway = new Braintree_Gateway( array(
			'accessToken' => $access_token,
		) );

		$merchant_id = $gateway->config->getMerchantId();
		update_option( 'wc_paypal_braintree_merchant_id', $merchant_id );

		$environment = $gateway->config->getEnvironment(); // sandbox or production
		update_option( 'wc_paypal_braintree_environment', $environment );

		WC_PayPal_Braintree_Loader::getInstance()->add_admin_notice(
			'connected_successfully',
			'updated',
			__( 'Connected successfully.', 'woocommerce-gateway-paypal-braintree' )
		);

		return true;
	}

	/**
	 * If the user asks, discard the access token and add a notice
	 *
	 * @return bool
	 * @since 1.0.0
	 */
	public function possibly_discard_access_token() {
		// Abundance of caution, should never happen
		if ( ! is_user_logged_in() ) {
			return false;
		}

		$disconnect_paypal_braintree = isset( $_GET['disconnect_paypal_braintree'] );
		if ( ! $disconnect_paypal_braintree ) {
			return false;
		}

		// Require the nonce
		if ( ! isset( $_GET['wc_paypal_braintree_admin_nonce'] ) ) {
			return false;
		}

		if ( ! wp_verify_nonce( $_GET['wc_paypal_braintree_admin_nonce'], 'disconnect_paypal_braintree') ) {
			wp_die( __( 'Invalid disconnection request', 'woocommerce-gateway-paypal-braintree' ) );
		}

		// If we don't have a token, ignore this request
		$existing_access_token = get_option( 'wc_paypal_braintree_merchant_access_token' , '' );
		if ( empty( $existing_access_token ) ) {
			return false;
		}

		delete_option( 'wc_paypal_braintree_merchant_access_token' );
		delete_option( 'wc_paypal_braintree_merchant_id' );

		WC_PayPal_Braintree_Loader::getInstance()->add_admin_notice(
			'disconnected_successfully',
			'updated',
			__( 'Disconnected successfully.', 'woocommerce-gateway-paypal-braintree' )
		);

		return true;
	}


	/**
	 * Initialise Gateway Settings Form Fields common to all the gateways this extension supports
	 * Child classes may add additional fields
	 *
	 * @since 1.0.0
	 */
	public function init_form_fields () {

		$this->form_fields = WC_PayPal_Braintree_Loader::getInstance()->get_shared_form_fields();

	}

	public function admin_options() {

		$current_user = wp_get_current_user();
		$section_slug = strtolower( get_class( $this ) );

		$production_connect_url = 'https://connect.woocommerce.com/login/braintree';
		$sandbox_connect_url = 'https://connect.woocommerce.com/login/braintreesandbox';

		$redirect_url = add_query_arg(
			array(
				'page' => 'wc-settings',
				'tab' => 'checkout',
				'section' => $section_slug
			),
			admin_url( 'admin.php' )
		);
		$redirect_url = wp_nonce_url( $redirect_url, 'connect_paypal_braintree', 'wc_paypal_braintree_admin_nonce' );

		// Note:  We doubly urlencode the redirect url to avoid Braintree's server
		// decoding it which would cause loss of query params on the final redirect

		// Note: Although the Partner API expects an array
		// ( per https://developers.braintreepayments.com/guides/partner-api/sign-up/php )
		// our middleware presently wants things flattened, so instead of passing a user
		// array and a business array, we pass selected fields with user_ and business_
		// prepended

		$query_args = array(
			'redirect' => urlencode( urlencode( $redirect_url ) ),
			'scopes' => 'read_write'
		);

		$current_user = wp_get_current_user();

		$query_args['user_email'] = $current_user->user_email;

		if ( ! empty( $current_user->user_firstname ) ) {
			$query_args[ 'user_firstName' ] = $current_user->user_firstname;
		}

		if ( ! empty( $current_user->user_lastname ) ) {
			$query_args[ 'user_lastName' ] = $current_user->user_lastname;
		}

		$query_args[ 'business_currency' ] = get_woocommerce_currency();

		// Let's go ahead and assume the user and business are in the same region and country,
		// because they probably are.  If not, they can edit these anyways
		$base_location = wc_get_base_location();
		if ( array_key_exists( 'country', $base_location ) ) {
			$country = $base_location[ 'country' ];
			if ( ! empty( $country ) ) {
				$query_args[ 'business_country' ] = $country;
				$query_args[ 'user_country' ] = $country;
			}
		}
		if ( array_key_exists( 'state', $base_location ) ) {
			$state = $base_location[ 'state' ];
			if ( ! empty( $state ) ) {
				$query_args[ 'business_region' ] = $state;
				$query_args[ 'user_region' ] = $state;
			}
		}

		$site_name = get_bloginfo( 'name' );
		if ( ! empty( $site_name ) ) {
			$query_args[ 'business_name' ] = $site_name;
		}

		$site_description = get_bloginfo( 'description' );
		if ( ! empty( $site_description ) ) {
			$query_args[ 'business_description' ] = $site_description;
		}

		$query_args[ 'business_website' ] = get_bloginfo( 'url' );

		$production_connect_url = add_query_arg( $query_args, $production_connect_url );
		$sandbox_connect_url = add_query_arg( $query_args, $sandbox_connect_url );

		$disconnect_url = add_query_arg(
			array(
				'page' => 'wc-settings',
				'tab' => 'checkout',
				'section' => $section_slug,
				'disconnect_paypal_braintree' => 1
			),
			admin_url( 'admin.php' )
		);
		$disconnect_url = wp_nonce_url( $disconnect_url, 'disconnect_paypal_braintree', 'wc_paypal_braintree_admin_nonce' );

		?>
			<div class='paypal-braintree-admin-header'>
				<div class='paypal-braintree-admin-brand'>
					<img src="<?php echo plugins_url( '../assets/images/branding/paypal-braintree-horizontal.png', __FILE__ ); ?>" />
				</div>
				<div class='paypal-braintree-admin-payment-methods'>
					<img src="<?php echo plugins_url( '../assets/images/payments/visa.png', __FILE__ ); ?>" />
					<img src="<?php echo plugins_url( '../assets/images/payments/master-card.png', __FILE__ ); ?>" />
					<img src="<?php echo plugins_url( '../assets/images/payments/discover.png', __FILE__ ); ?>" />
					<img src="<?php echo plugins_url( '../assets/images/payments/american-express.png', __FILE__ ); ?>" />
					<img src="<?php echo plugins_url( '../assets/images/payments/paypal.png', __FILE__ ); ?>" />
				</div>
			</div>
			<?php if ( empty( $this->merchant_access_token ) ) { ?>
				<p class='paypal-braintree-admin-connect-prompt'>
					<?php echo esc_html( 'Connect with Braintree to start accepting credit and debit card payments in your checkout.', 'woocommerce-gateway-paypal-braintree' ); ?>
					<br/>
					<a href="https://www.braintreepayments.com/partners/learn-more" target="_blank">
						<?php echo esc_html( 'Learn more', 'woocommerce-gateway-paypal-braintree' ); ?>
					</a>
				</p>
			<?php } ?>

			<table class="form-table">
				<tbody>
					<tr>
						<th>
							<?php _e( 'Connect/Disconnect', 'woocommerce-gateway-paypal-braintree' ); ?>
							<?php
							$connect_help_tip = __( 'Click button to create an account with Braintree and start transacting.', 'woocommerce-gateway-paypal-braintree' );
							if ( ! empty( $this->merchant_access_token ) ) {
								$connect_help_tip = sprintf(
									'%s<br><br>%s<br><br>%s',
									__( 'You just connected your Braintree account to WooCommerce. You can start taking payments now.', 'woocommerce-gateway-paypal-braintree' ),
									__( 'Once you have processed a payment, PayPal will review your application for final approval. Before you ship any goods make sure you have received a final approval for your Braintree account.', 'woocommerce-gateway-paypal-braintree' ),
									__( 'Questions? We are a phone call away: 1-855-489-0345.', 'woocommerce-gateway-paypal-braintree' )
								);
							}
							echo wc_help_tip( $connect_help_tip );
							?>
						</th>
						<td>
							<?php if ( ! empty( $this->merchant_access_token ) ) { ?>
								<a href="<?php echo esc_attr( $disconnect_url ); ?>" class='button-primary'>
									<?php echo esc_html__( 'Disconnect from PayPal Powered by Braintree', 'woocommerce-gateway-paypal-braintree' ); ?>
								</a>
							<?php } else { ?>
								<a href="<?php echo esc_attr( $production_connect_url ); ?>">
									<img src="<?php echo plugins_url( '../assets/images/button/connect-braintree.png', __FILE__ ); ?>"/>
								</a>
								<br/>
								<br/>
								<a href="<?php echo esc_attr( $sandbox_connect_url ); ?>">
									<?php echo esc_html__( 'Not ready to accept live payments? Click here to connect using sandbox mode.', 'woocommerce-gateway-paypal-braintree' ); ?>
								</a>
							<?php } ?>
						</td>
					</tr>
				</tbody>
			</table>

			<table class="form-table">
				<?php $this->generate_settings_html(); ?>
			</table>
		<?php
	}


	/**
	 * Save the admin options, ask the loader to clone to siblings
	 */
	public function process_admin_options() {
		if ( parent::process_admin_options() ) {
			WC_PayPal_Braintree_Loader::getInstance()->clone_fields_from_id( $this->id );
		}
	}


	/**
	 * Check for required settings, and if SSL is enabled. We use a slug keyed array to avoid
	 * duplicate notices from the paypal and card concrete classes
	 */
	public function admin_notices() {

		// If the gateway is supposed to be enabled, check for required settings
		if ( 'yes' === $this->enabled_original_setting ) {

			$general_settings_url = add_query_arg( 'page', 'wc-settings', admin_url( 'admin.php' ) );
			$checkout_settings_url = add_query_arg( 'tab', 'checkout', $general_settings_url );
			$gateway_settings_url = add_query_arg( 'section', strtolower( get_class( $this ) ), $checkout_settings_url );

			// Check Currency
			if ( ! $this->is_shop_currency_supported() ) {
				WC_PayPal_Braintree_Loader::getInstance()->add_admin_notice(
					'shop_currency_not_supported',
					'error',
					sprintf( __( 'PayPal Powered by Braintree error: Your shop\'s currency is not supported. Please check <a href="%s">here</a>.', 'woocommerce-gateway-paypal-braintree' ), $general_settings_url )
				);
			}

			// Show message if enabled and FORCE SSL is disabled and WordpressHTTPS plugin is not detected
			if ( get_option( 'woocommerce_force_ssl_checkout' ) == 'no' && ! class_exists( 'WordPressHTTPS' ) ) {
				WC_PayPal_Braintree_Loader::getInstance()->add_admin_notice(
					'ssl_lacking',
					'error',
					sprintf( __( 'PayPal Powered by Braintree is enabled, but the <a href="%s">force SSL option</a> is disabled; your checkout may not be secure! Please enable SSL and ensure your server has a valid SSL certificate - PayPal Powered by Braintree will only work in test mode.', 'woocommerce-gateway-paypal-braintree' ), $checkout_settings_url )
				);
			}

		}

	}


	/**
	 * handle_wc_api
	 *
	 * Exposes an endpoint that the cart.js javascript can use to post back checkout details provided by
	 * PayPal during the cart based Checkout with PayPal flow
	 *
	 * @since 1.0.0
	 */
	public function handle_wc_api() {

		$action = isset( $_GET['action'] ) ? sanitize_text_field( $_GET['action'] ) : '';
		if ( empty( $action ) ) {
			return;
		}

		if ( 'checkout_details' !== $action ) {
			return;
		}

		// Save the $_POST data to the session for later retrieval
		$sanitized_data = self::sanitize_post_back();
		WC()->session->set( 'paypal_braintree_postback', $sanitized_data );
		WC()->session->set( 'chosen_payment_method', get_class( $this ) );

		// return a URL for the client to navigate to
		wp_send_json( array(
			"success" => true,
			"redirectTo" => WC()->cart->get_checkout_url()
			)
		);
	}


	/**
	 * When cart based Checkout with PayPal is in effect, this method will be called by the WC API
	 * to sanitize and repackage PayPal fields into WC fields for later use in pre-populating the
	 * checkout form
	 *
	 * @since 1.0.0
	 * @return bool
	 */
	protected function sanitize_post_back() {

		$paypalbraintree_nonce = sanitize_text_field( self::get_posted_variable( 'nonce', '' ) );

		$details = self::sanitize_array( self::get_posted_variable( 'details', array() ) );
		$billing_first_name = array_key_exists( 'firstName', $details ) ? $details['firstName'] : '';
		$billing_last_name = array_key_exists( 'lastName', $details ) ? $details['lastName'] : '';
		$billing_phone = array_key_exists( 'phone', $details ) ? $details['phone'] : '';
		$billing_email = array_key_exists( 'email', $details ) ? $details['email'] : '';

		$billingAddress = array_key_exists( 'billingAddress', $details ) ? $details['billingAddress'] : array();
		if ( ! is_array( $billingAddress ) ) {
			$billingAddress = array();
		}
		$billing_address_1 = array_key_exists( 'streetAddress', $billingAddress ) ? $billingAddress['streetAddress'] : '';
		$billing_address_2 = array_key_exists( 'extendedAddress', $billingAddress ) ? $billingAddress['extendedAddress'] : '';
		$billing_city = array_key_exists( 'locality', $billingAddress ) ? $billingAddress['locality'] : '';
		$billing_state = array_key_exists( 'region', $billingAddress ) ? $billingAddress['region'] : '';
		$billing_postcode = array_key_exists( 'postalCode', $billingAddress ) ? $billingAddress['postalCode'] : '';
		$billing_country = array_key_exists( 'countryCodeAlpha2', $billingAddress ) ? $billingAddress['countryCodeAlpha2'] : '';

		$shippingAddress = array_key_exists( 'shippingAddress', $details ) ? $details['shippingAddress'] : array();
		if ( ! is_array( $shippingAddress ) ) {
			$shippingAddress = array();
		}
		$shipping_address_1 = array_key_exists( 'streetAddress', $shippingAddress ) ? $shippingAddress['streetAddress'] : '';
		$shipping_address_2 = array_key_exists( 'extendedAddress', $shippingAddress ) ? $shippingAddress['extendedAddress'] : '';
		$shipping_city = array_key_exists( 'locality', $shippingAddress ) ? $shippingAddress['locality'] : '';
		$shipping_state = array_key_exists( 'region', $shippingAddress ) ? $shippingAddress['region'] : '';
		$shipping_postcode = array_key_exists( 'postalCode', $shippingAddress ) ? $shippingAddress['postalCode'] : '';
		$shipping_country = array_key_exists( 'countryCodeAlpha2', $shippingAddress ) ? $shippingAddress['countryCodeAlpha2'] : '';

		$shipping_recipient = array_key_exists( 'recipientName', $shippingAddress ) ? $shippingAddress['recipientName'] : '';
		$shipping_first_name = '';
		$shipping_last_name = '';
		if ( ! empty( $shipping_recipient ) ) {
			$shipping_recipient_parts = explode( " ", $shipping_recipient );
			$shipping_first_name = $shipping_recipient_parts[0];
			unset( $shipping_recipient_parts[0] );
			$shipping_last_name = implode( " ", $shipping_recipient_parts );
		}

		$ship_to_different_address = 1;

		$sanitized_array = compact(
			'paypalbraintree_nonce',
			'billing_first_name', 'billing_last_name', 'billing_phone', 'billing_email',
			'billing_address_1', 'billing_address_2', 'billing_city', 'billing_state', 'billing_postcode', 'billing_country',
			'shipping_first_name', 'shipping_last_name',
			'shipping_address_1', 'shipping_address_2', 'shipping_city', 'shipping_state', 'shipping_postcode', 'shipping_country',
			'ship_to_different_address'
		);

		return $sanitized_array;
	}


	/**
	 * Validate the shop currency is supported
	 * https://developers.braintreepayments.com/reference/general/currencies
	 *
	 * @since 1.0.0
	 */
	public function is_shop_currency_supported() {

		$supported_currencies = array(
			'AED', // United Arab Emirates Dirham
			'AFN', // Afghan Afghani
			'ALL', // Albanian Lek
			'AMD', // Armenian Dram
			'ANG', // Netherlands Antillean Gulden
			'AOA', // Angolan Kwanza
			'ARS', // Argentine Peso
			'AUD', // Australian Dollar
			'AWG', // Aruban Florin
			'AZN', // Azerbaijani Manat
			'BAM', // Bosnia and Herzegovina Convertible Mark
			'BBD', // Barbadian Dollar
			'BDT', // Bangladeshi Taka
			'BGN', // Bulgarian Lev
			'BHD', // Bahraini Dinar
			'BIF', // Burundian Franc
			'BMD', // Bermudian Dollar
			'BND', // Brunei Dollar
			'BOB', // Bolivian Boliviano
			'BRL', // Brazilian Real
			'BSD', // Bahamian Dollar
			'BTN', // Bhutanese Ngultrum
			'BWP', // Botswana Pula
			'BYR', // Belarusian Ruble
			'BZD', // Belize Dollar
			'CAD', // Canadian Dollar
			'CDF', // Congolese Franc
			'CHF', // Swiss Franc
			'CLP', // Chilean Peso
			'CNY', // Chinese Renminbi Yuan
			'COP', // Colombian Peso
			'CRC', // Costa Rican Colón
			'CUC', // Cuban Convertible Peso
			'CUP', // Cuban Peso
			'CVE', // Cape Verdean Escudo
			'CZK', // Czech Koruna
			'DJF', // Djiboutian Franc
			'DKK', // Danish Krone
			'DOP', // Dominican Peso
			'DZD', // Algerian Dinar
			'EEK', // Estonian Kroon
			'EGP', // Egyptian Pound
			'ERN', // Eritrean Nakfa
			'ETB', // Ethiopian Birr
			'EUR', // Euro
			'FJD', // Fijian Dollar
			'FKP', // Falkland Pound
			'GBP', // British Pound
			'GEL', // Georgian Lari
			'GHS', // Ghanaian Cedi
			'GIP', // Gibraltar Pound
			'GMD', // Gambian Dalasi
			'GNF', // Guinean Franc
			'GTQ', // Guatemalan Quetzal
			'GYD', // Guyanese Dollar
			'HKD', // Hong Kong Dollar
			'HNL', // Honduran Lempira
			'HRK', // Croatian Kuna
			'HTG', // Haitian Gourde
			'HUF', // Hungarian Forint
			'IDR', // Indonesian Rupiah
			'ILS', // Israeli New Sheqel
			'INR', // Indian Rupee
			'IQD', // Iraqi Dinar
			'IRR', // Iranian Rial
			'ISK', // Icelandic Króna
			'JMD', // Jamaican Dollar
			'JOD', // Jordanian Dinar
			'JPY', // Japanese Yen
			'KES', // Kenyan Shilling
			'KGS', // Kyrgyzstani Som
			'KHR', // Cambodian Riel
			'KMF', // Comorian Franc
			'KPW', // North Korean Won
			'KRW', // South Korean Won
			'KWD', // Kuwaiti Dinar
			'KYD', // Cayman Islands Dollar
			'KZT', // Kazakhstani Tenge
			'LAK', // Lao Kip
			'LBP', // Lebanese Lira
			'LKR', // Sri Lankan Rupee
			'LRD', // Liberian Dollar
			'LSL', // Lesotho Loti
			'LTL', // Lithuanian Litas
			'LVL', // Latvian Lats
			'LYD', // Libyan Dinar
			'MAD', // Moroccan Dirham
			'MDL', // Moldovan Leu
			'MGA', // Malagasy Ariary
			'MKD', // Macedonian Denar
			'MMK', // Myanmar Kyat
			'MNT', // Mongolian Tögrög
			'MOP', // Macanese Pataca
			'MRO', // Mauritanian Ouguiya
			'MUR', // Mauritian Rupee
			'MVR', // Maldivian Rufiyaa
			'MWK', // Malawian Kwacha
			'MXN', // Mexican Peso
			'MYR', // Malaysian Ringgit
			'MZN', // Mozambican Metical
			'NAD', // Namibian Dollar
			'NGN', // Nigerian Naira
			'NIO', // Nicaraguan Córdoba
			'NOK', // Norwegian Krone
			'NPR', // Nepalese Rupee
			'NZD', // New Zealand Dollar
			'OMR', // Omani Rial
			'PAB', // Panamanian Balboa
			'PEN', // Peruvian Nuevo Sol
			'PGK', // Papua New Guinean Kina
			'PHP', // Philippine Peso
			'PKR', // Pakistani Rupee
			'PLN', // Polish Złoty
			'PYG', // Paraguayan Guaraní
			'QAR', // Qatari Riyal
			'RON', // Romanian Leu
			'RSD', // Serbian Dinar
			'RUB', // Russian Ruble
			'RWF', // Rwandan Franc
			'SAR', // Saudi Riyal
			'SBD', // Solomon Islands Dollar
			'SCR', // Seychellois Rupee
			'SDG', // Sudanese Pound
			'SEK', // Swedish Krona
			'SGD', // Singapore Dollar
			'SHP', // Saint Helenian Pound
			'SKK', // Slovak Koruna
			'SLL', // Sierra Leonean Leone
			'SOS', // Somali Shilling
			'SRD', // Surinamese Dollar
			'STD', // São Tomé and Príncipe Dobra
			'SVC', // Salvadoran Colón
			'SYP', // Syrian Pound
			'SZL', // Swazi Lilangeni
			'THB', // Thai Baht
			'TJS', // Tajikistani Somoni
			'TMM', // Turkmenistani Manat
			'TMT', // Turkmenistani Manat
			'TND', // Tunisian Dinar
			'TOP', // Tongan Paʻanga
			'TRY', // Turkish New Lira
			'TTD', // Trinidad and Tobago Dollar
			'TWD', // New Taiwan Dollar
			'TZS', // Tanzanian Shilling
			'UAH', // Ukrainian Hryvnia
			'UGX', // Ugandan Shilling
			'USD', // United States Dollar
			'UYU', // Uruguayan Peso
			'UZS', // Uzbekistani Som
			'VEF', // Venezuelan Bolívar
			'VND', // Vietnamese Đồng
			'VUV', // Vanuatu Vatu
			'WST', // Samoan Tala
			'XAF', // Central African Cfa Franc
			'XCD', // East Caribbean Dollar
			'XOF', // West African Cfa Franc
			'XPF', // Cfp Franc
			'YER', // Yemeni Rial
			'ZAR', // South African Rand
			'ZMK', // Zambian Kwacha
			'ZWD'  // Zimbabwean Dollar
			);

		return ( in_array( get_woocommerce_currency(), $supported_currencies ) );
	}

	/**
	 * Don't allow use of this extension if the currency is not supported or if setup is incomplete
	 *
	 * @since 1.0.0
	 */
	function is_valid_for_use() {
		if ( ! is_ssl() && ! $this->testmode ) {
			return false;
		}

		if ( ! $this->is_shop_currency_supported() ) {
			return false;
		}

		if ( empty( $this->merchant_access_token ) ) {
			return false;
		}

		return true;
	}


	/**
	 * payment_fields
	 *
	 * @since 1.0.0
	 */
	public function payment_fields() {

		$description = $this->get_description();
		if ( $this->testmode ) {
			$description .= ' ' . __( '(Sandbox mode is enabled -- Use a test account)', 'woocommerce-gateway-paypal-braintree' );
		}

		$model = array(
			'description' => $description
		);

		// Add nonce from postback data if present
		if ( WC_PayPal_Braintree_Loader::getInstance()->does_session_have_postback_data() ) {
			$postback_data = WC()->session->get( 'paypal_braintree_postback' );
			$model['paypalbraintree_nonce'] = $postback_data['paypalbraintree_nonce'];
		}

		if ( ! empty( $this->checkout_template ) ) {
			wc_get_template(
				$this->checkout_template,
				array(
					'model' => $model
				),
				'',
				dirname( __FILE__ ) . '/../templates/'
			);
		}

	}

	/**
	 * validate_fields
	 *
	 * @since 1.0.0
	 */
	public function validate_fields() {
		return true;
	}

	public static function get_posted_variable( $variable, $default = '' ) {
		return ( isset( $_POST[$variable] ) ? $_POST[$variable] : $default );
	}

	public static function sanitize_array( $array ) {
		$sanitized_array = array();

		foreach( $array as $key => $value ) {
			$sanitized_array[$key] = is_array( $value ) ? self::sanitize_array( $value ) : sanitize_text_field( $value );
		}

		return $sanitized_array;
	}

	/**
	 * process_payment
	 *
	 * @since 1.0.0
	 */
	public function process_payment( $order_id ) {
		$order = wc_get_order( $order_id );

		$this->log( __FUNCTION__, "Info: Beginning processing payment for order $order_id for the amount of {$order->order_total}" );
		$this->log( __FUNCTION__, "Info: Merchant ID = {$this->merchant_id}" );

		if ( ! $order->needs_payment() ) {
			$this->log( __FUNCTION__, "Error: Order does not need payment." );
			wc_add_notice( __( 'Error: This order does not need a payment.', 'woocommerce-gateway-paypal-braintree' ), 'error' );
			return false;
		}

		$paypal_braintree_nonce = self::get_posted_variable( 'paypalbraintree_nonce' );
		if ( empty( $paypal_braintree_nonce ) ) {
			$this->log( __FUNCTION__, "Error: The paypal_braintree_nonce was unexpectedly empty" );
			wc_add_notice( __( 'Error: PayPal Powered by Braintree did not supply a payment nonce. Please try again later or use another means of payment.', 'woocommerce-gateway-paypal-braintree' ), 'error' );
			return false;
		}

		// Billing data, assemble
		$billing = array(
			'firstName'         => $order->billing_first_name,
			'lastName'          => $order->billing_last_name,
			'company'           => $order->billing_company,
			'streetAddress'     => $order->billing_address_1,
			'extendedAddress'   => $order->billing_address_2,
			'locality'          => $order->billing_city,
			'region'            => $order->billing_state,
			'postalCode'        => $order->billing_postcode,
			'countryCodeAlpha2' => $order->billing_country
		);

		// Shipping data, assemble
		$shipping = array(
			'firstName'         => $order->shipping_first_name,
			'lastName'          => $order->shipping_last_name,
			'company'           => $order->shipping_company,
			'streetAddress'     => $order->shipping_address_1,
			'extendedAddress'   => $order->shipping_address_2,
			'locality'          => $order->shipping_city,
			'region'            => $order->shipping_state,
			'postalCode'        => $order->shipping_postcode,
			'countryCodeAlpha2' => $order->shipping_country
		);

		$sale_args = array(
			'amount'              => $order->order_total,
			'billing'             => $billing,
			'shipping'            => $shipping,
			'paymentMethodNonce'  => $paypal_braintree_nonce,
			'channel'             => 'WooThemes_BT', // aka BN tracking code
			'orderId'             => $order_id,
			'options'             => array(
			'submitForSettlement' => $this->capture ? 'true' : 'false'
			)
		);

		require_once( dirname( __FILE__ ) . '/../braintree_sdk/lib/Braintree.php' );
		$gateway = new Braintree_Gateway( array(
			'accessToken' => $this->merchant_access_token,
		) );

		try {
			$result = $gateway->transaction()->sale( $sale_args );
		} catch ( Exception $e ) {
			$notice = sprintf( __( 'Error: PayPal Powered by Braintree was unable to complete the transaction. Please try again later or use another means of payment. Reason: %s', 'woocommerce-gateway-paypal-braintree' ), $e->getMessage() );
			wc_add_notice( $notice, 'error' );
			$this->log( __FUNCTION__, 'Error: Unable to complete transaction. Reason: ' . $e->getMessage() );
			return false;
		}

		// Check result
		if ( ! $result->success ) {
			$notice = sprintf( __( 'Error: PayPal Powered by Braintree was unable to complete the transaction. Please try again later or use another means of payment. Reason: %s', 'woocommerce-gateway-paypal-braintree' ), $result->message );
			wc_add_notice( $notice, 'error' );
			$this->log( __FUNCTION__, "Error: Unable to complete transaction. Reason: {$result->message}" );
			return false;
		}

		$transaction_id      = $result->transaction->id;
		$maybe_settled_later = array(
			Braintree_Transaction::SETTLING,
			Braintree_Transaction::SETTLEMENT_PENDING,
			Braintree_Transaction::SUBMITTED_FOR_SETTLEMENT,
		);

		if ( in_array( $result->transaction->status, $maybe_settled_later ) ) {
			// Store captured value.
			update_post_meta( $order->id, '_pp_braintree_charge_captured', 'yes' );

			$this->log( __FUNCTION__, sprintf( 'Info: Successfully processed payment, transaction id = %s, status = %s', $transaction_id, $result->transaction->status ) );

			// Payment complete.
			$order->payment_complete( $transaction_id );

			$this->log( __FUNCTION__, "Info: Completed processing of payment for order $order_id" );

			// Add order note
			$order->add_order_note( sprintf( __( 'PayPal Braintree charge complete (Charge ID: %s)', 'woocommerce-gateway-paypal-braintree' ), $transaction_id ) );
		} else if ( Braintree_Transaction::AUTHORIZED === $result->transaction->status ) {

			$this->log( __FUNCTION__, sprintf( 'Info: Successfully authorized transaction id = %s, status = %s', $transaction_id, $result->transaction->status ) );

			update_post_meta( $order->id, '_pp_braintree_charge_captured', 'no' );

			add_post_meta( $order->id, '_transaction_id', $transaction_id, true );

			// Mark as on-hold.
			$order->update_status( 'on-hold', sprintf( __( 'PayPal Braintree charge authorized (Charge ID: %s). Process order to take payment, or cancel to remove the pre-authorization.', 'woocommerce-gateway-paypal-braintree' ), $transaction_id ) );

			// Reduce stock levels
			$order->reduce_order_stock();

		} else {

			$this->log( __FUNCTION__, sprintf( 'Info: unhandled transaction id = %s, status = %s', $transaction_id, $result->transaction->status ) );

			$order->update_status( 'on-hold', sprintf( __( 'Transaction was submitted to PayPal Braintree but not handled by WooCommerce order, transaction_id: %s, status: %s. Order was put in-hold.', 'woocommerce-gateway-paypal-braintree' ), $transaction_id, $tresult->transaction->status ) );
		}

		// on success, return thank you page redirect
		return array(
			'result'   => 'success',
			'redirect' => $this->get_return_url( $order )
		);
	}

	/**
	 * Get the order's transaction url
	 * @param  WC_Order $order
	 * @return bool
	 */
	function get_transaction_url( $order ) {
		$transaction_id = $order->get_transaction_id();

		if ( empty( $transaction_id ) ) {
			return false;
		}

		if ( $this->testmode ) {
			$server = "sandbox.braintreegateway.com";
		} else {
			$server = "braintreegateway.com";
		}

		return "https://" . $server . "/merchants/" . urlencode( $this->merchant_id ). "/transactions/" . urlencode( $transaction_id );
	}


	/**
	 * Can the order be refunded?
	 * @param  WC_Order $order
	 * @return bool
	 */
	public function can_refund_order( $order ) {
		return $order && $order->get_transaction_id();
	}


	/**
	 * Process a refund if supported
	 * @param  int $order_id
	 * @param  float $amount
	 * @param  string $reason
	 * @return  boolean True or false based on success, or a WP_Error object
	 */
	public function process_refund( $order_id, $refund_amount = null, $reason = '' ) {

		$this->log( __FUNCTION__, "Info: Beginning processing refund/void for order $order_id" );
		$this->log( __FUNCTION__, "Info: Merchant ID = {$this->merchant_id}" );

		$order = wc_get_order( $order_id );

		if ( ! $this->can_refund_order( $order ) ) {
			$this->log( __FUNCTION__, "Error: Unable to refund/void order {$order_id}. Order has no transaction ID." );
			return false;
		}

		if ( ! $refund_amount ) {
			$refund_amount = floatval( $order->get_total() );
		}

		$this->log( __FUNCTION__, "Info: Amount = {$refund_amount}" );

		$transaction_id = $order->get_transaction_id();

		require_once( dirname( __FILE__ ) . '/../braintree_sdk/lib/Braintree.php' );
		$gateway = new Braintree_Gateway( array(
			'accessToken' => $this->merchant_access_token,
		) );

		// See if the transaction is not yet settled and should be voided instead of refunded
		// If for some reason the transaction cannot be found, an Exception will be thrown

		try {
			$transaction = $gateway->transaction()->find( $transaction_id );
		} catch ( Exception $e ) {
			$this->log( __FUNCTION__, "Error: Unable to find transaction with transaction ID {$transaction_id}. Reason: " . $e->getMessage() );
			return false;
		}

		$this->log( __FUNCTION__, "Info: Order {$order_id} with transaction ID {$transaction_id} has status {$transaction->status}" );

		// Ref: https://developers.braintreepayments.com/reference/request/transaction/void/php
		// Ref: https://developers.braintreepayments.com/reference/request/transaction/refund/php
		$action_to_take = '';
		switch ( $transaction->status ) {
			case Braintree_Transaction::AUTHORIZED :
			case Braintree_Transaction::SUBMITTED_FOR_SETTLEMENT :
			case Braintree_Transaction::SETTLEMENT_PENDING :
				$action_to_take = "void";
				break;
			case Braintree_Transaction::SETTLED :
			case Braintree_Transaction::SETTLING :
				$action_to_take = "refund";
				break;
		}

		if ( empty( $action_to_take ) ) {
			$this->log( __FUNCTION__, "Error: The transaction cannot be voided nor refunded in its current state: state = {$transaction->status}" );
			return false;
		}

		try {
			if ( "void" === $action_to_take ) {
				$result = $gateway->transaction()->void( $transaction_id );
			} else {
				$result = $gateway->transaction()->refund( $transaction_id, $refund_amount );
			}
		} catch ( Exception $e ) {
			$this->log( __FUNCTION__, 'Error: The transaction cannot be voided nor refunded. Reason: ' . $e->getMessage() );
			return false;
		}

		if ( ! $result->success ) {
			$this->log( __FUNCTION__, "Error: The transaction cannot be voided nor refunded - reason: = {$result->message}" );
			return false;
		}

		// Get the refund/void transaction ID
		$latest_transaction_id = $result->transaction->id;

		if ( "void" === $action_to_take ) {
			$order->add_order_note(
				sprintf(
					__( 'Voided - Void ID: %s - Reason: %s', 'woocommerce-gateway-paypal-braintree' ),
					$latest_transaction_id,
					$reason
				)
			);
			$this->log( __FUNCTION__, "Info: Successfully voided order {$order_id}" );
		} else {
			$order->add_order_note(
				sprintf(
					__( 'Refunded %s - Refund ID: %s - Reason: %s', 'woocommerce-gateway-paypal-braintree' ),
					wc_price( $refund_amount ),
					$latest_transaction_id,
					$reason
				)
			);
			$this->log( __FUNCTION__, "Info: Successfully refunded {$refund_amount} for order {$order_id}" );
		}

		return true;
	}

	/**
	 * admin_enqueue_scripts
	 *
	 * @since 1.0.0
	 */
	public function admin_enqueue_scripts() {
		wp_enqueue_style( 'paypal_braintree_admin_styles', plugins_url( '../assets/css/admin.css', __FILE__ ) );
	}


	/**
	 * When cart based Checkout with PayPal is in effect, we need to select ourselves as the payment method.
	 *
	 * @since 1.0.0
	 */
	public function possibly_set_chosen_payment_method() {

		// skip if this is a real POST
		if ( 'POST' == $_SERVER['REQUEST_METHOD'] ) {
			return;
		}

		// skip if PayPal data not available
		if ( ! WC_PayPal_Braintree_Loader::getInstance()->does_session_have_postback_data() ) {
			return;
		}

		// set as chosen payment method (for WC 2.3+)
		$this->chosen = true;
	}


	/**
	 * When cart based Checkout with PayPal is in effect, we need to take the data we saved in the session
	 * and fill in the checkout form with it.
	 *
	 * @since 1.0.0
	 */
	public function possibly_set_checkout_value( $value, $key ) {

		// skip if this is a real POST
		if ( 'POST' == $_SERVER['REQUEST_METHOD'] ) {
			return $value;
		}

		// skip if PayPal data not available
		if ( ! WC_PayPal_Braintree_Loader::getInstance()->does_session_have_postback_data() ) {
			return $value;
		}

		$postback_data = WC()->session->get( 'paypal_braintree_postback' );
		if ( array_key_exists( $key, $postback_data ) ) {
			return $postback_data[$key];
		}

		if ( 'order_comments' === $key ) {
			if ( array_key_exists( 'order_note', $postback_data ) ) {
				return $postback_data['order_note'];
			}
		}

		return $value;
	}


	/**
	 * When cart based Checkout with PayPal is in effect, we need to tick the checkbox to ensure
	 * the shipping details provided by PayPal are saved with the order.
	 *
	 * @since 1.0.0
	 */
	public function possibly_set_ship_to_different_address( $ship_to_different_address ) {

		if ( WC_PayPal_Braintree_Loader::getInstance()->does_session_have_postback_data() ) {
			return true;
		}

		return $ship_to_different_address;
	}

	/**
	 * Shorthand for loader singleton logger
	 *
	 * @since 1.0.0
	 */
	protected function log( $context, $message ) {
		if ( $this->debug ) {
			WC_PayPal_Braintree_Loader::getInstance()->log( $context, $message );
		}
	}

}
