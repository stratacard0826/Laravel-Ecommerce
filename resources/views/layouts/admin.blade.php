<!DOCTYPE html>
<html lang="en">

@include('admin.includes.head')

<body class="page-header-fixed page-sidebar-closed-hide-logo page-content-white">
<div ng-app="adminApp" ng-controller="AdminController">

    @include('admin.includes.topbar')
    <!-- BEGIN HEADER & CONTENT DIVIDER -->
        <div class="clearfix"> </div>
    <!-- END HEADER & CONTENT DIVIDER -->
<div class="page-container">
    <!-- Page Content -->
    @include('admin.includes.sidebar')
    @yield('content')
    <!-- /#page-wrapper -->
</div>
<!-- /#wrapper -->
@include('admin.includes.foot')
@yield('pagelevelscript')

</div> <!-- angular end -->
</body>

</html>
