
<aside class="share-bar sticks-on-scroll" ng-app="publicApp" ng-controller="publicController" >
    <ul class="share-buttons">
        <?php
        if(!function_exists('is_single')){ ?>
            @include('layouts.parts.share-buttons')
        <?php     }else{
            loadLaravelView('share-buttons');
            }
        ?>
    </ul>
</aside>