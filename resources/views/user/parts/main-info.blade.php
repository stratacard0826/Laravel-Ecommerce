    <div class="col-sm-3 avatar-wrap text-cetner">
        <img class="img-circle full-wide" src="{{$profile}}">
        @if($showEditOption)
        <span class="change-foto-button" ng-click="openProfileSetting(true)">
                                        <i class="m-icon m-icon--camera-active"></i>
                                    </span>
        @endif
    </div>

    <div class="col-sm-8">
        <p>
            <span class="fullname lightfont">{{$fullname}}</span>&nbsp;

            
            @if($showEditOption)
                {{--<div class="edit-background hidden-xs hidden-sm">--}}
                {{--<a href="#">--}}
                {{--<i class="m-icon--Edit-Background"></i><br>--}}
                {{--Edit background--}}
                {{--</a>--}}
                {{--</div>--}}

                <a href="#" class="btn edit-profile-link white-bg pink" ng-click="openProfileSetting()"><i class="m-icon--Edit-Profile"></i> <span class="hidden-md hidden-sm hidden-xs">Edit Profile&nbsp;&nbsp;</span></a>


                {{--<p class="hidden-xs hidden-sm"><a href="/user/profile/{{@$userPermalink}}">View your profile as--}}
                {{--other people see it</a></p>--}}
                {{--<p class="visible-xs visible-sm">&nbsp;</p>--}}
            @endif
        </p>
        <p class="description">{{$personalInfo}}</p>

        <ul class="share-buttons">
            <li class="col-xs-1 no-padding"><a data-service="facebook" class="fb" href="#" ng-click="openSharingModal('facebook')"><i class="m-icon m-icon--facebook-id"></i> </a></li>
            <li class="col-xs-1"><a data-service="twitter" class="twi" href="#" ng-click="openSharingModal('twitter')"><i class="m-icon  m-icon--twitter-id"></i> </a></li>
        </ul>



        {{--<div>--}}
        {{--<a href="#" class="follow">0 Follower</a>--}}
        {{--<a href="#" class="follow">0 Following</a>--}}
        {{--</div>--}}

        {{--<div>--}}
        {{--<a href="#" class="follow"--}}
        {{--socialshare--}}
        {{--socialshare-via="{{env('FB_APP')}}"--}}
        {{--socialshare-type="feed"--}}
        {{--socialshare-provider="facebook"--}}
        {{--socialshare-text="Welcome to Ideaing"--}}
        {{--socialshare-hashtags="Ideaing"--}}
        {{--socialshare-url="https://ideaing.com"--}}
        {{-->--}}
        {{--Invite Facebook Friends--}}
        {{--</a>--}}

        {{--<a href="#" class="follow"--}}
        {{--socialshare--}}
        {{--socialshare-via="{{env('FB_APP')}}"--}}
        {{--socialshare-type="feed"--}}
        {{--socialshare-provider="twitter"--}}
        {{--socialshare-text="Welcome to Ideaing"--}}
        {{--socialshare-hashtags="Ideaing"--}}
        {{--socialshare-url="https://ideaing.com"--}}
        {{-->--}}
        {{--Invite Twitter Friends--}}
        {{--</a>--}}
        {{--</div>--}}

    </div>

