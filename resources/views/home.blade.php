@extends('layouts.main')

@section('body-class'){{ 'homepage' }}@stop

@section('content')
    <?php
    if(!function_exists('is_single')){
        echo  '<h1 id="site-name">Ideaing</h1>
              <h2 id="site-subhead" class="hidden">Ideas for Smarter Living</h2>';
    }
    ?>
    <div class="hero-wrap">
        <section id="hero" class="landing-hero">
            @include('layouts.parts.hero-slider')
        </section>
            @if(empty($userData['email']))
                @if(isset($homehero))
                <section class="hero-login hidden-soft">
                    @include('layouts.parts.hero-login')
                </section>
            @endif
            @endif
    </div>

    <div class="app-wrap" id="pagingApp" ng-app="pagingApp" ng-controller="pagingController" ng-cloak>
        <section id="hero" class="landing-hero col-lg-12" ng-init="loadReadContent(false)">
            @include('layouts.parts.home-hero-slider')
        </section>

        <div class="white-bg mostpop-wrap col-xs-12">
            <div class="homepage-grid center-block">
                <h4 class="col-xs-12 home-subheader"><span>Popular <i class="m-icon m-icon--flame pink"></i></span></h4>
                <section class="most-popular-new container no-padding">
                    <div class="col-sm-4 col-xs-12 popular-section category-smart-home">
                        <h5 class="category-link__smart-home  category-color">
                            <i class="hidden-xs hidden-sm m-icon m-icon--smart-home"></i>
                            <span class="m-icon-text text-uppercase">Smart Home</span>
                        </h5>
                        @if(isset($mostPopular->smart_home))
                            <?php
                            $item = $mostPopular->smart_home[0];
                            $lesserItems = array_slice($mostPopular->smart_home, 1);
                            ?>

                            @include('most-popular.thumb')

                            <div class="popular-wrap">
                                @foreach($lesserItems as $item)
                                    @include('most-popular.thumb')
                                @endforeach
                            </div>
                        @endif
                    </div>
                    <div class="col-sm-4 col-xs-12 popular-section category-smart-body">
                        <h5 class="category-link__smart-body m-icon-text-holder">
                            <i class="hidden-xs hidden-sm m-icon m-icon--wearables"></i>
                            <span class="m-icon-text text-uppercase">Smart Body</span>
                        </h5>
                                @if(isset($mostPopular->smart_body))
                                <?php
                                    $item = $mostPopular->smart_body[0];
                                    $lesserItems = array_slice($mostPopular->smart_body, 1);
                                 ?>

                                    @include('most-popular.thumb')

                                    <div class="popular-wrap">
                                        @foreach($lesserItems as $item)
                                            @include('most-popular.thumb')
                                        @endforeach
                                    </div>
                                @endif
                    </div>

                    <div class="col-sm-4 col-xs-12 popular-section category-smart-entertainment">
                        <h5 class="category-link__smart-entertainment m-icon-text-holder">
                            <i class="hidden-xs hidden-sm m-icon m-icon--video"></i>
                            <span class="m-icon-text text-uppercase">Smart Entertainment</span>
                        </h5>
                        @if(isset($mostPopular->smart_entertainment))
                            <?php
                            $item = $mostPopular->smart_entertainment[0];
                            $lesserItems = array_slice($mostPopular->smart_entertainment, 1);
                            ?>

                            @include('most-popular.thumb')

                            <div class="popular-wrap">
                                @foreach($lesserItems as $item)
                                    @include('most-popular.thumb')
                                @endforeach
                            </div>
                        @endif
                    </div>
                </section>
            </div>
        </div>

        <div class="col-xs-12 center-block overhide center-wrap">
            <div class="homepage-grid center-block main-grid latest">
                @include('grid.grid')

                @include('layouts.parts.product-popup')
            </div>
        </div>


    @include('layouts.parts.giveaway-popup')

    <script>
        function showImages(el) {
            var windowHeight = jQuery( window ).height();
            $(el).each(function(){
                var thisPos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (topOfWindow + windowHeight - 200 > thisPos ) {
                    $(this).addClass("fadeIn");
                }
            });
        }

        // if the image in the window of browser when the page is loaded, show that image
        $(document).ready(function(){
            $('.grid-wrap').show();
        });

        // if the image in the window of browser when scrolling the page, show that image
        $(window).scroll(function() {
            showImages('.grid-wrap');
        });
    </script>

@stop