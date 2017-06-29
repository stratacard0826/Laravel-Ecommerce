@extends('layouts.main')

@section('body-class'){{ 'room-landing kitchen-landing' }}@stop

@section('content')

<div id="pagingApp" ng-app="pagingApp" ng-controller="pagingController">
    <div id="hero" class="royalSlider heroSlider rsMinW room-hero slider">
        @if(isset($roomInformation['images']))
            @foreach( $roomInformation['images'] as $key => $image )
            <div class="rsContent">
<!--                <div class="rsInnerContent">-->
                @if(isset($roomInformation['images']))
                <div class="container-fluid fixed-sm full-480">

                    <div class="hero-tags">
                            <div class="photoCopy">{{$image['Image_Title']}}: {{$image['Image_Caption']}} @if($image['Image_hyperlink']!="")<a href="{{$image['Image_hyperlink']}}">{{$image['Image_hyperlink_title']}}</a>@endif </div>
 
                        @foreach($image['Image_Products'] as $i_products)
                            @if($i_products->product_id!=null)
                            <div class="tag {{$i_products->product_color}}" style="left:{{$i_products->x}}%;top:{{$i_products->y}}%" >

                                <span class="tag-icon">
                                    @if(property_exists($i_products,'tag_type'))
                                        @if($i_products->tag_type=="thumb")

                                            <img src="{{@$i_products->media_link}}" class="round" alt="" />

                                        @else
                                            <i class="m-icon--shopping-bag-light-green"></i>
                                        @endif
                                    @else
                                         <i class="m-icon--shopping-bag-light-green"></i>
                                    @endif
                                </span>

                                {{--<a class="{{$i_products->product_color}}-border" href="/product/{{@$i_products->product_permalink}}">--}}
                                    {{--<img src="{{@$i_products->media_link}}" class="round" alt="" />--}}
                                {{--</a>--}}
                               <div class="hover-box">
                                    <a class="{{$i_products->product_color}}-border" href="/product/{{@$i_products->product_permalink}}">
                                        <h6>{{@$i_products->product_name}}</h6>
                                    </a>
                                   <div class="icon-wrap">
                                        <a class="category-tag get-round" href="{{@$i_products->affiliate_link}}" target="_blank">
                                            Get it
                                        </a>
                                        <div>
                                        <b class="price">
                                            &nbsp;
                                            @if(isset($i_products->sale_price))
                                                ${{$i_products->sale_price}}
                                            @endif
                                        </b>
                                        </div>
                                    </div>
                               </div>
                            </div>
                            @endif
                        @endforeach
                    </div>
                </div>
                @endif

                <img class="rsImg" src="{{$image['Image']}}" alt="{{$image['Image_alt']}}">

<!--                <img class="rsImg" src="http://10.0.1.101/1.jpg" alt="{{$image['Image_alt']}}">-->

