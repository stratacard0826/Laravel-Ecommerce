<div class="category-{{item.category_main}}">
    <div class="idea-meta">
        <div class="box-item__label-idea"  ng-if="!item.is_deal">
            <a href="{{item.url}}" class="box-item__label" itemprop="name">{{renderHTML(item.title)}}</a>
        </div>

        <div class="box-item__label-idea deal"  ng-if="item.is_deal">
            <a href="{{item.url}}" class="box-item__label" itemprop="name">{{renderHTML(item.title)}}</a>
        </div>

        <a href="/ideas">
            <span class="round-tag__label in" itemprop="articleSection">In {{item.category}}, Ideas <i class="m-icon m-icon--bulb"></i></span>
        </a>

        <div class="social-stats__item views" ng-show="item.views >= 100">
            <i class="m-icon m-icon--flame"></i>
            <span class="social-stats__text ng-binding">{{item.views}} views</span>
        </div>

        <ul class="social-stats">

            <li class="social-stats__item comment" ng-if="item.CommentCount > 0">
                <a href="#">
                    <i class="m-icon m-icon--buble"></i>
                    <span class="social-stats__text"  itemprop="commentCount">{{item.CommentCount}}</span>
                </a>
            </li>
        </ul>

        <div class="box-item__author">
            <a href="/user/profile/{{item.authorlink}}"  class="user-widget">
                <img class="user-widget__img" src="{{item.avator}}">
                <span class="user-widget__name" itemprop="author">{{item.author}}</span>
            </a>
        </div>
    </div>
</div>
    <span class="box-item__time text-uppercase"  itemprop="dateCreated">{{item.updated_at}}</span>

    <a href="{{item.url}}" class="category-{{item.category_main}}">
      <!--  <div class="box-item__overlay category-bg"></div>-->
    </a>
