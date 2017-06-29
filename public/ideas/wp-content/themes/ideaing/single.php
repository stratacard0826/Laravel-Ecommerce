@include('header')
<div ng-app="publicApp" ng-controller="publicController" ng-cloak>
<?php if (have_posts()): while (have_posts()) : the_post(); ?>
    <div>
    <?php
    $tags = wp_get_post_tags($post->ID);
    $categories = get_the_category($post->ID);
    $firstTag = $tags[0];

    foreach ($categories as $cat) {
        if ($cat->name != 'Smart Home') {
            if ($cat->category_parent == 0) {
                $mainCategory = $cat;
            } else {
                $childCategory = $cat;
            }
        }

    }
    ?>
    <section id="hero" class="details-hero">
        <div class="head-wrap">
            <h1 class="col-sm-8 col-xs-12 category-bg-trans lightfont"><span>{{the_title()}}</span></h1>
        </div>

        <div class="container absolute details-wrap">
            <header class="story-details col-lg-7 col-sm-8 col-xs-10 full-480" ng-init="getAuthorInfoByEmail('{{get_the_author_meta('user_email')}}')">

                <?php include('/var/www/ideaing/public/ideas/wp-content/themes/ideaing/author-info.php') ?>

                <div class="author-overview col-lg-5 col-sm-5 col-xs-6 full-480">
                    <h4 class="author-name">
                        <div id="sticky-anchor"></div>
                        <b ng-bind="authorName" class="author-name"></b>
                    </h4>
                    <time datetime="{{the_date('Y-m-d')}}">{{the_time( get_option( 'date_format' ) )}}</time>

                </div>

                <div class="view-counter social-stats__item">
                            @if(getPostViews(get_the_ID()) >= 100)
                                <i class="m-icon m-icon--flame"></i>
                            @else
                                <i class="m-icon m-icon--eye"></i>
                            @endif
                            <span class="grey value">{{getPostViews(get_the_ID())}} views</span>
                </div>
                <div class="hero-sharing horizontal-sharing hidden-soft shown-620 col-xs-12 overhid">
                    <ul class="share-buttons">
                     <!--   <h5>Sharing is caring</h5> -->
                        <?php loadLaravelView('share-buttons'); ?>
                    </ul>
                </div>
            </header>
        </div>
        <div id="#mobile-sticky-anchor" class="hidden"></div>

        <div class="hero-background hidden-620" style="background-image:url( <?php echo str_replace('ideaing-ideas.s3.amazonaws.com', 'd3f8t323tq9ys5.cloudfront.net', getThumbnailLink($post->ID)) ?> ) "></div>
        <?php $feedImg = get_field('feed_image') ?>
        <div class="hero-background hidden-soft shown-620" style="background-image:url( <?php echo str_replace('ideaing-ideas.s3.amazonaws.com', 'd3f8t323tq9ys5.cloudfront.net', $feedImg['url']) ?> ) "></div>
        <div class="color-overlay"></div>
    </section>
    <nav id="hero-nav" class="col-xs-12">
            <div class="container ">
                <ul class="like-nav center-block" ng-init="heartUsers('ideas')">
                <li class="heart-item">
                    <div class="social-stats">
                        <div class="social-stats__item">
                                <a href="#" class="likes" ng-click="heartAction()" >
                                <i class="category-color heartbeat m-icon m-icon--ScrollingHeaderHeart" ng-class="unHeart != false ? 'hearted' : ''">
                                        <span class="m-hover">
                                            <span class="path1 heart"></span>
                                        </span>
                                </i>
                                <span class="social-stats__text category-color heart-number" ng-bind="heartCounter">&nbsp;  </span>
                            </a>
                        </div>
                    </div>
                </li>
                    <?php include('/var/www/ideaing/public/ideas/wp-content/themes/ideaing/heart-user-img.php') ?>
                </ul>

            </div>
    </nav>




        <div class="container main-container">
            <article id="post-<?php the_ID(post_class('col-xs-11 col-md-offse-1 pull-right'))?>">
                <div class="shown-620 hidden-soft">
                    <?php loadLaravelView('share-bar'); ?>
                    </div>
            <div id="mobile-stcky-anchor"></div>
            <div class="row">
                    <div class="col-lg-12">
                        <section class="article-content dropcapped">
                            <?php
                              //echo do_shortcode('[product_thumbs id="1266"]');
                            ?>
                            <?php the_content(); ?>
                        </section>
                    </div>
            </div>
            </article>
        </div>
    </div>
    <div class="ideas-sharing">
        <?php loadLaravelView('share-bar'); ?>
    </div>

        @if(!@@$userData['login'])
        <section class="email-banner">
                <div class="col-lg-5 col-md-7 col-sm-8 center-block">
                                <h4 class="blue">Subscribe to the most unique community centered on Smarter Living. Get tips, stories, and freebies</h4>
                            <p>Join and also get exclusive coupons and giveaways on Smart gadgets. Opt-out anytime</p>
                            <div>
    <!--                            <h5>Enter your email</h5>-->
                                <strong class="red" ng-bind="responseMessage"></strong>

                            </div>
                            <div class="col-xs-12 col-sm-9">
                                <span class="email-input-holder ">
                                    <i class="m-icon m-icon--email-form-id black"></i>
                                        <input class="form-control" ng-model="data.SubscriberEmail" placeholder="me@email.com" type="text">
                                </span>
                            </div>
                            <div class="col-xs-12 col-sm-3">
                                <a class="btn btn-success form-control" ng-click="subscribe(data)">SUBSCRIBE</a>
                            </div>
                  <!--  <div class="img-holder head-image-holder"><img src="/assets/images/emailpopupimg.png"></div> -->
            </div>
        </section>
    @endif 

    <section class="author-description">
        <div class="container">
            <div>

                <?php include('/var/www/ideaing/public/ideas/wp-content/themes/ideaing/author-desc.php') ?>
            </div>
            <div class="col-sm-10 col-xs-9">
                <p ng-bind="authorBio">
                    <?php //the_author_meta('description'); ?>
                </p>
            </div>
        </div>
    </section>


    <?php
    //loadLaravelView('comments-product');
    loadLaravelView('comments-ideas');
    ?>


    <!-- /article -->

