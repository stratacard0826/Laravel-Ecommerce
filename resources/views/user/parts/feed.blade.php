<div id="loadDynamicData" class="container">
    <script>
        var profilePicture = '{{$profile}}';
        var profileFullName = '{{$fullname}}';
    </script>
    <!--feed start -->
    <div ng-show="ActivityActive">
        <div class="col-md-3 side-bar hidden hidden-xs hidden-sm">
            <div class="row">
                <ul class="nav sidenav">
                    <li ng-class="activeClassAll">
                        <a href="#" ng-click="showActivity('all')">
                            <i class="m-icon m-icon--menu"></i>&nbsp;
                            All Activity
                        </a>
                    </li>
                    <li ng-class="activeClassHeart">
                        <a href="#" ng-click="showActivity('heart')">
                            <i class="m-icon m-icon--heart-id"></i>&nbsp;
                            Likes
                        </a>
                    </li>
                    <li ng-class="activeClassComment">
                        <a href="#" ng-click="showActivity('comment')">
                            <i class="m-icon m-icon--comments-id"></i>&nbsp;
                            Comments
                        </a>
                    </li>
                </ul>
            </div>
        </div> 
    </div>

    @include('user.parts.feed-item')

</div>
    <!--feed end-->


</div>
<script>
    $(window).scroll(function () {
        if ($(document).height() <= $(window).scrollTop() + $(window).height()) {

            var postActive = angular.element(document.getElementById('loadDynamicData')).scope().postActive;
            var ActivityActive = angular.element(document.getElementById('loadDynamicData')).scope().ActivityActive;

            if (ActivityActive == true) {
                // load dynamic feed data
                angular.element(document.getElementById('loadDynamicData')).scope().userActivityList('{{$permalink}}', 5);
            }
            if (postActive == true) {
                // load dynamic post data
                angular.element(document.getElementById('loadDynamicData')).scope().userPostList('{{$permalink}}', 6);
            }
        }
    });
</script>