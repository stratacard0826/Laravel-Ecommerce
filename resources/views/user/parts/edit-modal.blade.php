<script type="text/ng-template" id="profile-setting.html">
    <a class="close" href="#" ng-click="cancel()"><i class="m-icon--Close"></i> </a>

    <section class="personal-details col-xs-12">
        <div class="custom-container">
            <h4 ng-hide="onlyImage">Personal Details</h4>
            <h4 ng-show="onlyImage">Update your photo</h4>
        </div>

        <div class="col-sm-3 photo-wrap avatar-wrap">
                <img id="currentPhoto" class="profile-photo category-hover-border" width="150px" ng-src='<?php echo "{{ mediaLink }}"  ?>'
                 onerror="this.src='http://s3-us-west-1.amazonaws.com/ideaing-01/thumb-product-568d28a6701c7-no-item.jpg'"
                 width="170">

                <span ng-show="showBrowseButton" class="upload-photo change-foto-button">
                             <i class="m-icon m-icon--camera-active"></i>
                            <input ng-init="initProfilePage()"
                                   id="fileLabel"
                                   class="upload-profile"
                                   type="file"
                                   name="file"
                                   nv-file-select=""
                                   uploader="uploader"/>
                        </span>
                        <span ng-hide="showBrowseButton" class="uploading-photo">
                            <button class="btn" ng-click="updateProfilePicture(data,mediaLink)">Save Picture</button>
                            <button class="btn" ng-click="cancelPictureUpdate()">Cancel</button>
                        </span>

            <div class="form-group">
                <div class="col-xs-12">
                    <div class="col-xs-6" ng-init="initProfilePicture('<?php echo isset($userData['medias'][0]['media_link']) ? $userData['medias'][0]['media_link'] : "" ?>')">&nbsp;
                    </div>
                </div>
            </div>
        </div>

        <div ng-hide="onlyImage" class="custom-container col-sm-9 info-conteiner">
            <form class="form-horizontal">
                <div class="form-group">
                    <label class="col-xs-12 control-label">First name</label>
                    <div class="col-xs-12">
                        <input class="form-control" ng-model="data.FullName"
                               ng-init="data.FullName = '<?php echo $userData['name'] ?>'"
                               placeholder="Full name">
                    </div>
                    <label class="col-xs-12 control-label">Last name</label>
                    <div class="col-xs-12">
                        <input class="form-control" ng-model="data.LastName"
                               ng-init="data.LastName = '<?php echo $userData['last_name'] ?>'"
                               placeholder="Last Name">
                    </div>

                    <label class="col-xs-12 control-label">Bio</label>
                    <div class="col-xs-12">
                                <textarea class="form-control" ng-model="data.PersonalInfo"
                                          ng-init="data.PersonalInfo = '<?php echo $userData['userProfile']['personal_info'] ?>'"
                                          placeholder="Bio"></textarea>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-xs-6 boxy-label">
                        <label class="col-xs-2 col-sm-2 col-md-6 control-label"><i class="m-icon m-icon--facebook-id"></i> <span class="hidden-xs hidden-sm">Facebook Link</span></label>
                        <div class="col-md-6 col-xs-10 pull-right no-padding">
                            <input class="form-control ng-pristine ng-untouched ng-valid ng-not-empty" ng-model="data.FacebookLink" ng-init="data.FacebookLink = '<?php echo $userData['userProfile']['facebook_link'] ?>'">
                        </div>
                    </div>
                    <div class="col-xs-6 boxy-label">
                        <label class="col-xs-2 col-sm-2 col-md-6"><i class="m-icon m-icon--twitter-id"></i><span class="hidden-xs hidden-sm">Twitter Link</span></label>
                        <div class="col-md-6 col-xs-10  pull-right no-padding">
                            <input class="form-control ng-pristine ng-untouched ng-valid ng-not-empty" ng-model="data.TwitterLink" ng-init="data.TwitterLink = '<?php echo $userData['userProfile']['twitter_link'] ?>'">
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </section>

    <section ng-hide="onlyImage" class="login-details col-xs-12">
        <h4 class="col-xs-12">Login Details</h4>
        <form class="custom-container">
                <div class="form-group col-xs-6">
                    <label class="col-xs-12 control-label">Email</label>
                    <div class="col-xs-12">
                        <input class="form-control" ng-model="data.Email" ng-readonly="true"
                               ng-init="data.Email = '<?php echo $userData['email'] ?>'" placeholder="Email"/>

                    </div>
                </div>
                <div class="form-group  col-xs-6">
                    <label class="col-xs-12 control-label">Current password</label>
                    <div class="col-xs-12">
                        <input class="form-control" type="password" ng-model="data.Password"
                               placeholder="New password">

                    </div>
                </div>
                <div class="form-group  col-xs-6">
                    <label class="col-xs-12 control-label">New password</label>
                    <div class="col-xs-12">
                        <input class="form-control" type="password" ng-model="data.NewPassword"
                               placeholder="New password">

                    </div> 
                </div>
                <div class="form-group  col-xs-6">
                    <label class="col-xs-12 control-label">Recovery email</label>
                    <div class="col-xs-12">
                        <input class="form-control" type="email" ng-model="data.RecoveryEmail"  ng-init="data.RecoveryEmail = '<?php echo $userData['recovery_email'] ?>'">
                        <?php // echo $userData['userProfile']['address']  ?>
                    </div>
                </div>

                <div class="col-md-8 col-xs-12">
                    <div class="boxy-label overhide no-padding">
                        <div class="col-xs-12 no-padding">
                            <label class="col-xs-6 control-label">https://ideaing.com/user/profile/</label>
                            <div class="col-xs-6 pull-right no-padding">
                                <input class="form-control personal-link ng-pristine ng-valid ng-not-empty ng-touched ng-untouched" ng-model="data.Permalink" ng-init="data.Permalink = '<?php echo $userData['permalink'] ?>'" placeholder="">
                            </div>
                        </div>
                    </div>
                </div>

                <!--<div class="form-group col-xs-12">--}}
                    {{--<label class="col-xs-12 control-label">Street</label>--}}
                    {{--<div class="col-xs-12">--}}
                        {{--<input class="form-control street ng-pristine ng-untouched ng-valid ng-empty" ng-model="data.Street" placeholder="">--}}
                    {{--</div>--}}
                -->
        </form>
    </section>

    <section ng-hide="onlyImage" class="location-details col-xs-12">
                <form class="custom-container">
                    <h4>Location</h4>

                    <div class="form-group col-xs-12">
                            <label class="col-xs-12 control-label">Street</label>
                            <div class="col-xs-12">
                                <input class="form-control street" ng-model="data.Street"
                               placeholder="" ng-init="data.Street = '<?php echo $userData['userProfile']['street'] ?>'">
                            </div>
                        </div>

                        <div class="form-group col-xs-6">
                            <label class="col-xs-12 control-label">Apartment</label>
                            <div class="col-xs-12">
                                <input class="form-control apartment" ng-model="data.Apartment"
                                placeholder="" ng-init="data.Apartment = '<?php echo $userData['userProfile']['apartment'] ?>'">
                            </div>
                        </div>

                        <div class="form-group  col-xs-6">
                            <label class="col-xs-12 control-label">City</label>
                            <div class="col-xs-12">
                                <input class="form-control city no-padding" ng-model="data.City"
                                placeholder="" ng-init="data.City = '<?php echo $userData['userProfile']['city'] ?>'">
                            </div>
                        </div>

                        <div class="form-group col-xs-4">
                            <label class="col-xs-12 control-label">Country</label>
                            <div class="col-xs-12">
                                <input class="form-control country" ng-model="data.Country"
                               placeholder="" ng-init="data.Country = '<?php echo $userData['userProfile']['country'] ?>'">
                            </div>
                        </div>

                        <div class="form-group  col-xs-4 move-me">
                            <label class="col-xs-12 control-label">State</label>
                            <div class="col-xs-12">
                                <input class="form-control street" ng-model="data.State"
                               placeholder="" ng-init="data.State = '<?php echo $userData['userProfile']['state'] ?>'">
                            </div>
                        </div>

                        <div class="form-group  col-xs-4 move-me">
                            <label class="col-xs-12 control-label">Zip</label>
                            <div class="col-xs-12">
                                <input class="form-control zip" ng-model="data.Zip"
                               placeholder="" ng-init="data.Zip = '<?php echo $userData['userProfile']['zip'] ?>'">
                            </div>
                        </div>
                </form>
                <div class="clearfix"></div>
        </div>
    </section>
    <section  ng-hide="onlyImage" class="notification-settings col-xs-12">
        <form class="form-horizontal">
            <div class="custom-container">
                <h4 class="overhide">Notify me about</h4>
                <div ng-init="getProfileSettings('<?php echo $userData['id']  ?>')">
                        <div class="form-group checkbox-form-group col-xs-5">
                            <div class="pull-left">
                                Daily notification email
                            </div>
                            <div class="pull-right">
                                <label class="setting-custom-checkbox">
                                    <input type="checkbox" ng-model="setDailyEmailNotification"
                                           ng-click="setDailyEmail('<?php echo $userData['id']  ?>')">
                                                    <span class="">
                                                        <i class="m-icon--Settings-Toggles-Active on">
                                                            <span class="path1"></span><span class="path2"></span>
                                                        </i>
                                                        <i class="m-icon--Settings-Toggles off">
                                                            <span class="path1"></span><span class="path2"></span>
                                                        </i>
                                                    </span>
                                </label>
                            </div>
                            <div class="clearfix"></div>
                        </div>

                        <div class="form-group checkbox-form-group col-xs-5 pull-right">
                            <div class="pull-left">
                                Receive Weekly Newsletters <br/> from Ideaing on newest offers
                            </div>
                            <div class="pull-right">
                                <label class="setting-custom-checkbox">
                                    <input type="checkbox" value="1" checked>
                                                    <span class="">
                                                        <i class="m-icon--Settings-Toggles-Active on">
                                                            <span class="path1"></span><span class="path2"></span>
                                                        </i>
                                                        <i class="m-icon--Settings-Toggles off">
                                                            <span class="path1"></span><span class="path2"></span>
                                                        </i>
                                                    </span>
                                </label>
                            </div>
                            <div class="clearfix"></div>
                        </div>

                        <div class="form-group checkbox-form-group col-xs-5">
                            <div class="pull-left">
                                New followers
                            </div>
                            <div class="pull-right">
                                <label class="setting-custom-checkbox">
                                    <input type="checkbox" value="1" checked>
                                                    <span class="">
                                                        <i class="m-icon--Settings-Toggles-Active on">
                                                            <span class="path1"></span><span class="path2"></span>
                                                        </i>
                                                        <i class="m-icon--Settings-Toggles off">
                                                            <span class="path1"></span><span class="path2"></span>
                                                        </i>
                                                    </span>
                                </label>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <div class="form-group checkbox-form-group col-xs-5 pull-right">
                            <div class="pull-left">
                                Price-drops on products I like
                            </div>
                            <div class="pull-right">
                                <label class="setting-custom-checkbox">
                                    <input type="checkbox" value="1" checked>
                                                    <span class="">
                                                        <i class="m-icon--Settings-Toggles-Active on">
                                                            <span class="path1"></span><span class="path2"></span>
                                                        </i>
                                                        <i class="m-icon--Settings-Toggles off">
                                                            <span class="path1"></span><span class="path2"></span>
                                                        </i>
                                                    </span>
                                </label>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <div class="form-group checkbox-form-group col-xs-5">
                            <div class="pull-left">
                                Comments from others that I've engaged in
                            </div>
                            <div class="pull-right">
                                <label class="setting-custom-checkbox">
                                    <input type="checkbox" value="1" checked>
                                                    <span class="">
                                                        <i class="m-icon--Settings-Toggles-Active on">
                                                            <span class="path1"></span><span class="path2"></span>
                                                        </i>
                                                        <i class="m-icon--Settings-Toggles off">
                                                            <span class="path1"></span><span class="path2"></span>
                                                        </i>
                                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="form-group checkbox-form-group col-xs-5 pull-right" ng-init="checkSubscription()">
                        <div class="pull-left">
                            VIP Membership Subscription 
                        </div>
                        <div class="pull-right">
                            <label class="setting-custom-checkbox">
                                <input type="checkbox" ng-model="setMembershipSubscription"
                                       ng-click="changeSubscription()">
                                                <span class="">
                                                    <i class="m-icon--Settings-Toggles-Active on">
                                                        <span class="path1"></span><span class="path2"></span>
                                                    </i>
                                                    <i class="m-icon--Settings-Toggles off">
                                                        <span class="path1"></span><span class="path2"></span>
                                                    </i>
                                                </span>
                            </label>
                        </div>
                    </div>
                </div> 
        </form>
    </section>
    <div class="col-xs-12 pale-grey-bg">
        <div class="custom-container ">
                    <div class="form-group text-center col-xs-12">
                        <!--  <button class="btn btn-nevermind">Nevermind</button> -->
                        <button class="btn btn-nevermind" ng-click="updateUser(data,mediaLink)">Nevermind</button>
                        <button class="btn btn-save" ng-click="updateUser(data,mediaLink)">Save</button>
                    </div>
        </div>
    </div>
</script>