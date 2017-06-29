@extends('layouts.main')

@section('content')

    <img style="margin-left:40%" class="img-responsive " alt="" src="/assets/images/ideaing-logo-small.png">

    <div id="publicApp" ng-app="publicApp" ng-controller="publicController"
         class="col-lg-4" style="float: none;
    display: block;
    margin-left: auto;
    margin-right: auto;">

        <div style="margin-top: 45px">

            <label for="email"><h2>Ideaing - Password Reset Form:</h2></label>
            <div class="row">
                <div>

                    <div class="row">
                        <div class="col-lg-12">
                            <div>
                                <uib-alert ng-repeat="alert in alerts" type="@{{alert.type}}"
                                           close="closeAlert($index)">
                                    <p ng-bind-html="alertHTML"></p>
                                </uib-alert>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <form role="form">
                <div class="form-group">
                    <label for="pwd">Password:</label>
                    <input type="password" ng-model="Password" placeholder="Enter Password" class="form-control"
                           id="pwd">
                </div>
                <div class="form-group">
                    <label for="pwd">Password Confirmation:</label>
                    <input type="password" ng-model="PasswordConf" placeholder="Retype Password" class="form-control"
                           id="pwd">
                </div>
                <input type="hidden" ng-model="Code" ng-init="Code='{{$code}}'">
                <div class="form-group">
                        <button type="submit" ng-click="passwordReset()" class="btn btn-default">
                            <i class="fa fa-paper-plane"></i>
                            Reset Password
                        </button>
                </div>

            </form>
        </div>
    </div>
    {{--<script src="/assets/js/angular-custom/public.common.js"></script>--}}
    {{--<script src="/assets/js/main.js"></script>--}}
@stop

