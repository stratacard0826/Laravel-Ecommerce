@extends('layouts.admin')
@section('pagelevelstyle')
<link href="/assets/admin/vendor/global/plugins/bootstrap-fileinput/bootstrap-fileinput.css" rel="stylesheet" type="text/css" />
<link href="/assets/admin/vendor/global/plugins/select2/css/select2.min.css" rel="stylesheet" type="text/css" />
<link href="/assets/admin/vendor/global/plugins/select2/css/select2-bootstrap.min.css" rel="stylesheet" type="text/css" />
<link href="/assets/admin/vendor/global/plugins/bootstrap-wysihtml5/bootstrap-wysihtml5.css" rel="stylesheet" type="text/css" />
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
                    <span>Hero</span>
                    <i class="fa fa-circle"></i>
                </li>
                <li>
                @if($homehero->id)
                    <span>Edit Hero Image</span>
                    @else
                    <span>Add Hero Image</span>
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
                @if($homehero->id)
                    <form role="form" name="add-home-hero" enctype="multipart/form-data" method="post" action="/api/homehero/update-home-hero"  class="form-horizontal form-row-seperated">
                    <input type="hidden" name="home_hero_id" id="home_hero_id" value="{{$homehero->id}}">
                    @else
                    <form role="form" name="add-home-hero" enctype="multipart/form-data" method="post" action="/api/homehero/add-home-hero"  class="form-horizontal form-row-seperated">
                    @endif
                        <div class="portlet light bordered">
                            <div class="portlet-title">
                                <div class="caption">
                                    <i class="fa fa-shopping-cart"></i>
                                    @if($homehero->id)
                                    Edit Hero Image
                                    @else
                                    Add Hero Image
                                    @endif</div>
                                <div class="actions btn-set">
                                    <button  class="btn btn-success">
                                        <i class="fa fa-check"></i> Save</button>
                                </div>
                            </div>
                            <div class="portlet-body form"  id="tag-hero">
                                <h3 class="form-section">Hero Image</h3>
                                <div class="" id="Hero">
                                    <div class="form-group">
                                        <div class="col-md-12">
                                            <div class="fileinput fileinput-new" data-provides="fileinput">
                                                <div class="fileinput-new thumbnail" style="width: 100%;" data-image="hero_image">
                                                    <img style="width: 100%;" src="http://www.placehold.it/1500x550/EFEFEF/AAAAAA&amp;text=no+image" alt="" />
                                                </div>    
                                                <div class="fileinput-preview fileinput-exists thumbnail" style="width: 100%;" data-image="hero_image"> 
                                                    @if($homehero->hero_image)
                                                    <img style="width: 100%;" src="{{$homehero->hero_image}}" alt="" id="hero_image_img" />
                                                    @endif
                                                </div>
                                                
                                                <div>
                                                    <span class="btn default btn-file ">
                                                        <span class="fileinput-new"> Select image </span>
                                                        <span class="fileinput-exists"> Change </span>
                                                        <input type="file" id="hero_image" name="hero_image" class="hero-image" accept='image/*'> </span>
                                                    <a href="javascript:;" class="btn red fileinput-exists" data-dismiss="fileinput"> Remove </a>
                                                    <span style="float:right">image should be 1500 x 500</span>
                                                </div>
                                            </div>
                                            <input type="hidden" id="hero_image_products" name="hero_image_products" />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="control-label col-md-3">Image Title:</label>
                                                <div class="col-md-9">
                                                    <input class="form-control"
                                                                   placeholder="Image Title" name="hero_image_title" id="hero_image_title" value="{{$homehero->hero_image_title}}">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="col-md-3 control-label">Alt Text:
                                                </label>
                                                <div class="col-md-9">
                                                    <input class="form-control"
                                                                   placeholder="Alt Text" name="hero_image_alt" id="hero_image_alt" value="{{$homehero->hero_image_alt}}">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="col-md-3 control-label">Caption:
                                                </label>
                                                <div class="col-md-9">
                                                    <input class="form-control"
                                                                   placeholder="Image Title" name="hero_image_caption" id="hero_image_caption" value="{{$homehero->hero_image_caption}}">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="col-md-3 control-label">Desciption:
                                                </label>
                                                <div class="col-md-9">
                                                    <input class="form-control"
                                                                   placeholder="Desciption" name="hero_image_desc" id="hero_image_desc" value="{{$homehero->hero_image_desc}}">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="col-md-3 control-label">HyperLink:
                                                </label>
                                                <div class="col-md-9">
                                                    <input class="form-control"
                                                                   placeholder="HyperLink" name="hero_image_link" id="hero_image_link" value="{{$homehero->hero_image_link}}">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="col-md-3 control-label">Link Title:
                                                </label>
                                                <div class="col-md-9">
                                                    <input class="form-control"
                                                                   placeholder="Link Title" name="hero_image_link_title" id="hero_image_link_title" value="{{$homehero->hero_image_link_title}}">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <?php
                                        use App\Models\Product;
                                        $products = json_decode($homehero->hero_image_products);
                                    ?> 
                                        <table <?php if($products==null){echo "style='display:none'"; } ?> class="table table-striped table-bordered table-hover table-checkable order-column" id="hero_image_table">
                                            <thead>
                                                <tr>
                                                    <th> Product Thumb </th>
                                                    <th> Product ID </th>
                                                    <th> Product Name </th>
                                                    <th> Color </th>
                                                    <th> Actions </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            <?php
                                                if($products!=null)
                                                {
                                                    foreach($products as $key=>$rm)
                                                    {
                                                        //$prod = Product::where('id', $rm->product_id)->first();
                                                        $tempprod = new Product();
                                                        $prod = $tempprod->getSingleProductInfoForView($rm->product_id);
                                                        if($prod)
                                                        {
                                                            $strReplace = \Config::get("const.file.s3-path");
                                                            $path = str_replace($strReplace, '', $prod->media_link);
                                                            $path = $strReplace . 'thumb-' . $path;
                                                            echo '<tr><td width="20%"><img src="'.$path.'"/></td>';
                                                            echo '<td>'.$rm->product_id.'</td>';
                                                            echo '<td>'.$prod->product_name.'</td>';
                                                            echo '<td>'.$rm->product_color.'</td>';
                                                            echo '<td width="20%"><a href="javascript:;" class="btn btn-sm blue btn-edit-product" data-xpos="'.$rm->x.'" data-ypos="'.$rm->y.'" data-heroimageid="hero_image" data-productid="'.$rm->product_id.'" data-productcolor="'.$rm->product_color.'" data-tagicon="'.$rm->tag_type.'"><i class="fa fa-pencil"></i></a> <a href="javascript:;" class="btn btn-sm red btn-delete-product" data-heroimageid="hero_image" data-productid="'.($key+1).'"><i class="fa fa-times"></i></a></td></tr>';
                                                        }
                                                        else
                                                        {
                                                            echo '<tr><td width="20%"><img src=""/></td>';
                                                            echo '<td>'.$rm->product_id.'</td>';
                                                            echo '<td></td>';
                                                            echo '<td>'.$rm->product_color.'</td>';
                                                            echo '<td width="20%"><a href="javascript:;" class="btn btn-sm blue btn-edit-product" data-xpos="'.$rm->x.'" data-ypos="'.$rm->y.'" data-heroimageid="hero_image" data-productid="'.$rm->product_id.'" data-productcolor="'.$rm->product_color.'" data-tagicon="'.$rm->tag_type.'"><i class="fa fa-pencil"></i></a> <a href="javascript:;" class="btn btn-sm red btn-delete-product" data-heroimageid="hero_image" data-productid="'.($key+1).'"><i class="fa fa-times"></i></a></td></tr>';

                                                        }
                                                        
                                                    }
                                                }
                                                
                                            ?>

                                            </tbody>
                                        </table>
                                          
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

