<!DOCTYPE html>
<html lang="en">
<head>
        @include('layouts.parts.head')
</head>

<body ng-app="rootApp" class="@yield('body-class', '')">
@yield('content')
    @include('layouts.parts.footer')
</body>
</html>

