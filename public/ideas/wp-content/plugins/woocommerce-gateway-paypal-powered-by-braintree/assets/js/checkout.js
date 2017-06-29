jQuery( document ).ready( function( $ ) {

	var states = {
		NOTLOADED: 'NOTLOADED',
		LOADING: 'LOADING',
		LOADED: 'LOADED',
		UNLOADING: 'UNLOADING'
	};

	var methods = {
		PAYPAL: 'payment_method_paypalbraintree_paypal',
		CARDS: 'payment_method_paypalbraintree_cards'
	};

	var state = states.NOTLOADED;
	var selectedMethod = false;
	var loadingMethod = false;
	var loadedMethod = false;

	var integrationRef = false;
	var checkoutForm = false;
	var paymentDiv = false;

	function onReady( integration ) {
		integrationRef = integration;
		loadedMethod = loadingMethod;
		loadingMethod = false;

		paymentDiv.addClass( 'wc_paypalbraintree_loaded' );
		state = states.LOADED;

		checkoutForm.on( 'checkout_place_order.braintree', onCheckoutPlaceOrder );
	};

	function onPaymentMethodReceived( response ) {
		if ( response.nonce ) {
			$( '#paypalbraintree_nonce' ).val( response.nonce );
			checkoutForm.trigger( 'submit' );
		}
	};

	function onError( response ) {
		var message = response;
		if ( response && response.message ) {
			message = response.message;
		}

		console.log( 'WooCommerce: PayPal Powered by Braintree: an error occurred:', message );
	};

	function onCheckoutPlaceOrder() {
		// If neither PayPal nor Cards are selected, go ahead and let it submit (return true)
		if ( ! selectedMethod ) {
			return true;
		}

		// If we have a nonce, go ahead and let it submit (return true)
		var nonceEl = jQuery( "#paypalbraintree_nonce" );
		if ( 0 !== nonceEl.length ) {
			var nonceValue = nonceEl.val();
			if ( 0 !== nonceValue.length ) {
				return true;
			}
		}

		// No nonce yet?  If we are in PayPal mode, do initAuthFlow
		if ( 'PAYPAL' === selectedMethod ) {
			if ( integrationRef && integrationRef.paypal ) {
				integrationRef.paypal.initAuthFlow();
			}
		}

		return false;
	}

	// Load the headless PayPal integration

	function loadPayPalMethod() {
		state = states.LOADING;
		loadingMethod = 'PAYPAL';

		braintree.setup( paypalBraintreeData.token, "custom", {
			paypal: {
				headless: true,
				paymentMethodNonceInputField: "paypalbraintree_nonce",
				singleUse: paypalBraintreeData.checkoutWithPayPal.singleUse,
				amount: paypalBraintreeData.checkoutWithPayPal.amount,
				currency: paypalBraintreeData.checkoutWithPayPal.currency
			},
			onReady: onReady,
			onError: onError,
			onPaymentMethodReceived: onPaymentMethodReceived
		} );
	};

	// Load the hosted fields integration

	function loadCardsMethod() {
		state = states.LOADING;
		loadingMethod = 'CARDS';

		var checkoutFormID = checkoutForm.attr( 'id' );
		if ( ! checkoutFormID ) {
			checkoutFormID = 'woocommerce-checkout-form';
			checkoutForm.attr( 'id', checkoutFormID );
		}

		braintree.setup( paypalBraintreeData.token, "custom", {
			id: checkoutFormID,
			hostedFields: paypalBraintreeData.hostedFields,
			onReady: onReady,
			onError: onError,
			onPaymentMethodReceived: onPaymentMethodReceived
		} );
	};

	// Tear down a previously loaded method

	function unloadMethod() {
		state = states.UNLOADING;

		// Remove submit interceptor
		jQuery( 'form.checkout' ).off( 'checkout_place_order.braintree' );

		if ( integrationRef ) {
			integrationRef.teardown( function() {
				integrationRef = null;
				state = states.NOTLOADED;
				loadedMethod = false;
			} );
		} else {
			state = states.NOTLOADED;
			loadedMethod = false;
		}
	};


	// Since the user may select different payment options at any time, and
	// since the form can completely re-render at any time, we need to periodically
	// check and make sure the selected method is properly loaded, as well
	// as manage teardown of methods when they are no longer selected or
	// when the form has re-rendered on us.

	function checkSetup() {

		// In the middle of loading or unloading something? Just return.
		if ( state === states.LOADING || state === states.UNLOADING ) {
			
			// If we're waiting for onReady to fire, return.  Otherwise, reset state in 
			// order to attempt Braintree.setup again.  
			if ( 0 != jQuery( '#wc-paypal-braintree-cvv' ).children().length ) {
				return;
			} else {
				state = states.NOTLOADED;
			}
		}

		// Are key things missing? Just return.
		if ( 'undefined' === typeof braintree || 'undefined' === typeof paypalBraintreeData || 'undefined' === typeof paypalBraintreeData.token ) {
			return;
		}

		// No checkout form?  Just return.
		checkoutForm = jQuery( 'form.checkout, form#order_review, form#add_payment_method' );
		if ( ! checkoutForm.length ) {
			return;
		}

		// No payment div?  Just return.
		paymentDiv = jQuery( '#payment' );
		if ( ! paymentDiv.length ) {
			return;
		}

		// Make sure the checkout form has a nonce field,
		// add it if necessary
		if ( 0 === jQuery( "#paypalbraintree_nonce" ).length ) {
			checkoutForm.append( "<input type='hidden' name='paypalbraintree_nonce' id='paypalbraintree_nonce' />" );
		}

		// What payment method radiobutton is presently checked
		selectedMethod = false;
		for ( var method in methods ) {
			if ( 0 != $( '#' + methods[method] + ':checked' ).length ) {
				selectedMethod = method;
			}
		}

		// Useful for debugging:
		// console.log( 'state =', state );
		// console.log( 'selectedMethod =', selectedMethod );
		// console.log( 'loadedMethod =', loadedMethod );

		if ( state === states.NOTLOADED ) {
			if ( 'PAYPAL' === selectedMethod ) {
				loadPayPalMethod();
				return;
			}

			if ( 'CARDS' === selectedMethod ) {
				loadCardsMethod();
				return;
			}

			return;
		}

		if ( state === states.LOADED ) {
			// Nothing checked anymore?  Start unloading
			if ( ! selectedMethod ) {
				unloadMethod();
				return;
			}

			// Is what's loaded not the same as what's checked? Start unloading (so we can reload).
			if ( selectedMethod !== loadedMethod ) {
				unloadMethod();
				return;
			}

			// Does it look like the form got re-rendered on us?  Start unloading (so we can reload).
			if ( ! paymentDiv.hasClass( 'wc_paypalbraintree_loaded' ) ) {
				
				// Check if last field is loaded from previous Braintree setup.  
				// onReady can take some time to fire causing Braintree to attempt setup 
				// again after a previous successful setup.  No need to unload.
				if ( 0 != jQuery( '#wc-paypal-braintree-cvv' ).children().length ) {
					state = states.LOADED;
					return;
				}

				unloadMethod();
				return;
			}
		}
	};

	setInterval( checkSetup, 250 );

} );
