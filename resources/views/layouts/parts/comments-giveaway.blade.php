<link href="/assets/admin/vendor/global/plugins/font-awesome/css/font-awesome.min.css" rel="stylesheet"
      type="text/css"/>
<script>
    var img = "<?php echo empty($giveaway->giveaway_image) ? "" : $giveaway->giveaway_image ?>";
    var giveawayLink = "<?php echo empty($giveaway->giveaway_permalink) ? "" : $giveaway->giveaway_permalink ?>";
</script>

<section class="comments" id="comments">
    <div class="container product-comment" itemprop="review" itemscope itemtype="http://schema.org/Review">
        <a name="comment"></a>
        <input type="hidden" ng-init="userId='<?php echo $userId ?>'">
        <input type="hidden" ng-init="isAdmin='<?php echo $isAdminForEdit?>'">
        <div ng-init="getCommentsForGiveaway(<?php echo $giveaway->id ?>)">
            <h4><?php echo "{{ commentsCountView }}" ?></h4>
            <div ng-repeat="comment in comments">
                <div class="single-comment">
                    <div class="col-md-1 col-sm-2 col-xs-3 comment-author">
                        <!--<a class="author" href="#"></a>-->
                        <a href="/user/profile/<?php echo "{{ comment.Permalink }}"?>">
                            <img class="profile-photo " ng-src="<?php echo "{{ comment.Picture }}"?>" width="50px">
                        </a>


                        <div><b class="comment-name" itemprop="author"><?php echo "{{ comment.UserName }}" ?></b></div>
                    </div>
                    <div class="col-md-8 col-sm-8 col-xs-7 comment-row-content">
                        <p>
                        <div itemprop="description" ng-bind-html="comment.Comment"></div>

                        </p>
                        <time itemprop="datePublished"
                              content="{{date('y-m-d')}}"> <?php echo "{{ comment.PostTime }}"?></time>

                        <button ng-show="(comment.UserId == userId)  || (isAdmin == 1)"
                                data-ng-click="editComment(comment)"
                                uib-tooltip="Edit"
                                class="btn btn-info btn-circle"
                                type="button">
                            <i class="fa fa-edit"></i>
                        </button>
                        <button ng-show="(comment.UserId == userId)  || (isAdmin == 1)"
                                data-ng-click="deleteComment(comment.CommentId)"
                                confirm="Are you sure to delete this comment ?"
                                confirm-settings="{size: 'sm'}"
                                uib-tooltip="Delete"
                                class="btn btn-danger btn-circle"
                                type="button">
                            <i class="fa fa-times"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <?php
        if(!empty($userData['email']))
        { ?>
        <section class="add-comment">
            <div class="single-comment">
                <div class="col-md-1 col-sm-2 col-xs-3 comment-author">
                    <!--  <a class="author" href="#"></a> -->
                    <img class="profile-photo" width="50px"
                         src="<?php echo isset($userData['medias'][0]['media_link']) ? $userData['medias'][0]['media_link'] : "" ?>">

                </div>
                <div class="col-md-11 col-sm-10 col-xs-9">

                    <div ng-class="['col-md-12', 'comment-edit-container', {'has-content': html}]"
                         ng-show="show_editor">
                        <div text-angular data-ng-model="html" ta-disabled='disabled'
                             name="description-editor"
                             ta-text-editor-class="border-around ta-editor"
                             ta-html-editor-class="border-around ta-editor">
                        </div>
                    </div>
                    <div class="col-md-12" ng-hide="show_editor">
                        <textarea placeholder="Write a comment" class="form-control"
                                  ng-click="show_editor=1; focus_editor=true; focusEditor()" cols="" rows=""
                                  class=" ta-text ta-editor"></textarea>
                    </div>

                    <div class="col-md-12 comment-controls text-right">
                        <button class="btn btn-info btn-outline" ng-hide="isEdit"
                                ng-click="addCommentForGiveaway(<?php echo $userData['id'] . "," . $giveaway->id . "," . "'giveaway'" . "," . "html"?>)">
                            Post
                        </button>
                        <button class="btn btn-info" ng-show="isEdit"
                                ng-click="updateComment()">
                            Update
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <?php } else{ ?>
        <section>
            <a class="signup-to-comment" href="#" data-toggle="modal" data-target="#myModal" href="/login">Sign Up to
                Comment</a>
        </section>
        <?php } ?>
    </div>
</section>