<div id="select_product_modal" class="modal fade" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                <h4 class="modal-title">Select Product</h4>
            </div>
            <div class="modal-body">
                <form action="#" class="form-horizontal" id="add_product_image">
                    <input type="hidden" id="hero_image_id" name="hero_image_id" />
                    <input type="hidden" id="product_thumb" name="product_thumb" />
                    <input type="hidden" id="product_name" name="product_name" />
                    <div class="form-group">
                        <label class="control-label col-md-4">Tag Type</label>
                        <div class="col-md-8">
                            <select id="tag_type" class="form-control">
                                <option value="bag">Shopping Bag</option>
                                <option value="thumb">Product Thumb</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-md-4">Product</label>
                        <div class="col-md-8">
                            <select id="select_product" class="form-control select2 js-data-example-ajax select2-allow-clear">
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-md-4">Tag Color</label>
                        <div class="col-md-8">
                            <select id="product_color" class="form-control">
                                <option value="pink">Pink</option>
                                <option value="red">Red</option>
                                <option value="blue">Blue</option>
                                <option value="green">Green</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group form">
                        <label class="col-sm-4 control-label">X Position</label>
                        <div class="col-sm-8">
                            <div class="input-group">
                                <input type="text" id="Xpos" name="Xpos" class="form-control" /> </div>
                        </div>
                    </div>
                    <div class="form-group form">
                        <label class="col-sm-4 control-label">Y Position</label>
                        <div class="col-sm-8">
                            <div class="input-group">
                                <input type="text" id="Ypos" name="Ypos" class="form-control" /> </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button class="btn dark btn-outline" data-dismiss="modal" aria-hidden="true">Close</button>
                <button class="btn green" id="btn_add_product_image" data-dismiss="modal">Add Product Tag </button>
                <button class="btn green" id="btn_edit_product_image" style="display:none" data-dismiss="modal">Edit Product Tag </button>
            </div>
        </div>
    </div>
