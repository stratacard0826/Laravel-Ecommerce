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
                    <span>Add Category Item</span>
                </li>
            </ul>
        </div>
        <!-- END PAGE BAR -->
        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">Add Category Item</h1>
            </div>
            <!-- /.col-lg-12 -->
        </div>
        <div {{--ng-app="adminApp" data-ng-controller="AdminController"--}} class="row">
            <div class="col-lg-12" ng-cloak>
                <div class="panel panel-default">
                    <div class="panel-heading"> Basic Form Elements</div>
                    <div class="panel-body">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="row">
                                    <div class="col-lg-12">

                                        <div ng-cloak>
                                            <uib-alert ng-repeat="alert in alerts" type="@{{alert.type}}"
                                                       close="closeAlert($index)">
                                                <p ng-bind-html="alertHTML"></p>
                                            </uib-alert>

                                        </div>

                                        <div class="panel panel-info">
                                            <div class="panel-heading"> Subcategory Status Panel</div>
                                            <div class="panel-body">
                                                <span ng-repeat="list in tempCategoryList">@{{ list }} >> </span>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <form role="form">
                                    <div class="form-group">
                                        <label>Selects Category</label>

                                        <div class="col-lg-12 clearfix">
                                            <div class="col-lg-10 pull-left">
                                                <select data-ng-model="selectedItem" ng-change="getSubCategory()"
                                                        class="form-control">
                                                    <option value="@{{ selectedItem }}">
                                                        -- Add to This Category --
                                                    </option>
                                                    <option ng-repeat="category in categoryItems"
                                                            value="@{{ category.id }}">
                                                        @{{ category.category }}
                                                    </option>
                                                </select>
                                            </div>
                                            <div class="col-lg-2">
                                                <button class="btn btn-info btn-circle" type="button"
                                                        ng-click="resetCategory()" uib-tooltip="Refresh Category"
                                                        tooltip-placement="right">
                                                    <i class="fa fa-refresh"></i>
                                                </button>
                                            </div>
                                            <div style="margin-top: 30px"> &nbsp;</div>
                                            <div>
                                                <label>Selected Category Name :</label><span class="text-danger"><strong> @{{ currentCategoryName }} </strong> </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label>Category Name</label>
                                        <input ng-model="categoryName" class="form-control" placeholder="Text Required">
                                    </div>
                                    <div class="form-group">
                                        <label>Extra Info</label>
                                        <input ng-model="extraInfo" class="form-control"
                                               placeholder="Custom URL Name Required">
                                    </div>
                                    <div class="form-group">
                                        <label>Meta Title</label>
                                        <input ng-model="meta_title" class="form-control"
                                               placeholder="Text">
                                    </div>
                                    <div class="form-group">
                                        <label>Meta Description</label>
                                        <input ng-model="meta_description" class="form-control"
                                               placeholder="Text">
                                    </div>
                                    <div class="form-group">
                                        <label>Icon Class Name</label>
                                        <input ng-model="icon" class="form-control"
                                               placeholder="Icon Class Name">
                                    </div>
                                    <p>
                                        <button class="btn btn-primary" ng-click="addCategory()" type="submit">Submit
                                        </button>
                                    </p>
                                </form>

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
@stop


