@extends('layouts.main')

@section('body-class'){{ 'profilepage' }}@stop

@section('content')
    <div id="pupblicApp" ng-app="publicApp" ng-controller="publicController">
        <section id="hero" class="landing-hero">
            <div>
                <div class="container">
                    <div class="col-sm-8 col-md-9 static hidden-lg hidden-md hidden-sm">
                        @include('user.parts.main-info')
                    </div>

                    <div class="col-sm-4 col-md-3">
                        <div class="user-score white-bg rounded-5 grey-border">
                            <h5 class="black">User Score <span class="pull-right">Level 1</span></h5>

                            <figure class="chart" data-percent="75">
                                <figcaption>75%</figcaption>
                                <svg width="200" height="200">
                                    <circle class="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)"></circle>
                                </svg>
                            </figure>



                            <div class="stat-item">
                                <span class="pink stat-name"><b>Comments</b></span>
                                <div class="progress-bar overhide full-50"></div>
                                <span class="number text-right grey pull-right">150/300</span>
                            </div>
                            <div class="stat-item">
                                <span class="pink stat-name"><b>Likes</b></span>
                                <div class="progress-bar overhide full-50"></div>
                               <span class="number text-right grey pull-right">150/300</span>
                            </div>
                            <div class="stat-item">
                                <span class="pink stat-name"><b>Shares</b></span>
                                <div class="progress-bar overhide full-50"></div>
                                <span class="number text-right grey pull-right">150/300</span>
                            </div>
                        </div>

                        <div class="share-profile white-bg rounded-5 grey-border hidden">
                            <h5 class="text-uppercase">Share your profile</h5>

                            <ul class="share-buttons squares">
                                <li class="col-xs-6 no-padding" ><a data-service="facebook" class="fb" href="#" ng-click="openSharingModal('facebook')"><i class="m-icon m-icon--facebook-id"></i> </a></li>
                                <li class="col-xs-6 no-padding"><a data-service="twitter" class="twi" href="#" ng-click="openSharingModal('twitter')"><i class="m-icon  m-icon--twitter-id"></i> </a></li>
                            </ul>

                        </div>

                        @if(!$showEditOption)
                                {{--<button id="btn-follow" type="button" class="btn " uib-dropdown-toggle>--}}
                                {{--Follow <i class=" m-icon--Actions-Down-Arrow-Active"></i>--}}
                                {{--</button>--}}
                                <button id="btn-add-friend" type="button" class="btn btn-success col-xs-12">
                                   &nbsp; Add Friends
                                </button>
                        @endif

                    </div>

                    <div class="col-sm-8 col-md-9 static hidden-xs">
                        @include('user.parts.main-info')
                    </div>

                    <nav class="hero-nav col-sm-9 col-sm-offset-4 col-md-offset-3">
                        {{--@if(empty($notification))--}}
                            <ul class="main-content-filter over-visible">
                                <li ng-class="{active: (activeMenu == '1' || !activeMenu)}" class="active" ng-click="activeMenu='1'">
                                    <a ng-click="clickOnActivity('{{$permalink}}', 5)" href="/user/profile/{{$permalink}}"
                                       data-filterby="all" class="all-activity swing-lined blue-line">
                                        <div><i class="m-icon m-icon--menu"></i>
                                            All Activity</div>
                                    </a>
                                </li>

                                <li ng-class="{active: activeMenu == '2'}" ng-click="activeMenu='2'">
                                    <a ng-click="clickOnOrders('{{$permalink}}', 5)" class="my-purchases swing-lined green-line">
                                        <div><i class="m-icon m-icon--shopping-bag-light-green"></i>
                                            @{{totalOrders}} Purchases</div>
                                    </a>
                                </li>
                                <li ng-class="{active: activeMenu == '3'}" ng-click="activeMenu='3'">
                                    <a ng-click="clickOnActivityLike('{{$permalink}}', 5)" class="my-likes swing-lined">
                                        <div><i class="m-icon m-icon--heart-id"></i>
                                            15 Likes</div>
                                    </a>
                                </li>

                                {{--<li class="hidden" ng-class="{active: activeMenu == '4'}" ng-click="activeMenu='4'">--}}
                                    {{--<a  href="" class="my-product">--}}
                                        {{--<i class="m-icon m-icon--menu"></i>--}}
                                        {{--My Products--}}
                                    {{--</a>--}}
                                {{--</li>--}}
                            </ul>
                        {{--@endif--}}
                    </nav>
                </div>

            </div>
        </section>

        <div class="app-wrap">

            <div class="clearfix"></div>
            <br><br>

            @if(empty($notification))
                @if(!empty($showProfilePosts))
                    @include('user.parts.post')
                @else
                    @include('user.parts.feed')
                @endif
            @else
                @include('user.parts.notification')
            @endif
        </div>
    </div>
    @include('user.parts.order-details-modal')



@stop