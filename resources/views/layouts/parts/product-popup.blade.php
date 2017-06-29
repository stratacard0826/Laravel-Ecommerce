        <script type="text/ng-template" id="product-popup.html">
            <div class="lbMain">
                <div class="lbImageContainer">
                    <div id="product-slider" class="product-slider slider">
                    </div>
                </div>
                <div class="lbInfo">
                    <a class="close" href="#" ng-click="cancel()"><i class="m-icon--Close"></i> </a>
                    <div class="p-top-bar">
                        <p class="p-title"></p>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 ideaing-score-holder">
                            <div class="p-average-ideaing-score">
                                <i class="m-icon--bulb-detailed-on-rating"></i> <span class="p-score"></span><br>
                                <span>Average Ideaing Score</span>
                            </div>
                            <div class="pull-left p-nest-protect">
                                <span class="hidden base-url-holder" data-base-url="data.product_permalink"></span>
                                <ul class="">
                                    <li>
                                        <?php
                                        $userId = !empty($userData->id) ? $userData->id : 0;
                                        ?>

                                        <heart-counter-dir uid="<?php echo $userId ?>" iid=data.id plink=data.product_permalink sec='product'>

                                        </heart-counter-dir>

                                      <!--  <a href="#">
                                            <i class="m-icon m-icon--ScrollingHeaderHeart">
                                                <span class="m-hover">
                                                    <span class="path1"></span><span class="path2"></span>
                                                </span>
                                            </i> 7682
                                        </a> -->
                                    </li>
                                    <li>
                                        <i class="m-icon m-icon--alert"></i> Get Alerts
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-xs-12 p-get-it-holder">
                            <div class="p-get-it-amazon">
                                <div class="p-body">
                                    <a class="get-round hidden" href="" target="_blank">Get it</a>
                                    <img src="/assets/images/dummies/amazon-2.png">
                                    
                                </div>
                                <div class="p-footer">
                                    From $<span class="aws-price"></span> <i class=" m-icon--Right-Arrow-Active"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 p-row-group">
                                <ul class="share-buttons hidden-xs col-lg-7 col-md-8 pull-right">
                                    <?php if(function_exists('is_single')){
                                        loadLaravelView('share-buttons');
                                    }else{ ?>
                                        @include('layouts.parts.share-buttons')
                                  <?php  }
                                    ?>
                                </ul>
                        </div>
                        
                        <div class="col-xs-12 p-row-group">
                            <div class="p-row-inner" id="features">
                                <p></p>
                                <!-- p><a href="#" class="p-read-more">Read more <i class=" m-icon--Actions-Down-Arrow-Active"></i></a></p -->
                            </div>
                        </div>

                        <!-- div class="col-xs-12 p-row-group">
                            <div class="p-row-inner specification-container">
                                <p class="specification-title">Specifications</p>
                                <p>Nest Cam and IFTTT, this $99 detector is the best connected one we've seen yet. Nest Cam and IFTTT, this $99 Nest Cam and IFTTT, this $99 dectector is the best connected one we've seen yet. If you already have a first-gen Nest Protect. I'd skip this upgrade, but I strongly recommend the</p>
                                <p><a href="#" class="p-read-more">Read more <i class=" m-icon--Actions-Down-Arrow-Active"></i></a></p>
                                <br>
                                <p class="comparisons-title">Comparisons</p>

                            </div>
                        </div -->

                        <div class="col-xs-12 p-row-group">
                            <div class="p-row-inner p-reviews-holder">
                                <br><br>
                                <!--
                                <p class="p-reviews-title">Reviews(4)</p>
                                <br><br>
                                -->
                                <div class="reviews-medium-container">
                                    <div class="">
                                        <div class=" col-xs-12">
                                            <div class="average-score block-center">
                                                <div class="score">
                                                    <i class=" m-icon--bulb-detailed-on-rating"></i>
                                                    <span class="p-score"></span>
                                                </div>
                                                <span class="caption">Average Ideaing Score</span>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xs-6 text-center reviews-service-holder critic">
                                            <div class="vertical-line "></div>
                                            <div class="title">Critic</div>
                                            <div class="reviews">Reviews</div>

                                            <div class="star-rating">

                                            </div>
                                            <p class="black star-rating-label text-center">
                                            </p>
                                            
                                            <div id="critic-outer-rating-holder"></div>
                                        </div>
                                        
                                        <div class="col-xs-6 text-center reviews-service-holder amazon">
                                            <div class="vertical-line"></div>
                                            <div class="title"><a href="" target="_blank">Amazon</a></div>
                                            <div class="reviews">Reviews</div>
                                            <div class="star-rating text-center">
                                            </div>
                                            <p class="black text-center star-rating-label">
                                                
                                            </p>
                                        </div>
                                    </div>
                                </div>                                
                                <div class="critic-quote">
                                    <div>
                                        <p>It's the perfect balance of comfort and support without any annoying 'quicksand' feel<br><br>-&nbsp;<span class="author vcard"><span class="fn">Sean Fry,&nbsp;http://www.sleepinglikealog.com</span></span><!--EndFragment--><br><br></p>
                                    </div>
                                </div>                                

                            </div>
                        </div>
                        
                        <div class="col-xs-12 p-row-group">
                            <div class="p-row-inner p-comment-holder">
                                <br>
                                <div>
                                    <p class="p-comments-title pull-left">Comments (<span class="p-responses p-comment-responses"></span>)</p>
                                    <!-- span class="pull-right p-favorite"><i class="m-icon--heart-id"></i> 2,349</span> -->
                                    <div class="clearfix"></div>
                                </div>
                                <br><br>
                                
                                <div class="p-comment-content-holder comments"></div>
                            </div>
                        </div>
                        
                        <!-- div class="col-xs-12 p-row-group">
                            <div class="p-row-inner p-comment-holder p-add-comment">
                                <div class="p-comment-row">
                                    <div class="pull-left">
                                        <img src="/assets/images/dummies/author.png" width="50px" class="p-photo">
                                    </div>
                                    <div class="p-comment-box-holder">
                                        <div>
                                            <textarea id="comment-content" class="form-control" placeholder="What are you working on..."></textarea>
                                        </div>
                                        <div class="text-right p-footer">
                                            <i class="m-icon--camera"></i> &nbsp; Add a photo &nbsp; <button class="btn btn-primary">Post</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div -->
                        
                    </div>
                
                </div>
            </div>
        </script>
