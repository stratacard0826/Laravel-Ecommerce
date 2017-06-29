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
                    <span>Category List</span>
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
        <div {{--ng-app="adminApp" data-ng-controller="AdminController"--}} class="row">
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

                                            <div class="panel panel-info">
                                                <div class="panel-heading"> Subcategory Status Panel</div>
                                                <div class="panel-body">
                                                    <span ng-repeat="list in tempCategoryList">@{{ list }} >> </span>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group ">
                                        <label>Selects Category</label>

                                        <div class="col-lg-12 clearfix">
                                            <div class="col-lg-10 pull-left">
                                                <select data-ng-model="selectedItem" ng-change="getSubCategory()"
                                                        class="form-control">
                                                    <option value="@{{ selectedItem }}">
                                                        -- View This Category --
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
                                            {{--<div>
                                                <label>Selected Category Name :</label><span class="text-danger"><strong> @{{ currentCategoryName }} </strong> </span>
                                            </div>--}}
                                        </div>
                                    </div>

                                </div>
                            </div>
                            {{--<div>
                                <ui-tree ng-model="assets"
                                         load-fn="loadChildren"
                                         expand-to="hierarchy"
                                         selected-id="111"
                                         attr-node-id="id"></ui-tree>
                                <div>selected: @{{ selected.category }} id: @{{ selected.id }}</div>
                            </div>--}}
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="form-group" style="margin-top:50px;">
                                        <div class="row">
                                            <div class="col-lg-12">
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
                                                                    <th>URL Info</th>
                                                                    <th ng-if="tempCategoryList.length">Icon</th>
                                                                    <th>URL Structure</th>
                                                                </tr>
                                                                </thead>
                                                                <tbody>
                                                                <tr ng-repeat="category in categoryItems"
                                                                    ng-include="getTemplate(category)"></tr>
                                                                </tbody>
                                                            </table>
                                                            <script type="text/ng-template" id="display">
                                                                <td>@{{ category.id }}</td>
                                                                <td>@{{ category.category }}</td>
                                                                <td>@{{ category.info }}</td>
                                                                <td ng-if="tempCategoryList.length">@{{ category.icon }}</td>
                                                                <td>
                                                                    <a target="_blank" href="{{Request::root()}}/@{{ buildURL(category.info )}}">{{Request::root()}}/@{{ buildURL(category.info )}} </a>
                                                                </td>
                                                            </script>
                                                            <script type="text/ng-template" id="edit">
                                                                <td>@{{ category.id }}</td>
                                                                <td><input type="text"
                                                                           ng-model="tableTemporaryValue.category"/>
                                                                </td>
                                                                <td><input type="text"
                                                                           ng-model="tableTemporaryValue.info"/></td>
                                                                <td ng-if="tempCategoryList.length"><input type="text"
                                                                           ng-model="tableTemporaryValue.icon"/></td>
                                                                <td>
                                                                    <button ng-click="updateCategory($index)">Save
                                                                    </button>

                                                                    <button ng-click="cancelCategory()">Cancel</button>
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