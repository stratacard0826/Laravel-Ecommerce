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
                    <h1 class="page-header">Manage Tags</h1>
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
                        <div class="panel-body">

                            <div class="row">
                                <form role="form">
                                    <div class="form-body">
                                        <div class="form-group">
                                            <label class="col-lg-2 control-label">Name:
                                            </label>
                                            <div class="col-lg-4">
                                                <input data-ng-model="TagName" class="form-control"
                                                       placeholder="Enter Tag Name">
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label class="col-lg-2 control-label">Description:
                                            </label>
                                            <div class="col-lg-4">
                                                <input data-ng-model="TagDescription" class="form-control"
                                                       placeholder="Enter tag description">
                                            </div>
                                        </div>

                                    </div>
                                    <p>
                                        <button class="btn btn-primary" ng-hide="selectedTagId != ''" ng-click="addTagInfo()" type="submit">Save</button>
                                        <button class="btn btn-warning" ng-hide="selectedTagId == ''" ng-click="updateTagInfo()" type="submit">Update</button>
                                    </p>
                                </form>
                            </div>
                        </div>

                        <!--
                        content for table
                        -->

                        <div class="row">
                            <div class="col-lg-6">
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        Tags
                                    </div>
                                    <!-- /.panel-heading -->
                                    <div class="panel-body">
                                        <div class="table-responsive" ng-init="showTags()">
                                            <table class="table table-hover">
                                                <thead>
                                                <tr>

                                                    <th class="col-md-3">Id</th>
                                                    <th class="col-md-3">Tag Name</th>
                                                    <th class="col-md-3">Tag Desc.</th>

                                                    <th class="col-md-3">Action</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr ng-repeat="tag in AllTags">

                                                    <td>@{{ tag.id }}</td>
                                                    <td>@{{ tag.tag_name }}</td>
                                                    <td>
                                                        @{{ tag.tag_description }}
                                                    </td>

                                                    <td>

                                                        <button data-ng-click="editTagInfo($index)"
                                                                uib-tooltip="Edit"
                                                                class="btn btn-info btn-circle" type="button">
                                                            <i class="fa fa-edit"></i>
                                                        </button>

                                                        <button data-ng-click="deleteTagInfo(tag.id)"
                                                                confirm="Are you sure to delete this product ?"
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
