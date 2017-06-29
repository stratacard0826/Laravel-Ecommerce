<script type="text/ng-template" id="user-order-details.html">
    <div class="modal-content">
        <section class="order-product-list col-xs-12">
            <div class="custom-container">
                <h4>Your Order# @{{thisOrderId}}
                    <a class="close" href="#" ng-click="cancel()"><i class="m-icon--Close pull-right"></i> </a>
                </h4>

                <div class="col-xs-12 activity-item ng-scope" ng-repeat="item in orderProducts">
                    <div class="feed-content col-xs-12">
                        <div class="feed-body in-order">
                            <div class="row">
                                <div class="col-xs-2 no-padding">
                                    <img class="radius-5" ng-src="@{{item['_product_thumb_url']}}" src="@{{item['_product_thumb_url']}}">
                                </div>
                                <div class="col-xs-10 col-xs-12">
                                    <a href="@{{item['_laravel_product_link']}}" target="_blank" class="ng-binding"><b>@{{item['name']}}</b> - Price $@{{item['_price_raw']}}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>





             <!--   <div class="col-xs-12 activity-item" ng-repeat="item in orderProducts">
                    <div class="col-xs-3 text-right">
                        <span class="time grey lightfont">@{{item['UpdateTime']}}</span>
                        <div class="pull-right activity-tags">
                            <div ng-if="item['Type']!='comment'" class="favorite white-bg"><i class="m-icon--heart-solid pink"></i></div>
                            <div ng-if="item['Type']=='comment'" class="comment white-bg"><i class="m-icon--buble blue"></i></div>
                        </div>
                    </div>
                    <div class="feed-content col-xs-9 radius-5">
                        <div class="feed-header">
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="pull-left name-time">
                                        <span ng-if="item['Type']=='comment'"> Commented</span>
                                        <span ng-if="item['Type']!='comment'"> Liked</span>


                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="feed-body">
                            <div class="row">
                                <div class="col-xs-3 no-padding">
                                    <img class="radius-5" ng-src="@{{ item['Image'] }}">
                                </div>


                                <div ng-class="item['Type'] =='heart' ? 'col-xs-12':'col-xs-12'" class="col-xs-9">
                                    <a href="@{{ item['Link'] }}" target="_blank">@{{ item['Title'] }}</a>
                                    <p>
                                    </p>
                                    <div class="col-xs-12 no-padding">
                                        <div class="pull-left activity-stats">
                                            <span class="favorite white pink-bg radius-5"><i class="m-icon--heart-solid white"></i> @{{ item['HeartCount'] }}</span>
                                            <span class="comment black pale-grey-bg radius-5"><i class="m-icon--buble blue"></i> @{{ item['CommentCount'] }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> -->

            </div>
        </section>
    </div>
</script>