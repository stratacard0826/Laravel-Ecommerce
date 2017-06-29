( function( $ ) {

  'use strict';

  function ideaingAddToBag(){

    this.init();
  }

  ideaingAddToBag.prototype.trigger = function( el, event, options ){

    if (window.CustomEvent) {
      var e = new CustomEvent(event, {detail: options});
    } else {
      var e = document.createEvent('CustomEvent');
      e.initCustomEvent(event, true, true, options);
    }

    el.dispatchEvent(e);
  };

  ideaingAddToBag.prototype.init = function () {

    var self = this;

    $( document ).on('click', '.add-to-bag', function(e){

      e.preventDefault();

      self.add($(this));
    });
  };

  ideaingAddToBag.prototype.add = function ($thisbutton) {

    var self = this;

    if ( ! $thisbutton.attr( 'data-product_id' ) || $thisbutton.hasClass('loading') ) {
      return true;
    }

    $thisbutton.addClass( 'loading' );

    var data = {};

    $.each( $thisbutton.data(), function( key, value ) {
      data[key] = value;
    });

    $.post( '/ideas/shop?wc-ajax=add_to_cart', data, function( response ) {

      $thisbutton.removeClass( 'loading' );

      if ( response && ! response.error ) {

        self.trigger(document.body, 'added_to_cart', response);

      } else {

        console.warn(response);
      }
    });
  };

  $(document).ready(function(){

    try {

      new ideaingAddToBag();

    } catch (e) {

      console.error(e);
    }
  });

} )( jQuery );
