<!DOCTYPE html>
<html lang="en" class="no-js idea-stories">
	<head>
		<?php wp_head(); ?>
		<?php loadLaravelView('head'); ?>
	</head>
	<body ng-app="rootApp" <?php body_class(); ?>>
		<?php loadLaravelView('header-checkout-process'); ?>
