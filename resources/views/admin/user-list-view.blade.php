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
                        <span>User List</span>
                    </li>
                </ul>
            </div>
            <!-- END PAGE BAR -->
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="page-header">User List</h1>
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
                                                    <div style="margin-top: 5px">&nbsp;</div>
                                                    <div class="col-lg-12">

                                                        <div class="col-lg-4 pull-left">
                                                            <label>Search Type</label>
                                                            <select data-ng-model="SelectedUserFilter"
                                                                    class="form-control">
                                                                <option value="">
                                                                    -- Select Filter --
                                                                </option>
                                                                <option ng-repeat="filter in userFilterTypes"
                                                                        value="@{{ filter.key }}">
                                                                    @{{ filter.value }}
                                                                </option>
                                                            </select>
                                                        </div>
                                                        <div class="col-lg-4">
                                                            <label> Search </label>
                                                            <input data-ng-model="FilterUserItem"
                                                                   class="form-control"
                                                                   placeholder="Enter Item To Filter">
                                                        </div>

                                                    </div>
                                                </div>
                                                <div style="margin-top: 5px">&nbsp;</div>
                                                <div class="row">
                                                    <div class="text-center">
                                                        <button class="btn btn-info" ng-click="getUserList()"
                                                                type="button"><i class="fa fa-search"></i> Search
                                                        </button>
                                                        &nbsp;&nbsp;
                                                        <button class="btn btn-warning" ng-click="resetUserList()"
                                                                type="button"><i class="fa fa-refresh"></i> Refresh
                                                        </button>
                                                        &nbsp;&nbsp;
                                                        <a class="btn btn-success" href="/admin/user-add"
                                                           type="button"><i class="fa fa-plus"></i> Add User
                                                        </a>
                                                        &nbsp;&nbsp;
                                                        <a class="btn btn-info" href="/api/user/download/registered-user-list"
                                                           type="button"><i class="fa fa-download"></i> Download List
                                                        </a>
                                                    </div>
                                                </div>
                                                <div style="margin-top: 5px">&nbsp;</div>
                                                <div class="row">
                                                    <div class="text-center">
                                                        <pagination ng-show="total != 0" total-items="total"
                                                                    ng-model="page"
                                                                    ng-change="getUserList()"
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
                                                    Products
                                                </div>
                                                <!-- /.panel-heading -->
                                                <div class="panel-body">
                                                    <div class="table-responsive">
                                                        <table class="table table-hover">
                                                            <thead>
                                                            <tr>
                                                                <th class="col-md-1">Image</th>
                                                                <th class="col-md-2">Name</th>
                                                                <th class="col-md-1">Email</th>
                                                                <th class="col-md-1">From</th>
                                                                <th class="col-md-2">User Status</th>
                                                                {{--<th class="col-md-1">Status</th>
                                                                <th class="col-md-1">Category</th>
                                                                <th class="col-md-1">Affiliate</th>
                                                                <th class="col-md-1">List Price</th>
                                                                <th class="col-md-1">Sell Price</th>--}}
                                                                <th class="col-md-1">Action</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            <tr ng-repeat="user in userList">
                                                                <td>
                                                                    <a 
                                                                       target="_blank">
                                                                        <img id="currentPhoto"
                                                                             ng-src='@{{ user.medias[0].media_link }}'
                                                                             onerror="this.src='http://s3-us-west-1.amazonaws.com/ideaing-01/thumb-product-568d28a6701c7-no-item.jpg'"
                                                                             width="90">
                                                                    </a>
                                                                </td>

                                                                <td>
                                                                    <a href="#/admin/product-edit/@{{ user.id }}">@{{ user.name }}</a>
                                                                </td>
                                                                <td>
                                                                    <strong>@{{ user.email }}</strong>
                                                                </td>
                                                                <td>
                                                                    <strong>@{{ user.user_profile.user_from }}</strong>
                                                                </td>

                                                                <td>
                                                                    <b ng-style="user.status == 'Active' && {'color': 'green'} || {'color': 'red'}">@{{ user.status }}</b>
                                                                    <b ng-style="user.is_blog_user == 'true' && {'color': 'green'}">@{{ user.is_blog_user == 'true'?', Blog User':'' }}</b>
                                                                </td>

                                                                <td>
                                                                    <a href="/admin/user-add/@{{ user.id }}"
                                                                       class="btn btn-info btn-circle"
                                                                       uib-tooltip="Edit"
                                                                       tooltip-placement="bottom"> <i
                                                                                class="fa fa-edit"></i></a>
                                                                    {{--<button data-ng-click="deleteProduct( product.id,false)"
                                                                            confirm="Are you sure to delete this product ?"
                                                                            confirm-settings="{size: 'sm'}"
                                                                            uib-tooltip="Delete"
                                                                            class="btn btn-danger btn-circle"
                                                                            type="button">
                                                                        <i class="fa fa-times"></i>
                                                                    </button>--}}
                                                                </td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div class="text-center" ng-init="getUserList()">
                                                        <pagination ng-show="total != 0" total-items="total"
                                                                    ng-model="page"
                                                                    ng-change="getUserList()"
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
