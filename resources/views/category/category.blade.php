@extends('layouts.main')

@section('body-class'){{ 'homepage category' }}@stop

@section('content')
    <?php
    if(!function_exists('is_single')){
        echo  '<h1 id="site-name">Ideaing</h1>
              <h2 id="site-subhead" class="hidden">Ideas for Smarter Living</h2>';
    }
    ?>

    <div class="app-wrap category-@{{ideaCategory}}" id="pagingApp" ng-app="pagingApp" ng-controller="pagingController" ng-cloak>
        <section id="hero" class="landing-hero col-lg-12" ng-init="initGrid('{{$thisCategory}}')">
            @include('layouts.parts.home-hero-slider')
        </section>

        
        <div class="mostpop-wrap col-xs-12">
            <div class="container no-padding heading-wrap">
                <h4 class="home-subheader trending text-center">Trending <i class="m-icon m-icon--flame black"></i></h4>
                <div class="col-xs-12 no-padding">
                    <h6 class="home-subheader switcher text-center center-block no-padding">
                        <div class="guide-switch col-xs-6 no-padding swing-lined category-color active" data-toggle=".popular-ideas" data-hide=".popular-products" data-hide=".popular-products"><div>Guides</div></div>
                        <div class="product-switch col-xs-6 no-padding swing-lined category-color" data-toggle=".popular-products" data-hide=".popular-ideas"><div >Products</div></div>
                    </h6>
                </div>
            </div>

            <div class="homepage-grid center-block">
                <div class="loader loader-abs" cg-busy="firstLoad"></div>
                <div class="popular-box">
                    <section ng-if="ideaCategory == 'default'" class="most-popular-new popular-ideas col-xs-12">
                        <div class="col-sm-3 col-xs-12 popular-section category-smart-home">
                                <div ng-repeat="item in readContent.mostPopular.ideas['smart-home']">
                                    @include('most-popular.single-thumb')
                                </div>
                        </div>
                        <div class="col-sm-3 col-xs-12 popular-section category-smart-entertainment">
                                 <div ng-repeat="item in readContent.mostPopular.ideas['smart-entertainment']">
                                    @include('most-popular.single-thumb')
                                </div>
                        </div>
                        <div class="col-sm-3 col-xs-12 popular-section category-smart-body">
                            <div ng-repeat="item in readContent.mostPopular.ideas['smart-body']">
                                @include('most-popular.single-thumb')
                            </div>

                        </div>
                        <div class="col-sm-3 col-xs-12 popular-section category-smart-travel">
                             <div ng-repeat="item in readContent.mostPopular.ideas['smart-travel']">
                                @include('most-popular.single-thumb')
                            </div>
                        </div>
                    </section>

                    <section ng-if="ideaCategory == 'default'" class="most-popular-new popular-products hidden-soft container">
                        <div class="col-sm-3 col-xs-12 popular-section category-smart-home">
                                <div ng-repeat="item in readContent.mostPopular.products['smart-home']">
                                    @include('most-popular.single-thumb')
                                </div>
                        </div>
                        <div class="col-sm-3 col-xs-12 popular-section category-smart-entertainment">
                                 <div ng-repeat="item in readContent.mostPopular.products['smart-entertainment']">
                                    @include('most-popular.single-thumb')
                                </div>
                        </div>
                        <div class="col-sm-3 col-xs-12 popular-section category-smart-body">
                            <div ng-repeat="item in readContent.mostPopular.products['smart-body']">
                                @include('most-popular.single-thumb')
                            </div>

                        </div>
                        <div class="col-sm-3 col-xs-12 popular-section category-smart-travel">
                             <div ng-repeat="item in readContent.mostPopular.products['smart-travel']">
                                @include('most-popular.single-thumb')
                            </div>
                        </div>
                    </section>

                    <section ng-if="ideaCategory != 'default'" class="most-popular-new popular-ideas col-xs-12">
                        <div class="col-sm-3 col-xs-12 popular-section category-@{{ideaCategory}}" ng-repeat="item in readContent['mostPopular']['ideas'][ideaCategory]" >
                            @include('most-popular.single-thumb')
                        </div>
                    </section>

                    <section ng-if="ideaCategory != 'default'" class="most-popular-new  popular-products col-xs-12 hidden-soft">
                            <div class="col-sm-3 col-xs-12 popular-section category-@{{ideaCategory}}" ng-repeat="item in readContent['mostPopular']['products'][ideaCategory]" >
                                @include('most-popular.single-thumb')
                            </div>
                    </section>
                </div>
            </div>
        </div>


        <div class="homepage-grid center-block latest">
                @include('grid.grid')


        <!-- custom angular template - START -->
        
                @include('layouts.parts.product-popup')

        <!-- custom angular template - END -->

        </div>
        </div>

    @include('layouts.parts.giveaway-popup')

    <script>
        function showBoxes(el) {
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

        if(window.innerWidth > 620) { // mobile only
            $(window).scroll(function () {
                console.log(118181)
                showBoxes('.grid-wrap');
            });
        }
    </script>

@stop