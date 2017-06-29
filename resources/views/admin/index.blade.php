@extends('layouts.admin')

@section('content')

    <div class="page-content-wrapper">
        <div class="page-content">
            <!-- BEGIN PAGE BAR -->
            <div class="page-bar">
                <ul class="page-breadcrumb">
                    <li>
                        <a href="#">Admin</a>
                        <i class="fa fa-circle"></i>
                    </li>
                    <li>
                        <span>User Subscribe and Registration Report</span>
                    </li>
                </ul>
            </div>
            <!-- END PAGE BAR -->
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="page-header">User Subscribe and Registration Report</h1>
                </div>
                <!-- /.col-lg-12 -->
            </div>
            <div {{--ng-app="adminApp" data-ng-controller="AdminController"--}} class="row">

                <div class="col-lg-12" ng-cloak>
                    <div class="panel panel-default">
                        <div class="panel-heading"> Basic Form Elements</div>
                        <div class="panel-body">
                            <form role="form">
                                <div class="row">
                                    <div class="col-lg-12">

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
                                    <div class="row">
                                        <div class="col-lg-12" ng-init="loadSubscriptionReport()">
                                            <div class="panel panel-default">
                                                <div class="panel-heading">
                                                     Subscribed and Registered Users Report
                                                </div>
                                                <!-- /.panel-heading -->
                                                <div class="panel-body">
                                                    <div class="table-responsive">
                                                        <table class="table table-hover">
                                                            <thead>
                                                            <tr>
                                                                <th class="col-md-4">Group</th>
                                                                <th class="col-md-4">Count</th>

                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            <tr>
                                                                <td>
                                                                    Email Subscribers from Home Page
                                                                </td>
                                                                <td>
                                                                    <span class="widget-thumb-body-stat" data-counter="counterup"
                                                                          ng-bind='reportData["subscribe-home"]'>0</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    Email Subscribers from Pop Up
                                                                </td>
                                                                <td>
                                                                   <span class="widget-thumb-body-stat" data-counter="counterup"
                                                                         ng-bind='reportData["subscribe-popup"]'>0</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    Email Subscribers from Notification
                                                                </td>
                                                                <td>
                                                                    <span class="widget-thumb-body-stat" data-counter="counterup"
                                                                          ng-bind='reportData["subscribe-popup-notice"]'>0</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    Email Subscribers from Ideas
                                                                </td>
                                                                <td>
                                                                    <span class="widget-thumb-body-stat" data-counter="counterup"
                                                                          ng-bind='reportData["subscribe-ideas"]'>0</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    Email Subscribers from Footer
                                                                </td>
                                                                <td>
                                                                    <span class="widget-thumb-body-stat" data-counter="counterup"
                                                                          ng-bind='reportData["subscribe-footer"]'>0</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    Email Subscribers from Giveaway
                                                                </td>
                                                                <td>
                                                                    <span class="widget-thumb-body-stat" data-counter="counterup"
                                                                          ng-bind='reportData["subscribe-giveaway"]'>0</span>
                                                                </td>
                                                            </tr>
                                                            <tr  class="success">
                                                                <td>
                                                                    Total Email Subscribers
                                                                </td>
                                                                <td>
                                                                    <span class="widget-thumb-body-stat" data-counter="counterup"
                                                                          ng-bind='reportData["subscribe-total"]'>0</span>

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    Normal Registered Users
                                                                </td>
                                                                <td>
                                                                    <span class="widget-thumb-body-stat" data-counter="counterup"
                                                                          ng-bind='reportData["register-direct"]'>0</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    Registered With FaceBook
                                                                </td>
                                                                <td>
                                                                    <span class="widget-thumb-body-stat" data-counter="counterup"
                                                                          ng-bind='reportData["register-facebook"]'>0</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    Registered from Giveaway  
                                                                </td>
                                                                <td>
                                                                   <span class="widget-thumb-body-stat" data-counter="counterup"
                                                                         ng-bind='reportData["register-giveaway"]'>0</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    Old Registered Users
                                                                </td>
                                                                <td>
                                                                   <span class="widget-thumb-body-stat" data-counter="counterup"
                                                                         ng-bind='reportData["register-others"]'>0</span>
                                                                </td>
                                                            </tr>
                                                            <tr  class="success">
                                                                <td>
                                                                    Total Registered Users
                                                                </td>
                                                                <td>
                                                                    <span class="widget-thumb-body-stat" data-counter="counterup"
                                                                          ng-bind='reportData["register-total"]'>0</span>
                                                                </td>
                                                            </tr>

                                                            </tbody>
                                                        </table>
                                                    </div>

                                                    <!-- /.table-responsive -->
                                                </div>
                                                <!-- /.panel-body -->
                                            </div>
                                            <!-- /.panel -->
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <!-- /.col-lg-12 -->
                </div>
                <!-- /.row -->
            </div>
        </div>
    </div>
@stop
