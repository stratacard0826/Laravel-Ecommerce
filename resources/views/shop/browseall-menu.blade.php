<nav id="all-shop-menu" ng-class="['shop-menu hidden-soft', {'show-all-shop-menu': showBrowseAll}]">
    <div class="container full-sm">
        <section class="col-xs-4 shop-by-category" >
            <p class="title"><a href="/shop/">Shop by Category</a></p>
            @foreach($categoryTree as $name => $unused)
                @if(ucfirst(str_replace('-', ' ', $name)) != 'Decor')
                    <div class="link-row">
                        <a class="{{@$parentCategory == $name ||  @$grandParent == $name ? 'pink' : ''}}" href="/shop/{{$name}}">{{ucfirst(str_replace('-', ' ', $name))}}</a>
                    </div>
                @endif
            @endforeach
        </section>

        @foreach($categoryTree as $parent => $children)
            <section class="{{$parent}} col-xs-8 {{@$parentCategory->category_name != $parent &&  @$grandParent != $parent ? 'hidden' : ''}}">
                <div class="col-md-12">
                    <p class="title"><a href="/shop/{{$parent}}">{{ucfirst(str_replace('-', ' ', $parent))}}</a></p>
                    @foreach($children as $child)
                        @if($currentCategory->category_name != $child->category_name)
                            <div class="col-sm-4 link-row"><a href="/shop/{{$parent}}/{{$child->extra_info}}">{{$child->category_name}}</a></div>
                        @endif
                    @endforeach
                </div>
            </section>
        @endforeach
    </div>

    <div class="close-button-container" ng-click="showBrowseAll ? showBrowseAll=0: showBrowseAll=1">
        <i class="m-icon--Close"></i>
    </div>
</nav>
<div ng-class="['all-shop-menu-background', {'show-all-shop-menu': showBrowseAll}]"
     ng-click="showBrowseAll ? showBrowseAll=0: showBrowseAll=1"></div>
<div id="all-shop-menu-mobile" class="mobile-top-menu">
    @foreach($categoryTree as $parent => $children)
            <!--						<section class="{{$parent}} {{@$parentCategory->category_name != $parent &&  @$grandParent != $parent ? 'hidden' : ''}}">-->
    <ul class="{{$parent}} {{@$parentCategory->category_name != $parent &&  @$grandParent != $parent ? 'hidden' : ''}}">
        <!--                                    <a href="/shop/{{$parent}}">{{ucfirst(str_replace('-', ' ', $parent))}}</a>-->
        @foreach($children as $child)
            <li class=" "><a href="/shop/{{$parent}}/{{$child->extra_info}}">{{$child->category_name}}</a></li>
        @endforeach
    </ul>
    <!--						</section>-->
    @endforeach
</div>


