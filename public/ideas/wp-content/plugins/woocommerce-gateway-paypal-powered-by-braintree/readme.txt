=== WooCommerce PayPal Powered by Braintree Payment Gateway ===
Contributors: automattic, akeda, allendav, royho, slash1andy, woosteve, spraveenitpro, mikedmoore, fernashes, shellbeezy, danieldudzic, dsmithweb
Tags: ecommerce, e-commerce, commerce, woothemes, wordpress ecommerce, store, sales, sell, shop, shopping, cart, checkout, configurable, paypal, braintree
Requires at least: 4.4
Tested up to: 4.6.1
Stable tag: 1.2.4
License: GPLv3
License URI: http://www.gnu.org/licenses/gpl-3.0.html

Accept PayPal, Credit Cards and Debit Cards on your WooCommerce store.

== Description ==

This is a PayPal Powered by Braintree Payment Gateway for WooCommerce.

PayPal Powered by Braintree allows you to securely sell your products and subscriptions online using Hosted Fields to help you meet
security requirements without causing your theme to suffer.  Hosted Fields are little iFrames, hosted on PayPal's servers,
that fit inside the checkout form elements and provide a secure means for your customers to enter their card information.

Connecting to PayPal is as simple as clicking a button - no complicated API keys to cut and paste.

== Installation ==

= Minimum Requirements =

* WordPress 4.4 or greater
* PHP version 5.4 or greater
* cURL

= Automatic installation =

Automatic installation is the easiest option as WordPress handles the file transfers itself and you don’t need to leave your web browser. To
do an automatic install of, log in to your WordPress dashboard, navigate to the Plugins menu and click Add New.

In the search field type “WooCommerce PayPal Powered by Braintree” and click Search Plugins. Once you’ve found our plugin you can view details
about it such as the point release, rating and description. Most importantly of course, you can install it by simply clicking “Install Now”.

= Manual installation =

The manual installation method involves downloading our plugin and uploading it to your webserver via your favourite FTP application. The
WordPress codex contains [instructions on how to do this here](http://codex.wordpress.org/Managing_Plugins#Manual_Plugin_Installation).

= Updating =

Automatic updates should work like a charm; as always though, ensure you backup your site just in case.

If on the off-chance you do encounter issues with the shop/category pages after an update you simply need to flush the permalinks by going
to WordPress > Settings > Permalinks and hitting 'save'. That should return things to normal.

== Frequently Asked Questions ==

= Does this plugin work with credit cards or just PayPal? =

This plugin supports payments using both credit and debit cards as well as PayPal.

= Does this support recurring payments, like for subscriptions? =

Yes!

= Does this support Checkout with PayPal from the cart view? =

Yes!

= What currencies can I use? =

PayPal Powered by Braintree for WooCommerce is available in the U.S. only.

= Does this support both production mode and sandbox mode for testing? =

Yes it does - production and sandbox mode is driven by how you connect.  You may choose to connect in either mode, and disconnect and reconnect in the other mode whenever you want.

= Where can I find documentation? =

For help setting up and configuring, please refer to our [user guide](http://docs.woothemes.com/document/woocommerce-gateway-paypal-powered-by-braintree/)

= Why isn't PayPal working? Credit cards work fine. =

Make sure PayPal is enabled on your Braintree account by following the [Braintree PayPal Setup Guide](https://articles.braintreepayments.com/guides/paypal/setup-guide).

= What do I need to do if I'm updating from the retired premium Braintree plugin from WooThemes.com? =

You'll need to go through the same installation process as everyone else. Luckily it's only a few clicks (no need to copy and paste API keys) so it should only take a minute.

Credit card tokens will not migrate. Your customers will have to reenter their CC details once. All  transactions made with the new plugin will let the user choose if they want their CC details saved (as tokens of course) so they don't have to reneter them every time.

= Can I use this extension just for PayPal and use another gateway for Credit Cards? =

You have to connect to PayPal through your Braintree account so it doesn't make a lot of sense to use this just for PayPal. But there's nothing stopping you from adding another gateway to accept credit cards.

= Where can I get support or talk to other users? =

If you get stuck, you can ask for help in the Plugin Forum.

= Will this plugin work with my theme? =

Yes, this plugin will work with any theme, but may require some styling to make it match nicely. Please see
our [codex](http://docs.woothemes.com/documentation/plugins/woocommerce/woocommerce-codex/) for help. If you're
looking for a theme with built in WooCommerce integration we recommend [Storefront](http://www.woothemes.com/storefront/).

= Where can I request new features or report bugs? =

New feature requests and bugs reports can be made in the plugin forum.

== Screenshots ==

1. Click the big button to connect, or the link to use sandbox mode.
2. The settings panel once connected.
3. Checkout with PayPal directly from the Cart.
4. Checkout with PayPal or Credit and Debit Cards.

== Changelog ==

= 1.2.4 =
* Fix - Free subscription trails not allowed.
* Fix - Subscription recurring billing after free trial not working.

= 1.2.3 =
* Fix - Handle uncaught exceptions thrown by Braintree SDK. API calls from SDK may throws exception, thus it need to be handled properly in try/catch block.
* Fix - Issue where deactivating WooCommerce might throws an error

= 1.2.2 =
* Tweak - Updated FAQ that emphasizes this plugin only works in the U.S. currently
* Fix - Updated JS SDK to 2.24.1 which should fixes issue where credit card fields working intermittently
* Tweak - Add filter on credit card icons
* Tweak - Provide default title for cards and PayPal account methods

= 1.2.1 =
* Fix - Issue where Subscriptions with free trial was not processed
* Fix - Missing "Change Payment" button in "My Subscriptions" section
* Tweak - Make enabled option default to 'yes'
* Tweak - Add adnmin notice to setup / connect after plugin is activated
* Fix - Consider more statuses (settling, submitted_for_settlement, settlement_pending) to mark order as in-processing
* Fix - Issue where settings section rendered twice

= 1.2.0 =
* Replace array initialization code that causes a fatal error on PHP 5.2 or earlier. PHP 5.4+ is still required, but this code prevented the compatibility check from running and displaying the version requirements
* Update to the latest Braintree SDK (3.8.0)
* Add authorize/capture feature, allowing delayed settlement
* Pre-fill certain merchant and store details when connecting
* Fix missing gateway title and transaction URL when order in-hold

= 1.1.0 =
* Fixed a bug which would cause the gateway settings to report that the gateway was enabled when it actually was not fully enabled.
* Updated contributors list

= 1.0.1 =
* Remove duplicate SSL warnings
* Update environment check to also check after activation for environment problems
* Fix link in enabled-but-not-connected notice

= 1.0.0 =
* Initial release

== Upgrade Notice ==

= 1.2.4 =
* Fix - Free subscription trails not allowed.
* Fix - Subscription recurring billing after free trial not working.
