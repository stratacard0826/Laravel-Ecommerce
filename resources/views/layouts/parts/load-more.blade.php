<div class="container overhide">
    <a ng-show="hasMore" ng-click="loadMore()" class="btn btn-success bottom-load-more col-xs-12 hidden">Load More</a>
    <div class="loader loader-static" cg-busy="nextLoad">
        <ul class="bokeh">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</div>