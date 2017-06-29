@extends('layouts.main')

@section('body-class'){{ 'forum' }}@stop

@section('content')
<link href="/assets/admin/vendor/global/plugins/font-awesome/css/font-awesome.min.css" rel="stylesheet"
      type="text/css"/>

	<div ng-app="productApp" data-ng-controller="forumThreadController" class="ideaing-product" >
		<div class="top-bar">
			<div class="container">
				<span class="title">Discussions</span>
			</div>
		</div>
        <div ng-init="thread_id={{$id}}"></div>
		<div id="posts-content-container">
			<div class="container">
				<h2 id="thread-title">@{{thread.title}}</h2>
				<div class="row">
					<div class="col-md-12">
						<div class="thread-history-container pull-right">
							<div class="thread-history-item">
								<span class="title">@{{thread.viewCount}}</span><br>
								<span>VIEWS</span>
							</div>
							<div class="thread-history-item">
								<span class="title">@{{thread.postTime}}</span><br>
								<span>ACTIVITY</span>
							</div>
							<div class="thread-history-item">
								<span class="title">@{{thread.authorName}}</span><br>
								<span>POSTED BY</span>
							</div>
						</div>
                        <div class="clearfix"></div>
					</div>
				</div>
                <div class="comment-row owner">
                    <div class="comment-profile-holder text-center">
                        <img class="profile-photo" src="@{{thread.authorPicture}}"><br>
                        <span class="name">@{{thread.authorName}}</span><br>
                    </div>
                    <div class="comment-content-container">
                        <div class="comment-content-holder active">
                            <div class="comment-content-inner-holder">
                                <div class="comment-conent">
                                    <div class="content" ng-bind-html="thread.content"></div>
                                </div>
                                <div class="comment-bottom">
                                    <div class="pull-left">
                                        <i class="m-icon m-icon--flame-fill"></i> &nbsp; Viewed more than <span>10,000</span> times in 48 hours &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </div>
                                    <div class="pull-left">
                                        <i class="m-icon m-icon--star-blue-full"></i> &nbsp; <span>115</span> have this question
                                    </div>
                                    <div class="pull-right reply" ng-click="commentPopup(thread.id, 0)"><i class="m-icon m-icon--comments-products"></i> &nbsp; Reply</div>
                                    <div class="pull-right link-to-this-post"><i class="m-icon m-icon--attachment"></i> &nbsp; Link to this post</div>
                                    <div class="clearfix"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="clearfix"></div>
                </div>
                <script type="text/ng-template" id="forum-comment.html">
                    <div class="inner-content">
                        <div ng-class="['comment-edit-container', {'has-content': commentData.content}]" ng-show="show_editor">
                            <div text-angular ta-target-toolbars="toolbar" ng-model="commentData.content" ta-html-editor-class="border-around ta-editor" ta-disabled='disabled' ta-text-editor-class="border-around ta-editor" >
                            </div>
                            <div text-angular-toolbar name="toolbar"></div>
                        </div>
                        <div ng-hide="show_editor">
                            <textarea placeholder="Type reply ..." class="forum-text"
                            ng-click="show_editor=1; focus_editor=true; focusEditor()" cols="" rows=""
                            class=" ta-text ta-editor"></textarea>
                        </div>
                        <div class="button-container">
                            <button class="btn pull-right btn-submit" id="submit-commnet" ng-click="saveComment()">Post</button>
                            <button class="btn pull-right" id="cancel-commnet" ng-click="cancel()">Cancel</button>
                            <div class="clearfix"></div>
                        </div>
                    </div>
                </script>

                <div ng-show="1" compile-data template="@{{commentHTML}}">

                </div>
                    
                <div class="text-center hide" style="padding-top: 40px; padding-bottom: 20px;">
                    <button class="btn btn-more">More</button>
                </div>
			</div>
		</div>
        <div class="related-articles-container">
            <div class="container">
                <h4 class="title">Related articles</h4>
                <br>
                <div class="row thread-list-container">
                    <div class="col-lg-9 col-md-9">
                        <div class="row">
                            <div class="col-xs-5">
                                <span class="forum-small-title">NEWEST TOPIC</span>
                            </div>
                            <div class="col-xs-5">
                                <span class="forum-small-title">CATEGORY</span>
                            </div>
                            <div class="col-xs-2">
                                <span class="forum-small-title">VIEWS</span>
                            </div>
                        </div>
                        <div class="height-10"></div>
                        <div class="forum-list">
                            <div class="forum-list-row">
                                <div class="row">
                                    <div class="col-xs-5 forum-col">
                                        <span>
                                            Apple Watch battery with aluminium solution watch full
                                        </span>
                                    </div>
                                    <div class="col-xs-5 forum-col">
                                        <span>
                                            SMART HOMES -> NETWORKING
                                        </span>
                                    </div>
                                    <div class="col-xs-2 forum-col">
                                        <span>
                                            45500
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3">
                        <div>
                            <span class="forum-small-title">MOST ACTIVE MEMBERS</span>
                        </div>
                        <div class="height-10"></div>
                        <div class="recent-member-list">
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="member-list-row">
                                        <div class="member-image"></div>
                                        <div class="member-desc">
                                            <span>PETE MYERS STONE</span><br>
                                            <span>87% REPUTATION</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="member-list-row">
                                        <div class="member-image"></div>
                                        <div class="member-desc">
                                            <span>PETE MYERS STONE</span><br>
                                            <span>87% REPUTATION</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
	</div>
@stop