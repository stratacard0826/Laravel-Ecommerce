@extends('layouts.main')

@section('body-class'){{ 'giveaway-page'}}{{$giveaway->timeLeft < 0 ? ' expired' : ''}}@stop

@section('content')
    <div id="publicApp" ng-app="publicApp" ng-controller="publicController" ng-cloak>

        <nav class="mid-nav">
            <div class="container full-sm fixed-sm">
                <ul class="wrap col-lg-9">
                    <li class="box-link-ul active-ul ">
                        <a class="box-link active" href="#">
                            <span class="box-link-active-line"></span>
                            Giveaway
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
  
        <section id="hero" class="landing-hero giveaway-hero">
            <div class="rsContent">
                <div id="hero-bg" style="background-image: url({{$giveaway->giveaway_image}}); "></div>
                <div id="mobile-hero-bg" class="hidden-soft shown-620" style="background-image: url({{$giveaway->giveaway_mobile_image}}); "></div>
                <div class="container fixed-sm full-480">
                </div>
                <hgroup class="giveaway-banner">
                    <div class="container">
                        <h3 class="hidden-620">
                            Monthly Giveaway
                        </h3>

                        <h1>
                            {{$heading}}
                        </h1>
                        @if($giveaway->timeLeft > 0)
                            <div class="giveaway-timer pull-right">
                                ENDS IN:<br/>
                                <span class="final-countdown">{{$giveaway->timeLeft}}</span>
                            </div>
                        @endif
                    </div>
                </hgroup>
            </div>
        </section>
        <nav id="hero-nav" class="col-sm-12">
            <div class="container">
                <ul class="share-buttons center-block col-lg-7 col-md-8">

                    <li class="social-stats__item">
                        <?php
                        $userId = !empty($userData->id) ? $userData->id : 0;
                        ?>

                        <heart-counter-public uid="<?php echo $userId ?>" iid="{{  $giveaway->id }}"
                                              plink="" sec='giveaway'>

                        </heart-counter-public>
                    </li>

                    @include('layouts.parts.share-buttons')
                    <li><a class="comment" data-scrollto=".comments" href="#"><i class="m-icon m-icon--comments-id" ng-init="getCommentsForIdeas()"></i>
                            <b ng-bind="commentsCount">
                            </b>
                        </a>
                    </li>
                </ul>

            </div>
        </nav>
        <div class="container-fluid">
            <div class="container fixed-sm full-480 giveaway-content">
                <div class="col-md-6 col-xs-12">
                    <div class='giveaway_title'><h2>{{$giveaway->giveaway_title}}</h2>
                    </div>
                    <div class='giveaway_desc'>{!! $giveaway->giveaway_desc !!}</div>

                </div>

                <div class="col-md-6 col-xs-12 pull-right giveaway-toc" ng-init="readSingleNotification(<?php echo $userData['id'] ?>,'<?php echo $giveawayPermalink ?>')">
                    <section class="sign-in">
                        @if (Session::has('giveaway_flash'))
                            <div>
                                <div class="alert alert-danger giveaway-alert">
                                    <strong>Warning!</strong> {{ Session::get('giveaway_flash') }}
                                    <span class="close-button close-login" data-toggle=".giveaway-alert">
                                         <i class="m-icon--Close"></i>
                                    </span>
                                </div>
                            </div>
                        @endif
                        <div ng-show="alertHTML" class="hidden-620">
                            <div class="alert alert-danger giveaway-alert">
                                <strong>@{{ alertHTML }}</strong>
                                    <span class="close-button close-login" data-toggle=".giveaway-alert">
                                         <i class="m-icon--Close"></i>
                                    </span>
                            </div>
                        </div>
                        @if(@$userData['login'])
                            <div class="col-lg-6">
                                <h5 style="font-size: 2.5rem; padding-top: 10px;">
                                    Hi, <br/>
                                    <span>{{$userData['name']}}!</span>
                                </h5>
                            </div>
                            <div class="col-lg-6 col-xs-12 qiuck-signup pull-right" ng-cloak>
                                @if(@$alreadyIn)
                                    <div>
                                        <strong style="display: block; padding-top: 30px" class="red">Congratulations,
                                            you have entered!</strong>
                                    </div>
                                @else

                                    <form id="giveaway-two" ng-if="!responseMessage.success">

                                        <div>
                                            <strong class="red">@{{ responseMessage.error }}</strong>
                                        </div>
                                        <input id="user-email" ng-model="SubscriberEmail" type="hidden" name="email" value="{{@$userData['email']}}">
                                        <input id="giveaway_id" ng-model="GiveAwayID" type="hidden" name="giveaway_id"
                                               value="{{$giveaway->id}}">
                                        <button style="margin-top: 30px;"
                                                ng-click="enterGiveaway('giveaway-two','{{$giveawayPermalink}}')"
                                                class="btn btn-success col-xs-12" href="#">Enter Giveaway
                                        </button>
                                    </form>

                                    <div ng-if="responseMessage.success">
                                        <strong style="display: block; padding-top: 30px"
                                                class="red">@{{ responseMessage.success }}</strong>
                                    </div>
                                @endif
                            </div>
                        @else
                            <div class="col-lg-6">
                                <h5 class="giveaway-signup">Join Ideaing, <span class="black">it’s FREE</span></h5>
                                <ul class="giveaway-signup pointed">
                                    <li>Enter to win Free Smart Home Devices</li>
                                    <li>Get exclusive coupons & deals on Smart Home devices</li>
                                    <li>Unlock additional features to transform your ordinary home to a smart home</li>
                                </ul>
                                <div data-switch=".giveaway-login" data-hide=".giveaway-signup"
                                     class="giveaway-signup line-wrap login-switcher">Already a member? Sign in!
                                </div>

                                <h5 class="giveaway-login hidden-soft">Sign in to <span>WIN!</span></h5>
                                <div data-switch=".giveaway-signup" data-hide=".giveaway-login"
                                     class="giveaway-login line-wrap hidden-soft  login-switcher">Not yet a member?
                                    Create an account!
                                </div>
                            </div>

                            <div class="col-lg-6 col-xs-12 qiuck-signup pull-right giveaway-login hidden-soft">

                                <form id="giveaway-two" ng-if="!responseMessage.success">
                                    <div>
                                        <strong style="color: red">@{{ responseMessage.error }}</strong>
                                    </div>
			                            <span class="email-input-holder ">
                                            <i class="m-icon m-icon--email-form-id black"></i>
			                                <input class="form-control" ng-model="SubscriberEmail" type="text"
                                                   placeholder="Email" name="email">
			                            </span>
			                            <span class="password-input-holder ">
			                                <input class="form-control" ng-model="SubscriberPassword" type="text"
                                                   placeholder="Password" name="password">
			                                 <input id="giveaway_id" ng-model="GiveAwayID" type="hidden"
                                                    name="giveaway_id" value="{{$giveaway->id}}">
			                            </span>
                                    <button ng-click="enterGiveaway('giveaway-two', '{{$giveawayPermalink}}')"
                                            class="btn btn-success col-xs-12" href="#">Enter Giveaway
                                    </button>
                                </form>

                                {{-- <div ng-if="responseMessage.success">
                                     <strong style="display: block; padding-top: 30px"
                                             class="red">@{{ responseMessage.success }}</strong>
                                 </div>--}}

                                <div ng-show="alertHTML">
                                    <div class="alert alert-danger giveaway-alert">
                                        <strong ng-bind-html="responseMessage.success"></strong>
                                    <span class="close-button close-login" data-toggle=".giveaway-alert">
                                         <i class="m-icon--Close"></i>
                                    </span>
                                    </div>
                                </div>

                                </form>
                            </div>

                            <div class="col-lg-6 col-xs-12 qiuck-signup pull-right giveaway-signup">
                                <form>
                                    <button ng-click="giveawayLoginFB()" class="btn btn-info col-xs-12" href="#"><i
                                                class="m-icon m-icon--facebook-id"></i>Sign up with Facebook
                                    </button>
                                    <div class="line-wrap modal-minor-text login-switcher">or</div>

                                    <input class="form-control" ng-model="FullName" type="text" placeholder="Name">
                                    <span class="email-input-holder ">
                                            <i class="m-icon m-icon--email-form-id black"></i>
                                           <input class="form-control" ng-model="Email" type="text" placeholder="Email">
			                            </span>
                                    <input class="form-control" ng-model="Password" type="password"
                                           placeholder="Password">
                                    <input class="form-control" ng-model="PasswordConf" type="password"
                                           placeholder="Retype Password">

                                    <a class="btn btn-success col-xs-12" ng-click="registerUser('giveaway')" href="#">Sign
                                        up</a>

                                </form>
                            </div>

                        @endif
                            <div ng-show="alertHTML" class="hidden-soft shown-620 col-xs-12">
                                <div class="alert alert-danger giveaway-alert">
                                    <strong>@{{ alertHTML }}</strong>
                                                <span class="close-button close-login" data-toggle=".giveaway-alert">
                                                     <i class="m-icon--Close"></i>
                                                </span>
                                </div>
                            </div>
                    </section>
                    <a href="#" class="toggle-toc" data-toggle="modal" data-target="#giveAwayModal"><u>View Terms and Conditions</u></a>
                </div>
                <h4 class="red col-xs-12 text-center">Stay tuned for these upcoming giveaways!</h4>

                <section class="slider giveaway-slider black-slider col-lg-12  full-620 pseudo-full-wide">
                    <img src="/assets/images/giveaway-logo.png" class="giveaway-logo col-xs-4"/>
                    <div class="giveaway-slider-content col-sm-8 full-620">
                        @foreach($nextGiveaways as $nextGive)
                            <div class="thumb-wrap">
                                <h6>{{date('F', strtotime($nextGive->goes_live))}}</h6>
                                <img class="giveaway-thumb {{$nextGive->ends <= date('Y-m-d') ? 'greyscale' : ''}}"
                                     src="{{$nextGive->giveaway_image}}"/>
                                <h6>{{$nextGive->giveaway_title}}</h6>
                            </div>
                        @endforeach
                    </div>
                </section>
            </div>

        </div>
        @include('layouts.parts.comments-giveaway')
    </div>
    <!-- Modal -->
    <div class="modal" id="giveAwayModal" tabindex="-1" role="dialog" data-overlay="false">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="col-lg-11 center-block">
                    <span class="close-button" data-dismiss="modal">
                         <i class="m-icon--Close"></i>
                    </span>
                    <h4>Terms of Conditions</h4>
                    <div class="toc-content">{!!$giveaway->giveaway_toc!!}</div>
                </div>
            </div>
        </div>
    </div>
    <script>

        jQuery(function ($) {
            var timeLeft = <?php echo $giveaway->timeLeft?>;
            var node = $('.final-countdown');
            Giveaway.startCountDown(timeLeft, node);
        });

        jQuery(document).ready(function ($) {
            Giveaway.fireSlider();
        });

    </script>
@stop
