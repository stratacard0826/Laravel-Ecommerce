<div class="login-signup-modal overhide max-100">

    <section class="four-sections">
        <div class="container no-padding">
            <div class="col-sm-3 col-xs-6 category-block category-smart-travel hover-zoom overhide">
                <div class="box-item__overlay category-bg"></div>
                <img class="img-responsive" src="/assets/images/login-signup/signup-0.jpg">
            </div>
            <div class="col-sm-3 col-xs-6 category-block category-smart-body hover-zoom overhide">
                <div class="box-item__overlay category-bg"></div>
                <img class="img-responsive" src="/assets/images/login-signup/signup-1.jpg">
            </div>
            <div class="col-sm-3 col-xs-6 category-block category-smart-home hover-zoom overhide">
                <div class="box-item__overlay category-bg"></div>
                <img class="img-responsive" src="/assets/images/login-signup/signup-2.jpg">
            </div>
            <div class="col-sm-3 col-xs-6 category-block category-smart-entertainment hover-zoom overhide">
                <div class="box-item__overlay category-bg"></div>
                <img class="img-responsive" src="/assets/images/login-signup/signup-4.jpg">
            </div>
        </div>
    </section>

    <section class="row  pale-grey-bg">
        <div class="container text-center padding-40">
            <h1>Create a Free Account</h1>
            <h4 class="grey">Join Ideaing to Live Smarter</h4>
        </div>
    </section>

    <section class="row">
        <div class="container text-center padding-40 form-box relative" ng-app="publicApp" ng-controller="publicController">

            <section id="signup-modal">
                <div class="col-sm-6 col-xs-12">
                    <div class="or side-lines"><span>or</span></div>
                    <nav class="col-xs-12 login-controls contentable relative">
                        <a class="btn btn-info col-xs-12 facebook-bg text-capitalize" ng-click="registerWithFB()" href="#"><i class="m-icon m-icon--facebook"></i>Log in with Facebook</a>
                        <span data-slidein="#login-modal" data-hide=".login-controls" class="btn btn-info col-xs-12 green-bg"><span class="m-icon m-icon--email white"></span> Log in with Email</span>
                    </nav>
                </div>

                <div class="col-sm-6 col-xs-12 pale-grey-bg padding-40">
                    <div class="modal-content hero-box qiuck-signup modal-login">
                        <div class="overhide">
                            <uib-alert ng-repeat="alert in alerts.register" type="@{{alert.type}}" close="closeAlert($index)">
                                <p ng-bind-html="alertHTML"></p>
                            </uib-alert>
                        </div>

                        <h3 class="text-left" ng-if="!alerts.length">Register new account</h3>
                        <form class="bordering">
                            <span class="input input--madoka big-wrap">
                                <input ng-focus="closeAlert()" class="input__field input__field--madoka" required ng-model="FullName" type="text" id="signup-input-0">
                                <label class="input__label input__label--madoka" for="signup-input-0">
                                    <svg class="graphic graphic--madoka" width="100%" height="100%" viewBox="0 0 404 77" preserveAspectRatio="none">
                                        <path d="m0,0l404,0l0,77l-404,0l0,-77z"></path>
                                    </svg>
                                    <span class="input__label-content input__label-content--madoka">Name</span>
                                </label>
                            </span>

                            <span class="input input--madoka big-wrap">
                                <input ng-focus="closeAlert()" class="input__field input__field--madoka" required  id="signup-input-1"  ng-model="Email"  type="text">
                                <label class="input__label input__label--madoka" for="signup-input-1">
                                    <svg class="graphic graphic--madoka" width="100%" height="100%" viewBox="0 0 404 77" preserveAspectRatio="none">
                                        <path d="m0,0l404,0l0,77l-404,0l0,-77z"></path>
                                    </svg>
                                    <span class="input__label-content input__label-content--madoka">Email</span>
                                </label>
                            </span>
                            <span class="input input--madoka big-wrap">
                                <input ng-focus="closeAlert()" class="input__field input__field--madoka password" required id="signup-input-3"  ng-model="Password" type="password" name="password">
                                <label class="input__label input__label--madoka" for="signup-input-3">
                                    <svg class="graphic graphic--madoka" width="100%" height="100%" viewBox="0 0 404 77" preserveAspectRatio="none">
                                        <path d="m0,0l404,0l0,77l-404,0l0,-77z"></path>
                                    </svg>
                                    <span class="input__label-content input__label-content--madoka">
                                        <span class="pass-text">Password</span>
                                        <span class="toggle-pass" data-showpass="#signup-input-3">show</span>
                                    </span>
                                </label>
                            </span>


                            <div class="modal-minor-text">
                                <input ng-model="AcceptTerms" type="checkbox" id="acceptterms"  class="acceptterms" name="acceptterms" ><label for="acceptterms" checked><span></span> <b class="grey">By Signing up, you agree to <a href="/terms-of-use">Terms and Conditions</a> of Ideaing</b>
                                </label>
                            </div>
                            <a class="btn btn-success col-xs-12 main-button has-lamp-wrap" ng-click="registerSubscribedUser()" href="#">
                                    <span class="lamp-wrap">
                                        <span class="m-icon--bulb2"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span></span>
                                    </span>
                                <b><span class="hidden-xs">Join and</span> Create <span class="hidden-xs">a</span> New Account</b>
                            </a>
                        </form>
                    </div>
                </div>
            </section>

            <section id="login-modal">
                <div class="modal-content contentable hero-box qiuck-signup modal-login">
                            <span class="close-button" data-slidein="#login-modal" data-hide=".login-controls">
                                <i class="m-icon--Close grey"></i>
                            </span>
                    <form class="bordering">
                        <div class="overhide">
                            <uib-alert ng-repeat="alert in alerts" type="@{{alert.type}}" close="closeAlert($index)">
                                <p ng-bind-html="alertHTML"></p>
                            </uib-alert>
                        </div>
                        <h3 ng-if="!alerts.length" class="text-left">Login</h3>

                                <span class="input input--madoka big-wrap">
                                    <input ng-focus="closeAlert()" class="input__field input__field--madoka" required type="text" id="login-input-1"  ng-model="LoginEmail" name="email">
                                    <label class="input__label input__label--madoka" for="login-input-1">
                                        <svg class="graphic graphic--madoka" width="100%" height="100%" viewBox="0 0 404 77" preserveAspectRatio="none">
                                            <path d="m0,0l404,0l0,77l-404,0l0,-77z"></path>
                                        </svg>
                                        <span class="input__label-content input__label-content--madoka">Email</span>
                                    </label>
                                </span>

                                <span class="input input--madoka big-wrap">
                                    <input ng-focus="closeAlert()" class="input__field input__field--madoka password" required  id="login-input-2"  ng-model="LoginPassword" type="password" name="password">
                                    <label class="input__label input__label--madoka" for="login-input-2">
                                        <svg class="graphic graphic--madoka" width="100%" height="100%" viewBox="0 0 404 77" preserveAspectRatio="none">
                                            <path d="m0,0l404,0l0,77l-404,0l0,-77z"></path>
                                        </svg>
                                        <span class="input__label-content input__label-content--madoka">
                                             <span class="pass-text">Password</span>
                                             <span class="toggle-pass" data-showpass="#login-input-2">show</span>
                                        </span>
                                    </label>
                                </span>
                        <div class="modal-minor-text">
                            <input ng-model="RememberMe" type="checkbox" id="remember" name="remember" ><label for="remember"><span></span> <b class="grey">Remember me</b>
                            </label>
                        </div>

                        <a class="btn btn-info main-button green-bg col-xs-12" ng-click="loginUser('home')" href="#">
                                    <span class="lamp-wrap">
                                        <span class="m-icon--bulb2"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span></span>
                                    </span>
                            <b>Log in</b>
                        </a>
                        <div class="modal-minor-text">
                            <a class="forgot" ng-click="passwordResetRequest()" href="#">Forgot your password?</a>
                        </div>

                    </form>
                </div>
            </section>
        </div>
    </section>

</div>