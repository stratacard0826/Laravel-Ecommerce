<!DOCTYPE html>
<html  lang="en" class="no-js idea-stories">
	<head>
        <title><?php the_title()?></title>
		<?php wp_head(); ?>

        <?php loadLaravelView('head'); ?>
	</head>
	<body  ng-app="rootApp" <?php body_class(); ?>>

    <!-- Google Tag Manager --> <noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-MLNV2R" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-MLNV2R');</script> <!-- End Google Tag Manager -->

    <div class="over-wrap" id="o-wrapper">

    <?php loadLaravelView('header'); ?>
