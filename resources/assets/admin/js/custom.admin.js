var adminApp = angular.module('adminApp', ['ui.bootstrap', 'ngRateIt', 'ngSanitize', 'angular-confirm', 'textAngular', 'ngTagsInput', 'angularFileUpload']);

adminApp.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
}]);

// only decimal number input validation
adminApp.directive('validNumber', function () {
    return {
        require: '?ngModel',
        link: function (scope, element, attrs, ngModelCtrl) {
            if (!ngModelCtrl) {
                return;
            }

            ngModelCtrl.$parsers.push(function (val) {
                if (angular.isUndefined(val)) {
                    var val = '';
                }

                var clean = val.replace(/[^-0-9\.]/g, '');
                var negativeCheck = clean.split('-');
                var decimalCheck = clean.split('.');
                if (!angular.isUndefined(negativeCheck[1])) {
                    negativeCheck[1] = negativeCheck[1].slice(0, negativeCheck[1].length);
                    clean = negativeCheck[0] + '-' + negativeCheck[1];
                    if (negativeCheck[0].length > 0) {
                        clean = negativeCheck[0];
                    }

                }

                if (!angular.isUndefined(decimalCheck[1])) {
                    decimalCheck[1] = decimalCheck[1].slice(0, 2);
                    clean = decimalCheck[0] + '.' + decimalCheck[1];
                }

                if (val !== clean) {
                    ngModelCtrl.$setViewValue(clean);
                    ngModelCtrl.$render();
                }
                return clean;
            });

            element.bind('keypress', function (event) {
                if (event.keyCode === 32) {
                    event.preventDefault();
                }
            });
        }
    };
});

// category tree view
adminApp.directive('uiTree', function () {
    return {
        template: '<ul class="uiTree"><ui-tree-node ng-repeat="node in tree"></ui-tree-node></ul>',
        replace: true,
        transclude: true,
        restrict: 'E',
        scope: {
            tree: '=ngModel',
            attrNodeId: "@",
            loadFn: '=',
            expandTo: '=',
            selectedId: '='
        },
        controller: function ($scope, $element, $attrs) {
            $scope.loadFnName = $attrs.loadFn;
            // this seems like an egregious hack, but it is necessary for recursively-generated
            // trees to have access to the loader function
            if ($scope.$parent.loadFn)
                $scope.loadFn = $scope.$parent.loadFn;

            // TODO expandTo shouldn't be two-way, currently we're copying it
            if ($scope.expandTo && $scope.expandTo.length) {
                $scope.expansionNodes = angular.copy($scope.expandTo);
                var arrExpandTo = $scope.expansionNodes.split(",");
                $scope.nextExpandTo = arrExpandTo.shift();
                $scope.expansionNodes = arrExpandTo.join(",");
            }
        }
    };
}).directive('uiTreeNode', ['$compile', '$timeout', function ($compile, $timeout) {
    return {
        restrict: 'E',
        replace: true,
        template: '<li>' +
        '<div class="node" data-node-id="{{ nodeId() }}">' +
        '<a class="icon" ng-click="toggleNode(nodeId())""></a>' +
        '<a ng-hide="selectedId" ng-href="#/assets/{{ nodeId() }}">{{ node.category }}</a>' +
        '<span ng-show="selectedId" ng-class="css()" ng-click="setSelected(node)">' +
        '{{ node.category }}</span>' +
        '</div>' +
        '</li>',
        link: function (scope, elm, attrs) {
            scope.nodeId = function (node) {
                var localNode = node || scope.node;
                return localNode[scope.attrNodeId];
            };
            scope.toggleNode = function (nodeId) {
                var isVisible = elm.children(".uiTree:visible").length > 0;
                var childrenTree = elm.children(".uiTree");
                if (isVisible) {
                    scope.$emit('nodeCollapsed', nodeId);
                } else if (nodeId) {
                    scope.$emit('nodeExpanded', nodeId);
                }
                if (!isVisible && scope.loadFn && childrenTree.length === 0) {
                    // load the children asynchronously
                    var callback = function (arrChildren) {
                        scope.node.children = arrChildren;
                        scope.appendChildren();
                        elm.find("a.icon i").show();
                        elm.find("a.icon img").remove();
                        scope.toggleNode(); // show it
                    };
                    var promiseOrNodes = scope.loadFn(nodeId, callback);
                    if (promiseOrNodes && promiseOrNodes.then) {
                        promiseOrNodes.then(callback);
                    } else {
                        $timeout(function () {
                            callback(promiseOrNodes);
                        }, 0);
                    }
                    elm.find("a.icon i").hide();
                    var imgUrl = "http://www.efsa.europa.eu/efsa_rep/repository/images/ajax-loader.gif";
                    elm.find("a.icon").append('<img src="' + imgUrl + '" width="18" height="18">');
                } else {
                    childrenTree.toggle(!isVisible);
                    elm.find("a.icon i").toggleClass("glyphicon glyphicon-chevron-right");
                    elm.find("a.icon i").toggleClass("glyphicon glyphicon-chevron-down");
                }
            };

            scope.appendChildren = function () {
                // Add children by $compiling and doing a new ui-tree directive
                // We need the load-fn attribute in there if it has been provided
                var childrenHtml = '<ui-tree ng-model="node.children" attr-node-id="' +
                    scope.attrNodeId + '"';
                if (scope.loadFn) {
                    childrenHtml += ' load-fn="' + scope.loadFnName + '"';
                }
                // pass along all the variables
                if (scope.expansionNodes) {
                    childrenHtml += ' expand-to="expansionNodes"';
                }
                if (scope.selectedId) {
                    childrenHtml += ' selected-id="selectedId"';
                }
                childrenHtml += ' style="display: none"></ui-tree>';
                return elm.append($compile(childrenHtml)(scope));
            };

            scope.css = function () {
                return {
                    nodeLabel: true,
                    selected: scope.selectedId && scope.nodeId() === scope.selectedId
                };
            };
            // emit an event up the scope.  Then, from the scope above this tree, a "selectNode"
            // event is expected to be broadcasted downwards to each node in the tree.
            // broadcast "selectNode" from outside of the directive scope.
            scope.setSelected = function (node) {
                scope.$emit("nodeSelected", node);
            };
            scope.$on("selectNode", function (event, node) {
                scope.selectedId = scope.nodeId(node);
            });

            if (scope.node.hasChildren) {
                elm.find("a.icon").append('<i class="glyphicon glyphicon-chevron-right"></i>');
            }

            if (scope.nextExpandTo && scope.nodeId() == parseInt(scope.nextExpandTo, 10)) {
                scope.toggleNode(scope.nodeId());
            }
        }
    };
}]);

