@extends('layouts.admin')

@section('content')


<div class="page-content-wrapper">


    <div class="page-content">
        <!-- BEGIN PAGE BAR -->
        <div class="page-bar">
            <ul class="page-breadcrumb">
                <li>
                    <a href="index.html">Home</a>
                    <i class="fa fa-circle"></i>
                </li>
                <li>
                    <span>Forum Category List</span>
                </li>
            </ul>
        </div>
        <!-- END PAGE BAR -->
        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">Category List</h1>
            </div>
            <!-- /.col-lg-12 -->
        </div>
<div {{--ng-app="adminApp" data-ng-controller="AdminController"--}} class="row" >
            <div class="col-lg-12" ng-cloak>
                <div class="panel panel-default">
                    <div class="panel-heading"> Basic Form Elements</div>
                    <div class="panel-body">
                        <form role="form">
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

                                    <div class="form-group clearfix">
                                        <label>Subcategory Category</label>

                                        <div class="col-lg-12 ">
                                                <select data-ng-model="selectedForumItem" ng-change="getSubForumCategory()"
                                                        class="form-control">
                                                    <option value="0">
                                                        -- Select --
                                                    </option>
                                                    <option ng-repeat="category in forumCategoryItems"
                                                            value="@{{ category.id }}">
                                                        @{{ category.title }}
                                                    </option>
                                                </select>
                                        </div>
                                    </div>
                                    <div class="form-group clearfix" ng-if="selectedForumItem!=0">

                                        <div class="col-lg-6 ">
                                            <input class="form-control" ng-model="forumCategoryTitle" placeholder="Sub Category name">
                                        </div>
                                        <div class="col-lg-6 ">
                                            <button class="btn btn-primary" ng-click="addSubForumCategory()">Add</button>
                                        </div>
                                    </div>
                                    <br>

                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-10">
                                    <div class="form-group">
                                        <div class="row">
                                            <div class="">
                                                <div class="panel panel-default">
                                                    <div class="panel-heading">
                                                        Category Items
                                                    </div>
                                                    <!-- /.panel-heading -->
                                                    <div class="panel-body">
                                                        <div class="table-responsive">
                                                            <table class="table table-hover">
                                                                <thead>
                                                                <tr>

                                                                    <th>Category Id</th>
                                                                    <th>Category Name</th>

                                                                    <th ng-if="currentCategoryName">Icon</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                                </thead>
                                                                <tbody>
                                                                <tr ng-repeat="category in forumSubCategoryItems"
                                                                    ng-include="getTemplate(category)"></tr>
                                                                </tbody>
                                                            </table>
                                                            <script type="text/ng-template" id="display">
                                                                <td>@{{ category.id }}</td>
                                                                <td>@{{ category.title }}</td>
                                                                
                                                                <td ng-if="currentCategoryName">@{{ category.icon }}</td>
                                                                <td>
                                                                    <button ng-click="editCategory(category)" class="btn btn-info btn-circle" uib-tooltip="Edit"
                                                                            tooltip-placement="bottom">
                                                                        <i class="fa fa-edit"></i>
                                                                    </button>
                                                                    <button ng-if="selectedForumItem!=0" ng-click="deleteForumCategory($index)" confirm="Are you sure to delete this item ?" confirm-settings="{size: 'sm'}"
                                                                            class="btn btn-danger btn-circle" uib-tooltip="Delete" tooltip-placement="bottom">
                                                                        <i class="fa fa-times"></i>
                                                                    </button> 
                                                                </td>
                                                            </script>
                                                            <script type="text/ng-template" id="edit">
                                                                <td>@{{ category.id }}</td>
                                                                <td><input type="text"
                                                                           ng-model="tableTemporaryValue.title"/>
                                                                </td>
                                                                <td ng-if="currentCategoryName"><input type="text" ng-model="tableTemporaryValue.icon"/></td>
                                                                <td>
                                                                    <button ng-click="updateForumCategory($index)" class="btn btn-success btn-circle" uib-tooltip="Save"
                                                                            tooltip-placement="bottom">
                                                                        <i class="fa fa-check"></i>
                                                                    </button>

                                                                    <button ng-click="cancelCategory()" class="btn btn-warning btn-circle" uib-tooltip="Cancel"
                                                                            tooltip-placement="bottom">
                                                                        <i class="fa fa-times"></i>
                                                                    </button>
                                                                </td>
                                                            </script>
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
