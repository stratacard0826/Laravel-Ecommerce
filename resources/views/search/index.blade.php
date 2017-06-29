@extends('layouts.main')

@section('body-class'){{ 'search' }}@stop

@section('content')

    <div class="app-wrap" id="pagingApp" ng-app="pagingApp" ng-controller="SearchController" ng-cloak>
        <div class="container  banner-nav" ng-init="searchPage()">
            <nav id="hero-nav" >
                <div class="row">
                    <div class="col-md-7">
                <ul class="popular-new pull-left">
                    {{--<li class="">--}}
                    {{--<a ng-click="sortBy(popularity)" href="#" class="box-link active">POPULAR</a>--}}
                    {{--</li>--}}
                    <li class="">
                        <a ng-click="filterSearchContent('all', false)" data-filterby="all" href="#" class="box-link active">ALL</a>
                    </li>
                    <li class="">
                        <a ng-click="filterSearchContent('idea', false)" data-filterby="idea" href="#" class="box-link">IDEAS</a>
                    </li>
                    <li class="">
                        <a ng-click="filterSearchContent('product', false)"  data-filterby="product"  href="#" class="box-link">PRODUCTS</a>
                    </li>
                </ul>
                        <h5 id="search-header" class="pull-right">Found: <span id="hit-count"></span> items</h5>  
                        <div class="clearfix"></div>
                    </div>
                    <div class="col-md-5">
                <ul class="popular-new pull-right">
                    {{--<li class="">--}}
                    {{--<a ng-click="sortBy(popularity)" href="#" class="box-link active">POPULAR</a>--}}
                    {{--</li>--}}
                    <li class="">
                        <a ng-click="filterSearchContent(false, 'date_created')" data-sortby="default" href="#" class="box-link active">NEWEST</a>
                    </li>
                    <li class="">
                        <a ng-click="filterSearchContent(false, 'sale_price')"  data-sortby="sale_price"  href="#" class="box-link">PRICE</a>
                    </li>
                </ul>
            </div>
                </div>
        </nav>
        </div>
        <div class="clearfix"></div>

        <div class="homepage-grid center-block">
            <div class="loader loader-abs" cg-busy="firstLoad"></div>
            {{--<div class="loader loader-abs" cg-busy="filterLoad"></div>--}}
            {{--<div class="loader loader-fixed" cg-busy="nextLoad"></div>--}}

            <div class="main-content ">
                <div id="shop-filter-grid-box-3" ng-class="['col-lg-12', {'show-filter': showFilter}]">
                    {{--<div class="visible-md visible-lg">--}}
                        {{--@include('shop.filter-menu')--}}
                    {{--</div>--}}
                    <div class="grid-box-3" >
                        {{--<div class="box-item product-box " ng-repeat="item in content" >--}}


                        {{--</div>--}}
                        <div class="box-item idea-box" ng-if="item.type == 'idea'" ng-repeat="item in content">
                            @include('grid.idea')
                            <?php // include('/var/www/ideaing/resources/views/grid/'.$ideaView.'.blade.php') ?>
                        </div>

                        <div ng-if="item.type == 'product'" ng-repeat="item in content"             class="box-item product-box">
                            @include('grid.product')
                        <?php // include('/var/www/ideaing/resources/views/grid/product.blade.php') ?>
                        </div>
                    </div>
                </div>
                @include('layouts.parts.load-more')
            </div>
        </div>
         @include('layouts.parts.product-popup')
    </div>

@stop