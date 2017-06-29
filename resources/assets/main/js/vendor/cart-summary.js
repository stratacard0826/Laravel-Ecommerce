( function( $ ) {

  'use strict';

  function ideaingCartSummay(){

    this.isCart = function(){
      return typeof wc_cart_params === 'undefined' ? false : true;
    }

    this.isCheckout = function(){
      return typeof wc_checkout_params === 'undefined' ? false : true;
    }

    this.isVisible = function(){
      return $( document.body ).hasClass('ics--active');
    }

    this.init();
  }

  ideaingCartSummay.prototype.trigger = function( el, event, options ){

    if (window.CustomEvent) {
      var e = new CustomEvent(event, {detail: options});
    } else {
      var e = document.createEvent('CustomEvent');
      e.initCustomEvent(event, true, true, options);
    }

    el.dispatchEvent(e);
  };

  ideaingCartSummay.prototype.init = function () {

    var self = this;

    if ( self.isCheckout() || self.isCart() ) return;

    $( document ).on('click', '.ics--toggle', function(){
      self.toggle();
    });

    $( document ).on('click', '.ics--open', function(){
      self.open();
    });

    $( document ).on('click', '.ics--close', function(){
      self.close();
    });

    $( document ).on('keyup', function(e){
      if ( 27 === e.keyCode ) self.close();
    });

    document.body.addEventListener('added_to_cart', function(e){

      self.update(e.detail, 'open');
    }, false)

    setTimeout(function(){ self.build(); }, 0 );
  };

  ideaingCartSummay.prototype.build = function () {

    var self = this;

    self.template = [
      '<div class="ics--close overlay"></div>',
      '<aside>',
        '<header>',
          '<div class="row">',
            '<div class="col-xs-4">',
              '<button class="ics--close"><i class="m-icon--arrow_forward"></i></button>',
            '</div>', // .col-*
            '<div class="col-xs-4">',
              '<strong>Cart</strong>',
            '</div>', // .col-*
            '<div class="col-xs-4 u--i">',
              '<span class="u--c">',
                '<span class="m-icon--shopping-bag-light-green"></span>',
            '</div>', // .col-*
          '</div>', // .row
        '</header>',
        '<div class="loader">',
          '<div>',
            '<div class="loader">',
              '<ul class="bokeh">',
                '<li></li>',
                '<li></li>',
                '<li></li>',
                '<li></li>',
              '</ul>',
            '</div>',
          '</div>',
        '</div>',
      '</aside>'
    ].join('');

    self.element = document.createElement('div');
    self.element.id = 'ideaing-g-cart-summary';
    self.element.className = 'global-cart-summary';
    self.element.innerHTML = self.template;

    document.body.appendChild(self.element);

    self.firstContent();
  };

  ideaingCartSummay.prototype.open = function () {

    var self = this;

    if ( self.switching ) return;

    self.switching = true;

    $( document.body ).addClass('ics--active');

    setTimeout(function(){

      $( document.body ).addClass('ics--on');

      self.switching = false;

      self.trigger(document.body, 'cart_summary_opened', self.element);

    }, 20 );
  };

  ideaingCartSummay.prototype.close = function () {

    var self = this;

    if ( self.switching ) return;

    self.switching = true;

    $( document.body ).addClass('ics--off');

    setTimeout(function(){

      $( document.body ).removeClass('ics--on ics--off ics--active');

      self.switching = false;

      self.trigger(document.body, 'cart_summary_closed', self.element);

    }, 400 );
  };

  ideaingCartSummay.prototype.toggle = function () {

    this.isVisible() ? this.close() : this.open();
  };

  ideaingCartSummay.prototype.firstContent = function () {

    var self = this;

    $.ajax({
      type: "POST",
      dataType: "json",
      url: '/ideas/wp-admin/admin-ajax.php',
      data: {
        action: 'global_cart_summary_fragments',
      },
      success: function( response ){

        console.log(self.cart, response);

        if ( undefined == self.cart ) self.update(response);

      },
      error: function (xhr, ajaxOptions, thrownError) {
        console.warn(thrownError);
      }
    });
  };

  ideaingCartSummay.prototype.update = function (response, callback) {

    var self = this,
        fragments = response.fragments || false;

    if ( !fragments ) return;

    self.cart = {
      total: fragments['.cart-count'] || '',
      html: fragments['.global-cart-summary'] || self.template
    };

    $('.cart-count').text(self.cart.total);
    $( self.element ).find('aside').html(self.cart.html);

    if ( self.cart.total ){
      $('body').addClass('has-in-cart');
      callback ? self[callback]() : '';
    } else {
      $('body').removeClass('has-in-cart');
    }
  };

  $(document).ready(function(){

    try {

      new ideaingCartSummay();

    } catch (e) {

      console.error(e);
    }
  });

} )( jQuery );
