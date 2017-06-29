@extends('layouts.admin')

@section('content')

    <div class="page-content-wrapper">
        <div class="page-content">
            <!-- BEGIN PAGE BAR -->
            <div class="page-bar">
                <ul class="page-breadcrumb">
                    <li>
                        <a href="index.html">Admin</a>
                        <i class="fa fa-circle"></i>
                    </li>
                    <li>
                        <span>Update Admin's Email Notification Info</span>
                    </li>
                </ul>
            </div>
            <!-- END PAGE BAR -->
            <div {{--ng-app="adminApp" data-ng-controller="AdminController"--}} class="row" nv-file-drop=""
                 uploader="uploader"
                 filters="queueLimit, customFilter">

                <div class="col-md-12" ng-cloak>

                    <div ng-init="getAdminNotificationEmailList()">&nbsp;</div>

                    <div ng-init="">
                        <form role="form" name="myForm" enctype="multipart/form-data"
                              class="form-horizontal form-row-seperated">
                            <div class="portlet">
                                <div class="portlet-title">

                                    <div class="caption">
                                        <i class="fa fa-shopping-cart"></i>Update Admin's Email Notification Info
                                    </div>
                                    <div class="actions btn-set">


                                    </div>
                                </div>
                                <div class="portlet-body">
                                    <div class="row">
                                        <div class="col-lg-6">

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
                                    <div class="row">
                                        <div class="tabbable-bordered">
                                            <div class="form-body col-md-6">


                                                <div class="form-group">
                                                    <label for="email">Email address:</label>
                                                    <input type="text" ng-model="Email" placeholder="Enter Emails"
                                                           class="form-control"
                                                           id="email">
                                                </div>

                                                <div class="form-group">

                                                    <button data-ng-click="setAdminNotificationEmailList()"
                                                            class="btn btn-warning">
                                                        <i class="fa fa-check"></i> Update
                                                    </button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <!-- /.col-lg-12 --                </div>
    >
            </div>
            <!-- /.row -->
            </div>
        </div>
    </div>
@stop