<!--                </div>-->
                <span ng-click="open({{$key}})" class="room-related-product-button" ><i class="m-icon--Add-Active"></i></span>

                <script type="text/ng-template" id="room-related-product-{{$key}}.html">
                    <div class="modal-header">
                        <h3 data-toggle="#related-list">Related Products</h3>
                        <a class=" box-item__get-it" href="#" ng-click="cancel()"><i class="m-icon--Close"></i></a>
                    </div>
                    <div class="modal-body">
                        <section class="hero-related-products ">
                            <ul  >
                            @foreach($image['Image_Products'] as $i_products)
                                @if($i_products->product_id!=null)
                                    <li class="{{$i_products->product_color}}">
                                        <div class="row">
                                            <div class="col-xs-8 col-sm-10">
                                                <a class="{{@$i_products->product_color}}-border " href="/product/{{@$i_products->product_permalink}}">
                                                    <span class="img-holder">
                                                        <img src="{{@$i_products->media_link}}" class="round" alt="" />
                                                    </span>
                                                    <span class="name-holder">
                                                        {{@$i_products->product_name}}
                                                    </span>
                                                </a> 
                                            </div>
                                            <div class="col-xs-4 col-sm-2">
                                                {{--<a href="{{@$i_products->affiliate_link}}" class="get solid pull-right ">Get it</a>--}}
                                                <a target="_blank" href="/open/{{ $i_products->product_id }}/room" class="get solid pull-right ">Get it</a>


                                            </div>
                                        </div>
                                    </li>
                                @endif
                            @endforeach
                        </ul>
                    </section>
                </div>
                </script>

            </div>
            @endforeach
        @endif
        </div>

    <main class="page-content">
        <div class="app-wrap" >
            <nav id="hero-nav" class="col-sm-12">
                <div class="container">
                    <div class="col-lg-12 hidden-lg">
                        <ul class="popular-new text-center">
                        <li class="">
                            <a href="#" class="box-link active">Newest</a>
                        </li>
                        <li class="">
                            <a href="#" class="box-link ">Popular</a>
                        </li>
                    </ul>
                    </div>

                    <div class="col-lg-offset-3 col-lg-6">
                        <div class="row">
                        <ul class="category-nav main-content-filter ">
                                <li ng-click="activeMenu='1'" ng-class="{active: !activeMenu || activeMenu == '1'}">
                            <a ng-click="filterContent(null)" href="" data-filterby="all" class="all-link">
                                        <i class="m-icon m-icon--menu"></i>
                                All
                            </a>
                        </li>
                                <li ng-click="activeMenu='2'" ng-class="{active: activeMenu == '2'}">
                            <a ng-click="filterContent('idea')" data-filterby="ideas" href="" class="ideas-link">
                                <i class="m-icon m-icon--bulb"></i>
                                Ideas
                            </a>
                        </li>
                                <li ng-click="activeMenu='3'" ng-class="{active: activeMenu == '3'}">
                            <a ng-click="filterContent('product')" data-filterby="products" href=""
                               class="products-link">
                                        <i class="m-icon m-icon--item"></i>
                                Products
                            </a>
                        </li>
                                <li ng-click="activeMenu='4'" ng-class="{active: activeMenu == '4'}">
                            <a data-filterby="photos" href="" class="photos-link">
                                        <i class="m-icon m-icon--image"></i>
                                Photos
                            </a>
                        </li>
                    </ul>
                    </div>
                    </div>
                    <div class="col-lg-3 visible-lg">
                        <ul class="popular-new ">
                            <li class="">
                                <a href="#" class="box-link active">Newest</a>
                            </li>
                            <li class="">
                                <a href="#" class="box-link ">Popular</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>

            <div class="clearfix"></div>

            <div class="homepage-grid center-block">
                <div class="loader loader-abs" cg-busy="firstLoad"></div>
                {{--<div class="loader loader-fixed" cg-busy="nextLoad"></div>--}}

                @include('grid.grid')

            </div>
            @include('layouts.parts.load-more')

                    <!-- custom angular template - START -->

            @include('layouts.parts.product-popup')

            <!-- custom angular template - END -->
        </div>
        @include('layouts.parts.giveaway-popup')

    </main>
</div>
<style>
#full-width-slider {
  width: 100%;
  color: #000;
}
#hero{
    height: 500px;
}
.photoCopy {
  position: absolute;
  line-height: 24px;
  font-size: 12px;
  background: black;
  color: black;
  background-color: rgba(255, 255, 255, 0.75);
  padding: 0px 10px;
  position: absolute;
  left: 12px;
  bottom: 12px;
  top: auto;
  border-radius: 2px;
  z-index: 25;
}
.photoCopy a {
  color: grey;
}
.royalSlider { display:none }
</style>
 <script>
jQuery(document).ready(function($) {
  $('#hero').royalSlider({
    arrowsNav: true,
    loop: false,
    keyboardNavEnabled: true,
    controlsInside: false,
    imageScaleMode: 'fit',
    arrowsNavAutoHide: false,
    controlNavigation: 'bullets',
    thumbsFitInViewport: false,
    navigateByClick: false,
    startSlideId: 0,
    autoPlay: false,
    transitionType:'move',
    globalCaption: false,
    deeplinking: {
      enabled: true,
      change: false
    },
    /* size of all images http://help.dimsemenov.com/kb/royalslider-jquery-plugin-faq/adding-width-and-height-properties-to-images */
    imgWidth: "100%",
    imageScaleMode: "fill",
    autoScaleSliderWidth: 1500,
    autoScaleSliderHeight: 500,
//    autoScaleSlider: true
  });
  $('.royalSlider').css('display', 'block');

});
$('.room-landing .tag-icon').mouseover(function(){
    console.log('bob');
    $('#hero').css('z-index', '30');
});
$('.room-landing .tag-icon').mouseout(function(){
    console.log('bob');
    $('#hero').css('z-index', '10');
});
</script>
@stop