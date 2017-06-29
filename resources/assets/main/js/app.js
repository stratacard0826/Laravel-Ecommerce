(function ($, root, undefined) {



	$(function () {


// For the simple custom JS functions

        $('body').on('click', '[data-toggle]', function(e){
            e.preventDefault();
            var $that = $(this);
            var $show = $that.data('toggle');
            var $hide = $that.data('hide');
            var $overlay = $that.data('overlay');

            if($overlay){
                $('.page-overlay').fadeToggle();
            }

            if($hide){
                $($hide).hide();
                $that.siblings().removeClass('active');
                $($show).fadeIn();
                $that.addClass('active');
            }else{
                $($show).fadeToggle();
                $that.toggleClass('active');
            }
            return false;
        });

        $('body').on('click', '[data-switch]', function(e){
            e.preventDefault();
            var $that = $(this);
            var $show = $that.data('switch');
            var $hide = $that.data('hide');

            $($hide).fadeOut(
                function(){
                    $($show).fadeIn();
                }
            );

            if(!$that.hasClass('active')){
                $that.addClass('active');
                $that.siblings().not($that).removeClass('active');
            }
            return false;
        });

        $('[data-slidein]').on('click', function(e){
            e.preventDefault();
            var $that = $(this);
            var $show = $that.data('slidein');
            var $hide = $that.data('hide');

            //if(!$that.hasClass('active')){
            //    console.log(33)

                $that.toggleClass('active');
                $($show).toggleClass('slid-in');
                if($hide){
                    $($hide).fadeToggle();
                }
                return true;

            //}else{
            //    console.log(22)
            //    $that.removeClass('active');
            //    $($show).removeClass('slid-in');
            //    if($hide){
            //        $($hide).fadeIn();
            //    }
            //    return true;
            //
            //}

        });


        $('body').on('click', '[data-click]', function(e){
            e.preventDefault();
            var $that = $(this);
            var $clickMe = $that.data('click');

            $($clickMe).click();

            return false;
        });

        $('body').on('click', '[data-showpass]', function(e){
            e.preventDefault();
            var $that = $(this);
            var $selector = $that.data('showpass');
            var $node = $($selector);

            if($node.attr('type') == 'password'){
                $($node).attr('type', 'text');
                $that.text('hide');
            }else if($node.attr('type') == 'text'){
                $($node).attr('type', 'password');
                $that.text('show');
            }
            return false;
        });

        $('body').on('click', '.search-toggle-button.desktop', function(e){
            e.preventDefault();
            var $show = $('.desktop-search-bar');

            if(!$show.hasClass('shown')){
                $(this).addClass('active');
                $show.show();
                $show.animate({
                    opacity: '1',
                    top: '50px',
                }, 600)
                $show.addClass('shown');
                $show.find('input').focus();
            }else{
                $(this).removeClass('active');

                $show.animate({
                    top: '35px',
                    opacity: 0,
                }, 200);
                $show.fadeOut();
                $show.removeClass('shown');
            }
        });

        $('body').on('click', '.search-toggle-button.mobile', function(e){
            e.preventDefault();
            $(this).toggleClass('active');
            $('.mobile-search-bar').toggleClass('on');
            $('.mobile-search-bar').find('input').focus();
            $('.category-menu').fadeToggle();
            //$('.category-menu' ).animate({
            //    opacity: 0,
            //}, 1000);
        });

        $('body').on('click', '.hide-search', function(e){
            var $show = $('.search-bar');

            $show.animate({
                top: '35px',
                opacity: 0,
            }, 200);
            $show.blur();
            $show.fadeOut();
            $show.removeClass('shown');
        });



        $(document).click(function(event) {
            if(!$(event.target).closest('.hide-on-out').length) {
                if($('.hide-on-out').is(":visible")) {
                    $('.hide-on-out').fadeOut();
                    $('[data-hideonout]').removeClass('active');
                }
            }
        })

        $('.page-overlay, .login-signup-modal').click(function(event){
            if(event.target !== this){ // only fire if the block itself is clicked, not it's children (sometimes we need to hide the modal when anything outside it's main block is clickced
                return;
            }

            $('.modal, .page-overlay').fadeOut();

            var $hide = $('[data-overlay="true"]').data('toggle');

            if($hide){
                $($hide).hide();
            }
        });

        $('body').on('mouseover', '.rsContent .hero-tags .tag', function(){
            var extraHeroTagsHTML = "<div class='hero-tags extra'></div>";
            if(!$('#hero .hero-tags.extra').length){
                $('#hero .rsOverflow').append(extraHeroTagsHTML);
            }
            $("#hero .rsOverflow .hero-tags.extra ").html($(this)[0].outerHTML);
            $("#hero .rsOverflow .hero-tags.extra a, #hero .rsOverflow .hero-tags.extra .hover-box").show();
        })
        $('body').on('mouseleave', '.hero-tags.extra .tag', function(){
            $("#hero .rsOverflow .hero-tags.extra a, #hero .rsOverflow .hero-tags.extra .hover-box").hide();
        })





        $("#back-to-top").click(function() {
            $('html, body').animate({ scrollTop: 0 }, 'slow');
            return false;
        });

        $('[data-scrollto]').click(function() {
            var $scrollNode = $(this).data('scrollto');
            var $scrollTo   = $($scrollNode);
            var $offset     = $scrollTo.offset().top - 70;

            $('html, body').animate({ scrollTop: $offset }, 'slow');
            return false;
        });

        $("li.nested").click(function() {
            $(this).find('ul').fadeToggle();
        });




        $('[data-toggle="modal"]').click(function() {
            var $modal = $(this).data('target');
            $($modal).fadeToggle();
            $('.page-overlay:not(.picture-overlay)').fadeToggle();
            if($($modal).hasClass('login-signup-modal')){
                $('.picture-overlay').show();
            }
        });

        $('[data-dismiss="modal"]').click(function() {
           var $modal = $(this).parents('.modal');
            $modal.fadeOut();
            $('.page-overlay').fadeOut();
            return true;
        });

        $('.desktop-view .shop-by-category-item a.show-menus, .desktop-view .shop-by-category-item a.hide-menus').click(function(e){
            e.preventDefault();
            $('.shop-by-category-item').removeClass('selected');
            $('.shop-by-category-submneu').removeClass('selected');
            
            if($(this).hasClass('show-menus')){
                $(this).parent().addClass('selected');
                var submenu = $(this).parent().data('submenu');
                $('.shop-by-category-submneu.' + submenu).addClass('selected');
            }
        })
        $('.desktop-view .shop-by-category-item').mouseover(function(e){
            $('.shop-by-category-item').removeClass('selected');
            $('.shop-by-category-submneu').removeClass('selected');
            
//            if($(this).find('a').hasClass('show-menus')){
                $(this).addClass('selected');
                var submenu = $(this).data('submenu');
                $('.shop-by-category-submneu.' + submenu).addClass('selected');
//            }
        });
        
        $('.show-and-hide-grandchild').click(function(){
            if($(this).parent().hasClass('selected')){
                $(".shop-by-category-submneu > div").removeClass('selected');
            }else{
                $(".shop-by-category-submneu > div").removeClass('selected');
                $(this).parent().addClass('selected');
            }
        })
        
        
        $('#mobile-shop-by-category-items').change(function(){
            $('.shop-by-category-submneu').removeClass('active');
            var submenu = $(this).val();
            $('.shop-by-category-submneu.' + submenu).addClass('active');
        })

        $('.notification-holder').click(function(){
            if($('.notification-popup').is(":visible")){
                $('.notification-popup').hide();
            }else{
                $('.notification-popup').show();
            }
        })

        $('#top-nav .profile-photo').click(function(){
            if($('.profilelinks-popup').is(":visible")){
                $('.profilelinks-popup').hide();
            }else{
                $('.profilelinks-popup').show();
            }
        })
        $("#top-nav .profilelinks-popup a").click(function(){
            $('.profilelinks-popup').hide();
        })

        $(".show-hero-category").click(function(e){
            e.preventDefault();
            if($(".hideen-hero-category-menu").is(":visible")){
                $(".hideen-hero-category-menu").hide();
            }else{
                $(".hideen-hero-category-menu").show();
            }
        })
        
        $(".hideen-hero-category-menu a").click(function(){
            $(".hideen-hero-category-menu").hide();
        })

        $("body").on('click', '.mobile-show', function(){
            if($(this).find('.p-show').is(":visible")){
                $(this).parent().addClass('hover');
                if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                $(this).parent().removeClass('un-hover');
                }                
                
                $(this).find('.p-show').hide();
                $(this).find('.p-close').show();
            }else{
                if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                $(this).parent().addClass('un-hover');
                }                
                $(this).parent().removeClass('hover');
                $(this).find('.p-show').show();
                $(this).find('.p-close').hide();
            }
        })

        $("body").on('click', '.show-and-hide', function(){
            if($(this).parent().hasClass('active')){
                $('.shop-by-category-item').removeClass('active');
            }else{
                $('.shop-by-category-item').removeClass('active');
                $(this).parent().addClass('active');
            }
        })

        // scroll and stick the share bar
        function sticky_relocate() {

            if(window.innerWidth < 620){
                if(!$('#mobile-sticky-anchor').length){
                    return false;
                }
                var div_top = $('#mobile-sticky-anchor').offset().top;
                var window_top = $(window).scrollTop();
                if (window_top > div_top) {
                    $('.ideas-sharing').fadeIn();
                } else {
                    $('.ideas-sharing').fadeOut();
                }
            }else{
                if(!$('#sticky-anchor').length){
                    return false;
                }

                var div_top = $('#sticky-anchor').offset().top;
                var window_top = $(window).scrollTop();
                if (window_top > div_top) {
                    $('.sticks-on-scroll').addClass('stick');
                } else {
                    $('.sticks-on-scroll').removeClass('stick');
                } 
            }

        }

        $(function () {
            if($('#sticky-anchor').length){
                $(window).scroll(sticky_relocate);
                sticky_relocate();
            }
        });

    //     Sticking headers
    //    $(function () {
    //        $(window).scroll(function(){
    //            if($('.scroll-header').length){
    //                if($(window).scrollTop() <= 700){
    //                    $('header.colophon').removeClass('scroll-header');
    //                }
    //            }
    //            else if(($(window).scrollTop() > 700)){
    //                $('header.colophon').addClass('scroll-header');
    //            }
    //
    //        });
    //    });

        $(function () {
            if(window.innerWidth < 620){
                return false;
            }
            var $showMe = $('.story-header');
            if($showMe.length){
                $(window).scroll(function(){
                    var window_top = $(window).scrollTop();
                    var div_top = $('#hero-nav').offset().top;
                    var $main_header = $('#top-nav');

                    if (window_top > div_top) {
                        $showMe.fadeIn();
                        $main_header.fadeOut();
                    } else {
                        $showMe.fadeOut();
                        $main_header.fadeIn();

                    }
                });
            }
        });

        $('.readmore').readmore({
            startOpen: false,
            collapsedHeight: 300,
            moreLink: '<a class="morelink" href="#">Read more</a>',
            lessLink: '<a class="morelink" href="#">Close</a>',
        });

        $(window).scroll(function() {

            var $currentPos = $(window).scrollTop() + $(window).height();

            var $triggerPoint = $(document).height() - 600; // roughly, the point where the first chunk of loaded content ends

            if($currentPos > $triggerPoint) { // if we are around that point, fire the Load More in the backgriund
                $('.bottom-load-more').click();
                $('.bottom-load-more').addClass('disabled').attr('disabled', true);
            }

            //if(window.innerWidth < 620){
            //    return false;
            //}

            var body = $('body');
            if(body.hasClass('home') || body.hasClass('room-landing')){
                var $percent = 0.4;
            }else{
                var $percent = 0.5;
            }

            if($('.bottom-block').is(':visible')){
                if($(window).scrollTop() + $(window).height() < $(document).height() * $percent) {
                    $('.bottom-block').fadeOut();
                }
            }else{
                if($(window).scrollTop() + $(window).height() > $(document).height() * $percent) {
                    $('.bottom-block').fadeIn();
                }
            }

            if(window.innerWidth < 620){
                if($('.mobile-sharing').is(':visible')){
                    if($(window).scrollTop() + $(window).height() < $(document).height() * 0.1) {
                        $('.mobile-sharing').fadeOut();
                    }
                }else{
                    if($(window).scrollTop() + $(window).height() > $(document).height() * 0.1) {
                        $('.mobile-sharing').fadeIn();
                    }
                }
                //
                //if($('.subscribe_email_popup').length){
                //    var offset = $(window).scrollTop() + 40;
                //    $('.subscribe_email_popup').css('top', offset);
                //}
            }

        });

            if(window.innerWidth < 620) {
                $('a.signin').click(function () {
                    setTimeout(function(){
                        if( $('#myModal.login-signup-modal').is(':visible')){
                            var modalHeight = $('#myModal.login-signup-modal > div').height();

                            $('body').css('max-height', (modalHeight + 100) + 'px');
                            $('body').css('overflow', 'hidden');
                        }else{
                            $('body').css('max-height', 'none');
                            $('body').css('overflow', 'auto');
                        }
                    }, 500)

                });

                $('.login-signup-modal .close-modal').click(function(){
                    $('body').css('max-height', 'none');
                    $('body').css('overflow', 'auto');
                });
            }



            $('html, body').on('touchmove', function(e){
            // To prevent jerking on iphone when focusing modal fields, we make modal absolute (in public.common) and then prevent native touch activity like scrolling when newsletter modal is up
            if($('.subscribe_email_popup').length){
                e.preventDefault();
            }

        });

        $('.home-hamburger').click(function(){
            $('body').toggleClass('has-active-menu');
        });
        $('.slide-back').click(function(){
            $('body').removeClass('has-active-menu');
        });

        // Hamburger menu animation
        (function() {
            /* In animations (to close icon) */

            if (!$('#menu-icon-wrapper').length){
                return;
            }

            var beginAC = 80,
                endAC = 320,
                beginB = 80,
                endB = 320;

            function inAC(s) {
                s.draw('80% - 240', '80%', 0.3, {
                    delay: 0.1,
                    callback: function() {
                        inAC2(s)
                    }
                });
            }

            function inAC2(s) {
                s.draw('100% - 545', '100% - 305', 0.6, {
                    easing: ease.ease('elastic-out', 1, 0.3)
                });
            }

            function inB(s) {
                s.draw(beginB - 60, endB + 60, 0.1, {
                    callback: function() {
                        inB2(s)
                    }
                });
            }

            function inB2(s) {
                s.draw(beginB + 120, endB - 120, 0.3, {
                    easing: ease.ease('bounce-out', 1, 0.3)
                });
            }

            /* Out animations (to burger icon) */

            function outAC(s) {
                s.draw('90% - 240', '90%', 0.1, {
                    easing: ease.ease('elastic-in', 1, 0.3),
                    callback: function() {
                        outAC2(s)
                    }
                });
            }

            function outAC2(s) {
                s.draw('20% - 240', '20%', 0.3, {
                    callback: function() {
                        outAC3(s)
                    }
                });
            }

            function outAC3(s) {
                s.draw(beginAC, endAC, 0.7, {
                    easing: ease.ease('elastic-out', 1, 0.3)
                });
            }

            function outB(s) {
                s.draw(beginB, endB, 0.7, {
                    delay: 0.1,
                    easing: ease.ease('elastic-out', 2, 0.4)
                });
            }

            /* Awesome burger default */

            var pathA = document.getElementById('pathA'),
                pathB = document.getElementById('pathB'),
                pathC = document.getElementById('pathC'),
                segmentA = new Segment(pathA, beginAC, endAC),
                segmentB = new Segment(pathB, beginB, endB),
                segmentC = new Segment(pathC, beginAC, endAC),
                trigger = document.getElementById('menu-icon-trigger'),
                toCloseIcon = true,
                dummy = document.getElementById('dummy'),
                wrapper = document.getElementById('menu-icon-wrapper');

                wrapper.style.visibility = 'visible';

                trigger.onclick = function() {
                    if (toCloseIcon) {
                        inAC(segmentA);
                        inB(segmentB);
                        inAC(segmentC);

                        dummy.className = 'dummy slide-menu dummy--active';
                    } else {
                        outAC(segmentA);
                        outB(segmentB);
                        outAC(segmentC);

                        dummy.className = 'dummy  slide-menu';
                    }
                    toCloseIcon = !toCloseIcon;
                };


        })();

        var body = $('body');
        if(body.hasClass('home') || body.hasClass('room-landing')){
            var $percent = 0.5;
        }else{
            var $percent = 0.6;
        }

        $(window).scroll(function() {
            //var scroll = getCurrentScroll();
            //if ( scroll >= shrinkHeader ) {
            //    $('.mobile-sharing').addClass('shrink');
            //}
            //else {
            //    $('.mobile-sharing').removeClass('shrink');
            //}

            if(window.innerWidth < 620){ // add the shrink class to header when scrolling, remove it when scrolling is stopped
                $('#top-nav, .mobile-sharing').addClass('shrink');

                clearTimeout($.data(this, 'scrollTimer'));
                $.data(this, 'scrollTimer', setTimeout(function() {
                    $('#top-nav, .mobile-sharing').removeClass('shrink');
                }, 250));
            }

        });
        function getCurrentScroll() {
            return window.pageYOffset || document.documentElement.scrollTop;
        }


        $(document).ready(function(){
            setTimeout(function(){
                $('.hero-login').slideDown();
                $('.login-wrap').fadeIn('slow');
            }, 7000)

            if(!$('body').hasClass('.giveaway-page')){
                setTimeout(function(){
                    $('#giveaway-popup').fadeIn('slow');
                }, 30000)
            }

            setInterval(function(){
                    $('.red-logo')
                        .animate({
                            opacity: 1,
                        }, 1000, function() {
                        })
                        .delay(2000)
                        .animate({
                            opacity: 0,
                        }, 1000, function() {
                        })
            }, 20000);
        });



	}); // global function()

    (function(Giveaway, $, undefined) {
        Giveaway.startCountDown = function(duration, display) {
            var timer = duration, days, hours, minutes, seconds;
            setInterval(function () {
                // get total seconds between the times
                var delta = timer;
                // calculate (and subtract) whole days
                var days = Math.floor(delta / 86400);
                delta -= days * 86400;
                // calculate (and subtract) whole hours
                var hours = Math.floor(delta / 3600) % 24;
                delta -= hours * 3600;
                // calculate (and subtract) whole minutes
                var minutes = Math.floor(delta / 60) % 60;
                delta -= minutes * 60;
                // what's left is seconds
                var seconds = delta % 60;  // in theory the modulus is not required

                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                display.text(days + ' days, ' + hours + ' hours, ' + minutes + ' minutes and ' + seconds + ' seconds');

                if (--timer < 0) {
                    timer = duration;
                }
            }, 1000);
        }

        Giveaway.fireSlider = function () {
            $('.giveaway-slider-content ').royalSlider({
                arrowsNav: true,
                loop: false,
                keyboardNavEnabled: true,
                controlsInside: true,
                imageScaleMode: 'fit',
                arrowsNavAutoHide: false,
                navigateByClick: false,
                autoPlay: false,
                transitionType: 'move',
                globalCaption: false,
                deeplinking: {
                    enabled: true,
                    change: false
                },
                /* size of all images http://help.dimsemenov.com/kb/royalslider-jquery-plugin-faq/adding-width-and-height-properties-to-images */
                imgWidth: "100%",
                imageScaleMode: "fill",
                visibleNearby: {
                    enabled: true,
                    centerArea: 0.25,
                    center: false,
                    breakpoint: 620,
                    breakpointCenterArea: 0.9,
                }
            });
        }

    }( window.Giveaway = window.Giveaway || {}, jQuery ));

    if(window.innerWidth < 1070){ // mobile only
        $(window).scroll(function(){
            $('.homepage-grid .box-item, .related-items  .product-box').each(function(){
                var that = $(this);
                var imgTop = that.offset().top + 450;
                var imgBottom = imgTop + that.height() + 350;
                var window_top = $(window).scrollTop() + $(window).height();
                if (window_top > imgTop && window_top < imgBottom) { // we have scrolled over the element
                    that.addClass('hovered');
                }else if(that.hasClass('hovered')){
                    that.removeClass('hovered');
                }
            });
        });
    }


    $(document).ready(function(){ // add Get It Button overlay on images that link to vendors
        $('.article-content').find('img').each(function(){
            if(!$(this).parents('.get-it-inner').length){
                var theLinkNode = $(this).parent('a');
                theLinkNode.attr('target', '_blank').wrap('<div class="get-it-inner"></div>');
                var strong = theLinkNode.parents('.thumb-box').find('strong a');
                var text = strong.text();

                if(text.indexOf('$') == -1){ // price is not hardcoded into the name
                    var href =  theLinkNode.attr('href');
                    postData = false;

                    if(href && href.indexOf('/open/') > -1 && href.indexOf('/idea/') == -1){
                        productID = href.replace(/\D/g,'');
                        postData = {'id': productID};

                    }else if(href && href.indexOf('/product/') > -1){
                        productURL = href.substr(href.lastIndexOf('/') + 1);
                        postData = {'url': productURL};
                    }

                    if(postData){
                        $.post( "/api/product/get-for-thumb", postData)
                            .success(function( postResp ) {
                                var getItNode = theLinkNode.parents('.get-it-inner');
                                getItNode.append('<span class="merchant-widget__price">$'+ Math.round(postResp.sale_price) +'</span>');
                                getItNode.append('<div class="merchant-widget__logo trans-all"><span class="white">from <img class="vendor-logo img-responsive merchant-widget__store" src="' + postResp.storeLogo + '"></span></div>');
                                var width = getItNode.width();
                                if(width < 320){
                                    getItNode.addClass('smallish');
                                }
                            });
                    }
                }
            }
            if($(this).parents('p').next('p').find('a.vendor-link').length){
                $(this).parents('p').each(function(){
                    $(this).next('p').andSelf().wrapAll('<div class="thumb-box"></div>');
                });
            }else if($(this).parents('p').find('a.vendor-link').length){
                $(this).parents('.get-it-inner').each(function(){
                    $(this).parents('p').find('a.vendor-link').andSelf().wrapAll('<div class="thumb-box"></div>');
                });
            }
        });

        $('.thumb-box').each(function(){
            if(!$(this).parents('.float-thumbs').length){
                $(this).next('.thumb-box').andSelf().wrapAll('<div class="float-thumbs"></div>');
            }
        });

    });

    if(window.innerWidth < 1070){ // mobile only
        jQuery(window).scroll(function(){
            jQuery('.article-content .get-it-inner').each(function(){
                var that = $(this);
                var imgTop = that.offset().top + 450;
                var imgBottom = imgTop + that.height() + 350;
                var window_top = $(window).scrollTop() + $(window).height();
                if (window_top > imgTop && window_top < imgBottom) { // we have scrolled over the element
                    that.addClass('hovered');
                }else if(that.hasClass('hovered')){
                    that.removeClass('hovered');
                }
            });
        });
    }

    function showImages(el) {
        var windowHeight = jQuery( window ).height();
        jQuery(el).each(function(){
            var thisPos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (topOfWindow + windowHeight - 200 > thisPos ) {
                $(this).addClass("fadeIn");
            }
        });
    }

    // if the image in the window of browser when the page is loaded, show that image
    jQuery(document).ready(function(){
        showImages('.article-content img');
    });

    // if the image in the window of browser when scrolling the page, show that image
    jQuery(window).scroll(function() {
        showImages('.article-content img');
    });




})(jQuery, this);

