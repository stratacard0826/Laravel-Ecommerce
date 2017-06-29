<ul class="cat-suggestions">
    <li ng-repeat="item in categorySuggestions" >
        <a href="{{item.link}}">
            <i ng-if="item.isProduct == 1" class="hidden-xs m-icon m-icon--shopping-bag-light-green"></i>
            <i ng-if="item.type == 'ideas'" class="hidden-xs m-icon m-icon--bulb"></i>
            <b  class="black">{{renderHTML(item.term)}}</b> in {{item.type}}
        </a>
    </li>
</ul>