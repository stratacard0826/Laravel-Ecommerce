@foreach( $homehero as $key => $image )
        {{--<div id="hero-bg" style="background-image: url('{{$image['hero_image']}}'); "></div>--}}
        {{--<button id="close-login" data-toggle=".hero-login"></button>--}}
        <div class="login-wrap">
            <span class="close-button close-login"  data-toggle=".hero-login">
                <i class="m-icon--Close"></i>
            </span>
            <div class="container fixed-sm full-480">
                <div class="col-md-5 col-xs-6 full-620 col-md-offset-1 why-us">
                    <h2>Ideas for Smarter Living</h2>
                    <ul>
                        <li class="get-ideas"><i class="m-icon m-icon--heart-id"></i>Discover smart home products that will change your life</li>
                        <li class="share-vote">
                            <i class="m-icon m-icon--bulb"></i>Share ideas on making your home automated and beautiful
                            <img id="hero-arrow" src="assets/images/home-arrow.png" alt="">
                        </li>
                        <li class="shop-cool"><i class="m-icon m-icon--shopping-bag-light-green"></i>Shop for new and innovative home gadgets and decor</li>
                    </ul>
                </div>
                <div  id="publicApp" ng-app="publicApp" ng-controller="publicController" class="col-md-4 col-sm-6 col-xs-12 col-md-offset-1 hero-box qiuck-signup" ng-cloak>
                    <div class="response-wrap">
                        <strong>@{{ responseMessage }}</strong>
                    </div>
                    <form>
                        <h4>
                            <b>Sign-up in Seconds</b>
                        </h4>

                        {{--<input class="form-control hide" type="text" placeholder="First name" name="name">--}}
                        <span class="email-input-holder ">
                                <i class="m-icon m-icon--email-form-id"></i>
                                <input class="form-control" ng-model="data.SubscriberEmail" type="text" placeholder="Email" name="email">
                        </span>

                        <button ng-click="subscribe(data,'home')" class="btn btn-success col-xs-12"  href="#">Sign up</button>
                        <div class="line-wrap">or</div>
                        <button ng-click="registerWithFB()" class="btn btn-info col-xs-12" href="#"><i class="m-icon m-icon--facebook-id"></i>Sign up with Facebook</button>
                    </form>
                </div>
            </div>
        </div>
@endforeach
