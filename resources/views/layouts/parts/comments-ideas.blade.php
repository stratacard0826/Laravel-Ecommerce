<link href="/assets/admin/vendor/global/plugins/font-awesome/css/font-awesome.min.css" rel="stylesheet"
      type="text/css"/>
<?php

if (function_exists('is_single')) {
    if (isset($GLOBALS['userData']) && isset($GLOBALS['isAdmin'])) {
        $userData = $GLOBALS['userData'];
        $isAdmin = $GLOBALS['isAdmin'];
    }

    $permalink = get_the_permalink();

    $permalink = parse_url($permalink)['path'];

    $permalink = str_replace('/ideas/', '', $permalink);

    //echo $permalink ."-".$isAdmin."-".$isAdminForEdit;
    //echo "sd".$isAdminForEdit;

    global $post;
    $itemId = $post->ID;
}
?>
<script>
    // store info for comment
    var plink = '<?php echo $permalink;?>';
    var itemId = <?php echo $itemId;?> ;
    var uid = <?php echo isset($userData['id'])?$userData['id']:0;?> ;
    var img = "<?php echo str_replace('ideaing-ideas.s3.amazonaws.com', 'd3f8t323tq9ys5.cloudfront.net', getThumbnailLink($post->ID)); ?>" ;
</script>
<div ng-app="publicApp" ng-controller="publicController" class="comments-wrap">

    <section class="comments container col-sm-7 center-block" id="comments">
        <h4 ng-if="commentsCountView && commentsCountView != 0" class="col-xs-12 home-subheader no-padding"><span><?php echo "{{ commentsCountView }}" ?> </span></h4>
        <h4 ng-if="commentsCountView == 0 || !commentsCountView" class="col-xs-12 home-subheader  no-padding"><span> Drop a Comment</span></h4>

        <div class="comment-box radius-5 <?php echo !empty($userData['email']) ? 'has-comments' : ''; ?>">
            <a name="comment"></a>
            <input type="hidden" ng-init="userId='<?php echo $userData['id']?>'">
            <input type="hidden" ng-init="isAdmin='<?php echo $isAdmin?>'">
            <div ng-init="getCommentsForIdeas(<?php echo $itemId?>)">
                <div ng-repeat="comment in comments">
                    <div class="single-comment">
                        <div class="col-md-1 col-sm-2 col-xs-3 comment-author">
                            <a href="/user/profile/<?php echo "{{ comment.Permalink }}"?>">
                                <img class="profile-photo " ng-src="<?php echo "{{ comment.Picture }}"?>" width="50px">
                            </a>

                            <div><b class="comment-name"><?php echo "{{ comment.UserName }}" ?></b></div>
                        </div>
                        <div class="col-md-8 col-sm-8 col-xs-7 comment-row-content">
                            <p>
                            <div ng-bind-html="comment.Comment"></div>

                            </p>
                            <time> <?php echo "{{ comment.PostTime }}"?></time>

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
            //dd($userData['email'],);
            if(!empty($userData['email']))
            { ?>
            <section class="add-comment">
                <div class="single-comment">
                    <div class="col-md-1 col-sm-2 col-xs-3 comment-author">
                        <img class="profile-photo" width="50px"
                             src="<?php echo isset($userData['medias'][0]['media_link']) ? $userData['medias'][0]['media_link'] : "" ?>">

                    </div>
                    <div class="col-md-11 col-sm-10 col-xs-9 flashing">
                      <!--  <span class="input input--minoru"  ng-hide="show_editor">
                            <textarea ng-click="show_editor=1" class="form-control input__field input__field--minoru"></textarea>
                            <label class="input__label input__label--minoru" for="input-14"></label>
                        </span> -->

                        <span class="input input--minoru" ng-class="['col-md-12', 'comment-edit-container', {'has-content': html}]">
                            <textarea class="input__field input__field--minoru" text-angular data-ng-model="html" ta-disabled='disabled'
                                 name="description-editor" ta-toolbar="[]"
                                 ta-text-editor-class="border-around ta-editor"
                                 ta-html-editor-class="border-around ta-editor">
                            </textarea>
                                <label class="input__label input__label--minoru" for="input-14"></label>

                        </span>
                       <!-- <div class="col-md-12" ng-hide="show_editor">


                            <span class="input input--minoru">
                              <textarea class="form-control input__field input__field--minoru"
                                        ng-click="show_editor=1" cols="" rows=""
                                        class=" ta-text ta-editor"></textarea>
                            <label class="input__label input__label--minoru" for="input-14"></label>
                                </span> -->

                    </label>
				</span>

                        </div>

                        <div class="col-md-12 comment-controls text-right">

                            <button class="button--moema btn btn-info radius-15 category-bg no-border" ng-hide="isEdit"
                                    ng-click="addCommentForIdeas(<?php echo $userData['id'] . "," . $itemId . "," . "'$permalink'" . "," . "html"?>)">
                                SEND
                            </button>
                            <button class="button--moema btn btn-info radius-15 category-bg no-border" ng-show="isEdit"
                                    ng-click="updateComment()">
                                UPDATE
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <?php  }else{ ?>
                <section class="col-xs-12">
                    <a class="signup-to-comment" href="#" data-toggle="modal" data-target="#myModal" href="/signup">Sign Up to Comment</a>
                </section>
            <?php  } ?>
        </div>
    </section>
</div>
