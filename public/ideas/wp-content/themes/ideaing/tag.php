@include('header')
<nav class="mid-nav" >
    <?php get_template_part('ideas-menu'); ?>
</nav>
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



