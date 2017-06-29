
<li ng-repeat="user in heartUsersInfo"><a class="" href="/user/profile/{{ user.permalink }}">
        <img id="currentPhoto" class="profile-photo category-hover-border" width="40px" alt="{{ user.name }}"
             ng-src="{{ user.medias[0].media_link }}"
             onerror="this.src='http://s3-us-west-1.amazonaws.com/ideaing-01/thumb-product-568d28a6701c7-no-item.jpg'">
    </a>
</li>

<li ng-if="heartCounter>3"><a class="more-like-count" href="#">+{{heartCounter-3}}</a></li>

