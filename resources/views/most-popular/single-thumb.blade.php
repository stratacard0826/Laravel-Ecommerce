<div class="popular-wrap single-thumb white-bg no-padding relative">
        <div ng-if="item.type == 'product'" class="box-item product-box overhide">
            <a href="/product/@{{item.product_permalink}}" >
                <img class="img-responsive" src="@{{ item.media_link_full_path }}">
            </a>
            <a href="/product/@{{item.product_permalink}}" class="category-@{{item.master_category}}">
               <div class="box-item__overlay category-bg opaque-hover"></div>
            </a>

        </div>
        <div ng-if="item.type == 'product'" class="popular-title col-xs-12"  style="min-height: 90px">
         	<div class="category-color">@{{item.master_category_name}}</div>
            <a href="/product/@{{item.product_permalink}}" class="black" itemprop="name">	<span>@{{item.product_name}}</span>
            </a>

            <div class="views absolute"  style="min-width: 42px">
                <i class="m-icon m-icon--flame black"></i>
                <span class="ng-binding"> @{{item.count}}</span>
            </div>
        </div>

        <div ng-if="item.type == 'idea'" class="box-item overhide">
            <a href="@{{item.url}}">
                    <img alt="@{{item.feed_image.alt}}" title="@{{item.feed_image.title}}"
                         src="@{{item.feed_image.url}}">
            </a>
            <a href="@{{item.url}}" class="category-@{{item.category_main}}">
               <div class="box-item__overlay category-bg opaque-hover"></div>
            </a>
           
        </div>
         <div ng-if="item.type == 'idea'" class="popular-title col-xs-12">
         	<div class="category-color">@{{item.category}}</div>
            <a href="@{{item.url}}" class="black" itemprop="name"><span>@{{item.title}}</span></a> 

            <div class="views absolute" style="min-width: 42px">
                <i class="m-icon m-icon--flame black"></i>
                <span class="ng-binding">@{{item.views}}</span>
            </div>
        </div>
</div>