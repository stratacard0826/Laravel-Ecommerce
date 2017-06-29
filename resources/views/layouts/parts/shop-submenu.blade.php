        <header class="sub-head">
            <nav id="shop-menu" class="shop-menu hidden-soft hidden-620">
                <div class="container full-sm">
                    <section class="most-popular col-xs-4" ng-repeat="item in productsForShopMenu.mostPopular">
                        <h5 class="sub-title"><a href="/shop/">Most Popular</a></h5>
                        <div class="img-wrap">
                            <img class="img-responsive" src="{{item.media_link_full_path}}">
                        </div>
                    </section>

                    <section class="smart-home col-xs-2">
                        <h5 class="sub-title"><a href="/shop/smart-home">Smart Home</a></h5>
                        <div class="img-wrap" ng-repeat="item in productsForShopMenu.smartHome">
                            <a href="/product/{{item.product_permalink}}">
                                <img class="item-image img-responsive" src="{{item.media_link_full_path}}">
                            </a>
                        </div>
                    </section>


                    <section class="travel col-xs-2">
                        <h5 class="sub-title"><a href="/shop/active">Active</a></h5>
                        <div class="img-wrap" ng-repeat="item in productsForShopMenu.travel">
                            <a href="/product/{{item.product_permalink}}">
                                 <img class="item-image img-responsive" src="{{item.media_link_full_path}}">
                            </a>
                        </div>
                    </section>

                    <section class="wearables col-xs-2">
                        <h5 class="sub-title"><a href="/shop/wearables">Wearables</a></h5>
                        <div class="img-wrap" ng-repeat="item in productsForShopMenu.wearables">
                            <a href="/product/{{item.product_permalink}}">
                                <img class="item-image img-responsive" src="{{item.media_link_full_path}}">
                            </a>
                        </div>
                    </section>


                    <section class="home-decor col-xs-2">
                        <h5 class="sub-title"><a href="/shop/home-decor">Home and Decor</a></h5>
                        <div class="img-wrap" ng-repeat="item in productsForShopMenu.homeDecor">
                            <a href="/product/{{item.product_permalink}}">
                                <img class="item-image img-responsive" src="{{item.media_link_full_path}}">
                            </a>
                        </div>
                    </section>
                </div>
            </nav>
        </header>

        