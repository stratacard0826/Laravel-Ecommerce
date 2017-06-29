// globals jQuery, paypalBraintreeData, braintree
jQuery( document ).ready( function( $ ) {

	var integrationRef = null,
		rendering = false, // state during braintree setup
		container = paypalBraintreeData.checkoutWithPayPalContainer; // shortcut

	function onPaymentMethodReceived( paymentData ) {
		$( 'body' ).block( {
			message: null,
			overlayCSS: {
				background: '#fff',
				opacity: 0.6
			}
		} );

		$.ajax( {
			type: 'POST',
			url: paypalBraintreeData.checkoutWithPayPal.detailsPostbackURL,
			data: paymentData,
			dataType: "json"
		} ).done( function( responseData ) {
			if ( 'undefined' !== typeof responseData.success && responseData.success ) {
				if ( 'undefined' !== typeof responseData.redirectTo ) {
					window.location = responseData.redirectTo;
				}
			}
		} );
	}

	function onReady( integration ) {
		integrationRef = integration;
		rendering = false;
	};

	function init() {
		if ( 'undefined' === typeof braintree ) {
			return;
		}

		if ( 'undefined' === typeof paypalBraintreeData || 'undefined' === typeof paypalBraintreeData.token || 'undefined' === typeof paypalBraintreeData.checkoutWithPayPal ) {
			return;
		}

		if ( ! paypalBraintreeData.checkoutWithPayPal ) {
			return;
		}

		if ( 0 === $( '#' + container ).length ) {
			return;
		}

		renderButton();

		// Currently there's no one global event that triggered when cart is
		// udpated, so need to register callback to two events and avoid possible
		// conflict with flag `rendering`.
		$( document.body ).on( 'updated_wc_div', onCartUpdated );
		$( document.body ).on( 'updated_cart_totals', onCartUpdated );
	}

	function renderButton() {
		var setupArgs = {
			paypal : {
				container: container,
				singleUse: true, // cart checkout must always be single use
				amount: paypalBraintreeData.checkoutWithPayPal.amount,
				currency: paypalBraintreeData.checkoutWithPayPal.currency
			},
			onReady: onReady,
			onPaymentMethodReceived: onPaymentMethodReceived
		};

		rendering = true;
		braintree.setup( paypalBraintreeData.token, "custom", setupArgs );
	}

	function onCartUpdated() {
		// A call to setup already made.
		if ( rendering ) {
			return;
		}

		if ( ! integrationRef ) {
			return;
		}

		// Teardown old reference.
		if ( integrationRef && 'function' === typeof integrationRef.teardown ) {
			integrationRef.teardown( function() {
				integrationRef = null;
			} );
		}

		// Update amount and currency from updated data after cart is udpated.
		paypalBraintreeData.checkoutWithPayPal.amount = $( '#' + container ).data( 'amount' );
		paypalBraintreeData.checkoutWithPayPal.currency = $( '#' + container ).data( 'currency' );

		// Rerender the button.
		renderButton();
	}

	init();

} );
