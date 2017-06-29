{{--<div id="hero-slider" class="slider home-hero-slider default-hero-slider heroSlider has-bullets 2" ng-show="ideaCategory == 'default'">--}}

<?php
if(function_exists('is_single')){
    $sliderContent = getHeroSliderContent();
} ?>
 
<article id="hero-slider"  class="ideaing-home-slider default-slider slider home-hero-slider heroSlider has-bullets" ng-if="ideaCategory == 'default'">
<input checked="" type="radio" name="slider" id="slide1">
<input type="radio" name="slider" id="slide2">
<input type="radio" name="slider" id="slide3">
<input type="radio" name="slider" id="slide4">
<input type="radio" name="slider" id="slide5">

<div id="slides">
    <div id="overflow">
        <div class="inner">
            <?php if($sliderContent){
                foreach($sliderContent as $item){ ?>
                            <article >
                                <a  href="<?php echo $item['url']?>" class="box-item product-box slider-box text-center category-<?php echo $item['category_main']?>">
                                    <div class="color-overlay category-bg"></div>
                                    <div class="img-holder">
                                        <img itemprop="image" src="{{$item['image']}}">
                                    </div>
                                    <div class="box-item__label-idea lightfont">
                                        <span href="<?php echo $item['url']?>" class="slider-heading"><?php echo $item['title']?></span>
                                    </div>
                                    <div class="box-item__author">
                    <span href="/user/profile/<?php echo $item['authorlink']?>" class="user-widget">
                        <img class="user-widget__img" src="<?php echo $item['avator']?>">
                        <span class="user-widget__name"><?php echo $item['author']?></span>
                    </span>
                                    </div>
                                    <ul class="social-stats">
                                        <?php if($item['views'] >= 100){ ?>
                                        <li class="social-stats__item views">
                                            <i class="m-icon m-icon--flame white"></i>
                                            <span class="social-stats__text white lightfont"><?php echo $item['views']?> views</span>
                                        </li>
                                        <?php } ?>

                                        <?php
                                        switch($item['category_main']){
                                            case 'smart-body':
                                                $smartIcon =  'wearables';
                                                break;
                                            case 'smart-entertainment':
                                                $smartIcon =  'video';
                                                break;
                                            case 'smart-travel':
                                                $smartIcon =  'travel';
                                                break;
                                            case 'deals':
                                                $smartIcon =  'deals';
                                                break;
                                            default:
                                                $smartIcon =  'smart-home';
                                        }
                                        ?>

                                        <li class="social-stats__item category-tag white">
                                            <b><i class="m-icon m-icon--<?php echo $smartIcon ?> white"></i></b>
                                        </li>
                                    </ul>
                                </a>
                            </article>
                <?php }
                }   ?>
            </div> <!-- .inner -->
        </div> <!-- #overflow -->
    </div> <!-- #slides -->

    <div id="controls">

        <label for="slide1" data-slidenum="1"></label>
        <label for="slide2" data-slidenum="2"></label>
        <label for="slide3" data-slidenum="3"></label>

    </div> <!-- #controls -->

    <div id="active">

        <label for="slide1">
            <div class="progress-bar"></div>
        </label>
        <label for="slide2">
            <div class="progress-bar"></div>
        </label>
        <label for="slide3">
            <div class="progress-bar"></div>
        </label>


    </div> <!-- #active -->

</article> <!-- #slider -->



<div ng-if="readContent.staticSliderContent" id="hero-slider" class="ideaing-home-slider subcat-slider slider home-hero-slider heroSlider has-bullets">
    <a ng-repeat="item in readContent.staticSliderContent"  href="@{{item.url}}" class="box-item product-box slider-box text-center category-@{{item.category_main}}">
        <div class="color-overlay category-bg"></div>
        <div class="img-holder">
            <img itemprop="image" src="@{{item.image}}">
            <img itemprop="image" class="rsTmb" src="@{{item.image}}">
        </div>
        <div class="box-item__label-idea lightfont">
            <span href="@{{item.url}}" class="slider-heading">@{{item.title}}</span>
        </div>
        <div class="box-item__author">
                    <span href="/user/profile/@{{item.authorlink}}" class="user-widget">
                        <img class="user-widget__img" src="@{{item.avator}}">
                        <span class="user-widget__name">@{{item.author}}</span>
                    </span>
        </div>
        <ul class="social-stats">
            <li ng-if="item.views >= 100" class="social-stats__item views">
                <i class="m-icon m-icon--flame white lightfont"></i>
                <span class="social-stats__text white lightfont">@{{item.views}} views</span>
            </li>

            <li class="social-stats__item category-tag white">
                <b>
                    <i ng-if="item.category_main == 'smart-body'" class="m-icon m-icon--wearables white"></i>
                    <i ng-if="item.category_main == 'smart-entertainment'" class="m-icon m-icon--video white"></i>
                    <i ng-if="item.category_main == 'smart-travel'" class="m-icon m-icon--travel white"></i>
                    <i ng-if="item.category_main == 'deals'" class="m-icon m-icon--deals white"></i>

                    <i ng-if="item.category_main != 'deals' && item.category_main != 'smart-travel' && item.category_main != 'smart-entertainment' && item.category_main != 'smart-body'" class="m-icon m-icon--smart-home white"></i>

                </b>
            </li>
        </ul>
    </a>
</div>