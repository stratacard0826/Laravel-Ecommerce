 <div ng-show="ActivityActive">
            <div ng-init="userActivityList('{{$permalink}}', 5)">
        <div class="col-xs-12 activity-item" ng-repeat="item in activityData">
            <div class="col-xs-3 text-right post-time">
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

                                  <!--   <span ng-if="item['Section']=='product'"> product</span>
                                    <span ng-if="item['Section']!='product'"> idea</span> -->
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
                                <!-- Epic sale happening right now of all Apple devices in the 2015 Festive season across the boards! -->
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
         </div>
    </div>
  </div>



 <div ng-show="postActive">
    <div ng-init="userPostList('{{$permalink}}', 6)">
        <div class="col-xs-12 activity-item" ng-repeat="item in userPostData">
            <div class="col-xs-3 text-right post-time">
                <span class="time grey lightfont">@{{item['UpdateTime']}}</span>
                <div class="pull-right activity-tags">
                    <div class="post white-bg">
                        <img width="25" height="25" src="/assets/svg/bulb.svg" />
                    </div>
                </div>
            </div>
            <div class="feed-content col-xs-9 radius-5">
                <div class="feed-header">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="pull-left name-time">
                                <b>Posted</b>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="feed-body">
                    <div class="row">
                        <div class="col-xs-3 no-padding">
                            <img class="radius-5" ng-src="@{{ item['feed_image'] }}">
                        </div>
                        <div class="col-xs-9">
                            <a href="@{{ item['Link'] }}" target="_blank">@{{ renderHTML(item['title']) }}</a>
                            <p>
                                <!-- Epic sale happening right now of all Apple devices in the 2015 Festive season across the boards! -->
                            </p>
                            <div class="col-xs-12 no-padding">
                                <div class="pull-left activity-stats">
                                    <span class="favorite white pink-bg radius-5"><i class="m-icon--heart-solid white"></i> @{{ item['heart_count'] }}</span>
                                    <span class="comment black pale-grey-bg radius-5"><i class="m-icon--buble blue"></i> @{{ item['comment_count'] }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
    </div>
  </div>


 @if($showEditOption)
 <div ng-show="orderActive" class="ng-hide">
     <div ng-init="userOrderList('{{$permalink}}', 6)">
         <div class="col-xs-12 activity-item" ng-repeat="item in userOrderData">
             <div class="col-xs-3 text-right post-time">
                 <span class="time grey lightfont">@{{item['UpdateTime']}}</span>
                 <div class="pull-right activity-tags">
                     <div class="post white-bg">
                         <i class="m-icon--deals green"></i>
                     </div>
                 </div>
             </div>
             <div class="feed-content col-xs-9 radius-5">
                 <div class="feed-header">
                     <div class="row">
                         <div class="col-xs-12">
                             <div class="pull-left name-time">
                                 <b>Order #@{{item['Id']}}</b>
                             </div>
                         </div>
                     </div>
                 </div>
                 <div class="feed-body">
                     <div class="row">
                         <div class="col-xs-9">
                             <a ng-click="orderDetailsModal(item.Id)" href="@{{ item['Link'] }}" target="_blank">@{{ renderHTML(item['Total']) }}</a>
                             <b class="pull-right">Status: <span class="text-uppercase">@{{ item['Status'] }}</span></b>

                         </div>
                     </div>
                 </div>
             </div>
         </div>
     </div>
 </div>
 @endif
