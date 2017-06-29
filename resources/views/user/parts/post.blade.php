<div id="loadDynamicData" class="container post">
    <div class="row">
        <script>
            var profilePicture = '{{$profile}}';
            var profileFullName = '{{$fullname}}';
        </script>
        <div class="col-md-12 main-content" ng-init="userPostList('{{$permalink}}', 6)">
            <div class="row">

                <div ng-repeat="item in userPostData">
                    <!-- start -->
                    <div class="col-sm-6">
                        <div class="feed-content ">
                            <div class="feed-header ">
                                <div class="row">
                                    <div class="col-xs-12">
                                        <div class="pull-left">
                                            <img ng-src="@{{item.avator}}" width="50px" class="profile-photo" alt="">
                                        </div>
                                        <div class="pull-left name-time">

                                            <strong>@{{item.author}}</strong> <i class="m-icon--heart-solid"></i><br>
                                            <span class="time">@{{item.creation_date}}</span>

                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="feed-body ">
                                <div class="row">
                                    <div class="col-xs-12">
                                        <img ng-src="@{{ item.image }}">
                                    </div>
                                    <div class="col-xs-12">
                                        <br>
                                        <a class="butaka" href="@{{ item.url }}" target="_blank">
                                            <strong>@{{ render_html(item.title) }}</strong><br>
                                            <div ng-bind-html="item.content"></div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="feed-footer ">
                                <div class="row">
                                    <div class="col-xs-12">
                                        <div class="pull-left">
                                            <span class="favorite"><i class="m-icon--heart"></i> @{{ item.heart_count }}</span>
                                            <span class="comment"><i
                                                        class="m-icon--buble"></i> @{{ item.comment_count }}</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- end -->
                </div>

            </div>
        </div>
    </div>
</div>
<script>
    $(window).scroll(function () {
        if ($(document).height() <= $(window).scrollTop() + $(window).height()) {
            angular.element(document.getElementById('loadDynamicData')).scope().userPostList('{{$permalink}}', 6);
        }
    });
</script>