adminApp.controller('AdminController', ['$scope', '$http', '$window', '$timeout', '$confirm', '$location', '$anchorScroll', 'FileUploader'
    , function ($scope, $http, $window, $timeout, $confirm, $location, $anchorScroll, FileUploader) {

        // uploader section //

        var uploader = $scope.uploader = new FileUploader({
            url: '/api/media/media-upload',
        });

        // FILTERS

        uploader.filters.push({
            name: 'customFilter',
            fn: function (item /*{File|FileLikeObject}*/, options) {
                return this.queue.length < 10;
            }
        });

        // Content upload CALLBACKS

        uploader.onWhenAddingFileFailed = function (item /*{File|FileLikeObject}*/, filter, options) {
            //  console.info('onWhenAddingFileFailed', item, filter, options);
        };
        uploader.onAfterAddingFile = function (fileItem) {
            //   console.info('onAfterAddingFile', fileItem);
        };
        uploader.onAfterAddingAll = function (addedFileItems) {
            //   console.info('onAfterAddingAll', addedFileItems);
        };
        uploader.onBeforeUploadItem = function (item) {
            //   console.info('onBeforeUploadItem', item);
        };
        uploader.onProgressItem = function (fileItem, progress) {
            //   console.info('onProgressItem', fileItem, progress);
        };
        uploader.onProgressAll = function (progress) {
            //   console.info('onProgressAll', progress);
        };
        uploader.onSuccessItem = function (fileItem, response, status, headers) {
            //     console.info('onSuccessItem', fileItem, response, status, headers);
        };
        uploader.onErrorItem = function (fileItem, response, status, headers) {
            //   console.info('onErrorItem', fileItem, response, status, headers);
        };
        uploader.onCancelItem = function (fileItem, response, status, headers) {
            //   console.info('onCancelItem', fileItem, response, status, headers);
        };
        uploader.onCompleteItem = function (fileItem, response, status, headers) {
            //     console.info('onCompleteItem', response);
            $scope.mediaLink = response.result;
        };
        uploader.onCompleteAll = function () {
            //    console.info('onCompleteAll');
        };
        // End uploader section //


        // Initializing application

        $scope.initPage = function () {

//            $scope.publishTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});;
            $scope.publishTime = new Date('2016-08-24 22:18:46');

            //   console.log('time',$scope.publishTime.getHours());
            $scope.catId = '';
            $scope.CategoryId = '';
            $scope.currentCategoryName = '';
            $scope.tempCategoryList = [];

            //category tree view
            $scope.assets = [];
            $scope.selected = {};
            $scope.hierarchy = "";
            $scope.tmp = [];

            $scope.categoryHierarchy = "";

            // show for page
            $scope.showForList = [
                "Homepage", "Shop Landing", "Shop Category", "Room Landing"
            ];
            $scope.ShowFor = '';

            $scope.alerts = [];
            $scope.selectedItem = '';
            $scope.ajaxData = '';

            $scope.tableTemporaryValue = {};
            $scope.alertHTML = '';
            $scope.tmpUrl = '';

            /// product fields initialize
            $scope.ProductAuthorName = ($scope.ProductAuthorName != '') ? $scope.ProductAuthorName : 'Anonymous User';
            $scope.ProductList = [];
            $scope.ProductVendorId = '';
            $scope.ProductVendorType = 'Amazon';
            $scope.ProductId = '';
            $scope.WpProductId = null;

            $scope.Name = '';
            $scope.Permalink = '';
            $scope.htmlContent = '<div><br/><br/><br/>1. Describe what the product is<br/><br/></div><div>2. How does it solve one\'s problem<br/><br/></div><div>3. Why is it unique<br/><br/></div><div>4. Mention how the reviewers (Amazon users or CNET or another source) said about it.<br/><br/></div><div>5. List 3 bullet points on its key features in your own words</div>';
            $scope.Price = '';
            $scope.SalePrice = '';
            //    $scope.StoreId = '';
            $scope.AffiliateLink = '';
            $scope.PriceGrabberId = '';
            $scope.FreeShipping = '';
            $scope.CouponCode = '';
            $scope.PostStatus = 'Inactive';
            $scope.PageTitle = 'Best [Product Name] Reviews and Deals';
            $scope.MetaDescription = '[Product Name] and describe 1 sentence what the product is and does. Ideaing provides aggregated reviews and lowest price on the [product name].';
            $scope.productTags = '';
            //$scope.ProductAvailability = '';

            //specification
            $scope.Specifications = [];
            $scope.Specifications = [];
            $scope.isUpdateSpecShow = false;

            //review
            $scope.readOnlyReviewCounter = true;
            $scope.reviews = [{
                key: 'Average',
                value: 0,
                counter: ''
            }, {
                key: 'Amazon',
                value: 0,
                counter: 0
            }
            ];


            $scope.isUpdateReviewShow = false;
            $scope.externalReviewLink = '';
            $scope.ideaingReviewScore = 0;

            //Media Content
            $scope.mediaTitle = '';
            $scope.mediaTypes = [
                {"key": "img-link", "value": "Image Link"},
                {"key": "img-upload", "value": "Image Upload"},
                {"key": "video-link", "value": "Video Link"},
                {"key": "video-youtube-link", "value": "Youtube Link"},
                {"key": "video-vimeo-link", "value": "Vimeo Link"},
                {"key": "video-upload", "value": "Video Upload"}
            ];
            $scope.mediaLink = "";
            $scope.isMediaUploadable = true;

            $scope.isHeroItem = true;
            $scope.isMainItem = false;
            $scope.isMediaEdit = false;

            $scope.mediaList = [];

            $scope.selectedMediaSequence = 1;
            $scope.mediaSequenceArray = [];

            // Pagination info
            $scope.limit = 50;
            $scope.page = 1;
            $scope.total = 0;

            // show category panel for add product
            $scope.hideCategoryPanel = false;

            //filter type setting
            $scope.filterTypes = [
                {"key": "user-filter", "value": "Search by User ..."},
                {"key": "product-filter", "value": "Search by Product ..."},
            ];
            $scope.selectedFilter = '';
            $scope.filterName = '';

            //product compare
            $scope.comparableProductList = [];

            // Tag module
            $scope.TagName = '';
            $scope.TagDescription = '';
            $scope.AllTags = [];

            $scope.selectedTagId = '';

            $scope.Tags = [];

            // product filter with Tag
            $scope.WithTags = true;

            // Store Module
            $scope.StoreId = '';
            $scope.StoreIdentifier = '';
            $scope.StoreName = '';
            $scope.StoreStatus = 'Active';
            $scope.StoreDescription = '';
            //$scope.mediaLink  has initialized above for uploading product

            $scope.storeList = [];

            // User
            $scope.userListPageLimit = 30;
            $scope.userList = [];
            $scope.SelectedUserFilter = '';
            $scope.FilterUserItem = '';
            $scope.userFilterTypes = [
                {"key": "user-name-filter", "value": "Search by Name ..."},
                {"key": "user-email-filter", "value": "Search by Email ..."},
            ];
            $scope.userId = '';
            $scope.FullName = '';
            $scope.Password = null;
            $scope.Email = null;

            $scope.roleCollection = [];
            $scope.userRoles = [];

            $scope.userStatusList = [
                {"key": "Active", "value": "Active"},
                {"key": "Inactive", "value": "Inactive"},
            ];

            $scope.UserStatus = 'Active';

            $scope.IsBlogUser = false;

            $scope.GiveawayList = {};

        };

        // User management //

        $scope.toggleSelection = function toggleSelection(role) {
            var idx = $scope.userRoles.indexOf(role);

            // is currently selected
            if (idx > -1) {
                $scope.userRoles.splice(idx, 1);
            }

            // is newly selected
            else {
                $scope.userRoles.push(role);
            }
        };

        $scope.loadSubscriptionReport = function () {
            $http({
                url: '/api/user/subscribed-registered-report',
                method: "GET",

            }).success(function (data) {
                $scope.reportData = data.data;
                //   console.log($scope.reportData);

            });
        };

        $scope.getUserInfoById = function (id) {
            $http({
                url: '/api/user/get-user/' + id,
                method: "GET",

            }).success(function (data) {
                //   console.log(data);
                $scope.userId = data.data.id;
                $scope.FullName = data.data.name;
                $scope.Password = null;
                $scope.Email = data.data.email;

                $scope.roleCollection = data.data.RoleCollection;
                $scope.userRoles = data.data.Roles;

                $scope.UserStatus = data.data.status == 'Active' ? 'Active' : 'Inactive';

                $scope.IsBlogUser = data.data.is_blog_user == 'true' ? true : false;

                //  $scope.outputStatus(data, 'User added successfully');
                //  $window.location = '/admin/user-list';
            });
        };

        //update user information
        $scope.updateUser = function () {
            $scope.closeAlert();

            $http({
                url: '/api/change-profile',
                method: "POST",
                data: {
                    FullName: $scope.FullName == '' ? null : $scope.FullName,
                    Email: $scope.Email,
                    Password: $scope.Password == '' ? null : $scope.Password,
                    UserRoles: $scope.userRoles,
                    UserStatus: $scope.UserStatus,
                    IsBlogUser: ($scope.IsBlogUser == true) ? 'true' : 'false'
                }
            }).success(function (data) {
                // console.log(data);
                $scope.outputStatus(data, 'User information updated successfully');

                $scope.Password = '';
                $window.location = '/admin/user-list';
            });
        };

        $scope.addUser = function () {
            $scope.closeAlert();

            $http({
                url: '/api/register-user',
                method: "POST",
                data: {
                    FullName: $scope.FullName,
                    Email: $scope.Email,
                    Password: $scope.Password,
                    Valid: true
                }
            }).success(function (data) {
                //  console.log(data);
                $scope.outputStatus(data, 'User added successfully');
                // $window.location = '/admin/user-list';
                $scope.FullName = '';
                $scope.Email = '';
                $scope.Password = '';
            });
        };

        $scope.getUserList = function () {

            // todo - test init .remove after test
            //  console.log('sdf');
            $scope.limit = $scope.userListPageLimit;

            $http({
                url: '/api/user/user-list',
                method: "POST",
                data: {
                    // Pagination info - Reusing from the product pagination
                    limit: $scope.limit,
                    page: $scope.page,
                    total: $scope.total,
                    FilterItem: $scope.SelectedUserFilter,
                    FilterValue: $scope.FilterUserItem
                }
            }).success(function (data) {
                //   console.log(data);
                $scope.limit = data.data.limit;
                $scope.page = data.data.page;
                $scope.total = data.data.count;
                $scope.userList = data.data.result;
            });
        };

        $scope.getSubscribersList = function () {

            // todo - test init .remove after test
            //  console.log('sdf');
            $scope.limit = $scope.userListPageLimit;

            $http({
                url: '/api/user/subscriber-list',
                method: "POST",
                data: {
                    // Pagination info - Reusing from the product pagination
                    limit: $scope.limit,
                    page: $scope.page,
                    total: $scope.total,
                }
            }).success(function (data) {
                //   console.log(data);
                $scope.limit = data.data.limit;
                $scope.page = data.data.page;
                $scope.total = data.data.count;
                $scope.subscriberList = data.data.result;
            });
        };

        $scope.logoutUser = function () {
            // var WpLogoutURL = 'https://ideaing.com/ideas/api?call=logout';
            var WpLogoutURL = '/ideas/api?call=logout';

            $http({
                url: WpLogoutURL,
                method: "GET"

            }).success(function (data) {
                window.location = '/api/logout';
            }).error(function (data) {
                window.location = '/api/logout';
            });
        };

        $scope.getPaidMembersPaymentList = function () {

            $http({
                url: '/payment/paid-membership-report',
                method: "GET"

            }).success(function (data) {
                $scope.paidMembersPaymentList = data.data;
            });

        };

        //// Store ///

        $scope.updateStore = function () {
            $scope.closeAlert();
            // console.log($scope.mediaLink, $scope.StoreDescription, $scope.StoreIdentifier);
            $http({
                url: '/api/store/update-store',
                method: "POST",
                data: {
                    StoreId: $scope.StoreId,
                    StoreIdentifier: $scope.StoreIdentifier,
                    StoreName: $scope.StoreName,
                    StoreStatus: $scope.StoreStatus,
                    StoreDescription: $scope.StoreDescription,
                    MediaLink: $scope.mediaLink
                }
            }).success(function (data) {
                $scope.outputStatus(data, 'Data updated successfully');

                $scope.StoreId = '';
                $scope.StoreIdentifier = '';
                $scope.StoreName = '';
                $scope.StoreDescription = '';
                $scope.mediaLink = '';
                $scope.loadAllStores();

            });
        };

        $scope.loadAllStores = function () {

            // console.log($scope.mediaLink, $scope.StoreDescription, $scope.StoreIdentifier);
            $http({
                url: '/api/store/show-stores',
                method: "GET"
            }).success(function (data) {
                $scope.storeList = data.data;
            });
        };

        $scope.changeStoreActivation = function () {
            $scope.closeAlert();

            $scope.StoreStatus = ($scope.StoreStatus == "Active") ? "Inactive" : "Active";

            $http({
                url: '/api/store/change-status',
                method: "POST",
                data: {
                    StoreId: $scope.StoreId,
                    StoreStatus: $scope.StoreStatus
                }
            }).success(function (data) {
                $scope.loadAllStores();
            });
        };

        $scope.editStore = function (index) {

            $scope.StoreId = $scope.storeList[index].Id;
            $scope.StoreIdentifier = $scope.storeList[index].Identifier;
            $scope.StoreName = $scope.storeList[index].Name;
            $scope.StoreStatus = $scope.storeList[index].Status == 'Active' ? 'Active' : 'Inactive';
            $scope.StoreDescription = $scope.storeList[index].Description;
            $scope.mediaLink = $scope.storeList[index].ImageLink;

        };

        $scope.deleteStore = function (id) {
            $scope.closeAlert();
            $http({
                url: '/api/store/delete-store',
                method: "POST",
                data: {
                    StoreId: id
                }
            }).success(function (data) {
                $scope.loadAllStores();
                $scope.outputStatus(data, 'Store deleted successfully');
            });
        };


        ///// tag //////

        $scope.showTagsByProductId = function () {

            $http({
                url: '/api/tag/show-tag/' + $scope.ProductId,
                method: "GET",
            }).success(function (data) {
                $scope.Tags = data.data;
            });
        };

        $scope.associateTags = function () {
            $http({
                url: '/api/tag/add-tags',
                method: "POST",
                data: {
                    Tags: $scope.Tags,
                    ProductId: $scope.ProductId
                },
            }).success(function (data) {

            });
        };

        $scope.searchTagByName = function (query) {

            // return [{"id":10,"name":"book"}];
            return $http.get('/api/tag/search-tag/' + query);
        };

        // open information in edit mood
        $scope.editTagInfo = function (index) {

            $scope.closeAlert();

            $scope.selectedTagId = $scope.AllTags[index].id;
            $scope.TagName = $scope.AllTags[index].tag_name;
            $scope.TagDescription = $scope.AllTags[index].tag_description;

            $window.scrollTo(0, 0);
        };

        $scope.updateTagInfo = function () {

            $scope.closeAlert();

            $http({
                url: '/api/tag/update-tag-info',
                method: "POST",
                data: {
                    TagId: $scope.selectedTagId,
                    TagName: $scope.TagName,
                    TagDescription: $scope.TagDescription
                },
            }).success(function (data) {
                $scope.TagName = '';
                $scope.TagDescription = '';
                $scope.selectedTagId = '';
                $scope.showTags();
                //   console.log('in function: '+data.status_code);
                $scope.outputStatus(data, 'Tag updated successfully');
            });
        };

        $scope.deleteTagInfo = function (tagId) {
            //delete-tag-info
            $scope.closeAlert();

            $http({
                url: '/api/tag/delete-tag-info',
                method: "POST",
                data: {
                    TagId: tagId,
                },
            }).success(function (data) {
                $scope.TagName = '';
                $scope.TagDescription = '';
                $scope.showTags();
                //   console.log('in function: '+data.status_code);
                $scope.outputStatus(data, 'Tag deleted successfully');
            });

        };

        $scope.showTags = function () {

            $http({
                url: '/api/tag/show-tags',
                method: "GET",

            }).success(function (data) {
                $scope.AllTags = data.data;
                //   console.log('in function: '+data.status_code);
                //   $scope.outputStatus(data, 'Tag added successfully');
            });

        };

        $scope.addTagInfo = function () {

            $scope.closeAlert();

            $http({
                url: '/api/tag/add-tag-info',
                method: "POST",
                data: {
                    TagName: $scope.TagName,
                    TagDescription: $scope.TagDescription
                },
            }).success(function (data) {
                $scope.TagName = '';
                $scope.TagDescription = '';
                $scope.showTags();

                //   console.log('in function: '+data.status_code);
                $scope.outputStatus(data, 'Tag added successfully');
            });

            return false;
        };

        ///// category  ////

        function buildCategoryViewString(data) {
            arrow = ' >> ';
            catValue = '';
            for (var i = 0; i < data.data.length; i++) {
                if (i == data.data.length - 1) {
                    arrow = '';
                }

                catValue += (data.data[i]['CategoryName'] + arrow);
                //   console.log(i);
            }
            $scope.categoryHierarchy = catValue;
            // console.log('cat :' + $scope.categoryHierarchy);
            //  console.log('cat :' + catValue);

        }

        $scope.categoryHierarchyView = function (catId) {

            $http({
                url: '/api/category/get-category-hierarchy/' + catId,
                method: 'GET',
            }).success(function (data) {
                //   console.log(data);

                buildCategoryViewString(data);

            });

        };

        //////// category tree view ////
        $scope.loadChildren = function (nodeId) {

            $scope.catId = nodeId;

            return $http.get('/api/category/show-category-items/' + $scope.catId).then(function (data) {

                return data['data'].data;
            });
        };
        $scope.$on("nodeSelected", function (event, node) {
            $scope.selected = node;
            $scope.selectedItem = $scope.selected.id;
            // console.log($scope.selectedItem);
            $scope.$broadcast("selectNode", node);

            // generate hierarchy view on node select
            $scope.categoryHierarchyView($scope.selectedItem);
        });

        // category tree view ///

        // Add an Alert in a web application
        $scope.addAlert = function (alertType, message) {
            //$scope.alertType = alertType;
            $scope.alertHTML = message;
            $scope.alerts.push({type: alertType});

        };

        $scope.closeAlert = function (index) {
            $scope.alerts.splice(index, 1);

        };
        /**
        * forum category
        */
        $scope.getSubForumCategory = function () {
            $scope.closeAlert();

            $http({
                url: '/api/forum-category/show-category-items/' + $scope.selectedForumItem,
                method: "GET",
            }).success(function (data, status) {
                $scope.forumSubCategoryItems = data['data'];
            });
        }
        $scope.selectedForumItem = "0";
        $scope.getForumCategory = function () {

            $scope.closeAlert();

            $http({
                url: '/api/forum-category/show-category-items/0',
                method: "GET",
            }).success(function (data, status) {
                
                if (data['data'].length > 0) {
                    $scope.forumCategoryItems = data['data'];
                    $scope.forumSubCategoryItems = data['data'];

                } else {
                    $scope.tempCategoryList.pop();
                    $scope.outputStatus(data, 'No more subcategory available for the selected item');
                }

            });

            return false;
        };
        
        /****************/

        // Reset the category when reset button clicked.
        $scope.resetCategory = function () {
            $scope.catId = '';
            $scope.currentCategoryName = '';
            $scope.tempCategoryList = [];
            $scope.closeAlert();
            $scope.getCategory();
        };

        // Get category item as per provided category id is available
        // or return root category items.
        $scope.getCategory = function () {

            $scope.closeAlert();

            $http({
                url: '/api/category/show-category-items/' + $scope.catId,
                method: "GET",

            }).success(function (data, status) {

                if (data['data'].length > 0) {
                    $scope.categoryItems = data['data'];

                    // data load for tree view
                    if ($scope.catId == '') {
                        $scope.assets = $scope.categoryItems;

                    }

                } else {
                    $scope.tempCategoryList.pop();
                    $scope.outputStatus(data, 'No more subcategory available for the selected item');
                }

            });

            return false;
        };


        // Add a category item.
        $scope.addCategory = function () {

            $scope.closeAlert();

            $http({
                url: '/api/category/add-category',
                method: "POST",
                data: {
                    ParentId: $scope.selectedItem,
                    CategoryName: $scope.categoryName,
                    ExtraInfo: $scope.extraInfo,
                    Icon: $scope.icon,
                    MetaTitle: $scope.meta_title, //$scope.categoryItems[idx].icon
                    MetaDescription: $scope.meta_description, //$scope.categoryItems[idx].icon

                },
            }).success(function (data) {
                $scope.categoryName = '';
                $scope.extraInfo = '';
                $scope.icon = '';
                $scope.resetCategory();
                //   console.log('in function: '+data.status_code);
                $scope.outputStatus(data, 'Category item added successfully');
            });

            return false;
        };

        // Get subcategory items when a category item is selected and show status.
        $scope.getSubCategory = function () {

            $scope.catId = $scope.selectedItem;
            for (i = 0; i < $scope.categoryItems.length; i++) {
                if ($scope.categoryItems[i].id == $scope.catId) {

                    $scope.tempCategoryList.push($scope.categoryItems[i].category);
                    $scope.currentCategoryName = $scope.categoryItems[i].category;

                }
            }
            $scope.getCategory();

        };


        // reset filter for product list view
        $scope.resetFilter = function () {
            $scope.initPage();
            $scope.getCategory();

            $scope.showAllProduct();
        };

        $scope.resetUserList = function () {
            $scope.initPage();
            $scope.getUserList();
            //$scope.getCategory();

            //$scope.showAllProduct();

        };

        // Reset User list


        // Build HTML listed response for popup notification.
        $scope.buildErrorMessage = function (errorObj) {

            var alertHTML = '';
            alertHTML = '<ul>';
            angular.forEach(errorObj, function (value, key) {

                alertHTML += '<li>' + value + '</li>';
            });
            alertHTML += '</ul>';

            return alertHTML;
        }


        // Build popup notification box based on status.
        $scope.outputStatus = function (data, message) {

            var statusCode = data.status_code;
            //  console.log('status code:'+statusCode);
            switch (statusCode) {
                case 400:
                {
                    if (data.data.error.message[0] == "Validation failed") {
                        // $scope.requiredFields = buildErrorMessage(data.data.error.message[1]);
                        $scope.addAlert('danger', $scope.buildErrorMessage(data.data.error.message[1]));
                    }
                }
                    break;
                case 200:
                {
                    $scope.addAlert('success', message);
                }
                    break;
                case 210:
                {
                    $scope.addAlert('', message);
                }
                    break;
                case 410:
                {
                    $scope.addAlert('danger', data.data.error.message);
                }
                    break;
                case 500:
                {
                    $scope.addAlert('danger', data.data.error.message);
                }
                    break;
                default:
                {
                    $scope.addAlert('danger', 'Request failed !');
                }
            }
        }

        // inline category editing

        // gets the template to ng-include for a table row / item
        $scope.getTemplate = function (category) {
            if (category.id === $scope.tableTemporaryValue.id)
                return 'edit';
            else
                return 'display';
        };

        $scope.editCategory = function (category) {
            $scope.closeAlert();
            $scope.tableTemporaryValue = angular.copy(category);
        };

        $scope.addSubForumCategory = function (idx) {
            $http({
                url: '/api/forum-category/add-category',
                method: "POST",
                data: {
                    title: $scope.forumCategoryTitle,// $scope.categoryItems[idx].category,
                    parentCategoryId: $scope.selectedForumItem,// $scope.categoryItems[idx].category,
                },
            }).success(function (data) {
                $scope.outputStatus(data, 'Category item updated successfully');
                if (data.status_code == 200) {
                    $scope.getSubForumCategory();
                }
            });
        }
        $scope.updateForumCategory = function (idx) {
            // console.log("Saving contact");
            // console.log($scope.categoryItems[idx]);
            $scope.closeAlert();

            $http({
                url: '/api/forum-category/update-category',
                method: "POST",
                data: {
                    id: $scope.forumSubCategoryItems[idx].id,
                    title: $scope.tableTemporaryValue.title,// $scope.categoryItems[idx].category,
                },
            }).success(function (data) {
                $scope.outputStatus(data, 'Category item updated successfully');
                if($scope.selectedForumItem == 0){
                    $scope.forumCategoryItems = $scope.forumSubCategoryItems;
                }
                if (data.status_code == 200) {
                    $scope.forumSubCategoryItems[idx] = angular.copy($scope.tableTemporaryValue);
                    $scope.cancelCategory();
                }
            });
        }
        $scope.updateCategory = function (idx) {
            // console.log("Saving contact");
            // console.log($scope.categoryItems[idx]);
            $scope.closeAlert();

            $http({
                url: '/api/category/update-category',
                method: "POST",
                data: {
                    CategoryId: $scope.categoryItems[idx].id,
                    CategoryName: $scope.tableTemporaryValue.category,// $scope.categoryItems[idx].category,
                    ExtraInfo: $scope.tableTemporaryValue.info, //$scope.categoryItems[idx].info
                    Icon: $scope.tableTemporaryValue.icon, //$scope.categoryItems[idx].icon
                    MetaTitle: $scope.tableTemporaryValue.meta_title, //$scope.categoryItems[idx].icon
                    MetaDescription: $scope.tableTemporaryValue.meta_description, //$scope.categoryItems[idx].icon
                },
            }).success(function (data) {
                $scope.outputStatus(data, 'Category item updated successfully');

                if (data.status_code == 200) {
                    $scope.categoryItems[idx] = angular.copy($scope.tableTemporaryValue);
                    $scope.cancelCategory();
                }
            });

        };

        $scope.deleteForumCategory = function (idx) {
            $scope.closeAlert();

            $http({
                url: '/api/forum-category/delete-category',
                method: "POST",
                data: {
                    id: $scope.forumSubCategoryItems[idx].id,
                },
            }).success(function (data) {
                $scope.outputStatus(data, "Category deleted successfully");

                if (data.status_code == 200) {
                    $scope.getSubForumCategory();
                }

            });
        }
        $scope.deleteCategory = function (idx) {
            //  console.log("Saving contact");
            console.log($scope.categoryItems[idx]);
            $scope.closeAlert();

            $http({
                url: '/api/category/delete-category',
                method: "POST",
                data: {
                    CategoryId: $scope.categoryItems[idx].id,
                },
            }).success(function (data) {
                $scope.outputStatus(data, "Category deleted successfully");

                if (data.status_code == 200) {

                    $scope.categoryItems.splice(idx, 1);

                }

            });
        };


        $scope.cancelCategory = function () {
            $scope.tableTemporaryValue = {};
            // $scope.closeAlert();

        };

        $scope.buildURL = function (keyWord) {

            if (keyWord.indexOf("ideas") > -1) {
                return keyWord;
            } else {
                return "shop/" + keyWord;
            }
        };


        // Read Category

        $scope.getReadCategoryList = function () {

            $http({
                url: '/api/category/all-read-category',
                method: "GET",

            }).success(function (data) {
                $scope.tempCategoryList = data.data;
                $scope.selectedReadCategoryId = "";
                //  $scope.outputStatus(data, "Read Category added successfully");
            });

        };

        $scope.addReadCategory = function () {

            $http({
                url: '/api/category/add-read-category',
                method: "POST",
                data: {

                    SelectedReadCategoryId: $scope.selectedReadCategoryId,
                    CategoryId: $scope.selectedItem,
                    PageTitle: $scope.PageTitle,
                    MetaDescription: $scope.MetaDescription
                },
            }).success(function (data) {
                $scope.outputStatus(data, "Read Category added successfully");
                $scope.getReadCategoryList();

                $scope.selectedReadCategoryId = "";

                $scope.selectedItem = null;
                $scope.PageTitle = null;
                $scope.MetaDescription = null;
            });

        };

        $scope.editReadCategory = function (index) {

            $scope.closeAlert();

            $scope.selectedReadCategoryId = $scope.tempCategoryList[index].id;

            $scope.selectedItem = $scope.tempCategoryList[index].product_category_id;
            $scope.PageTitle = $scope.tempCategoryList[index].page_title;
            $scope.MetaDescription = $scope.tempCategoryList[index].meta_description;

            $scope.categoryHierarchyView($scope.selectedItem);

            $window.scrollTo(0, 0);

        };

        $scope.deleteReadCategory = function (index) {

            $scope.closeAlert();

            $http({
                url: '/api/category/delete-read-category',
                method: "POST",
                data: {
                    SelectedReadCategoryId: $scope.tempCategoryList[index].id
                },
            }).success(function (data) {
                $scope.outputStatus(data, "Read Category deleted successfully");
                $scope.getReadCategoryList();

                $scope.selectedReadCategoryId = "";

                $scope.selectedItem = null;
                $scope.PageTitle = null;
                $scope.MetaDescription = null;
            });

        };


        // Product Module //


        // initialize product add view
        $scope.loadAddProduct = function () {
            $scope.isCollapsed = false; // default false it false to show forced parmalink saviing mood.
            $scope.isCollapsedToggle = !$scope.isCollapsed;
        };

        $scope.addProduct = function () {

            $scope.closeAlert();
            $http({
                url: '/api/product/add-product',
                method: "POST",
                data: {}

            }).success(function (data) {
                if (data.status_code == 200) {

                    $scope.ProductId = data.data.id;
                    $scope.productUpdateInfo();

                    //   $scope.Permalink = $scope.desiredPermalink;
                } else {
                    // $scope.outputStatus(data, "Permalink is not available please enter new.");
                }

            });

        };

        // update product
        $scope.productUpdateInfo = function () {

            $scope.closeAlert();
          //  console.log($scope.StoreId);
            $http({
                url: '/api/product/update-product',
                method: 'POST',
                data: {
                    ProductId: $scope.ProductId,
                    ProductVendorId: $scope.ProductVendorId,
                    ProductVendorType: $scope.ProductVendorType,
                    ShowFor: $scope.ShowFor,
                    ProductAuthorName: $scope.ProductAuthorName,
                    CategoryId: $scope.selectedItem,
                    Name: $scope.Name,
                    PublishAt: $scope.datePicker,
                    PublishTime: $scope.publishTime,
                    Permalink: $scope.Permalink,
                    Description: $scope.htmlContent,
                    Price: $scope.Price,
                    SalePrice: $scope.SalePrice,
                   // StoreId: $scope.StoreId.Id,
                    StoreId: $scope.StoreId == '' ? $scope.storeList[0].Id : $scope.StoreId.Id,
                    AffiliateLink: $scope.AffiliateLink,
                    PriceGrabberId: $scope.PriceGrabberId,
                    FreeShipping: $scope.FreeShipping,
                    CouponCode: $scope.CouponCode,
                    PostStatus: $scope.PostStatus,
                    PageTitle: $scope.PageTitle,
                    MetaDescription: $scope.MetaDescription,
                    SimilarProductIds: $scope.productTags,
                    ProductAvailability: $scope.ProductAvailability,
                    Specifications: $scope.Specifications,
                    Review: $scope.reviews,
                    ExternalReviewLink: $scope.externalReviewLink,
                    IdeaingReviewScore: $scope.ideaingReviewScore,
                    Tags: $scope.Tags
                }
            }).success(function (data) {
                //console.log(data);
                if (data.status_code == 200) {

                    // accociate tags for product on success.
                    $scope.associateTags();
                    $scope.outputStatus(data, "Product updated successfully");

                    $scope.getMedia();
                } else {
                    $scope.outputStatus(data, "Product information not updated");
                }
            });
        }

        $scope.updateProduct = function () {

            $scope.closeAlert();
            // if it's a new request then product should be insert first
            //   console.log($scope.ProductId);
            if ($scope.ProductId == '') {
                $scope.addProduct();
            } else {
                $scope.productUpdateInfo();
                $scope.loadProductData($scope.ProductId);

                if($scope.WpProductId != null)
                {
                    $scope.syncWpProductInfo(false);
                    //console.log($scope.WpProductId,"WP Sync executed.");
                }


            }

           // $scope.closeAlert();

            return false;
        };

        $scope.changeProductActivation = function () {
            $scope.closeAlert();

            $scope.PostStatus = ($scope.PostStatus == "Active") ? "Inactive" : "Active";

            $http({
                url: '/api/product/publish-product',
                method: 'POST',
                data: {
                    ProductId: $scope.ProductId,
                    ProductAuthorName: $scope.ProductAuthorName,
                    CategoryId: $scope.selectedItem,
                    ProductVendorId: $scope.ProductVendorId,
                    ProductVendorType: $scope.ProductVendorType,
                    ShowFor: $scope.ShowFor,
                    Name: $scope.Name,
                    Permalink: $scope.Permalink,
                    PublishAt: $scope.datePicker,
                    PublishTime: $scope.publishTime,
                    Description: $scope.htmlContent,
                    Price: $scope.Price,
                    SalePrice: $scope.SalePrice,
                    StoreId: $scope.StoreId.Id,
                    AffiliateLink: $scope.AffiliateLink,
                    PriceGrabberId: $scope.PriceGrabberId,
                    FreeShipping: $scope.FreeShipping,
                    CouponCode: $scope.CouponCode,
                    PostStatus: $scope.PostStatus,
                    PageTitle: $scope.PageTitle,
                    MetaDescription: $scope.MetaDescription,
                    SimilarProductIds: $scope.productTags,
                    ProductAvailability: $scope.ProductAvailability,
                    Specifications: $scope.Specifications,
                    Review: $scope.reviews,
                    ExternalReviewLink: $scope.externalReviewLink,
                    IdeaingReviewScore: $scope.ideaingReviewScore
                }

            }).success(function (data) {
                //console.log(data);
                if (data.status_code == 200) {
                    $scope.outputStatus(data, "Product updated successfully");
                    $scope.loadProductData($scope.ProductId);
                } else {
                    $scope.outputStatus(data, "Product information not updated");
                    $scope.PostStatus = ($scope.PostStatus == "Active") ? "Inactive" : "Active";
                }
            });
            return false;
        }

        // Search product id for related product from Admin
        $scope.productTags = [];
        $scope.searchProductByName = function (query) {

            return $http.get('/api/product/product-find/' + query);
        };


        // add dynamic files in specifications
        $scope.addSpecFormField = function () {
            $scope.Specifications.push(
                {'key': $scope.spKey, 'value': $scope.spVal}
            );
            $scope.spKey = '';
            $scope.spVal = '';
        }

        $scope.deleteSpecFormField = function (index) {
            $scope.Specifications.splice(index, 1);
        }

        $scope.editSpecFormField = function (index) {
            $scope.$index = index;
            $scope.spKey = $scope.Specifications[index].key;
            $scope.spVal = $scope.Specifications[index].value;
            $scope.isUpdateSpecShow = true;

        }
        $scope.updateSpecFormField = function () {
            $scope.Specifications[$scope.$index].key = $scope.spKey;
            $scope.Specifications[$scope.$index].value = $scope.spVal;
            $scope.isUpdateSpecShow = false;

            $scope.spKey = '';
            $scope.spVal = '';
        }


        // add dynamic fields in review
        $scope.addReviewFormField = function () {
            $scope.reviews.push(
                {
                    'key': $scope.reviewKey,
                    'value': $scope.reviewValue,
                    'link': $scope.reviewLink,
                    'counter': (typeof $scope.reviewCounter === 'undefined' || $scope.reviewCounter == '' || isNaN($scope.reviewCounter)) ? 1 : parseInt($scope.reviewCounter)
                }
            );
            $scope.reviewKey = '';
            $scope.reviewValue = '';
            $scope.reviewLink = '';
            //  console.log($scope.reviewCounter);

            $scope.reviewCounter = '';
            /*$scope.externalReviewLink = '';
             $scope.ideaingReviewScore = 0;*/
            //  console.log($scope.reviewCounter);

            $scope.calculateAvg();

        }

        $scope.deleteReviewFormField = function (index) {
            $scope.reviews.splice(index, 1);
            $scope.calculateAvg();
        }

        $scope.editReviewFormField = function (index) {
            $scope.$index = index;

            // for Amazon review keep the counter editable
            if (index == 1)
                $scope.readOnlyReviewCounter = false;

            $scope.reviewKey = $scope.reviews[index].key;
            $scope.reviewValue = $scope.reviews[index].value;
            $scope.reviewLink = $scope.reviews[index].link;
            $scope.reviewCounter = (typeof $scope.reviews[index].counter === 'undefined' || $scope.reviews[index].counter == '' || isNaN($scope.reviews[index].counter)) ? 1 : parseInt($scope.reviews[index].counter);
            // $scope.reviewCounter = $scope.reviews[index].counter;
            $scope.isUpdateReviewShow = true;
            $scope.calculateAvg();

        }
        $scope.updateReviewFormField = function () {
            $scope.readOnlyReviewCounter = true;
            $scope.reviews[$scope.$index].key = $scope.reviewKey;
            $scope.reviews[$scope.$index].value = $scope.reviewValue;
            $scope.reviews[$scope.$index].link = $scope.reviewLink;
            $scope.reviews[$scope.$index].counter = (typeof $scope.reviewCounter === 'undefined' || $scope.reviewCounter == '' || isNaN($scope.reviewCounter)) ? 1 : parseInt($scope.reviewCounter);

            $scope.isUpdateReviewShow = false;

            $scope.reviewKey = '';
            $scope.reviewValue = '';
            $scope.reviewLink = '';
            $scope.reviewCounter = '';
            $scope.calculateAvg();
        }

        $scope.calculateAvg = function () {
            $scope.totalCount = 0;
            var reviewers = 0;

            for (var i = 2; i < $scope.reviews.length; i++) {
                $scope.totalCount += $scope.reviews[i].value;

                reviewers += $scope.reviews[i].counter == null ? 0 : parseInt($scope.reviews[i].counter);
            }

            $scope.reviews[0].value = ($scope.totalCount / ($scope.reviews.length - 2)).toFixed(2);
            $scope.reviews[0].counter = reviewers;
            //    console.log($scope.reviews[0].value," - ",$scope.reviews[0].counter);

        }


        // view product list
        $scope.showAllProduct = function () {

            $http({
                url: '/api/product/get-product-list',
                method: 'POST',
                data: {
                    CategoryId: $scope.selectedItem,
                    ActiveItem: $scope.ActiveItem,
                    //FilterType: $scope.selectedFilter,
                    //FilterText: $scope.filterName,

                    FilterPublisher: $scope.publisherName,
                    FilterProduct: $scope.filterProduct,

                    ShowFor: $scope.ShowFor,
                    WithTags: $scope.WithTags,

                    // Pagination info
                    limit: $scope.limit,
                    page: $scope.page,
                    total: $scope.total,
                }

            }).success(function (data) {

                if (data.status_code == 200) {
                    $scope.ProductList = data.data.result;

                    $scope.limit = data.data.limit;
                    $scope.page = data.data.page;
                    $scope.total = data.data.total;

                } else {
                    $scope.outputStatus(data, "Product information not viewable");
                }

            });

        };

        // Load API data to html controls
        $scope.loadProductInfoFromApi = function (itemId) {
            $scope.closeAlert();
            $http({
                url: '/api/api-data/' + itemId,
                method: 'GET'
            }).success(function (data) {
                if (data.status_code == 200) {
                    $scope.Name = data.data.ApiTitle;
                    $scope.Price = data.data.ApiPrice;
                    $scope.SalePrice = data.data.ApiSalePrice;
                    $scope.mediaLink = $scope.mediaLinkTmp = data.data.ApiImageLink;
                    $scope.AffiliateLink = data.data.AffiliateLink;
                    $scope.ProductAvailability = data.data.ApiAvailable;

                    //if ($scope.Specifications == null)
                    $scope.Specifications = [];

                    $scope.Specifications.push(
                        {'key': 'Manufacturer', 'value': data.data.ApiSpecification.Manufacturer}
                    );
                    $scope.Specifications.push(
                        {'key': 'Model', 'value': data.data.ApiSpecification.Model}
                    );
                    $scope.Specifications.push(
                        {'key': 'Part Number', 'value': data.data.ApiSpecification.PartNumber}
                    );
                    $scope.Specifications.push(
                        {'key': 'Color', 'value': data.data.ApiSpecification.Color}
                    );
                    $scope.Specifications.push(
                        {'key': 'Product Size', 'value': data.data.ApiSpecification.ProductSize}
                    );
                    $scope.Specifications.push(
                        {'key': 'Package Size', 'value': data.data.ApiSpecification.PackageSize}
                    );
                    $scope.Specifications.push(
                        {'key': 'Weight', 'value': data.data.ApiSpecification.Weight}
                    );


                    $scope.spKey = '';
                    $scope.spVal = '';

                    $scope.outputStatus(data, "Product data successfully loaded from API");

                } else {
                    $scope.outputStatus(data, "Product information not viewable");
                }
            });

        };


        //todo update the loadProductData after implementing media uploading

        $scope.loadProductData = function (id) {
            //console.log("ID IS:"+id);
            $http({
                url: '/api/product/get-product/' + id,
                method: 'GET'
            }).success(function (data) {
                if (data.status_code == 200) {

                    // set data in input fields
                    $scope.ProductId = data.data.id;
                    $scope.WpProductId = data.data.wp_post_id;
                    $scope.selectedItem = data.data.product_category_id;
                    $scope.ProductVendorId = data.data.product_vendor_id;
                    //  $scope.ProductVendorType = data.data.product_vendor_type;
                    $scope.ShowFor = data.data.show_for;
                    $scope.Name = data.data.product_name;
                    $scope.Permalink = data.data.product_permalink;
                    $scope.htmlContent = data.data.product_description;
                    $scope.Price = data.data.price;
                    $scope.SalePrice = data.data.sale_price;
                    $scope.StoreId = {Id: data.data.store_id};
                    $scope.AffiliateLink = data.data.affiliate_link;
                    $scope.PriceGrabberId = data.data.price_grabber_master_id;
                    $scope.FreeShipping = data.data.free_shipping == 1 ? true : false;
                    $scope.CouponCode = data.data.coupon_code;
                    $scope.PostStatus = data.data.post_status;
                    $scope.PageTitle = data.data.page_title;
                    $scope.MetaDescription = data.data.meta_description;
                    $scope.productTags = data.data.similar_product_ids;
                    $scope.ProductAvailability = data.data.product_availability;
                    $scope.Specifications = data.data.specifications;
                    $scope.reviews = data.data.review;
                    $scope.externalReviewLink = data.data.review_ext_link;
                    $scope.ideaingReviewScore = data.data.ideaing_review_score;
                    $scope.datePicker = new Date(data.data.publish_at);
                    $scope.publishTime = new Date(data.data.publish_at);
                    $scope.UpdateTime = new Date(data.data.updated_at);


                    // hide category in edit mood
                    $scope.hideCategoryPanel = true;

                    // load Tags
                    $scope.showTagsByProductId();

                    // load media in panel
                    $scope.getMedia();

                    // initialization category hierarchy view
                    $scope.categoryHierarchyView($scope.selectedItem);

                 //   console.log('store id : ', $scope.StoreId);

                }
            });
        };


        // Product Promote


        $scope.promoteProduct = function (id) {
            $scope.closeAlert();
            $http({
                url: '/api/product/promote-product',
                method: "POST",
                data: {
                    id: id,
                    PublishAt: $scope.datePicker,
                    PublishTime : $scope.publishTime
                }
            }).success(function (data) {
                $scope.outputStatus(data, "Product promoted successfully.");
                $scope.loadProductData($scope.ProductId);

            });
        };

        // Product Sync with WP


        $scope.syncWpProductInfo = function (popup) {
           // $scope.closeAlert();
            $http({
                url: '/api/product/sync',
                method: "POST",
                data: {
                    ProductId: $scope.ProductId,
                }
            }).success(function (data) {
              //  console.log(data);
                $scope.WpProductId = data.data;

                if(popup)
                {
                    $scope.closeAlert();

                    $scope.outputStatus(data, "Product synced with wordpress successfully.");
                }

            });
        };

        // WP sync button
        $scope.syncWP = function(){
            $scope.syncWpProductInfo();
        };

        //delete a product
        $scope.deleteProduct = function (id, redirect) {
            // console.log(redirect);

            $http({
                url: '/api/product/delete-product',
                method: 'POST',
                data: {'ProductId': id}
            }).success(function (data) {
                $scope.outputStatus(data, "Product deleted !");

                if (redirect == true)
                    $window.location = '/admin/product-view';
                else
                    $scope.showAllProduct();
            });

        };

        //preview the product in details page
        $scope.previewProduct = function (permalink) {
            $window.open('/product/' + permalink, '_blank');
        };

        // Change the media type during add and edit of media content.
        $scope.mediaTypeChange = function () {
            // console.log($scope.selectedMediaType);

            if (($scope.selectedMediaType == 'img-link')) {
                $scope.isMediaUploadable = false;
                $scope.mediaLinkTmp = $scope.mediaLink;
                //   console.log($scope.isMediaUploadable);
            } else if (($scope.selectedMediaType == 'video-link') || ($scope.selectedMediaType == 'video-youtube-link') || ($scope.selectedMediaType == 'video-vimeo-link')) {

                $scope.isMediaUploadable = false;
                $scope.mediaLinkTmp = $scope.mediaLink;
                //   console.log( $scope.isMediaUploadable);
            } else if (($scope.selectedMediaType == 'img-upload')) {

                $scope.isMediaUploadable = true;
                $scope.mediaLink = $scope.mediaLinkTmp;
            } else if (($scope.selectedMediaType == 'video-upload')) {

                $scope.isMediaUploadable = true;
                $scope.mediaLink = $scope.mediaLinkTmp;
                // console.log( $scope.isMediaUploadable);
            }

        };

        // Show publishers name list
        $scope.getPublisherList = function () {
            // $scope.closeAlert();
            $http({
                url: '/api/product/get-publishers',
                method: "GET",
            }).success(function (data) {
                $scope.PublisherList = data.data;
                //  $scope.outputStatus(data, "Product promoted successfully.");
                //  $scope.loadProductData($scope.ProductId);

            });
        };

        // add medial content for a product

        $scope.addMediaInfo = function () {
            $http({
                url: '/api/product/add-media-info',
                method: 'POST',
                data: {
                    ProductId: $scope.ProductId,
                    MediaTitle: $scope.mediaTitle,
                    MediaSequence: $scope.selectedMediaSequence,
                    MediaType: $scope.selectedMediaType,
                    MediaLink: $scope.mediaLink,
                    IsHeroItem: $scope.isHeroItem,
                    IsMainItem: $scope.isMainItem
                }
            }).success(function (data) {
                //   console.log(data);

                if (data.status_code == 200) {
                    $scope.getMedia();
                    $scope.mediaTitle = $scope.selectedMediaType = $scope.mediaLink = $scope.isHeroItem = $scope.isMainItem = '';

                }

            })
        };

        // get media content list for a single product
        $scope.getMedia = function () {
            $http({
                url: '/api/product/get-media/' + $scope.ProductId,
                method: 'GET',
            }).success(function (data) {

                if (data.status_code == 200) {
                    $scope.mediaList = data.data.result;
                    $scope.mediaCount = 0;

                    if (data.data.count > 0) {
                        $scope.mediaCount = data.data.count;
                    }

                    //  console.log('media count :', $scope.mediaCount);

                    $scope.getMediaSequenceList();
                }

            });
        };

        $scope.deleteMedia = function ($id) {
            $http({
                url: '/api/product/delete-media',
                method: 'POST',
                data: {'MediaId': $id}
            }).success(function (data) {
                //  console.log(data);

                if (data.status_code == 200) {
                    $scope.getMedia();
                }

            });
        };

        $scope.editMedia = function (index) {

            $scope.mediaId = $scope.mediaList[index].id;

            $scope.selectedMediaSequence = $scope.mediaList[index].sequence;

            $scope.mediaTitle = $scope.mediaList[index].media_name;
            $scope.selectedMediaType = $scope.mediaList[index].media_type;
            $scope.mediaLink = $scope.mediaList[index].media_link;

            var stat = $scope.mediaList[index].is_hero_item == 1 ? true : false;
            $scope.isHeroItem = stat;

            var mainItem = $scope.mediaList[index].is_main_item == 1 ? true : false;
            $scope.isMainItem = mainItem;
            $scope.isMediaEdit = true;
            //     console.log($scope.selectedMediaSequence);

        };

        $scope.getMediaSequenceList = function () {

            //   console.log('media count:',$scope.mediaCount);
            var list = [];

            for (var i = 1; i <= $scope.mediaCount + 1; i++) {

                list.push(i);
            }

            $scope.mediaSequenceArray = list;

            //  console.log('list size :', list, Math.max.apply(Math,list,'media count:',$scope.mediaCount));
            $scope.selectedMediaSequence = Math.max.apply(Math, list);

        };

        $scope.updateMediaInfo = function () {
            $http({
                url: '/api/media/update-media',
                method: 'POST',
                data: {
                    MediaId: $scope.mediaId,
                    MediaTitle: $scope.mediaTitle,
                    MediaSequence: $scope.selectedMediaSequence,
                    MediaType: $scope.selectedMediaType,
                    MediaLink: $scope.mediaLink,
                    IsHeroItem: $scope.isHeroItem,
                    IsMainItem: $scope.isMainItem

                }
            }).success(function (data) {
                // console.log(data);
                $scope.mediaId = '';
                $scope.mediaTitle = '';
                $scope.selectedMediaSequence = $scope.selectedMediaSequence++;
                $scope.selectedMediaType = '';
                $scope.mediaLink = '';
                $scope.isHeroItem = false;
                $scope.isMainItem = false;
                $scope.isMediaEdit = false;
                $scope.getMedia();

            });
        };

        //delete a product
        $scope.deleteGiveaway = function (id, redirect) {
            //console.log(redirect);

            $http({
                url: '/api/giveaway/delete-giveaway',
                method: 'POST',
                data: {'GiveawayId': id}
            }).success(function (data) {
                $scope.outputStatus(data, "Giveaway deleted!");

                if (redirect == true)
                    $window.location = '/admin/giveaway-view';
                else
                    $scope.showAllGiveaways();
            });

        };

        // view product list
        $scope.showAllGiveaways = function () {

            $http({
                url: '/api/giveaway/get-giveaway-list',
                method: 'POST',
                data: {
                    Title: $scope.selectedItem,
                    id: $scope.ActiveItem,
                }

            }).success(function (data) {

                $scope.GiveawayList = data;
            });

        };

        // date picker start

        $scope.today = function () {
            $scope.datePicker = new Date();
        };
        $scope.today();

        $scope.clear = function () {
            $scope.datePicker = null;
        };

        // Disable weekend selection
        $scope.disabled = function (date, mode) {
            return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );

        };

        $scope.toggleMin = function () {
            $scope.minDate = $scope.minDate ? null : new Date();
        };
        $scope.toggleMin();
        $scope.maxDate = new Date(2020, 5, 22);

        $scope.open = function ($event) {
            $scope.status.opened = true;
        };

        $scope.dateOptions = {
            formatYear: 'yy',
            startingDay: 1
        };

        $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        $scope.format = $scope.formats[0];

        $scope.status = {
            opened: false
        };

        var tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        var afterTomorrow = new Date();
        afterTomorrow.setDate(tomorrow.getDate() + 2);
        $scope.events =
            [
                {
                    date: tomorrow,
                    status: 'full'
                },
                {
                    date: afterTomorrow,
                    status: 'partially'
                }
            ];

        $scope.getDayClass = function (date, mode) {
            if (mode === 'day') {
                var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

                for (var i = 0; i < $scope.events.length; i++) {
                    var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

                    if (dayToCheck === currentDay) {
                        return $scope.events[i].status;
                    }
                }
            }

            return '';
        };
        // date picker end


        $scope.getAdminNotificationEmailList = function () {
            $http({
                url: '/api/user/admin-email',
                method: 'GET'

            }).success(function (data) {

                $scope.Email = data.data;
            });
        }
        $scope.setAdminNotificationEmailList = function () {
            $http({
                url: '/api/user/admin-set-email',
                method: 'POST',
                data: {
                    Email: $scope.Email
                }

            }).success(function (data) {

                $scope.getAdminNotificationEmailList();
            });
        }


        // Initialize variables and functions Globally.
        $scope.initPage();
        $scope.getCategory();
        $scope.getForumCategory();


    }]);