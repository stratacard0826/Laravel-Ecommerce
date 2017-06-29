@extends('layouts.admin')

@section('content')


    <div class="page-content-wrapper">

        <div class="page-content">
            <!-- BEGIN PAGE BAR -->
            <div class="page-bar">
                <ul class="page-breadcrumb">
                    <li>
                        <a href="/admin/dashboard">Home</a>
                        <i class="fa fa-circle"></i>
                    </li>
                    <li>
                        <span>Tags</span>
                    </li>
                </ul>
            </div>
            <!-- END PAGE BAR -->
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="page-header">Manage Category</h1>
                </div>
                <!-- /.col-lg-12 -->
            </div>
            <div class="portlet">
                <div class="portlet-body">
                    <div {{--ng-app="adminApp" data-ng-controller="AdminController"--}} class="row">

                        <div class="col-lg-12" ng-cloak>
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

                            <div class="panel panel-default">
                                <div class="panel-heading"> Basic Form Elements</div>
                                <form role="form">
                                    <div class="panel-body">
                                        <div class="row">

                                            <div class="form-body">

                                                <div class="form-group" ng-hide="!hideCategoryPanel">
                                                    <label class="col-md-2 control-label">Selected
                                                        Category: </label>
                                                    <div class="col-md-5">
                                                        <strong>
                                                            @{{ categoryHierarchy }} (@{{ selectedItem }})
                                                        </strong>

                                                        <button ng-click="hideCategoryPanel = !hideCategoryPanel"
                                                                tooltip-placement="right"
                                                                uib-tooltip="Show Category List"
                                                                class="btn btn-warning btn-circle">
                                                            <i class="fa fa-refresh"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div ng-hide="hideCategoryPanel" class="form-group">
                                                    <label class="col-md-2 control-label">Select Category:
                                                    </label>
                                                    <div class="col-md-10">
                                                        <ui-tree ng-model="assets"
                                                                 load-fn="loadChildren"
                                                                 expand-to="hierarchy"
                                                                 selected-id="111"
                                                                 attr-node-id="id"></ui-tree>
                                                        <label>Selected Category Info
                                                            :</label><strong> @{{ categoryHierarchy }}
                                                            (@{{ selectedItem }}) </strong>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">&nbsp;</div>

                                        <div class="row">
                                            <div class="form-group">
                                                <label class="col-lg-2 control-label">Page Title:
                                                </label>
                                                <div class="col-lg-4">
                                                    <input data-ng-model="PageTitle" class="form-control"
                                                           placeholder="Enter page title">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">&nbsp;</div>
                                        <div class="row">
                                            <div class="form-group">
                                                <label class="col-lg-2 control-label">Meta Description:
                                                </label>
                                                <div class="col-lg-4">
                                                    <input data-ng-model="MetaDescription" class="form-control"
                                                           placeholder="Enter meta description">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">&nbsp;</div>
                                        <div class="row">
                                            <div class="form-group">
                                                <p>
                                                    <button class="btn btn-primary" ng-hide="selectedReadCategoryId != ''"
                                                            ng-click="addReadCategory()" type="submit">Save
                                                    </button>
                                                    <button class="btn btn-warning" ng-hide="selectedReadCategoryId == ''"
                                                            ng-click="addReadCategory()" type="submit">Update
                                                    </button>
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                </form>

                                <!--
                                content for table
                                -->

                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="panel panel-default">
                                            <div class="panel-heading">
                                                Read Category Items
                                            </div>
                                            <!-- /.panel-heading -->
                                            <div class="panel-body">
                                                <div class="table-responsive" ng-init="getReadCategoryList()">
                                                    <table class="table table-hover">
                                                        <thead>
                                                        <tr>

                                                            <th class="col-md-1">Id</th>
                                                            <th class="col-md-3">Category Name</th>
                                                            <th class="col-md-6">URL</th>
                                                            <th class="col-md-2">Action</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr ng-repeat="item in tempCategoryList">

                                                            <td>@{{ item.id }}</td>
                                                            <td>@{{ item.product_category.category_name }}</td>
                                                            <td>
                                                               <a target="_blank" href="{{Request::root()}}/@{{ item.product_category.extra_info }}">{{Request::root()}}/@{{ item.product_category.extra_info }}</a>
                                                            </td>

                                                            <td>

                                                                <button data-ng-click="editReadCategory($index)"
                                                                        uib-tooltip="Edit"
                                                                        class="btn btn-info btn-circle" type="button">
                                                                    <i class="fa fa-edit"></i>
                                                                </button>

                                                                <button data-ng-click="deleteReadCategory($index)"
                                                                        confirm="Are you sure to delete this item ?"
                                                                        confirm-settings="{size: 'sm'}"
                                                                        uib-tooltip="Delete"
                                                                        class="btn btn-danger btn-circle" type="button">
                                                                    <i class="fa fa-times"></i>
                                                                </button>
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
                        </div>
                        <!-- /.col-lg-12 -->
                    </div>
                    <!-- /.row -->
                </div>
            </div>
        </div>
    </div>
    </div>
@stop
