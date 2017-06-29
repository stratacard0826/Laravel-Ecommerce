<aside class="room-filter">

    <ul class="extra-nav hidden-620">
        <li><a class="{{$currentCategory->extra_info}}-link" href="/shop/{{$currentCategory->extra_info}}">{{$currentCategory->category_name}}</a></li>
    </ul>

    <ul class="room-list">

        @if($filterCategories)
            @foreach($filterCategories as $child)
                <li>
                    <a ng-click="filterPlainContent('{{$child->extra_info}}', false)"  href="#" data-filterby="{{$child->extra_info}}">{{$child->category_name}}</a>
                </li>
            @endforeach
        @endif

    </ul>
</aside>