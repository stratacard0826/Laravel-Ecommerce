<div class="img-holder">
    <img ng-if="is_featured == 'true' || item.feed_image == undefined" src="{{item.image}}" itemprop="image">

    <img ng-if="item.feed_image !== undefined && is_featured != 'true'" alt="{{item.feed_image.alt}}" title="{{item.feed_image.alt}}" src="{{item.feed_image.url}}" itemprop="image">
</div>
<?php include('/var/www/ideaing/resources/views/grid/ideaWP.blade.php') ?>
