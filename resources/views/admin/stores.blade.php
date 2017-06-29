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
                        <span>Manage Stores</span>
                    </li>
                </ul>
            </div>
            <!-- END PAGE BAR -->
            <div {{--ng-app="adminApp" data-ng-controller="AdminController"--}} class="row" nv-file-drop="" uploader="uploader"
                 filters="queueLimit, customFilter">

                <div class="col-md-12" ng-cloak>
                    @if( !empty($id))
                        <div ng-init="loadProductData({{$id}})"></div>
                    @endif
                    <div ng-init="loadAddProduct()">
                        <form role="form" name="myForm" enctype="multipart/form-data"
                              class="form-horizontal form-row-seperated">
                            <div class="portlet">
                                <div class="portlet-title">

                                    <div class="caption">
                                        <i class="fa fa-shopping-cart"></i>Manage Stores
                                    </div>
                                    <div class="actions btn-set">

                                        <button ng-click="updateStore()" ng-disabled="mediaLink == ''"
                                                class="btn btn-success">
                                            <i class="fa fa-check"></i> Update
                                        </button>

                                        <button ng-show="StoreStatus == 'Inactive' && StoreId != ''"
                                                data-ng-click="changeStoreActivation()"
                                                class="btn btn-info" type="button">
                                            <i class="fa fa-check-circle"></i> Active
                                        </button>
                                        <button ng-show="StoreStatus == 'Active' && StoreId != ''"
                                                data-ng-click="changeStoreActivation()"
                                                class="btn btn-warning" type="button">
                                            <i class="fa fa-angle-left"></i> Inactive
                                        </button>
                                        <button ng-hide="ProductId == ''"
                                                data-ng-click="deleteProduct(ProductId,true)"
                                                confirm="Are you sure to delete this product ?"
                                                confirm-settings="{size: 'sm'}"
                                                class="btn btn-danger" type="button">
                                            <i class="fa fa-times"></i> Delete
                                        </button>
                                    </div>
                                </div>
                                <div class="portlet-body">
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
                                    <div class="tabbable-bordered">
                                        <ul class="nav nav-tabs">
                                            <li class="active">
                                                <a href="#media" data-toggle="tab">Stores
                                                </a>
                                            </li>
                                            {{-- <li>
                                                  <a href="#media" data-toggle="tab">i
                                                  </a>
                                              </li>--}}
                                        </ul>
                                        <div class="tab-content">
                                            <div class="tab-pane fade active in" id="media">
                                                <h4>Store Inforamtion</h4>
                                                <div class="form-body">
                                                    <div class="form-group">
                                                        <label class="col-md-2 control-label">Store Name :
                                                        </label>
                                                        <div class="col-md-4">
                                                            <input data-ng-model="StoreName" class="form-control"
                                                                   placeholder="Enter media title">
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="col-md-2 control-label">Store Identifier :
                                                        </label>
                                                        <div class="col-md-4">
                                                            <input data-ng-model="StoreIdentifier" class="form-control"
                                                                   placeholder="Enter media title">
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="col-md-2 control-label">Store Description :
                                                        </label>
                                                        <div class="col-md-4">
                                                            <input data-ng-model="StoreDescription" class="form-control"
                                                                   placeholder="Enter media title">
                                                        </div>
                                                    </div>

                                                    <div class="form-group">
                                                        <label class="col-md-2 control-label">Media Link :
                                                        </label>
                                                        <div class="col-md-8">
                                                            <input data-ng-model="mediaLink"
                                                                   data-ng-readonly="true"
                                                                   class="form-control" placeholder="Enter media link">
                                                        </div>
                                                    </div>

                                                    <div class="form-group">
                                                        <label class="col-md-2 control-label">Logo :
                                                        </label>
                                                        <div class="col-md-8">
                                                            <img id="currentPhoto"
                                                                 ng-src='@{{ mediaLink }}'
                                                                 onerror="this.src='http://s3-us-west-1.amazonaws.com/ideaing-01/thumb-product-568d28a6701c7-no-item.jpg'"
                                                                 width="90">
                                                        </div>
                                                    </div>

                                                    <div class="form-group">
                                                        <div ng-show="isMediaUploadable">
                                                            <label class="col-md-2 control-label">Upload Media
                                                                Content</label>
                                                            <div class="col-md-4">
                                                                <input type="file" name="file" nv-file-select=""
                                                                       uploader="uploader"/>
                                                            </div> <label> <strong>Recommended Image Size: (120 x 25) px </strong></label>
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <div class="col-md-4">
                                                            <button type="button"
                                                                    ng-show="isMediaUploadable"
                                                                    class="btn btn-success btn-s"
                                                                    ng-click="uploader.uploadAll()">Upload
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <div class="col-md-4">
                                                            <button ng-show="isMediaEdit" type="button"
                                                                    class="btn btn-warning"
                                                                    ng-click="updateMediaInfo()">Update
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <div class="col-lg-12">
                                                            <!-- media list  -->
                                                            <div class="table-responsive" ng-init="loadAllStores()">
                                                                <table class="table table-striped table-bordered table-hover">
                                                                    <thead>
                                                                    <tr>
                                                                        <th class="col-md-1">Logo</th>
                                                                        <th class="col-md-2">Name</th>
                                                                        <th class="col-md-1">Unique ID</th>
                                                                        <th class="col-md-1">Status</th>
                                                                        <th class="col-md-2">Image Description</th>
                                                                        <th class="col-md-4">ImageLink</th>

                                                                        <th class="col-md-1">Action</th>
                                                                    </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                    <tr ng-repeat="store in storeList">
                                                                        <td>
                                                                            <img id="currentPhoto"
                                                                                 ng-src='@{{ store.ThumbImageLink }}'
                                                                                 onerror="this.src='http://s3-us-west-1.amazonaws.com/ideaing-01/thumb-product-568d28a6701c7-no-item.jpg'"
                                                                                 width="90">
                                                                        </td>
                                                                        <td>@{{ store.Name}}</td>
                                                                        <td>@{{ store.Identifier}} </td>
                                                                        <td>@{{ store.Status == 'Active'? 'Active':'Inactive'}} </td>
                                                                        <td>@{{ store.Description}} </td>
                                                                        <td>@{{ store.ImageLink}} </td>
                                                                        <td>
                                                                            <button ng-click="editStore($index)"
                                                                                    class="btn btn-info btn-circle"
                                                                                    uib-tooltip="Edit"
                                                                                    tooltip-placement="bottom">
                                                                                <i class="fa fa-edit"></i>
                                                                            </button>

                                                                            <button data-ng-click="deleteStore(store.Id)"
                                                                                    confirm="Are you sure to delete this item ?"
                                                                                    confirm-settings="{size: 'sm'}"
                                                                                    class="btn btn-danger btn-circle"
                                                                                    uib-tooltip="Delete"
                                                                                    tooltip-placement="bottom">
                                                                                <i class="fa fa-times"></i>
                                                                            </button>
                                                                        </td>
                                                                        <br/>
                                                                    </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                            <!-- end media list  -->
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <!-- /.col-lg-12 --                </div>
    >
            </div>
            <!-- /.row -->
            </div>
        </div>
    </div>
@stop