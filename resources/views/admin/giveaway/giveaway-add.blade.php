@extends('layouts.admin')
@section('pagelevelstyle')
    <link href="/assets/admin/vendor/global/plugins/bootstrap-fileinput/bootstrap-fileinput.css" rel="stylesheet" type="text/css" />
@stop
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
                    <span>Giveaway</span>
                    <i class="fa fa-circle"></i>
                </li>
                <li>
                @if($giveaway->id)
                    <span>Edit Giveaway</span>
                    @else
                    <span>Add Giveaway</span>
                    @endif
                </li>
            </ul>
        </div>
        <!-- END PAGE BAR -->
        <h5 > &nbsp;
        </h5>
        <div class="row">
            <div class="col-md-12">
                <div>
                @if($giveaway->id)
                    <form role="form" name="add-giveaway" enctype="multipart/form-data" method="post" action="/api/giveaway/update-giveaway"  class="form-horizontal form-row-seperated">
                    <input type="hidden" name="giveaway_id" id="giveaway_id" value="{{$giveaway->id}}">
                    @else
                    <form role="form" name="add-giveaway" enctype="multipart/form-data" method="post" action="/api/giveaway/add-giveaway"  class="form-horizontal form-row-seperated">
                    @endif
                        <div class="portlet light bordered">
                            <div class="portlet-title">
                                <div class="caption">
                                    <i class="fa fa-shopping-cart"></i>
                                    @if($giveaway->id)
                                    Edit Giveaway
                                    @else
                                    Add Giveaway
                                    @endif</div>
                                <div class="actions btn-set">
                                    <button  class="btn btn-success"><i class="fa fa-check"></i> Save</button>
                                    <button data-ng-click="deleteGiveaway({{$giveaway->id}}, true)"
                                            confirm="Are you sure to delete this giveaway ?"
                                            confirm-settings="{size: 'sm'}"
                                            uib-tooltip="Delete"
                                            class="btn btn-sm btn-danger btn-editable"
                                            type="button">
                                        <i class="fa fa-times"></i>
                                        Delete
                                    </button>
                                </div>
                            </div>
                            <div class="portlet-body form"  id="tag-giveaway">
                                <h3 class="form-section">Giveaway Info</h3>
                                <div class="row">
                                        <div class="col-lg-9">
                                            <div class="form-group">
                                                <label class="control-label col-md-3">Giveaway Title:</label>
                                                <div class="col-md-6">
                                                    <input name="giveaway_title" class="form-control"
                                                                   placeholder="Giveaway Title" value="{{$giveaway->giveaway_title}}">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-9">
                                            <div class="form-group">
                                                <label class="control-label col-md-3">Giveaway Permalink:</label>
                                                <div class="col-md-6">
                                                    <input name="giveaway_permalink" class="form-control"
                                                                   placeholder="Giveaway Permalink" value="{{$giveaway->giveaway_permalink}}">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                <div class="row">
                                    <div class="col-lg-9">
                                        <div class="form-group">
                                            <label class="control-label col-md-3">Goes Live:</label>
                                            <div class="col-md-6">
                                                <input name="goes_live" class="form-control datepicker"
                                                       placeholder="Select Date" value="{{date('m/d/Y', strtotime($giveaway->goes_live))}}">
                                                <script>
                                                </script>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-9">
                                        <div class="form-group">
                                            <label class="control-label col-md-3">Ends:</label>
                                            <div class="col-md-6">
                                                <input name="ends" class="form-control datepicker"
                                                       placeholder="Select Date" value="{{date('m/d/Y', strtotime($giveaway->ends))}}">
                                                <script>
                                                </script>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                    <div class="row">
                                        <div class="col-lg-9">
                                            <div class="form-group">
                                                <label class="control-label col-md-3">Description:</label>
                                                <div class="col-md-9">
                                                    <textarea  rows="6" name="giveaway_desc" class="wysihtml5 form-control htmlarea"
                                                                   placeholder="Description" value="{{$giveaway->giveaway_desc}}">{{$giveaway->giveaway_desc}}</textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-9">
                                            <div class="form-group">
                                                <label class="control-label col-md-3">Terms of Conditions:</label>
                                                <div class="col-md-9">
                                                    <textarea  rows="6" name="giveaway_toc" class="wysihtml5 form-control"
                                                                   placeholder="Terms of Conditions" value="{{$giveaway->giveaway_toc}}">{{$giveaway->giveaway_toc}}</textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-9">
                                            <div class="form-group">
                                                <label class="control-label col-md-3">Meta Description:</label>
                                                <div class="col-md-9">
                                                    <textarea  rows="6" name="giveaway_meta_desc" class="form-control"
                                                                   placeholder="Terms of Conditions" value="{{$giveaway->giveaway_meta_desc}}">{{$giveaway->giveaway_meta_desc}}</textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                <h3 class="form-section">Giveaway Image</h3>
                                <div class="" id="Giveaway">
                                    
                                    <div class="form-group">
                                        <div class="col-md-12">
                                            <div class="fileinput fileinput-new" data-provides="fileinput">
                                                <div class="fileinput-new thumbnail" style="width: 100%;" data-image="giveaway_image">
                                                    <img style="width: 100%;" src="http://www.placehold.it/500x350/EFEFEF/AAAAAA&amp;text=no+image" alt="" />
                                                </div>    
                                                <div class="fileinput-preview fileinput-exists thumbnail" style="width: 100%;" data-image="giveaway_image"> 
                                                    @if($giveaway->giveaway_image)
                                                    <img style="width: 100%;" src="{{$giveaway->giveaway_image}}" alt="" id="giveaway_image_img" />
                                                    @endif
                                                </div>
                                                
                                                <div>
                                                    <span class="btn default btn-file ">
                                                        <span class="fileinput-new"> Select image </span>
                                                        <span class="fileinput-exists"> Change </span>
                                                        <input type="file" id="giveaway_image" name="giveaway_image" class="hero-image" accept='image/*'> </span>
                                                    <a href="javascript:;" class="btn red fileinput-exists" data-dismiss="fileinput"> Remove </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="control-label col-md-3">Image Title:</label>
                                                <div class="col-md-9">
                                                    <input class="form-control"
                                                                   placeholder="Image Title" name="giveaway_image_title" id="giveaway_image_title" value="{{$giveaway->giveaway_image_title}}">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="col-md-3 control-label">Alt Text:
                                                </label>
                                                <div class="col-md-9">
                                                    <input class="form-control"
                                                                   placeholder="Alt Text" name="giveaway_image_alt" id="giveaway_image_alt" value="{{$giveaway->giveaway_image_alt}}">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <h3 class="form-section">Mobile Image</h3>
                                <div class="" id="Giveaway">
                                    <div class="form-group">
                                        <div class="col-md-12">
                                            <div class="fileinput fileinput-new" data-provides="fileinput">
                                                <div class="fileinput-new thumbnail" style="width: 100%;" data-image="giveaway_mobile_image">
                                                    <img style="width: 100%;" src="http://www.placehold.it/500x350/EFEFEF/AAAAAA&amp;text=no+image" alt="" />
                                                </div>
                                                <div class="fileinput-preview fileinput-exists thumbnail" style="width: 100%;" data-image="giveaway_mobile_image">
                                                    @if($giveaway->giveaway_mobile_image)
                                                    <img style="width: 100%;" src="{{$giveaway->giveaway_mobile_image}}" alt="" id="giveaway_mobile_image_img" />
                                                    @endif
                                                </div>

                                                <div>
                                                    <span class="btn default btn-file ">
                                                        <span class="fileinput-new"> Select image </span>
                                                        <span class="fileinput-exists"> Change </span>
                                                        <input type="file" id="giveaway_mobile_image" name="giveaway_mobile_image" class="hero-image" accept='image/*'> </span>
                                                    <a href="javascript:;" class="btn red fileinput-exists" data-dismiss="fileinput"> Remove </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    @if(isset($giveawayUsers))
                        <h3>Participants:</h3>
                        <table class="table">
                            <tbody class="">
                                <?php $i =1 ?>
                                @foreach($giveawayUsers as $email => $name)
                                       <tr>
                                            <td>{{$i}}</td>
                                            <td>{{$name}}</td>
                                            <td>{{$email}}</td>
                                       </tr>
                                <?php $i++; ?>       
                                @endforeach
                            </tbody>    
                        </table>
                    @endif
                </div>
            </div>
        </div>
    </div>
</div>

@stop
@section('pagelevelscript')
<script src="/assets/admin/vendor/global/plugins/jhtml/jHtmlArea-0.8.min.js"></script>
<script src="/assets/admin/vendor/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js" type="text/javascript"></script>


<script>
$(function() {

    $('textarea.htmlarea').htmlarea({
        toolbar: [
                "bold", "italic", "underline",
                "orderedList", "unorderedList",
                "link", "unlink"
            ]
    });

    $( ".datepicker" ).datepicker();

    @if($giveaway->giveaway_image)
    $('#Giveaway .fileinput.fileinput-new').removeClass('fileinput-new').addClass('fileinput-exists');
    @endif

 

});

</script>
@stop