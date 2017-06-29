@extends('layouts.admin')

@section('content')

    <div class="page-content-wrapper">
        <div class="page-content">
            <!-- BEGIN PAGE BAR -->
            <div class="page-bar">
                <ul class="page-breadcrumb">
                    <li>
                        <a href="/admin/dashboard">Admin</a>
                        <i class="fa fa-circle"></i>
                    </li>
                    <li>
                        <span>Add / Update Product</span>
                    </li>
                </ul>
            </div>
            <!-- END PAGE BAR -->
            <div {{--ng-app="adminApp" data-ng-controller="AdminController"--}} class="row" nv-file-drop=""
                 uploader="uploader"
                 filters="queueLimit, customFilter" ng-cloak>

                <input type="hidden" ng-model="ProductAuthorName" ng-init="ProductAuthorName = '{{$userName}}' ">
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
                                        <i class="fa fa-shopping-cart"></i>Add / Update Product
                                    </div>
                                    <div class="actions btn-set">

                                        <button data-ng-click="updateProduct()" class="btn btn-success">
                                            <i class="fa fa-check"></i> Save
                                        </button>
                                        <button ng-hide="WpProductId != null || ProductId == ''" data-ng-click="syncWpProductInfo(true)" class="btn btn-info">
                                            <i class="fa fa-upload"></i> Sync
                                        </button>
                                        <button ng-hide="Permalink == ''"
                                                data-ng-click="previewProduct(Permalink)" class="btn btn-success">
                                            <i class="fa fa-eye"></i> Preview
                                        </button>
                                        <button ng-hide="PostStatus == 'Active'"
                                                data-ng-click="changeProductActivation()"
                                                class="btn btn-info" type="button">
                                            <i class="fa fa-check-circle"></i> Active
                                        </button>
                                        <button ng-hide="PostStatus == 'Inactive'"
                                                data-ng-click="changeProductActivation()"
                                                class="btn btn-warning" type="button">
                                            <i class="fa fa-angle-left"></i> Inactive
                                        </button>
                                        @if(!empty($id))
                                            <button ng-hide="ProductId == ''"
                                                    data-ng-click="promoteProduct({{$id}})"
                                                    confirm="Are you sure to promote this product ?"
                                                    confirm-settings="{size: 'sm'}"
                                                    class="btn btn-success" type="button">
                                                <i class="fa fa-flash"></i> Promote
                                            </button>
                                        @endif
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
                                                <a href="#home" data-toggle="tab"> Home </a>
                                            </li>
                                            <li>
                                                <a href="#specification" data-toggle="tab"> Specification </a>
                                            </li>
                                            <li>
                                                <a href="#review" data-toggle="tab"> Review </a>
                                            </li>
                                            <li>
                                                <a ng-hide="ProductId == ''" href="#media" data-toggle="tab"> Media
                                                    Content
                                                </a>
                                            </li>
                                        </ul>
                                        <div class="tab-content">
                                            <div class="tab-pane fade active in" id="home">
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

                                                    <div class="form-group">
                                                        <label class="col-md-2 control-label">Associate Tag (Auto
                                                            Complete)</label>
                                                        <div class="col-md-10">
                                                            <tags-input ng-model="Tags"
                                                                        display-property="name"
                                                                        add-from-autocomplete-only="true">
                                                                <auto-complete min-length="3"
                                                                               source="searchTagByName($query)">
                                                                </auto-complete>
                                                            </tags-input>
                                                        </div>
                                                    </div>

                                                    <div class="form-group">
                                                        <label class="col-md-2 control-label">Store Name</label>
                                                        <div class="col-md-5" ng-init="loadAllStores()">
                                                            <select class="form-control" ng-model="StoreId"
                                                                    ng-options="store.Name for store in storeList track by store.Id"></select>
                                                        </div>
                                                    </div>

                                                    <div class="form-group">
                                                        <label class="col-md-2 control-label">Product ID:
                                                        </label>

                                                        <div class="col-md-5">
                                                            <input data-ng-model="ProductVendorId"
                                                                   class="form-control"
                                                                   placeholder="Amazon - ASIN">
                                                        </div>
                                                        <div class="col-lg-5">
                                                            <button class="btn blue"
                                                                    type="button"
                                                                    ng-click="loadProductInfoFromApi(ProductVendorId)"
                                                                    uib-tooltip="Load Information"
                                                                    tooltip-placement="right">
                                                                Amazon API Load
                                                                {{--<i class="fa fa-refresh"></i>--}}
                                                            </button>
                                                            &nbsp; <b>Last Update
                                                                : @{{ UpdateTime | date:'dd-MMM-yy HH:mm' }}</b>

                                                        </div>

                                                    </div>

                                                    <div class="form-group">
                                                        <label class="col-md-2 control-label">Show Product For:
                                                        </label>
                                                        <div class="col-md-5">
                                                            <select data-ng-model="ShowFor"
                                                                    class="form-control">
                                                                <option ng-repeat="item in showForList"
                                                                        value="@{{ item }}">
                                                                    @{{ item }}
                                                                </option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div class="form-group">
                                                        <label class="col-md-2 control-label">Product Name:
                                                        </label>
                                                        <div class="col-md-10">
                                                            <input data-ng-model="Name" class="form-control"
                                                                   placeholder="Enter product name">
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="col-md-2 control-label">Permalink:
                                                        </label>
                                                        <div class="col-md-10">
                                                            <input data-ng-model="Permalink" class="form-control"
                                                                   placeholder="Modify permalink">
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="col-md-2 control-label">Publishing Date:
                                                        </label>
                                                        <div class="col-md-4">
                                                            <p class="input-group">
                                                                <input type="date" class="form-control"
                                                                       uib-datepicker-popup ng-model="datePicker"
                                                                       is-open="status.opened"
                                                                       min-date="minDate"
                                                                       max-date="maxDate"
                                                                       datepicker-options="dateOptions"
                                                                       ng-required="true"
                                                                       close-text="Close"
                                                                       onkeydown="return false"
                                                                />
                                                              <span class="input-group-btn">
                                                                <button type="button" class="btn btn-default"
                                                                        ng-click="open($event)">
                                                                    <i class="glyphicon glyphicon-calendar"></i>
                                                                </button>
                                                              </span>

                                                            </p>
                                                        </div>

                                                    </div>
                                                    <div class="form-group">
                                                        <label class="col-md-2 control-label">Publish Time:
                                                        </label>
                                                        <div class="col-md-4">
                                                            <div uib-timepicker ng-model="publishTime"
                                                                 ng-change="changed()" hour-step="1"
                                                                 minute-step="5" show-meridian="true"></div>
                                                        </div>
                                                    </div>

                                                    <div class="form-group">
                                                        <label class="col-md-2 control-label">Description:
                                                        </label>
                                                        <div class="col-md-10">
                                                            <div text-angular data-ng-model="htmlContent"
                                                                 name="description-editor"
                                                                 ta-text-editor-class="border-around ta-editor"
                                                                 ta-html-editor-class="border-around ta-editor">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="col-md-2 control-label">List Price:
                                                        </label>
                                                        <div class="col-md-10">
                                                            <input type="text"
                                                                   valid-number
                                                                   data-ng-model="Price"
                                                                   class="form-control"
                                                                   placeholder="Enter Price (Decimal number only)">
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="col-md-2 control-label">Sale Price:
                                                        </label>
                                                        <div class="col-md-10">
                                                            <input type="text"
                                                                   valid-number
                                                                   data-ng-model="SalePrice"
                                                                   class="form-control"
                                                                   placeholder="Enter Sale Price (Decimal number only)">
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="col-md-2 control-label">
                                                            <a ng-href="@{{ AffiliateLink }}" target="_blank">Affiliate
                                                                Link</a>
                                                        </label>
                                                        <div class="col-md-10">
                                                            <input data-ng-model="AffiliateLink"
                                                                   class="form-control"
                                                                   placeholder="Enter text">
                                                        </div>
                                                    </div>
                                                    <div ng-hide="ProductId == ''" class="form-group">
                                                        <label class="col-md-2 control-label">Ideas Short Link</label>
                                                        <div class="col-md-10">
                                                            <input class="form-control" ng-readonly="true"
                                                                   value="{{URL::to('/')}}/open/@{{ ProductId }}/ideas">
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="col-md-2 control-label">Price Grabber Id</label>
                                                        <div class="col-md-10">
                                                            <input data-ng-model="PriceGrabberId"
                                                                   class="form-control"
                                                                   placeholder="Enter text">
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="col-md-2 control-label">Free Shipping Available
                                                            : </label>
                                                        <div class="col-md-10">
                                                            <input type="checkbox" data-ng-model="FreeShipping"
                                                                   class="">
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="col-md-2 control-label">Coupon Code</label>
                                                        <div class="col-md-10">
                                                            <input data-ng-model="CouponCode" class="form-control"
                                                                   placeholder="Enter text">
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="col-md-2 control-label">Page Title</label>
                                                        <div class="col-md-10">
                                                            <input data-ng-model="PageTitle" class="form-control"
                                                                   placeholder="Enter text">
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="col-md-2 control-label">Meta Description</label>
                                                        <div class="col-md-10">
                                                            <input data-ng-model="MetaDescription"
                                                                   class="form-control"
                                                                   placeholder="Enter text">
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="col-md-2 control-label">Similar Products (Auto
                                                            Complete)</label>
                                                        <div class="col-md-10">
                                                            <tags-input ng-model="productTags"
                                                                        display-property="name"
                                                                        add-from-autocomplete-only="true">
                                                                <auto-complete min-length="4"
                                                                               source="searchProductByName($query)">
                                                                </auto-complete>
                                                            </tags-input>
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="col-md-2 control-label">Product
                                                            Availability</label>
                                                        <div class="col-md-10">
                                                            <input data-ng-model="ProductAvailability"
                                                                   class="form-control" placeholder="Enter text">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="tab-pane fade" id="specification">
                                                <h4>Specification</h4>
                                                <div class="form-body">
                                                    <div class="form-group">
                                                        <div class="col-md-3">
                                                            <input type='text' ng-model="spKey" placeholder="key"
                                                                   class="form-control">
                                                        </div>
                                                        <div class="col-md-3">
                                                            <input type='text' ng-model="spVal" placeholder="value"
                                                                   class="form-control">
                                                        </div>
                                                        <div class="col-md-3">
                                                            <button ng-click="addSpecFormField()"
                                                                    ng-show="!isUpdateSpecShow"
                                                                    class="btn btn-primary btn-circle" uib-tooltip="Add"
                                                                    tooltip-placement="bottom">
                                                                <i class="fa fa-plus"></i>
                                                            </button>
                                                            <button ng-click="updateSpecFormField()"
                                                                    ng-show="isUpdateSpecShow"
                                                                    class="btn btn-success btn-circle"
                                                                    uib-tooltip="Update"
                                                                    tooltip-placement="bottom">
                                                                <i class="fa fa-check"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-lg-8">
                                                        <div class="panel panel-default">
                                                            <div class="panel-heading"> Specification Key Value List
                                                            </div>
                                                            <div class="panel-body">
                                                                <div class="table-responsive">
                                                                    <table class="table table-striped table-bordered table-hover">
                                                                        <thead>
                                                                        <tr>
                                                                            <th class="col-lg-1">#</th>
                                                                            <th class="col-lg-3">Key</th>
                                                                            <th class="col-lg-6">Value</th>
                                                                            <th class="col-lg-2">Action</th>
                                                                        </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                        <tr ng-repeat="spec in Specifications">
                                                                            <td>@{{$index}}</td>
                                                                            <td>@{{ spec.key }}</td>
                                                                            <td>@{{ spec.value }}</td>
                                                                            <td>
                                                                                <button ng-click="editSpecFormField($index)"
                                                                                        class="btn btn-info btn-circle"
                                                                                        uib-tooltip="Edit"
                                                                                        tooltip-placement="bottom">
                                                                                    <i class="fa fa-edit"></i>
                                                                                </button>
                                                                                <button ng-click="deleteSpecFormField($index)"
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
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="review">
                                                <h4>Review</h4>
                                                <div class="form-body">
                                                    <div class="form-group">
                                                        <div class="col-md-2">
                                                            <input type='text' ng-model="reviewKey" placeholder="key"
                                                                   class="form-control">
                                                        </div>
                                                        <div class="col-md-2">
                                                            <input type='text' ng-model="reviewLink" placeholder="Link"
                                                                   class="form-control">
                                                        </div>
                                                        <div class="col-md-2">
                                                            <input type='text' ng-readonly="readOnlyReviewCounter"
                                                                   ng-model="reviewCounter"
                                                                   placeholder="Customer Reviews"
                                                                   class="form-control">
                                                        </div>
                                                        <div class="col-md-2">
                                                            <ng-rate-it ng-model="reviewValue"
                                                                        read-only="false"
                                                                        resetable="false">
                                                            </ng-rate-it>
                                                        </div>
                                                        <div class="col-md-2">
                                                            <button ng-click="addReviewFormField()"
                                                                    ng-show="!isUpdateReviewShow"
                                                                    class="btn btn-primary btn-circle" uib-tooltip="Add"
                                                                    tooltip-placement="bottom">
                                                                <i class="fa fa-plus"></i>
                                                            </button>
                                                            <button ng-click="updateReviewFormField()"
                                                                    ng-show="isUpdateReviewShow"
                                                                    class="btn btn-success btn-circle"
                                                                    uib-tooltip="Update"
                                                                    tooltip-placement="bottom">
                                                                <i class="fa fa-check"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-lg-8">
                                                        <div class="panel panel-default">
                                                            <div class="panel-heading"> Rating Key Value List
                                                            </div>
                                                            <div class="panel-body">
                                                                <div class="table-responsive">
                                                                    <table class="table table-striped table-bordered table-hover">
                                                                        <thead>
                                                                        <tr>
                                                                            <th>#</th>
                                                                            <th>Key</th>
                                                                            <th>Counter</th>
                                                                            <th>Value</th>
                                                                            <th>Action</th>
                                                                        </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                        <tr ng-repeat="review in reviews">
                                                                            <td>@{{$index}}</td>
                                                                            <td><a ng-hide="$index==0"
                                                                                   href="@{{ review.link }}"
                                                                                   target="_blank">
                                                                                    @{{ review.key }}
                                                                                </a>

                                                                                <div ng-show="$index==0">
                                                                                    @{{ review.key }}
                                                                                </div>
                                                                            </td>
                                                                            <td>@{{ review.counter }}</td>

                                                                            <td>

                                                                                <ng-rate-it ng-model="review.value"
                                                                                            read-only="true"
                                                                                            resetable="false">
                                                                                </ng-rate-it>

                                                                            </td>
                                                                            <td>

                                                                                <button ng-click="editReviewFormField($index)"
                                                                                        ng-hide="$index==0"
                                                                                        class="btn btn-info btn-circle"
                                                                                        uib-tooltip="Edit"
                                                                                        tooltip-placement="bottom">
                                                                                    <i class="fa fa-edit"></i>
                                                                                </button>


                                                                                <button ng-click="deleteReviewFormField($index)"
                                                                                        ng-hide="$index <2"
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
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-body">
                                                    <div class="form-group">
                                                        <div class="col-md-3">
                                                            <label>Ideaing Review</label>
                                                            <ng-rate-it ng-model="ideaingReviewScore"
                                                                        read-only="false"
                                                                        resetable="true">
                                                            </ng-rate-it>
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <div class="col-lg-6">
                                                            <label>External Review Link</label>

                                                            <div class="col-sm-12 outline: 1px solid orange;">
                                                                <div text-angular data-ng-model="externalReviewLink"
                                                                     name="review-editor"
                                                                     ta-text-editor-class="border-around ta-editor"
                                                                     ta-html-editor-class="border-around ta-editor">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="media">
                                                <h4>Image Video upload</h4>
                                                <div class="form-body">
                                                    <div class="form-group">
                                                        <label class="col-md-2 control-label">Media Title :
                                                        </label>
                                                        <div class="col-md-4">
                                                            <input data-ng-model="mediaTitle" class="form-control"
                                                                   placeholder="Enter media title">
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="col-md-2 control-label">Media Sequence :
                                                        </label>
                                                        <div class="col-md-4">
                                                            <select data-ng-model="selectedMediaSequence"
                                                                    class="form-control"
                                                                    ng-options="item for item in mediaSequenceArray track by item">
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="col-md-2 control-label">Media Type :
                                                        </label>
                                                        <div class="col-md-4">
                                                            <select data-ng-model="selectedMediaType"
                                                                    data-ng-change="mediaTypeChange()"
                                                                    class="form-control">
                                                                <option ng-repeat="media in mediaTypes"
                                                                        value="@{{ media.key }}">
                                                                    @{{ media.value }}
                                                                </option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="col-md-2 control-label">Media Link :
                                                        </label>
                                                        <div class="col-md-8">
                                                            <input data-ng-model="mediaLink"
                                                                   data-ng-readonly="isMediaUploadable"
                                                                   class="form-control" placeholder="Enter media link">
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="col-md-2 control-label">Mark As Hero Item :
                                                        </label>
                                                        <div class="col-md-4">
                                                            <input type="checkbox" data-ng-model="isHeroItem"/>
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="col-md-2 control-label">Thumb Item :
                                                        </label>
                                                        <div class="col-md-4">
                                                            <input data-ng-model="isMainItem" type="checkbox"/>
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <div ng-show="isMediaUploadable">
                                                            <label class="col-md-2 control-label">Upload Media
                                                                Content</label>
                                                            <div class="col-md-4">
                                                                <input type="file" name="file" nv-file-select=""
                                                                       uploader="uploader"/>
                                                            </div>
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
                                                            <button ng-hide="isMediaEdit" type="button"
                                                                    class="btn btn-primary"
                                                                    ng-click="addMediaInfo()">Add In List
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <div class="col-lg-12">
                                                            <!-- media list  -->
                                                            <div class="table-responsive">
                                                                <table class="table table-striped table-bordered table-hover">
                                                                    <thead>
                                                                    <tr>
                                                                        <th class="col-md-1">Image</th>
                                                                        <th class="col-md-2">Title</th>
                                                                        <th class="col-md-1">Sequnce</th>
                                                                        <th class="col-md-1">Type</th>
                                                                        <th class="col-md-1">Hero</th>
                                                                        <th class="col-md-1">Thumb</th>
                                                                        <th class="col-md-4">Link</th>
                                                                        <th class="col-md-1">Action</th>
                                                                    </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                    <tr ng-repeat="media in mediaList">
                                                                        <td><img width="110px"
                                                                                 ng-src="@{{ media.media_link }}"></td>
                                                                        <td>@{{ media.media_name}}</td>
                                                                        <td>@{{ media.sequence == 0?'':media.sequence}}</td>
                                                                        <td>@{{ media.media_type}} </td>
                                                                        <td>@{{ media.is_hero_item == 1? 'true':''}} </td>
                                                                        <td>@{{ media.is_main_item == 1? 'true':''}} </td>
                                                                        <td>
                                                                            <a href="@{{ media.media_link}}"
                                                                               target="_blank">
                                                                                @{{ media.media_link}}
                                                                            </a>
                                                                        </td>
                                                                        <td>
                                                                            <button ng-click="editMedia($index)"
                                                                                    class="btn btn-info btn-circle"
                                                                                    uib-tooltip="Edit"
                                                                                    tooltip-placement="bottom">
                                                                                <i class="fa fa-edit"></i>
                                                                            </button>

                                                                            <button data-ng-click="deleteMedia(media.id)"
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