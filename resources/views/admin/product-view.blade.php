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
                        <span>Product List</span>
                    </li>
                </ul>
            </div>
            <!-- END PAGE BAR -->
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="page-header">Product List</h1>
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

                                            {{--<label>Selects Category</label>--}}

                                            <div class="clearfix">
                                                <div class="row">
                                                    <div class="col-md-1">&nbsp;</div>
                                                    <div class="col-md-4">
                                                        <label>Select Category :</label>
                                                        <ui-tree ng-model="assets"
                                                                 load-fn="loadChildren"
                                                                 expand-to="hierarchy"
                                                                 selected-id="111"
                                                                 attr-node-id="id"></ui-tree>
                                                        <label>Selected Category Id :</label><span
                                                                class="text-danger"><strong> @{{ selectedItem }} </strong> </span>
                                                    </div>

                                                    {{--<div class="col-md-7">
                                                        <label class="col-md-4 control-label">Show Item List With
                                                            Tag(s):
                                                        </label>
                                                        <div class="col-md-2">
                                                            <input type="checkbox" data-ng-model="WithTags"
                                                                   class="">
                                                        </div>
                                                    </div>--}}
                                                </div>
                                                <div class="row">
                                                    <div style="margin-top: 5px">&nbsp;</div>
                                                    <div class="col-lg-12">
                                                        {{-- <div>--}}
                                                        {{--<div class="col-lg-4 pull-left">
                                                            <label>Search Type</label>
                                                            <select data-ng-model="selectedFilter"
                                                                    class="form-control">
                                                                <option value="">
                                                                    -- Select Filter --
                                                                </option>
                                                                <option ng-repeat="filter in filterTypes"
                                                                        value="@{{ filter.key }}">
                                                                    @{{ filter.value }}
                                                                </option>
                                                            </select>
                                                        </div>--}}
                                                        <div class="col-lg-4 pull-left" ng-init="getPublisherList()">
                                                            <label>Select Publishes</label>
                                                            <select data-ng-model="publisherName"
                                                                    class="form-control">
                                                                <option value="">
                                                                    -- All Publishers --
                                                                </option>
                                                                <option ng-repeat="publisher in PublisherList"
                                                                        value="@{{ publisher.user_name }}">
                                                                    @{{ publisher.user_name }}
                                                                </option>
                                                            </select>
                                                        </div>
                                                        <div class="col-lg-4">
                                                            <label> Search Product</label>
                                                            <input data-ng-model="filterProduct"
                                                                   class="form-control"
                                                                   placeholder="Product To Filter">
                                                        </div>

                                                        <div class="col-lg-4">
                                                            <label>Show Product For</label>
                                                            <select data-ng-model="ShowFor"
                                                                    class="form-control">
                                                                <option value="">-- Select Type --</option>
                                                                <option ng-repeat="item in showForList"
                                                                        value="@{{ item }}">
                                                                    @{{ item }}
                                                                </option>
                                                            </select>
                                                        </div>
                                                        {{--  </div>--}}
                                                    </div>

                                                </div>
                                                <div style="margin-top: 5px">&nbsp;</div>
                                                <div class="row">
                                                    <div class="text-center">
                                                        <button class="btn btn-info" ng-click="showAllProduct()"
                                                                type="button"><i class="fa fa-search"></i> Search
                                                        </button>
                                                        &nbsp;&nbsp;
                                                        <button class="btn btn-warning" ng-click="resetFilter()"
                                                                type="button"><i class="fa fa-refresh"></i> Refresh
                                                        </button>
                                                        &nbsp;&nbsp;
                                                        <a class="btn btn-success" href="/admin/product-add"
                                                           type="button"><i class="fa fa-plus"></i> Add Item
                                                        </a>
                                                        &nbsp;&nbsp;
                                                        <a class="btn btn-info" href="/api/product/download-list"
                                                           type="button"><i class="fa fa-download"></i> Export List
                                                        </a>
                                                    </div>
                                                </div>
                                                <div style="margin-top: 5px">&nbsp;</div>
                                                <div class="row">
                                                    <div class="text-center">
                                                        <pagination ng-show="total != 0" total-items="total"
                                                                    ng-model="page" ng-change="showAllProduct()"
                                                                    items-per-page="limit"></pagination>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="form-group">
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
                                                                            <th class="col-md-2">Update</th>
                                                                            <th class="col-md-1">User</th>
                                                                            <th class="col-md-2">Product Name</th>
                                                                            <th class="col-md-1">Status</th>
                                                                            <th class="col-md-1">Category</th>
                                                                            <th class="col-md-1">Affiliate</th>
                                                                            <th class="col-md-1">List Price</th>
                                                                            <th class="col-md-1">Sell Price</th>
                                                                            <th class="col-md-1">Action</th>
                                                                        </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                        <tr ng-repeat="product in ProductList">
                                                                            <td>
                                                                                <a href="/product/@{{ product.product_permalink }}"
                                                                                   target="_blank">
                                                                                    <img id="currentPhoto"
                                                                                         ng-src='@{{ product.media_link }}'
                                                                                         onerror="this.src='http://s3-us-west-1.amazonaws.com/ideaing-01/thumb-product-568d28a6701c7-no-item.jpg'"
                                                                                         width="90">
                                                                                </a>
                                                                            </td>
                                                                            <td>@{{ product.updated_at }}</td>
                                                                            <td><b>@{{ product.user_name }}</b></td>
                                                                            <td>
                                                                                <a href="/admin/product-edit/@{{ product.id }}">@{{ product.product_name }}</a>
                                                                            </td>
                                                                            <td>
                                                                                <b ng-style="product.post_status == 'Inactive' && {'color': 'red'} || {'color': 'green'}">@{{ product.post_status }}</b>
                                                                            </td>
                                                                            <td>@{{ product.category_name }}</td>
                                                                            <td>
                                                                                <a ng-show="product.affiliate_link != null"
                                                                                   href="@{{ product.affiliate_link }}"
                                                                                   target="_blank">Link</a></td>
                                                                            <td>@{{ product.price }}</td>
                                                                            <td>@{{ product.sale_price }}</td>
                                                                            <td>
                                                                                <a href="/admin/product-edit/@{{ product.id }}"
                                                                                   target="_blank"
                                                                                   class="btn btn-info btn-circle"
                                                                                   uib-tooltip="Edit"
                                                                                   tooltip-placement="bottom"> <i
                                                                                            class="fa fa-edit"></i></a>
                                                                                <button data-ng-click="deleteProduct( product.id,false)"
                                                                                        confirm="Are you sure to delete this product ?"
                                                                                        confirm-settings="{size: 'sm'}"
                                                                                        uib-tooltip="Delete"
                                                                                        class="btn btn-danger btn-circle"
                                                                                        type="button">
                                                                                    <i class="fa fa-times"></i>
                                                                                </button>
                                                                            </td>
                                                                        </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                                <div class="text-center" ng-init="showAllProduct()">
                                                                    <pagination ng-show="total != 0" total-items="total"
                                                                                ng-model="page"
                                                                                ng-change="showAllProduct()"
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
