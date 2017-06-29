<!-- BEGIN SIDEBAR -->
<div class="page-sidebar-wrapper">
    <!-- BEGIN SIDEBAR -->
    <!-- DOC: Set data-auto-scroll="false" to disable the sidebar from auto scrolling/focusing -->
    <!-- DOC: Change data-auto-speed="200" to adjust the sub menu slide up/down speed -->
    <div class="page-sidebar navbar-collapse collapse">
        <!-- BEGIN SIDEBAR MENU -->
        <!-- DOC: Apply "page-sidebar-menu-light" class right after "page-sidebar-menu" to enable light sidebar menu style(without borders) -->
        <!-- DOC: Apply "page-sidebar-menu-hover-submenu" class right after "page-sidebar-menu" to enable hoverable(hover vs accordion) sub menu mode -->
        <!-- DOC: Apply "page-sidebar-menu-closed" class right after "page-sidebar-menu" to collapse("page-sidebar-closed" class must be applied to the body element) the sidebar sub menu mode -->
        <!-- DOC: Set data-auto-scroll="false" to disable the sidebar from auto scrolling/focusing -->
        <!-- DOC: Set data-keep-expand="true" to keep the submenues expanded -->
        <!-- DOC: Set data-auto-speed="200" to adjust the sub menu slide up/down speed -->
        <ul class="page-sidebar-menu  page-header-fixed " data-keep-expanded="false" data-auto-scroll="true" data-slide-speed="200" style="padding-top: 20px">
            <!-- DOC: To remove the sidebar toggler from the sidebar you just need to completely remove the below "sidebar-toggler-wrapper" LI element -->
            <li class="sidebar-toggler-wrapper hide">
                <!-- BEGIN SIDEBAR TOGGLER BUTTON -->
                <div class="sidebar-toggler"> </div>
                <!-- END SIDEBAR TOGGLER BUTTON -->
            </li>
            <!-- DOC: To remove the search box from the sidebar you just need to completely remove the below "sidebar-search-wrapper" LI element -->
            <li class="sidebar-search-wrapper">
                <!-- BEGIN RESPONSIVE QUICK SEARCH FORM -->
                <!-- DOC: Apply "sidebar-search-bordered" class the below search form to have bordered search box -->
                <!-- DOC: Apply "sidebar-search-bordered sidebar-search-solid" class the below search form to have bordered & solid search box -->
                <form class="sidebar-search  " action="page_general_search_3.html" method="POST">
                    <a href="javascript:;" class="remove">
                        <i class="icon-close"></i>
                    </a>
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Find Smart Products...">
                        <span class="input-group-btn">
                            <a href="javascript:;" class="btn submit">
                                <i class="icon-magnifier"></i>
                            </a>
                        </span>
                    </div>
                </form>
                <!-- END RESPONSIVE QUICK SEARCH FORM -->
            </li>
            <li class="nav-item start active open">
                <a href="/admin/dashboard" class="nav-link nav-toggle">
                    <i class="icon-home"></i>
                    <span class="title">Dashboard</span>
                    <span class="selected"></span>
                </a>
            </li>
            <li class="nav-item  ">
                <a href="javascript:;" class="nav-link nav-toggle">
                    <i class="icon-graph"></i>
                    <span class="title">User Management</span>
                    <span class="arrow"></span>
                </a>
                <ul class="sub-menu">
                    <li class="nav-item  ">
                        <a href="/admin/user-list" class="nav-link ">
                            <span class="title">User List</span>
                        </a>
                    </li>
                    <li class="nav-item  ">
                        <a href="/admin/user-add" class="nav-link ">
                            <span class="title">Add User</span>
                        </a>
                    </li>
                    <li class="nav-item  ">
                        <a href="/admin/subscribers-list" class="nav-link ">
                            <span class="title">Subscribers List</span>
                        </a>
                    </li>
                    <li class="nav-item  ">
                        <a href="/admin/admin-mail-list" class="nav-link ">
                            <span class="title">Admin Mail Notification</span>
                        </a>
                    </li>
                    <li class="nav-item  ">
                        <a href="/admin/paid-membership-report" class="nav-link ">
                            <span class="title">Paid Members List</span>
                        </a>
                    </li>
                </ul>
            </li>

            <li class="nav-item  ">
                <a href="javascript:;" class="nav-link nav-toggle">
                    <i class="icon-graph"></i>
                    <span class="title">Report</span>
                    <span class="arrow"></span>
                </a>
                <ul class="sub-menu">
                    <li class="nav-item  ">
                        <a href="/admin/subscription-report" class="nav-link ">
                            <span class="title">User Count Report</span>
                        </a>
                    </li>
                </ul>
            </li>

            <li class="nav-item  ">
                <a href="javascript:;" class="nav-link nav-toggle">
                    <i class="icon-tag"></i>
                    <span class="title">Categories</span>
                    <span class="arrow"></span>
                </a>
                <ul class="sub-menu">
                    <li class="nav-item  ">
                        <a href="/admin/category-view" class="nav-link ">
                            <span class="title">Category List</span>
                        </a>
                    </li>
                    <li class="nav-item  ">
                        <a href="/admin/category-add" class="nav-link ">
                            <span class="title">Add Category</span>
                        </a>
                    </li>
                    <li class="nav-item  ">
                        <a href="/admin/category-edit" class="nav-link ">
                            <span class="title">Edit Category</span>
                        </a>
                    </li>
                    <li class="nav-item  ">
                        <a href="/admin/category-read" class="nav-link ">
                            <span class="title">Read Categories</span>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="nav-item  ">
                <a href="javascript:;" class="nav-link nav-toggle">
                    <i class="icon-tag"></i>
                    <span class="title">Forum Categories</span>
                    <span class="arrow"></span>
                </a>
                <ul class="sub-menu">
                    <li class="nav-item  ">
                        <a href="/admin/forum-category-view" class="nav-link ">
                            <span class="title">Forum Category List</span>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="nav-item  ">
                <a href="javascript:;#product" class="nav-link nav-toggle">
                    <i class="icon-graph"></i>
                    <span class="title">Products</span>
                    <span class="arrow"></span>
                </a>
                <ul class="sub-menu">
                    <li class="nav-item  ">
                        <a href="/admin/product-view" class="nav-link ">
                            <span class="title">Product List</span>
                        </a>
                    </li>
                    <li class="nav-item  ">
                        <a href="/admin/product-add" class="nav-link ">
                            <span class="title">Add Product</span>
                        </a>
                    </li>
                </ul>
            </li>

            <li class="nav-item  ">
                <a href="javascript:;" class="nav-link nav-toggle">
                    <i class="icon-tag"></i>
                    <span class="title">Stores</span>
                    <span class="arrow"></span>
                </a>
                <ul class="sub-menu">
                    <li class="nav-item  ">
                        <a href="/admin/stores" class="nav-link ">
                            <span class="title">Manage Stores</span>
                        </a>
                    </li>
                </ul>
            </li>

            <li class="nav-item  ">
                <a href="javascript:;" class="nav-link nav-toggle">
                    <i class="icon-tag"></i>
                    <span class="title">Tags</span>
                    <span class="arrow"></span>
                </a>
                <ul class="sub-menu">
                    <li class="nav-item  ">
                        <a href="/admin/tag-view" class="nav-link ">
                            <span class="title">Manage Tags</span>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="nav-item  ">
                <a href="javascript:;#room" class="nav-link nav-toggle">
                    <i class="icon-wallet"></i>
                    <span class="title">Rooms</span>
                    <span class="arrow"></span>
                </a>
                <ul class="sub-menu">
                    <li class="nav-item  ">
                        <a href="/admin/room-view" class="nav-link ">
                            <span class="title">Rooms List</span>
                        </a>
                    </li>
                    <li class="nav-item  ">
                        <a href="/admin/room-add" class="nav-link ">
                            <span class="title">Add Room</span>
                        </a>
                    </li>
                </ul>
            </li>
            {{--<li class="nav-item  ">
                <a href="javascript:;#home" class="nav-link nav-toggle">
                    <i class="icon-wallet"></i>
                    <span class="title">HomePage Hero</span>
                    <span class="arrow"></span>
                </a>
                <ul class="sub-menu">
                    <li class="nav-item  ">
                        <a href="/admin/home-hero-view" class="nav-link ">
                            <span class="title">Hero List</span>
                        </a>
                    </li>
                    <li class="nav-item  ">
                        <a href="/admin/home-hero-add" class="nav-link ">
                            <span class="title">Add Hero</span>
                        </a>
                    </li>
                </ul>
            </li>--}}
            <li class="nav-item  ">
                <a href="javascript:;#giveaway" class="nav-link nav-toggle">
                    <i class="icon-wallet"></i>
                    <span class="title">Giveaway</span>
                    <span class="arrow"></span>
                </a>
                <ul class="sub-menu">
                    <li class="nav-item  ">
                        <a href="/admin/giveaway-view" class="nav-link ">
                            <span class="title">Giveaway List</span>
                        </a>
                    </li>
                    <li class="nav-item  ">
                        <a href="/admin/giveaway-add" class="nav-link ">
                            <span class="title">Add Giveaway</span>
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
        <!-- END SIDEBAR MENU -->
    </div>
    <!-- END SIDEBAR -->
</div>
<!-- END SIDEBAR -->