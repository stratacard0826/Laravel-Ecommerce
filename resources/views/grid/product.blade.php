<div class="img-holder">
    <span  ng-hide="item.product_name == 0" class="merchant-widget__price" >
            <span itemprop="priceCurrency" content="USD">$</span>
            <span itemprop="price" content=" <?php echo '{{item.sale_price}}' ?>">
                <?php echo '{{item.sale_price}}' ?>
            </span>
    </span>
    <img  itemprop="image"  src="<?php echo '{{item.media_link_full_path}}' ?>" alt="<?php echo '{{item.product_name}}' ?>"/>
</div>
<div class="category-<?php  echo '{{item.master_category}}' ?>">
    <div class="idea-meta product category-bg">
        <div class="box-item__label-product">
            <a href="/product/<?php echo '{{item.product_permalink}}' ?>" class="box-item__label box-item__label--clear" itemprop="name"><?php echo '{{item.product_name}}' ?></a>
        </div>

        <div class="social-stats__item views" ng-show="item.views >= 100">
            <i class="m-icon m-icon--flame"></i>
            <span class="social-stats__text ng-binding"><?php echo '{{item.views}}' ?></span>
        </div>

        <a ng-if="!item.is_deal" href="/ideas">
            <span class="round-tag__label in" itemprop="articleSection">In <span ng-if="item.master_category_name"><?php echo '{{item.master_category_name}}' ?>, </span> <?php echo '{{item.category_name}}' ?> <i class="m-icon m-icon--shopping-bag-light-green white"></i></span>
        </a>

    </div>
    <!--   <div class="box-item__overlay category-bg" ng-click="openProductPopup(item.id)"></div> -->
</div>
<!-- {{--<span class="box-item__time text-uppercase"><?php echo '{{item.updated_at}}' ?></span>--}} -->


<div class="box-item__label-prod">
    <a href="/product/<?php echo '{{item.product_permalink}}' ?>"
       class="box-item__label box-item__label--clear" itemprop="name"><?php echo '{{item.product_name}}' ?></a>
    <!--    <a href="#" class="box-item__label box-item__label--clear" ng-click="openProductPopup()"><?php echo '{{item.product_name}}' ?></a>-->
    <div class="clearfix"></div>
    <div class="merchant-widget" itemprop="offers" itemscope itemtype="http://schema.org/Offer">
        <span  ng-hide="item.product_name == 0" class="merchant-widget__price" >
            <span itemprop="priceCurrency" content="USD">$</span>
             <span itemprop="price" content=" <?php echo '{{item.sale_price}}' ?>">
                 <?php echo '{{item.sale_price}}' ?>
             </span>
        </span>
        <span>From</span>
        <img class="merchant-widget__store" alt="<?php echo '{{ item.storeInfo.Description }}' ?>"
             ng-src='<?php echo '{{ item.storeInfo.ImagePath }}' ?>'/>


    </div>
</div>