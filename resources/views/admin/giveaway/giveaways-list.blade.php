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
                    <span>Giveaway List</span>
                </li>
            </ul>
        </div>
        <!-- END PAGE BAR -->
        <div class="row" ng-init="showAllGiveaways()">
            <div class="col-lg-12">
                <h4 class="page-header">Giveaway List</h4>
            </div>
            <!-- /.col-lg-12 -->
        </div>

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


        <div class="row">
            <div class="col-lg-12">
                <div class="portlet light bordered">
                    <div class="portlet-title">
                        <div class="caption font-dark">
                            <i class="icon-settings font-dark"></i>
                            <span class="caption-subject bold uppercase"> Giveaway List</span>
                        </div>
                    </div>
                    <div class="portlet-body">
                        <div class="table-toolbar">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="btn-group">
                                        <a href="/admin/giveaway-add" class="btn sbold green"> Add New
                                            <i class="fa fa-plus"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <table class="table table-striped table-bordered table-hover table-checkable order-column" id="giveaway">
                            <thead>
                                <tr>
                                    <th> Giveaway Title </th>
                                    <th> Actions </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr ng-repeat="giveaway in GiveawayList" ng-cloak>
                                    <td>@{{giveaway.giveaway_title }}</td>
                                    <td>
                                        <a href="/admin/giveaway-edit/@{{giveaway.id}}"
                                                class="btn btn-sm btn-default blue btn-editable">
                                            <i class="fa fa-pencil"></i>
                                            Edit
                                        </a>
                                        <button data-ng-click="deleteGiveaway(giveaway.id, false)"
                                                confirm="Are you sure to delete this giveaway ?"
                                                confirm-settings="{size: 'sm'}"
                                                uib-tooltip="Delete"
                                                class="btn btn-sm btn-danger btn-editable"
                                                type="button">
                                            <i class="fa fa-times"></i>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>                
            <!-- /.row -->
        </div>    
    </div>
</div>
@stop

