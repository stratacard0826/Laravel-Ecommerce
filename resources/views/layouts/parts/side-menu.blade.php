
<nav id="dummy" class="dummy slide-menu c-menu c-menu--push-left">

    <form class="search-bar col-sm-2 col-lg-2 pseudo-full-wide" ng-app="publicApp" ng-controller="SearchController" action="/search-form-query" autocomplete="off">
        <span class="search-input-holder">
            <i class="m-icon m-icon--search-id"></i>
            <input ng-click="toggleSearch()" id="search-input"
                   ng-change="openSearchDropdown(query)" ng-model="query"
                   ng-model-options='{ debounce: 800 }' class="form-control top-search"
                   type="text" name="search" placeholder="Find Smart Products..."/>
            <div id="suggest-category" ng-class="{shown: open, hidden: !open}"
                 ng-show="categorySuggestions.length">
                <?php // have to use only pure php includes, or the CMS wont read it
                include('/var/www/ideaing/resources/views/layouts/parts/search-dropdown.blade.php')
                ?>
            </div>
        </span>
    </form>

    <ul class="top-menu col-xs-9">
        <li>
            <a class="shop m-icon-text-holder dark-orange" href="/shop">
                <i class="m-icon m-icon--shopping-bag-light-green black"></i>
                <span class="m-icon-text black text-bold">Shop</span>
            </a>
        </li>
    </ul>
    <ul class="mid-menu col-xs-12">
        <li class="col-xs-12 nested">
            <a data-click="#show-smart-home" href="/smart-home" class="category-link__smart-home" href="#">
                <i class="m-icon m-icon--smart-home"></i>
                <span class="m-icon-text">Smart Home</span>
            </a>
            <ul class="child wrap col-xs-12">
                <li><a href="https://ideaing.com/idea/kitchen">Kitchen</a></li>
                <li><a href="https://ideaing.com/idea/bath">Bath</a></li>
                <li><a href="https://ideaing.com/idea/bedroom">Bedroom</a></li>
                <li><a href="https://ideaing.com/idea/office">Office</a></li>
                <li><a href="https://ideaing.com/idea/living">Living</a></li>
                <li><a href="https://ideaing.com/idea/outdoor">Outdoor</a></li>
                <li><a href="https://ideaing.com/idea/lighting">Lighting</a></li>
                <li><a href="https://ideaing.com/idea/security">Security</a></li>
            </ul>
        </li>
        <li class="col-xs-12">
            <a data-click="#show-smart-entertainment" class="category-link__smart-entertainment m-icon-text-holder" href="/smart-entertainment">
                <i class="m-icon m-icon--video"></i>
                <span class="m-icon-text"><span>Smart</span> Entertainment</span>
            </a>
        </li>
        <li class="col-xs-12">
            <a data-click="#show-smart-body"  class="category-link__smart-body m-icon-text-holder" href="/ideas/smart-body">
                <i class="m-icon m-icon--wearables"></i>
                <span class="m-icon-text"><span>Smart</span> Body</span>
            </a>
        </li>
        <li class="col-xs-12">
            <a data-click="#show-smart-travel" class="category-link__smart-travel m-icon-text-holder" href="/ideas/smart-travel">
                <i class="m-icon m-icon--travel"></i>
                <span class="m-icon-text"><span>Smart</span> Travel</span>
            </a>
        </li>
        <li class="col-xs-12">
            <a class="category-link__advice m-icon-text-holder" href="/advice">
                <i class="m-icon m-icon--comments-products"></i>
                <span class="m-icon-text">Advice</span>
            </a>
        </li>
    </ul>
</nav>

<script>

</script>