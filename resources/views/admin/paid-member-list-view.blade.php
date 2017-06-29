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
                    <h1 class="page-header">Paid Members List</h1>
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
                                                {{--<div class="row">
                                                    <div class="text-center">
                                                        <a href="/api/user/download/subscriber-list" class="btn btn-success">
                                                            <i class="fa fa-check"></i> Download Subscribers List
                                                        </a>
                                                    </div>
                                                    <div class="text-center">
                                                       <pagination ng-show="total != 0" total-items="total"
                                                                    ng-model="page"
                                                                    ng-change="getSubscribersList()"
                                                                    items-per-page="limit"></pagination>
                                                    </div>
                                                </div>--}}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="panel panel-default">
                                                <div class="panel-heading">
                                                    Paid members list
                                                </div>
                                                <!-- /.panel-heading -->
                                                <div class="panel-body" ng-init="getPaidMembersPaymentList()">
                                                    <div class="table-responsive">
                                                        <table class="table table-hover">
                                                            <thead>
                                                            <tr>
                                                                <th class="col-md-2">Name</th>
                                                                <th class="col-md-2">Email</th>
                                                                <th class="col-md-2">Title</th>
                                                                <th class="col-md-2">Description</th>
                                                                <th class="col-md-2">TX ID</th>

                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            <tr ng-repeat="item in paidMembersPaymentList">
                                                                <td>
                                                                    @{{ item.user.name }}
                                                                </td>
                                                                <td>
                                                                    @{{ item.user.email }}
                                                                </td>
                                                                <td>
                                                                @{{ item.bill_title }}
                                                                </td>
                                                                <td>
                                                                @{{ item.bill_description }}
                                                                </td>
                                                                <td>
                                                                @{{ item.transaction_id }}
                                                                </td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    {{--<div class="text-center" ng-init="getSubscribersList()">
                                                        <pagination ng-show="total != 0" total-items="total"
                                                                    ng-model="page"
                                                                    ng-change="getSubscribersList()"
                                                                    items-per-page="limit"></pagination>
                                                    </div>--}}
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