</div>

@stop
@section('pagelevelscript')
<script src="/assets/admin/vendor/global/plugins/bootstrap-fileinput/bootstrap-fileinput.js" type="text/javascript"></script>
<script src="/assets/admin/vendor/global/plugins/select2/js/select2.full.min.js" type="text/javascript"></script>
<script src="/assets/admin/vendor/pages/scripts/components-select2.js" type="text/javascript"></script>
<script src="/assets/admin/vendor/pages/scripts/components-editors.js" type="text/javascript"></script>
<script>
$(function() {

    var heroimageproducts1 = <?php if($homehero->hero_image_products) {echo $homehero->hero_image_products;}else {echo '[]';}?>;
    var originalWidth = 1350;
    var originalHeight = 540;
    $('#hero_image_products').val(JSON.stringify(heroimageproducts1));
    $(".hero-image").change(function(e) {
        setTimeout(setimage,100)
    });
    function setimage()
    {
        $('.fileinput-preview img').click(onheroclick);
        originalWidth = $('.fileinput-preview img').width();
        originalHeight = $('.fileinput-preview img').height();
    }
    @if($homehero->hero_image)
    $('#hero_image_img').click(onheroclick);
    $('#Hero .fileinput.fileinput-new').removeClass('fileinput-new').addClass('fileinput-exists');
    @endif
    function onheroclick(e){
        $("#btn_add_product_image").show();
        $("#btn_edit_product_image").hide();
        var parentOffset = $(this).parent().offset(); 
        $('#hero_image_id').val($(this).parent().data('image'));
        var relX = e.pageX - parentOffset.left;
        var relY = e.pageY - parentOffset.top;
        $('#Xpos').val((relX/originalWidth*100).toFixed(2));
        $('#Ypos').val((relY/originalHeight*100).toFixed(2));
        $('#select_product_modal').modal();
        $("#select_product").select2("val", "");
    }
    
    $('#btn_edit_product_image').click(function(){
        
    });
    $('#btn_add_product_image').click(function(){
        var obj = {'hero_image_id':$('#hero_image_id').val(),'x' : $('#Xpos').val(),'y':$('#Ypos').val(),'product_id' : $('#select_product').val(),'product_color':$('#product_color').val(),'tag_type':$('#tag_type').val()};
        var row = "<tr><td><img src='"+ $('#product_thumb').val() + "' /></td><td>"+ $('#select_product').val() + "</td><td>"+ $('#product_name').val() + "</td><td>"+$('#product_color').val()+'</td><td><a href="javascript:;" class="btn btn-sm blue btn-edit-product" data-xpos="'+$('#Xpos').val()+'" data-ypos="'+$('#Ypos').val()+'" data-heroimageid="hero_image" data-productid="'+$('#select_product').val()+'" data-productcolor="'+$('#product_color').val()+'" data-tagicon="'+$('#tag_type').val()+'"><i class="fa fa-pencil"></i></a> <a href="javascript:;" class="btn btn-sm red btn-delete-product" data-productid="1"><i class="fa fa-times"></i></a></td></tr>';
        if($('#hero_image_id').val() == "hero_image")
        {
            heroimageproducts1.push(obj);
            $('#hero_image_products').val(JSON.stringify(heroimageproducts1));
            $('#hero_image_table > tbody:last-child').append(row);
            $('#hero_image_table').show();

        }
        $('.btn-edit-product').click(onproductedit);
        $('.btn-delete-product').click(onproductedelete);
    });
    $('.btn-edit-product').click(onproductedit);
    function onproductedit(){
        $('#Xpos').val($(this).data('xpos'));
        $('#Ypos').val($(this).data('ypos'));
        $('#product_color').val($(this).data('productcolor'));
        $('#tag_type').val($(this).data('tagicon'));
        $('#hero_image_id').val($(this).data('heroimageid'));
        $("#select_product").select2("val", $(this).data('productid'));
        $("#btn_add_product_image").hide();
        $("#btn_edit_product_image").show();
        $('#select_product_modal').modal();
    }
    $('.btn-delete-product').click(onproductedelete);
    function onproductedelete(){
        var productid = $(this).data('productid');
        var hero_image_id = $(this).data('heroimageid');
        $(this).closest('tr').remove();
        if(hero_image_id == "hero_image")
        {
            heroimageproducts1.splice(productid-1, 1);
            $('#hero_image_products').val(JSON.stringify(heroimageproducts1));
        }
    }
    
});

</script>
@stop