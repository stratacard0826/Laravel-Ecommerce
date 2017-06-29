@include('header')

<?php
$categories = get_categories();
$currentCat = get_the_category();

$cat = get_category( get_query_var( 'cat' ) );
$currentCat = $cat->slug;

?>
<nav class="mid-nav" >
    <div class="container full-sm fixed-sm">
    </div>
            @if($currentCat == 'deals')
            <ul class="wrap shop-landing-submenu">
                <li class="box-link-ul ">
                    <a class="box-link " href="/shop/smart-home">
                        SMART HOME
                    </a>
                </li>
                <li class="box-link-ul ">
                    <a class="box-link " href="/shop/active">
                        ACTIVE
                    </a>
                </li>
                <li class="box-link-ul ">
                    <a class="box-link " href="/shop/wearables">
                        WEARABLES
                    </a>
                </li>
                <li class="box-link-ul ">
                    <a class="box-link " href="/shop/home-decor">
                        HOME & DECOR
                    </a>
                </li>
                <li class="box-link-ul hidden-xs">
                    <a class="box-link active" href="/ideas/deals">
                        DEALS
                    </a>
                </li>
            </ul>

            @else
                <?php get_template_part('ideas-menu'); ?>
            @endif


    </div>
</nav>

<!--<section id="hero" class="landing-hero">-->
<!--    <div class="hero-background" style="background-image: url('/assets/images/ideas-hero.jpg')"></div>-->
<!--    <div class="color-overlay"></div>-->
<!--</section>-->
<div style="padding-top: 50px" class="app-wrap" id="pagingApp" ng-app="pagingApp" ng-controller="pagingController" ng-cloak>
    <nav id="hero-nav" class="col-sm-12">

    </nav>
    <div class="clearfix"></div>
    <div class="homepage-grid center-block" style="min-height:1000px">
        <div class="loader loader-abs" cg-busy="firstLoad"></div>
        <?php include('/var/www/ideaing/resources/views/grid/grid.blade.php') ?>
    </div>
    <?php loadLaravelView('load-more'); ?>
</div>

<?php get_footer(); ?>