<?php 
    setPostViews(get_the_ID());
    endwhile; 

?>

<?php// else: ?>
<?php endif; ?>

<section class="related-items pale-grey-bg">
    <div class="main-content full-620 fixed-sm container">
        <div class="container col-xs-12 center-block no-padding">
            <h4 class="home-subheader"><span>Must Reads</span></h4>
        </div>
        <div class="related-ideas grid-box-2">

            <?php
            //                    Get 3 posts with similar tags. If there are no tags, get any 3 posts
            wp_reset_query();

            $args = [
                'post__not_in' => array($post->ID),
                'tag__not_in' => [29],
                'posts_per_page' => 2,
                'caller_get_posts' => 1
            ];

            $tags = wp_get_post_tags($post->ID);
            if ($tags) {
                $first_tag = $tags[0]->term_id;
                foreach ($tags as $tag) {
                    $allTags = $tag->slug;
                }
            }
            $args['tag_slug__in'] = $allTags;

            $my_query = new WP_Query($args);

            if ($tags && (!$my_query->have_posts() || $myquery->found_posts < 3)) { // if there are not posts with similar tags, get just any posts
                unset($args['tag_slug__in']);
                $my_query = new WP_Query($args);
            }

            if ($my_query->have_posts()) {
                while ($my_query->have_posts()) : $my_query->the_post();
                    $image = get_field('feed_image');

                    $datepublishstring = get_the_time('Y-m-d H:i:s');
                    $relatedItem['updated_at'] = timeAgo($datepublishstring);

                    $relatedItem['author'] = get_the_author();
                    $relatedItem['author_id'] = get_the_author_meta('ID');

                    $laravelUser = file_get_contents('https://ideaing.com/api/info-raw/' . get_the_author_email());
                    $laravelUser = json_decode($laravelUser, true);

                    $relatedItem['authorlink'] = $laravelUser['permalink'];

                    if (isset($laravelUser['medias'][0])) {
                        $relatedItem['avator'] = $laravelUser['medias'][0]['media_link'];
                    } else {
                        $relatedItem['avator'] = get_avatar_url(get_the_author_email(), '80');
                    }

                    $cats = get_the_category();
                    $relatedItem['category'] = $cats[0]->name;
                    $relatedItem['categorySlug'] = strtolower(str_replace(' ', '-', $relatedItem['category']));


                    ?>

                    <div class="box-item idea-box">
                        <div class="img-holder">
                            <img src="{{$image['url']}}">
                        </div>
                        <div class="category-{{$relatedItem['categorySlug']}}">
                            <div class="idea-meta">
                                <div class="box-item__label-idea">
                                    <a href="{{the_permalink()}}" class="box-item__label" itemprop="name">{{the_title()}}</a>
                                </div>

                                <a href="/ideas">
                                    <span class="round-tag__label in" itemprop="articleSection">In {{$relatedItem['category']}}, Ideas <i class="m-icon m-icon--bulb"></i></span>
                                </a>
                                <div class="box-item__author">
                                    <a href="/user/profile/{{$relatedItem['authorlink']}}"  class="user-widget">
                                        <img class="user-widget__img" src="{{$relatedItem['avator']}}">
                                        <span class="user-widget__name" itemprop="author">{{$relatedItem['author']}}</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <span class="box-item__time text-uppercase"  itemprop="dateCreated">{{$relatedItem['updated_at']}}</span>

                        <a href="{{the_permalink()}}">
                            <div class="box-item__overlay"></div>
                        </a>
                    </div>

                    <?php
                endwhile;
            }
            ?>
        </div>
        <?php
        $limit = 10;
        $offset = 0;
        $prelatedTag =  get_field('related-products-tag') ?: $firstTag->name;
        $url = str_replace('/ideas', "", get_site_url()) . '/api/paging/get-content/1/3/' . strtoupper( str_replace(' ', '%20', $prelatedTag)) . '/product';

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt($ch, CURLOPT_VERBOSE, true);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);
        curl_setopt($ch, CURLOPT_ENCODING, "");
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
        $json = curl_exec($ch);
        $json = json_decode($json);
        $relatedProducts = $json->content;
        ?>

        @if(isset($relatedProducts) && ($relatedProducts != null) && count($relatedProducts)>0 )
        <div class="container col-xs-12 center-block no-padding">
            <h4 class="home-subheader"><span>Awesome Products</span></h4>
        </div>

        <div class="related-products grid-box-3">
            @foreach( $relatedProducts as $product )
            <div class="box-item product-box ">
                <div class="img-holder">
                    <img class="img-responsive" src="{{ $product->media_link_full_path }}">
                </div>

                <div class="category-{{$product->master_category_name}}">
                    <div class="idea-meta product  category-bg">

                        <div class="box-item__label-product">
                            <a href="/product/{{$product->product_permalink}}" class="box-item__label box-item__label--clear" itemprop="name">{{ $product->product_name }}</a>
                        </div>

                        <a  href="/products">
                            <span class="round-tag__label in" itemprop="articleSection">In {{($product->master_category_name && $product->master_category_name != $product->category_name) ? $product->master_category_name . ', ' : '' }}{{$product->master_category_name}} <i class="m-icon m-icon--shopping-bag-light-green white"></i></span>
                        </a>

                    </div>
                </div>
                <span class="box-item__time text-uppercase">{{ $product->updated_at }}</span>
                <div class="box-item__overlay" ng-click="openProductPopup({{$product->id}})"></div>
            </div>
            @endforeach
        </div>
        @endif
    </div>
</section>
 <div class="mobile-sharing horizontal-sharing hidden-soft">
     <ul class="share-buttons">
         <h5>Sharing is caring</h5>
         <?php loadLaravelView('share-buttons'); ?>
     </ul>
 </div>

    <script>
        ( function( $ ) {

        } )( jQuery );

    </script>

    <?php loadLaravelView('giveaway-popup'); ?>
    <?php loadLaravelView('product-popup'); ?>

</div>
<?php get_footer(); ?>
</div>

<?php loadLaravelView('side-menu') ?>

<!-- <script type="text/javascript" src="/assets/product/js/custom.product.js"></script> -->