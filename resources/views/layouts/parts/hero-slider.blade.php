<div id="hero-slider" class="story-hero-slider slider heroSlider has-bullets">
        <?php
         if(function_exists('is_single')){
             $sliderContent = getHeroSliderContent();
         }

        if($sliderContent){
        foreach($sliderContent as $item){ ?>
            <div class="box-item product-box slider-box text-center">
                <div class="img-holder">
                    <img src="<?php echo $item['image']?>">
                </div>
                <div class="box-item__label-idea">
                    <a href="<?php echo $item['url']?>" class="box-item__label"><?php echo $item['title']?></a>
                    <div class="clearfix"></div>
                    <a href="<?php echo $item['url']?>" class="box-item__read-more">Read More</a>
                </div>
                <div class="box-item__author">
                    <a href="/user/profile/<?php echo $item['authorlink']?>" class="user-widget">
                        <img class="user-widget__img" src="<?php echo $item['avator']?>">
                        <span class="user-widget__name"><?php echo $item['author']?></span>
                    </a>
                </div>
            </div>
        <?php }
            }   ?>
</div>
