<ul class="category-nav main-content-filter">
    <li ng-class="{active: (activeMenu == '1' || !activeMenu)}" ng-click="activeMenu='1'">
        <a ng-click="filterContent(null)"  href="" data-filterby="all" class="all-link">
            <i class="m-icon m-icon--menu"></i>
            All

        </a>
    </li>
    <li ng-class="{active: activeMenu == '2'}" ng-click="activeMenu='2'">
        <a ng-click="filterContent('idea')" data-filterby="ideas" href="" class="ideas-link">
            <i class="m-icon m-icon--bulb"></i>
            Ideas
        </a>
    </li>
    <li ng-class="{active: activeMenu == '3'}" ng-click="activeMenu='3'">
        <a  ng-click="filterContent('product')" data-filterby="products" href="" class="products-link">
            <i class="m-icon m-icon--item"></i>
            Products
        </a>
    </li>
    <li ng-class="{active: activeMenu == '4'}" ng-click="activeMenu='4'">
        <a data-filterby="photos" href="" class="photos-link">
            <i class="m-icon m-icon--image"></i>
            Photos
        </a>
    </li>
</ul>