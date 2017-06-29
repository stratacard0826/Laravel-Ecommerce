    <h4 >About the Author, <span ng-bind="authorName"></span>  </h4>
    <div class="col-md-1 col-sm-2 col-xs-3">
        <a class="" href="/user/profile/{{ authorPermalink }}">
        <img id="currentPhoto" class="profile-photo" width="150px" ng-src="{{ authorImage }}"
             onerror="this.src='https://d234pm57oy3062.cloudfront.net/thumb-product-568d28a6701c7-no-item.jpg'"
             width="170">
            </a>
    </div>
