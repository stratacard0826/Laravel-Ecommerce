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
                        <span>Subscribers List</span>
                    </li>
                </ul>
            </div>
            <!-- END PAGE BAR -->
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="page-header">Subscribers List</h1>
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

                                        <div class="form-group ">
                                            <div class="clearfix">
                                                <div class="row">
                                                    <div class="text-center">
                                                        <a href="/api/user/download/subscriber-list" class="btn btn-success">
                                                            <i class="fa fa-download"></i> Download Subscribers List
                                                        </a>
                                                    </div>
                                                    <div class="text-center">
                                                        <pagination ng-show="total != 0" total-items="total"
                                                                    ng-model="page"
                                                                    ng-change="getSubscribersList()"
                                                                    items-per-page="limit"></pagination>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="panel panel-default">
                                                <div class="panel-heading">
                                                    User list with email and status
                                                </div>
                                                <!-- /.panel-heading -->
                                                <div class="panel-body">
                                                    <div class="table-responsive">
                                                        <table class="table table-hover">
                                                            <thead>
                                                            <tr>
                                                                <th class="col-md-4">Email</th>
                                                                <th class="col-md-4">Status</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            <tr ng-repeat="subscriber in subscriberList">

                                                                <td>
                                                                    @{{ subscriber.email }}
                                                                </td>
                                                                <td>
                                                                    @{{ subscriber.status }}
                                                                </td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div class="text-center" ng-init="getSubscribersList()">
                                                        <pagination ng-show="total != 0" total-items="total"
                                                                    ng-model="page"
                                                                    ng-change="getSubscribersList()"
                                                                    items-per-page="limit"></pagination>
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
