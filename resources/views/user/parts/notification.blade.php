<div id="loadDynamicData" class="container">
    <script>
        var profilePicture = '{{$profile}}';
        var profileFullName = '{{$fullname}}';
    </script>
    <!--feed start -->
    <div ng-cloak
         ng-init="loadNotification('<?php echo $userData['id']?>')">

        {{--<div class="col-md-9 main-content" ng-init="userActivityList({{$userData['id']}},5)">--}}
        <div class="col-md-9 main-content">

            <div class="feed-content row" ng-repeat="notice in notifications">
                <div class="feed-header ">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="pull-left">
                                <img src="<?php echo '{{ notice.UserPicture }}' ?>" width="50px" class="profile-photo"
                                     alt="">
                            </div>
                            <div class="pull-left name-time">
                                <strong><?php echo '{{ notice.UserName }}' ?></strong> {{--<i class="m-icon--heart-solid"></i>--}}
                                <br>
                                <span class="time"><?php echo '{{ notice.Time }}' ?></span>
                            </div>
                            <div class="pull-left">&nbsp;&nbsp;&nbsp;&nbsp;</div>
                            <div class="pull-left">
                                <div ng-switch="notice.Section">
                                    <div ng-switch-when="ideas-heart">Liked</div>
                                    <div ng-switch-when="product-heart">Liked</div>
                                    <div ng-switch-when="giveaway-heart">Liked</div>
                                    <div ng-switch-default>Commented on</div>
                                </div>
                                <a ng-href="<?php echo '/{{ notice.ItemLink }}' ?>"><?php echo '{{ notice.ItemTitle }}' ?></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style="text-align: center">
                <button class="btn btn-primary btn-block"
                        ng-click="loadMoreNotifications('<?php echo $userData['id']?>',5)" type="button">Load More ...
                </button>
            </div>
            <div class="clearfix"></div>
        </div>

    </div>
    <!--feed end-->

</div>

