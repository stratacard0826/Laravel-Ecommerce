@extends('layouts.main')

@section('body-class'){{ 'product-details' }}@stop

@section('content')


    <script type="text/javascript">
        var permalink = "{{$permalink}}";
    </script>
    <nav class="mid-nav ">
        <div class="container full-sm fixed-sm hidden-md">
            <ul class="wrap col-lg-9">
                @if(isset($productInformation['CatTree']))
                    @foreach( $productInformation['CatTree'] as $key => $category )
                        <li class="box-link-ul ">
                            <a class="box-link @if($key==(count($productInformation['CatTree'])-1)) active @endif"
                               href="/shop/{{$category['parentPath'] ? $category['parentPath'] . '/'  : ''}}{{@$category['CategoryPermalink'] ?: ''}}"
                               @if($category == end($productInformation['CatTree']))class="current"
                                    @endif>
                                <span class="box-link-active-line"></span>
                                @if(isset($category['CategoryName']))
                                    {{$category['CategoryName']}}
                                @endif
                            </a>
                        </li>
                        <li class="horizontal-line-holder hidden-xs  hidden-md">
                            <span class="horizontal-line"></span>
                        </li>
                    @endforeach
                @endif
            </ul>
        </div>
    </nav>
    <div id="productApp" ng-app="productApp" data-ng-controller="productController" class="ideaing-product" ng-cloak
         itemscope itemtype="http://schema.org/Product">
        <header class="story-header">
            <div>
                <a href="#" class="side-logo lamp-logo">
                    <i class="m-icon m-icon--bulb2">
                        <span class="path1"></span><span class="path2"></span><span class="path3"></span><span
                                class="path4"></span><span class="path5"></span><span class="path6"></span><span
                                class="path7"></span><span class="path8"></span><span class="path9"></span><span
                                class="path10"></span>
                    </i>
                </a>
            </div>
            <div>
                <h2 class="col-sm-3 col-xs-8">
                    <span class="title-holder">
                <span class="title" itemprop="name">
                    @if(isset($productInformation['ProductName']))
                        {{$productInformation['ProductName']}}
                    @endif
                </span>
                
                    </span>
                </h2>
                <ul class="social-stats center-block hidden-620 hidden-xs hidden-sm hidden-md">
                    <li class="view-counter social-stats">
                        <div class="social-stats__item">
                            <?php $views = empty($CustomCounter) ? 0 : $CustomCounter; ?>
                            @if($views >= 100)
                                <i class="m-icon m-icon--flame"></i>
                            @else
                                <i class="m-icon m-icon--eye"></i>
                            @endif
                            <span class="grey value">{{$views}} views</span>
                        </div>
                    </li>
                    <li class="hearts hidden-620  hidden-xs hidden-sm">
                        <a href="#" class="likes" ng-class="['likes', {active: unHeart != false}]"
                           ng-init="heartCounterAction(<?php echo $userData['id'] . "," . $productId . "," . "'product'"?>)"
                           ng-click="heartAction(<?php echo $userData['id'] . "," . $productId . "," . "'$permalink'" . "," . "'product'"?>)"
                        >
                            <i class="m-icon m-icon--ScrollingHeaderHeart">
                                        <span class="m-hover">
                                            <span class="path1"></span><span class="path2"></span>
                                        </span>
                            </i>
                            <span class="social-stats__text"> &nbsp; <?php echo "{{ heartCounter }}" ?> </span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="col-xs-2 col-sm-7 pull-right">
                <ul ng-app="publicApp" ng-controller="publicController"
                    class="share-buttons short hidden-xs hidden-sm hidden-md col-lg-6 col-sm-8 pull-right">
                    <li class="all-shares"><b class="share-count all"
                                              ng-init="readSingleNotification(<?php echo $userData['id'] ?>,'<?php echo $permalink ?>')"></b>
                        <br/>all shares
                    </li>
                    <li><a data-service="facebook" class="fb" href="#" ng-click="openSharingModal('facebook')"><i
                                    class="m-icon m-icon--facebook-id"></i> <b class="fb share-count"></b></a></li>
                    <li><a data-service="twitter" class="twi" href="#" ng-click="openSharingModal('twitter')"><i
                                    class="m-icon  m-icon--twitter-id"></i> <b class="twi share-count"></b></a></li>
                </ul>

                <div class="icon-wrap pull-right">
                    <a class="category-tag get-round" ng-href="/open/<?php echo $productInformation['Id'] ?>/product"
                       target="_blank">
                        Get it
                    </a>
                    <b class="price hidden-620 hidden-xs hidden-sm hidden-md" itemprop="offers" itemscope
                       itemtype="http://schema.org/Offer">
                        &nbsp;
                        @if(isset($productInformation['SellPrice']) && $productInformation['SellPrice'] > 0)
                            <span itemprop="priceCurrency" content="USD">$</span>
                            <span itemprop="price"
                                  content="{{$productInformation['SellPrice']}}">{{$productInformation['SellPrice']}}</span>
                        @endif
                    </b>
                </div>
            </div>
        </header>

        <section id="hero" class="product-hero">
            <div class="hero-background"
                 style="background-image: url('@if(isset($selfImages['heroImage'])){{$selfImages['heroImage']}}@endif')"></div>
            <div class="color-overlay"></div>

            <div class="container fixed-sm full-480">

                <div class="row hero-content-holder">
                    <div class="col-sm-11">
                        <div class="average-score pull-right" itemprop="aggregateRating" itemscope
                             itemtype="http://schema.org/AggregateRating">
                            <div class="score" itemprop="ratingValue">
                                <i class=" m-icon--bulb-detailed-on-rating"></i>
                                <?php
                                if (isset($reviewScore))
                                    $value = $reviewScore;

                                echo $value > 0 ? $value . "%" : '<span class="not-availiable">Not Available</span>';

                                ?>
                            </div>
                            <span class="caption">Average Ideaing Score</span>
                        </div>
                        <h1 class="text-right average-score-title">
                            @if(isset($productInformation['ProductName']))
                                {{$productInformation['ProductName']}}
                            @endif
                        </h1>
                    </div>
                    <div class="col-sm-1"></div>
                </div>


                <nav class="top-product-controls">
                    <ul>
                        <li class="">
                            <a href="#" class="likes" ng-class="['likes', {active: unHeart != false}]"
                               ng-init="heartCounterAction(<?php echo $userData['id'] . "," . $productId . "," . "'product'"?>)"
                               ng-click="heartAction(<?php echo $userData['id'] . "," . $productId . "," . "'$permalink'" . "," . "'product'"?>)"
                            >
                                <!--                                <i ng-class="unHeart != false ? 'm-icon m-icon--heart-solid' : 'm-icon m-icon--ScrollingHeaderHeart'">-->
                                <i class="m-icon m-icon--heart-solid">
                                        <span class="m-hover">
                                            <span class="path1"></span><span class="path2"></span>
                                        </span>
                                </i>
                                <span class="social-stats__text"> &nbsp; <?php echo "{{ heartCounter }}" ?> </span>
                            </a>

                        </li>
                        <li><a href="#" class="get-alerts"><i class="m-icon m-icon--alert"></i>&nbsp; Get alerts</a>
                        </li>
                        <li><a href="#" data-scrollto="#comments" class="comments"><i
                                        class="m-icon m-icon--discuss-products"></i>&nbsp; <?php echo "{{ commentsCount }}" ?>
                            </a></li>
                    </ul>
                </nav>


                <div class="slider product-slider">
                    <script>
                        jQuery(document).ready(function ($) {
                            if (window.innerWidth < 480) {

                                $('#gallery').royalSlider({
                                    arrowsNav: true,
                                    keyboardNavEnabled: true,
                                    controlsInside: false,
                                    imageScaleMode: 'fit',
                                    arrowsNavAutoHide: false,
                                    autoScaleSlider: true,
                                    controlNavigation: 'thumbnails',
                                    thumbsFitInViewport: false,
                                    navigateByClick: true,
                                    startSlideId: 0,
                                    autoPlay: false,
                                    transitionType: 'move',
                                    globalCaption: false,
                                    deeplinking: {
                                        enabled: true,
                                        change: false
                                    },
                                    thumbs: {
                                        appendSpan: true,
                                        firstMargin: false,
//                                orientation: 'horizntal',
                                    },
                                    loop: true,
                                    video: {
                                        autoHideArrows: true,
                                        autoHideControlNav: false,
                                        autoHideBlocks: true,
                                        youTubeCode: '<iframe src="https://www.youtube.com/embed/%id%?rel=1&autoplay=1&showinfo=0" frameborder="no" allowFullscreen></iframe>'
                                    },
//                            imgWidth: 1400,
//                            imgHeight: 680
                                });
                            } else {
                                $('#gallery').royalSlider({
//                            arrowsNav: true,
                                    loop: false,
                                    keyboardNavEnabled: true,
                                    controlsInside: false,
                                    imageScaleMode: 'fit',
                                    arrowsNavAutoHide: false,
//                        autoScaleSlider: true,
                                    controlNavigation: 'thumbnails',
                                    thumbsFitInViewport: false,
                                    navigateByClick: true,
                                    startSlideId: 0,
                                    autoPlay: false,
                                    transitionType: 'move',
                                    globalCaption: false,
                                    deeplinking: {
                                        enabled: true,
                                        change: false
                                    },
                                    thumbs: {
                                        arrows: true,
                                        appendSpan: true,
                                        firstMargin: false,
                                        orientation: 'vertical'
                                    },
                                    loop: true,
                                    video: {
                                        autoHideArrows: true,
                                        autoHideControlNav: false,
                                        autoHideBlocks: true,
                                        youTubeCode: '<iframe src="https://www.youtube.com/embed/%id%?rel=1&autoplay=1&showinfo=0" frameborder="no" allowFullscreen></iframe>'
                                    },

//                        imgWidth: 1400,
//                        imgHeight: 680
                                });
                            }
                        });
                    </script>

                    <div id="gallery" class="royalSlider rsDefault">

                        @if(isset($selfImages['picture']))
                            @foreach( $selfImages['picture'] as $image )
                                @if($image['type'] == 'img-link' || $image['type'] == 'img-upload')
                                    <a class="rsImg" data-rsbigimg="{{$image['link']}}"
                                       href="{{$image['link']}}">
                                        <img itemprop="image" class="rsTmb" src="{{$image['link']}}"
                                             alt="{{$image['picture-name']}}">
                                    </a>
                                @elseif($image['type'] == 'video-link' || $image['type'] == 'video-upload' || $image['type'] == 'video-youtube-link' || $image['type'] == 'video-vimeo-link')
                                    )
                                    <a class="rsImg"
                                       data-rsVideo="{{$image['link']}}"
                                       href="{{$image['preview']}}"
                                    >
                                        <img itemprop="image" class="rsTmb" src="{{$image['preview']}}"
                                             alt="{{$image['picture-name']}}">
                                    </a>
                                @endif
                            @endforeach
                        @endif
                        <img width="640" height="427"
                             src="@if(isset($selfImages['picture'][1]['link'])){{$selfImages['picture'][1]['link']}}@endif"
                             class="attachment-large wp-post-image"
                             alt="@if(isset($selfImages['picture'][1]['picture-name'])){{$selfImages['picture'][1]['picture-name']}}@endif"/>
                    </div>

                    <div class="slider-side-block">

                        <div class="top">

                            <b class="price col-xs-6">
                                @if(isset($productInformation['SellPrice']) && $productInformation['SellPrice'] >0)
                                    <?php
                                    $savings = @$productInformation['Price'] - $productInformation['SellPrice'];
                                    ?>

                                    @if($savings > 1)
                                        <span class="savings">You save ${{round($savings)}}</span>
                                        <span class="regular-price">${{@$productInformation['Price']}}</span>
                                        <span class="sale-price">${{$productInformation['SellPrice']}}</span>
                                    @else
                                        <span>${{$productInformation['SellPrice']}}</span>
                                    @endif
                                @endif
                            </b>
                            <img class="vendor-logo col-xs-6" width="107"
                                 src="@if(isset($storeInformation['ImagePath'])){{$storeInformation['ImagePath']}}@endif"
                                 alt="@if(isset($storeInformation['StoreName'])){{$storeInformation['StoreName']}}@endif">
                            <a class="get-round" href="/open/<?php echo $productInformation['Id'] ?>/product"
                               target="_blank">
                                Get it
                            </a>

                            <div class="availabible pull-right">
                                @if(isset($productInformation['Available']))
                                    {{$productInformation['Available']}}
                                @endif
                            </div>
                        </div>
                        <div class="table hide">
                            <ul>
                                <li>
                                    <a href="/pro/@if(isset($storeInformation['Identifier'])){{$storeInformation['Identifier']}}@endif">
                                        <span class="name">@if(isset($storeInformation['StoreName'])){{$storeInformation['StoreName']}}@endif</span>
                                        <span class="price">&nbsp;</span>
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <nav id="hero-nav" class="product-nav col-sm-12">
            <div class="container full-620 fixed-sm">
                <ul class="category-nav full-620">
                    <li class="active"><a href="#" class="photos-link"><i class="m-icon m-icon--photos"></i>Photos</a>
                    </li>
                    <li><a href="#" data-scrollto="#features" class="features-link"><i
                                    class="m-icon m-icon--features-c1"></i>Features</a>
                    </li>
                    <li><a href="#" data-scrollto="#specs" class="specs-link"><i class="m-icon m-icon--specs"></i>Specs</a>
                    </li>
                    <li class="hidden-category-menu"><a href="#" data-scrollto="#compare" class="compare-link"><i
                                    class="m-icon  m-icon--comparisons"></i>Comparisons</a></li>
                    <li class="hidden-category-menu"><a href="#" data-scrollto="#reviews" class="reviews-link"><i
                                    class="m-icon m-icon--reviews"></i>Reviews</a>
                    </li>
                </ul>
                <a class="show-hero-category" href="#">></a>
                <div class="hideen-hero-category-menu mobile-top-menu">
                    <ul>
                        <li><a href="#" data-scrollto="#compare" class="compare-link"><i
                                        class="m-icon  m-icon--comparisons"></i>Comparisons</a></li>
                        <li><a href="#" data-scrollto="#reviews" class="reviews-link"><i
                                        class="m-icon m-icon--reviews"></i>Reviews</a></li>
                    </ul>
                </div>
            </div>
        </nav>

        <main class="page-content">

            <article class="product">


                <div class="container main-container fixed-sm">
                    @include('layouts.parts.share-bar')
                    <section class="article-content col-lg-12 col-sm-11 pull-right" id="features"
                             itemprop="description">
                        <div id="sticky-anchor"></div>
                        <div>
                            @if(isset($productInformation['Description']))
                                {!! $productInformation['Description'] !!}
                            @endif
                        </div>
                    </section>
                </div>

                <section class="pale-grey-bg product-specs" id="specs">
                    <div class="container">

                        <h3 class="green">Specifications</h3>

                        @if(isset($productInformation['Specifications']))
                            <div class="col-lg-6 text-center center-block nofloat">
                                <table class="table col-sm-3">

                                    <tbody>
                                    @foreach( $productInformation['Specifications'] as $specification )
                                        <tr>
                                            <td><strong>{{ $specification->key}}</strong></td>
                                            <td>{{ $specification->value}}</td>
                                        </tr>
                                    @endforeach
                                    </tbody>
                                </table>
                            </div>
                        @endif

                    </div>

                </section>

                <section class="comparison hidden-xs hidden-sm" id="compare">
                    <div class="container">
                        <h3 class="purple">Comparisons</h3>

                        <div class="col-sm-3 col-xs-6 comparison-tab">
                            <section class="purple">
                                Add Product To Compare
                            </section>
                        </div>

                        <!-- compare dynamic start -->


                        <div ng-repeat="item in temporaryViewList | limitTo:3">

                            <div class="col-sm-3 col-xs-6 comparison-tab">
                                <div>
                                    <img class="img-responsive" ng-src="@{{ item.data.selfImages.mainImage}}"
                                         alt="@{{ item.data.selfImages.mainImageName}}"/>

                                    <div class="tab-wrap">
                                        <h4>@{{ item.data.productInformation.ProductName | limitTo: 50 }} @{{item.data.productInformation.ProductName.length > 50 ? '...' : ''}}</h4>

                                        <!--                                        <b class="score">@{{ item.data.productInformation.Review[1].value }}</b>-->

                                        <div class="star-rating score text-center">
                                            <span class="star active" ng-repeat="n in [1, 2, 3, 4, 5]">
                                                <i ng-class="item.data.productInformation.Review[1].value<=(n-1) ?  'm-icon--star-blue-full-lines' : (item.data.productInformation.Review[1].value<n ? 'm-icon--star-blue-half2' :  'm-icon--star-blue-full')"></i>
                                            </span>
                                        </div>

                                        <div class="star-rating text-center">
                                            <span class="stars">(@{{ item.data.productInformation.Review[1].counter | number:0 }}
                                                ) Customer Reviews</span>
                                        </div>
                                        <div class="purple-bg price-badge">
                                            <a href="/open/@{{ item.data.productInformation.Id }}/product"
                                               target="_blank">
                                                <span>@{{ item.data.storeInformation.StoreName }}</span>
                                                <b ng-hide="item.data.productInformation.SellPrice == 0">$@{{ item.data.productInformation.SellPrice }}</b>
                                            </a>
                                        </div>
                                        <a class="btn-none" href="/open/@{{ item.data.productInformation.Id }}/product"
                                           target="_blank">More Info</a>
                                    </div>
                                    <span class="close-button" ng-click="deleteSelectedItem($index)">✕</span>
                                </div>
                            </div>
                        </div>
                        <!-- add item to compare -->
                        <div class="col-sm-3 col-xs-6 comparison-tab" ng-hide="dataLength > 2"
                             ng-init="loadProductDetails()">

                            <div ng-hide="showCompareButton">
                                <div class="comparison-select">
                                    <autocomplete ng-model="selectedProduct"
                                                  attr-placeholder="Search product to add..."
                                                  {{--attr-input-class="form-control"--}}
                                                  ng-model-options="{debounce: 1000}"
                                                  data="suggestedItems"
                                                  on-select="selectedIdem"
                                                  on-type="searchProductByName">

                                    </autocomplete>
                                </div>

                            </div>

                            <div ng-show="showCompareButton">
                                <a class="purple add-more" ng-click="toggleCompareButton()">
                                    <span class="plus">+</span>
                                    <span>Add Product</span>
                                </a>
                            </div>
                        </div>

                        <!-- compare dynamic end -->

                        <div class="crearfix"></div>

                        <h5>Compare maximum 3 products </h5>

                        <div class="col-sm-3 col-xs-6 comparison-tab table-heads">
                            <h4></h4>
                            <hr>

                            <b ng-repeat="spec in specList track by $index">@{{ spec }}</b>

                        </div>
                        <!-- compare dynamic 2nd part start-->
                        <div ng-repeat="item in temporaryViewList | limitTo:3">
                            <div class="col-sm-3 col-xs-6 comparison-tab table-cells">
                                <h4>@{{ item.data.productInformation.ProductName | limitTo: 65 }} @{{item.data.productInformation.ProductName.length > 65 ? '...' : ''}}</h4>

                                <hr>
                                <div class="bordered" ng-repeat="spec in item.data.productInformation.Specifications">
                                    <b>@{{ spec.value }}</b>
                                </div>
                            </div>

                        </div>

                        <!-- compare dynamic 2nd part end -->

                    </div>
                </section>
                <!-- TODO - use two (three?) columns -->

                <section class="pale-grey-bg reviews" id="reviews">
                    <div class="container fixed-sm">
                        <div class="reviews-medium-container">
                            <div class="row hidden-xs">
                                <div class="average-ideaing-line col-xs-4 text-right">
                                    <img src="/assets/images/average-ideaing-left-line.png" alt="">
                                </div>
                                <div class="text-center col-xs-4">
                                    <div class="average-score">
                                        <div class="score">
                                            <i class="  m-icon--bulb-detailed-on-rating"></i>
                                            @if(isset($reviewScore))
                                                {{$reviewScore}}
                                                %
                                            @endif
                                        </div>
                                        <span class="caption">Average Ideaing Score</span>
                                    </div>

                                </div>
                                <div class="average-ideaing-line col-xs-4 text-left">
                                    <img src="/assets/images/average-ideaing-right-line.png" alt="">
                                </div>
                            </div>
                            <div class="visible-xs">
                                <div class=" col-xs-12">
                                    <div class="average-score block-center">
                                        <div class="score">
                                            <i class=" m-icon--bulb-detailed-on-rating"></i>
                                            @if(isset($reviewScore))
                                                {{$reviewScore}}%
                                            @endif
                                        </div>
                                        <span class="caption">Average Ideaing Score</span>
                                    </div>

                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-6 col-sm-4 text-center reviews-service-holder critic">
                                    <div class="vertical-line visible-xs"></div>
                                    <h3><span class="title">Critic</span>
                                        <span class="reviews">Reviews</span></h3>

                                    <div class="star-rating text-center">
                                        <?php
                                        $stars = $productInformation['Review'][0]->value;
                                        $fStar = floor($stars);
                                        $cStar = ceil($stars);
                                        $halfStar = -1;
                                        if ($fStar == $cStar)
                                            $halfStar = $cStar;

                                        ?>
                                        @for($i=1; $i<=5; $i++)
                                            @if($i <= $fStar)
                                                <span class="star active">
                                                    <i class="m-icon--star-blue-full"></i>
                                                </span>
                                            @elseif($cStar == $i)
                                                <span class="star half">
                                                    <i class=" m-icon--star-blue-half2"></i>
                                                </span>
                                            @else
                                                <span class="star">
                                                    <i class=" m-icon--star-blue-full-lines"></i>
                                                </span>
                                            @endif
                                        @endfor
                                    </div>
                                    <p class="text-center">
                                        {{number_format($productInformation['Review'][0]->counter == ''?0:$productInformation['Review'][0]->counter)}}
                                        <span class="light-black">
                                            @if(isset($productInformation['Review'][0]->counter)&& $productInformation['Review'][0]->counter >1)
                                                Reviews
                                            @else
                                                Review
                                            @endif
                                        </span>

                                    </p>

                                    @if(isset($productInformation['Review']))
                                        @foreach( array_slice($productInformation['Review'],2) as $review )
                                            <div class="critic-outer-rating">
                                                <div class="line-label "><a
                                                            href="@if(isset($review->link)){{$review->link}}@endif"
                                                            target="_blank">@if(isset($review->key)){{$review->key}}@endif
                                                    </a></div>

                                                <div class="star-rating text-center">
                                                    <?php
                                                    $stars = isset($review->value) ? $review->value : 0;
                                                    $fStar = floor($stars);
                                                    $cStar = ceil($stars);
                                                    $halfStar = -1;
                                                    if ($fStar == $cStar)
                                                        $halfStar = $cStar;
                                                    // TODO - move to model or Angular
                                                    ?>
                                                    @for($i=1; $i<=5; $i++)
                                                        @if($i <= $fStar)
                                                            <span class="star active">
                                                                <i class="m-icon--star-blue-full"></i>
                                                            </span>
                                                        @elseif($cStar == $i)
                                                            <span class="star half">
                                                                <i class=" m-icon--star-blue-half2"></i>
                                                            </span>
                                                        @else
                                                            <span class="star">
                                                                <i class=" m-icon--star-blue-full-lines"></i>
                                                            </span>
                                                        @endif
                                                    @endfor
                                                </div>

                                            </div>
                                        @endforeach
                                    @endif

                                </div>
                                <div class="col-xs-6 col-sm-4 col-sm-offset-4 text-center reviews-service-holder amazon">
                                    <div class="vertical-line visible-xs"></div>
                                    <h3><span class="title"><a
                                                    href="@if(isset($productInformation['Review'][1]->link)){{$productInformation['Review'][1]->link}}@endif"
                                                    target="_blank">Amazon</a></span>
                                        <span class="reviews">Reviews</span></h3>
                                    <div class="star-rating text-center">
                                        <?php
                                        $stars = $productInformation['Review'][1]->value;
                                        $fStar = floor($stars);
                                        $cStar = ceil($stars);
                                        $halfStar = -1;
                                        if ($fStar == $cStar)
                                            $halfStar = $cStar;

                                        ?>
                                        @for($i=1; $i<=5; $i++)
                                            @if($i <= $fStar)
                                                <span class="star active">
                                                    <i class="m-icon--star-blue-full"></i>
                                                </span>
                                            @elseif($cStar == $i)
                                                <span class="star half">
                                                    <i class=" m-icon--star-blue-half2"></i>
                                                </span>
                                            @else
                                                <span class="star">
                                                    <i class=" m-icon--star-blue-full-lines"></i>
                                                </span>
                                            @endif
                                        @endfor
                                    </div>
                                    <p class="text-center">
                                        <a href="@if(isset($productInformation['Review'][1]->link)){{$productInformation['Review'][1]->link}}@endif"
                                           target="_blank">
                                            {{$productInformation['Review'][1]->counter == ''?0:number_format($productInformation['Review'][1]->counter)}}
                                            <span class="light-black">
                                               @if(isset($productInformation['Review'][1]->counter)&& $productInformation['Review'][1]->counter >1)
                                                    Reviews
                                                @else
                                                    Review
                                                @endif
                                            </span>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="visible-xs visible-sm">

                        </div>

                        <div class="col-md-4 col-md-offset-4 critic-quote">
                            <div>
                                @if(isset($productInformation['ReviewExtLink']))
                                    {!! $productInformation['ReviewExtLink'] !!}
                                @endif
                            </div>
                        </div>

                    </div>
                </section>
            </article>


            @include('layouts.parts.comments-product')

                    <!-- /article -->


            <section class="related-items pale-grey-bg">
                <div class="main-content full-620 fixed-sm">
                    <fieldset class="shoplanding-title">
                        <legend align="center"><h3 class="blue pale-grey-bg">Related Products</h3></legend>
                    </fieldset>
                    <div class="related-products grid-box-3">


                        @if(isset($relatedProducts) && ($relatedProducts != null) )
                            @foreach( $relatedProducts as $product )
                                <div class="box-item product-box ">
                                    <img class="img-responsive" src="{{ $product['Image'] }}">
                                    <span class="box-item__time ng-binding">{{ $product['UpdateTime'] }}</span>
                                    <div class="box-item__overlay"></div>
                                    <ul class="social-stats">
                                        <li class="social-stats__item">
                                            <?php
                                            $userId = !empty($userData->id) ? $userData->id : 0;
                                            ?>

                                            <heart-counter-product uid="<?php echo $userId ?>"
                                                                   iid="{{$product['ItemId']}}"
                                                                   plink="{{ json_encode($product['Permalink']) }}"
                                                                   sec='product'>

                                            </heart-counter-product>
                                        </li>
                                    </ul>
                                    <div class="round-tag round-tag--product">
                                        <i class="m-icon m-icon--item"></i>
                                        <span class="round-tag__label">Product</span>
                                    </div>
                                    <div class="box-item__label-prod">
                                        <a href="{{$product['Permalink']}}"
                                           class="box-item__label box-item__label--clear ">{{ $product['Name'] }}</a>
                                        <div class="clearfix"></div>

                                        <div class="clearfix"></div>
                                        <a target="_blank" href="/open/{{ $product['ItemId'] }}/product"
                                           class="box-item__get-it">
                                            Get it
                                        </a>
                                    </div>
                                </div>
                            @endforeach
                        @endif
                    </div>

                    <div class="related-ideas grid-box-3">
                        <fieldset class="shoplanding-title">
                            <legend align="center"><h3 class="blue pale-grey-bg">Related Ideas</h3></legend>
                        </fieldset>

                        @if(isset($relatedIdeas->posts) && ($relatedIdeas->posts != null) )
                            @foreach( $relatedIdeas->posts as $item )

                                <?php  // print_r($item); die();?>

                                <div class="box-item">
                                    <div class="img-holder">
                                    @if(isset($item->feed_image))
                                        @if(is_array($item->feed_image))
                                        <img alt="{{@$item->feed_image['alt']}}" title="{{@$item->feed_image['title']}}"
                                             src="{{ @$item->feed_image['url']}}">
                                        @else
                                        <img alt="{{@$item->feed_image->alt}}" title="{{@$item->feed_image->title}}"
                                             src="{{@$item->feed_image->url}}">
                                        @endif
                                    @endif
                                    </div>

                                    <span class="box-item__time">{{@$item->updated_at}}</span>
                                    <div class="box-item__overlay"></div>

                                    <ul class="social-stats">
                                        <li class="social-stats__item">
                                            <?php
                                            $userId = !empty($userData->id) ? $userData->id : 0;
                                            ?>

                                            <heart-counter-product uid="<?php echo $userId ?>" iid="{{  $item->id }}"
                                                                   plink="{{ json_encode($item->url) }}" sec='ideas'>

                                            </heart-counter-product>
                                        </li>
                                        <li class="social-stats__item">
                                            {{-- <a href="#">
                                                 <i class="m-icon m-icon--buble"></i>
                                                 <span class="social-stats__text">157</span>
                                             </a>--}}
                                        </li>
                                    </ul>

                                    <div class="round-tag round-tag--idea">
                                        <i class="m-icon m-icon--item"></i>
                                        <span class="round-tag__label">idea</span>
                                    </div>

                                    <div class="box-item__label-idea">
                                        <a href="{{$item->url}}" class="box-item__label">{{$item->title}}</a>
                                        <div class="clearfix"></div>
                                        <a href="{{$item->url}}" class="box-item__read-more">Read More</a>
                                    </div>

                                    <div class="box-item__author">
                                        <a href="{{$item->authorlink}}" class="user-widget">
                                            <img class="user-widget__img" src="{{$item->avator}}">
                                            <span class="user-widget__name">{{$item->author}}</span>
                                        </a>
                                    </div>
                                </div>

                            @endforeach
                        @endif
                    </div>
                </div>
            </section>
        </main>
    </div>
    @include('layouts.parts.giveaway-popup')
@stop