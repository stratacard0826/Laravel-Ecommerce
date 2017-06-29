<div class="clearfix pocket"></div>

<footer class="about-footer hide-soft">
    <div class="container">
        <div class="col-sm-3 col-xs-12">
            <h4 class="blue">About Ideaing</h4>
            <ul>
                <li><a href="/aboutus">About Us</a></li>
                <li><a href="/contactus">Contact Us</a></li>
                <li><a href="/terms-of-use">Terms of Use</a></li>
                <li><a href="/privacy-policy">Privacy Policy</a></li>
            </ul>
        </div>
        <div class="col-sm-3 col-xs-12">
            <h4 class="green">Giveaway</h4>
            <?php
                if(!isset($theGiveAway)){
                    if(!function_exists('is_single')){
                        $theGiveAway = PageHelper::getCurrentGiveaway();
                    }else{

                    if(isset($_COOKIE['giveaway_pop_shown'])){
                        $noPopup = 1;
                    }else{
                        $noPopup = 0;
                    }

                    $json = file_get_contents('https://ideaing.com/api/giveaway/get-current/' . $noPopup);

                        $theGiveAway = json_decode($json);
                    }
                }

            if($theGiveAway && @$theGiveAway->giveaway_permalink){ ?>
                <a href="/giveaway/<?php echo $theGiveAway->giveaway_permalink ?>">
                    <img src="<?php echo $theGiveAway->giveaway_image ?>" title="<?php echo $theGiveAway->giveaway_image_title ?>" alt="<?php echo $theGiveAway->giveaway_image_alt ?>" />
                </a>

                <a href="/giveaway/ <?php echo $theGiveAway->giveaway_permalink ?>">
                   <h6 class="white"> <?php echo $theGiveAway->giveaway_title ?></h6>
                </a>

            <?php
                }
            ?>


        </div>
        <div class="col-sm-3 col-xs-12 social-connect">
            <h4 class="orange">Let's connect</h4>
            <ul>
                <li><a class="fb" href="https://www.facebook.com/ideaingsmarterliving"><span><i class="m-icon--facebook-id"></i> Like <b class="fan-count fb count"></b></span></a></li>
                <li><a class="twi" href="https://twitter.com/ideaing/"><span><i class="m-icon--twitter-id"></i> Follow  <b class="fan-count twi count"></b></span></a></li>
                <li><a class="gp" href="http://google.com/+Ideaingsmarterliving"><span><i class="m-icon--google-plus-id"></i> Follow <b class="fan-count gp count"></b></span></a></li>
                <li><a class="pint" href="https://www.pinterest.com/ideaing_com"><span><i class="m-icon--pinterest-id"></i> Follow <b class="fan-count pint count"></b></span></a></li>
                <li><a class="inst" href="https://www.instagram.com/ideaing_com/"><span><i class=" m-icon--footer-instagram"></i> Follow <b class="fan-count inst count"></b></span></a></li>
            </ul>
        </div>
        <div class="col-sm-3 col-xs-12" ng-app="publicApp" ng-controller="publicController">
            <strong class="red"><?php echo "{{ responseMessage }}";?></strong>
            <h4 class="pink">Ideas to You</h4>
            <span class="email-input-holder ">
                    <i class="m-icon m-icon--email-form-id black"></i>
                    <input class="form-control" type="text" ng-model="data.SubscriberEmail" placeholder="Email address">
                    <input class="form-control" type="submit" ng-click="subscribe(data,'footer')" />
            </span>
        </div>
    </div>
    <button class="btn-none close-down" data-toggle=".about-footer"></button>
</footer>
</div>

<div class="bottom-block hidden-soft">
    <a href="/ideas/cart?add-to-cart=10138" class="add-to-bag" data-quantity="1" data-product_id="10138" data-product_sku="" rel="nofollow">Get it from Ideaing</a><?php //dummy btn ?>
    <button class="btn btn-success" id="about-button" data-toggle=".about-footer">About</button>
    <button class="btn btn-success ics--open" id="float-bag"><i class="m-icon--shopping-bag-light-green"></i><span class="cart-count"></span></button>
    <a href="#" id="back-to-top">
        <i class="m-icon--footer-up-arrow"></i>
    </a>
</div>

 <ul ng-app="pagingApp" ng-controller="pagingController" class="hidden"> <?php // we are keeping the switch controls here so that we can click them from anywehre (from other controllers) ?>
    <li>
        <a id="show-default" ng-click="switchCategory('default')" href="#">
        </a>
    </li>

    <li>
        <a id="show-smart-home" ng-click="switchCategory('smart-home')" href="#">
        </a>
    </li>
    <li>
        <a id="show-smart-entertainment" ng-click="switchCategory('smart-entertainment')"  href="/ideas/smart-entertainment">
        </a>
    </li>
    <li>
        <a id="show-smart-body" ng-click="switchCategory('smart-body')" >
        </a>
    </li>
    <li>
        <a id="show-smart-travel" ng-click="switchCategory('smart-travel')" >
        </a>
    </li>
</ul>

<script>
    var rootApp = angular.module('rootApp', ['pagingApp', 'publicApp','productApp']);
</script>

<script>
    // CompleteRegistration
    // Track when a registration form is completed (ex. complete subscription, sign up for a service)
    fbq('track', 'CompleteRegistration');
</script>


<?php if(function_exists('is_single') || (Request::segment(1) != 'login' && Request::segment(1) != 'signup' && Request::segment(1) != 'product')){ ?>
     <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    <ins class="adsbygoogle"
         data-ad-client="ca-pub-8975651769887133"
         data-ad-slot="7018993602"
         data-ad-format="auto"></ins>
    <script>
        (adsbygoogle = window.adsbygoogle || []).push({});
    </script>
<?php } ?>
<!-- Homepage -->


<script>

window.currentSlide = 1;

function slideMe(){
            $('#slide' + window.currentSlide).prop('checked', true);

            ++window.currentSlide;

            if(window.currentSlide == 4){
                window.currentSlide = 1;
                $('#active label').removeClass('red');
            }
    }

     window.sliderTimer = setInterval(function(){
        slideMe();
    }, 5000);

    $('#controls label').click(function(){
        clearInterval(window.sliderTimer);
        window.currentSlide = $(this).data('slidenum');

        window.sliderTimer = setInterval(function(){
            slideMe();
        }, 5000);
    });

//$('.bordering').focusin(function(){
//    console.log('ututututut')
//    //
//    $('.alert, .alerts').fadeOut();
//    //console.log('ututututut')
//})
</script>
