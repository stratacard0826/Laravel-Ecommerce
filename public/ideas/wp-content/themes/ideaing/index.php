@include('header')

<?php
$categories = get_categories();

$cats = get_the_category();
$cat_name = $cats[0]->name;
?>
<nav class="mid-nav" >
    <div class="container hidden-xs">
        <ul class="wrap col-md-3">
<!--            <li class="box-link-ul">-->
<!--                <a href="/ideas/usage-link" class="box-link">Usage</a>-->
<!--            </li>-->
            <li class="box-link-ul">
                <a href="/ideas/how-to" class="box-link">How To</a>
            </li>
            <li class="box-link-ul">
                <a href="/ideas/style" class="box-link">Style</a>
            </li>
            <li class="box-link-ul">
                <a href="/ideas/best" class="box-link">Best</a>
            </li>

<!--            <li class="box-link-ul">-->
<!--                <a href="/ideas/declutter" class="box-link">Declutter</a>-->
<!--            </li>-->
<!--            <li class="box-link-ul">-->
<!--                <a href="/ideas/shop" class="box-link">Shop</a>-->
<!--            </li>-->
        </ul>
    </div>
    <div class="container mobile-menu visible-xs full-620">
        <ul class="wrap col-lg-7 full-620">
<!--            <li class="box-link-ul">-->
<!--                <a href="/ideas/usage-list" class="box-link">Usage</a>-->
<!--            </li>-->
            <li class="box-link-ul">
                <a href="/ideas/best" class="box-link">Best</a>
            </li>
            <li class="box-link-ul">
                <a href="/ideas/style" class="box-link">Style</a>
            </li>
            <li class="box-link-ul">
                <a href="/ideas/how-to" class="box-link">How To</a>
            </li>

        </ul>
<!--        <a class="right-menu-arrow pull-right" data-toggle="#mobile-ideas-menu" href="#">-->
<!--            <i class="m-icon--Header-Dropdown down"></i>-->
<!--            <i class="m-icon--footer-up-arrow up"></i>-->
<!--        </a>-->

    </div>
</nav>
<!---->
<!--<div id="mobile-ideas-menu" class="mobile-top-menu mobile-mid-menu ">-->
<!--    <ul>-->
<!--        <li class="box-link-ul">-->
<!--            <a href="/ideas/smart-home" class="box-link">Smart Home</a>-->
<!--        </li>-->
<!--        <li class="box-link-ul">-->
<!--            <a href="/ideas/reviews" class="box-link">Reviews</a>-->
<!--        </li>-->
<!--        <li class="box-link-ul">-->
<!--            <a href="/ideas/style" class="box-link">Style</a>-->
<!--        </li>-->
<!--        <li class="box-link-ul">-->
<!--            <a href="/ideas/how-to" class="box-link">How To</a>-->
<!--        </li>-->
<!---->
<!--    </ul>-->
<!--</div>-->


<section id="hero" class="landing-hero" >
        <?php loadLaravelView('hero-slider'); ?>
<!--    <div class="color-overlay"></div>-->
</section>




<div class="app-wrap" id="pagingApp" ng-app="pagingApp" ng-controller="pagingController" ng-cloak>
<!--    <nav id="hero-nav" class="col-sm-12">-->
<!---->
<!--    </nav>-->
    <div class="clearfix"></div>
    <div class="homepage-grid center-block" style="min-height:1000px">
        <div class="loader loader-abs" cg-busy="firstLoad"></div>
            <?php include('/var/www/ideaing/resources/views/grid/grid.blade.php') ?>
    </div>
    <?php loadLaravelView('load-more'); ?>

</div>
<?php loadLaravelView('giveaway-popup'); ?>

<?php get_footer(); ?>



