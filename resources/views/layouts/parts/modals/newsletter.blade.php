<script type="text/ng-template" id="subscribe_email_popup.html">
    <div id="subscribe_email_popup" class="ns-effect-genie ns-hide relative overhide">
        <div ng-app="publicApp" ng-controller="publicController" class="ng-scope">
            <div class="col-sm-6 col-xs-12 img-holder no-padding">
                <h4 class="grey relative overhide">Updates for People Who <br/><b>Live Smarter</b></h4>
                <div class="seen-on col-xs-12 absolute">
                    <span class="caption"><b class="black">As seen on:</b></span>
                    <span class="media-logo haffington-logo">Huffington post</span>
                    <span class="media-logo lifehack-logo">Lifehack</span>
                </div>
                <img class="full-wide col-sm-6 col-xs-12 no-padding" src="/assets/images/welcome/welcome-smart-entertainment.jpg">
            </div>
            <div class="col-sm-6 col-xs-12 content-holder pale-grey-bg">
                <div class="col-xs-12 toggles center-block hidden-620">
                    <div class="swing-lined col-xs-6 no-padding active grey" data-toggle=".content-register" data-hide=".content-subscribe"><span>Free Account</span></div>
                    <div class="swing-lined col-xs-6 no-padding pull-right grey"  data-toggle=".content-subscribe" data-hide=".content-register"><span>Email Only</span></div>
                </div>
                <div class="col-xs-12 toggles center-block hidden-soft shown-620">
                        <div class="swing-lined col-xs-6 no-padding grey" data-toggle=".content-register" data-hide=".content-subscribe"><span>Free Account</span></div>
                        <div class="swing-lined col-xs-6 no-padding pull-right grey active"  data-toggle=".content-subscribe" data-hide=".content-register"><span>Email Only</span></div>
                </div>

                <div class="content-register bordering">
                    <ul class="why-join">
                        <li><i class="m-icon m-icon--deals pink"></i>Get exclusive coupons & deals</li>
                        <li><i class="m-icon m-icon--video green"></i> Be eligible for to win free smart gadgets</li>
                        <li><i class="m-icon m-icon--bulb-detailed-on-rating blue"></i>Unique tips to transform how you live + play</li>
                    </ul>
                    <section class="content">
                        <span class="input input--madoka big-wrap">
                            <input ng-focus="closeAlert()" class="input__field input__field--madoka" required type="text" id="input-30" ng-model="FullName">
                            <label class="input__label input__label--madoka" for="input-30">
                                <svg class="graphic graphic--madoka" width="100%" height="100%" viewBox="0 0 404 77" preserveAspectRatio="none">
                                    <path d="m0,0l404,0l0,77l-404,0l0,-77z"></path>
                                </svg>
                                <span class="input__label-content input__label-content--madoka">Name</span>
                            </label>
                        </span>
                        <span class="input input--madoka big-wrap">
                            <input ng-focus="closeAlert()" class="input__field input__field--madoka" required type="text" id="input-31" ng-model="Email">
                            <label class="input__label input__label--madoka" for="input-31">
                                <svg class="graphic graphic--madoka" width="100%" height="100%" viewBox="0 0 404 77" preserveAspectRatio="none">
                                    <path d="m0,0l404,0l0,77l-404,0l0,-77z"></path>
                                </svg>
                                <span class="input__label-content input__label-content--madoka">Email</span>
                            </label>
                        </span>
                        <span class="input input--madoka big-wrap">
                            <input ng-focus="closeAlert()" class="input__field input__field--madoka password" required type="password" id="input-32" ng-model="Password">
                            <label class="input__label input__label--madoka" for="input-32">
                                <svg class="graphic graphic--madoka" width="100%" height="100%" viewBox="0 0 404 77" preserveAspectRatio="none">
                                    <path d="m0,0l404,0l0,77l-404,0l0,-77z"></path>
                                </svg>
                                <span class="input__label-content input__label-content--madoka">
                                     <span class="pass-text">Password</span>
                                     <span class="toggle-pass" data-showpass="#input-32">show</span>
                                </span>
                            </label>
                        </span>
                        <div class="modal-minor-text">
                            <input ng-model="AcceptTermsModal" type="checkbox" class="accepttermsmodal" name="accepttermsmodal" ><label for="accepttermsmodal" checked><span></span> <b class="grey">By Signing up, you agree to <a href="/terms-of-use">Terms and Conditions</a> of Ideaing</b>
                            </label>
                        </div>
                    <a class="btn btn-success form-control" ng-click="registerSubscribedUser('subscribe-modal')">Join and Create a Free Account</a>
                    </section>

                    <uib-alert ng-repeat="alert in alerts.register" type="@{{alert.type}}" close="closeAlert($index)">
                        <p ng-bind-html="alertHTML"></p>
                    </uib-alert>

                </div>



                <div class="content-subscribe bordering hidden-soft">
                    <ul class="why-join">
                        <li class="greyscale"><i class="m-icon m-icon--deals pink"></i>Get exclusive coupons & deals</li>
                        <li class="greyscale"><i class="m-icon m-icon--video green"></i> Be eligible for to win free smart gadgets</li>
                        <li><i class="m-icon m-icon--bulb-detailed-on-rating blue"></i>Unique tips to transform how you live + play</li>
                    </ul>
                    <section class="content">
                        <span class="input input--madoka big-wrap">
                            <input ng-focus="closeAlert()" class="required input__field input__field--madoka" ng-model="data.SubscriberEmail" required type="text" id="input-34">
                            <label class="input__label input__label--madoka" for="input-34">
                                <svg class="graphic graphic--madoka" width="100%" height="100%" viewBox="0 0 404 77" preserveAspectRatio="none">
                                    <path d="m0,0l404,0l0,77l-404,0l0,-77z"></path>
                                </svg>
                                <span class="input__label-content input__label-content--madoka">Email</span>
                            </label>
                        </span>
                    <a class="btn btn-success form-control"  ng-click="subscribe(data,'popup')">Join</a>
                    </section>
                    <strong class="red alerts" style="width: 100%; display: block; text-align: center;"><?php echo '{{ responseMessage }}' ?></strong>

                </div>
                <footer class="black-footer relative full-wide text-right white overhide"><b   ng-click="hideAndForget()"><u>No thanks, I don’t want free gadgets </u> <i class="m-icon--Close white"></i></b></footer>
            </div>
        </div>
    </div>

</script>