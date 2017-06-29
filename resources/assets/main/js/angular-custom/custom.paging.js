
angular.module('pagingApp', [
    'pagingApp.controllers',
    //'pagingApp.services',
    'pagingApp.filters',
    'cgBusy'
]);

angular.module('pagingApp.controllers', [ 'ui.bootstrap'])

    // directive for heart action for grid items
    .directive('heartCounterDir', ['$http', function($http) {
        return {
            restrict: 'E',
            transclude: true,
            replace: true,
            scope:{
                uid:'=',
                iid:'=',
                plink:'=',
                sec:'=',
            },
            controller:function($scope, $element, $attrs){

                // Heart Section

                $scope.unHeart = false;
                $scope.heartCounter = 0;

                $scope.heartCounterAction = function(){

                   // console.log('hi : ',$scope.iid,$scope.plink);

                    $http({
                        url: '/api/heart/count-heart',
                        method: "POST",
                        data:{
                            section: $attrs.sec,
                            uid: $scope.uid,
                            iid: $scope.iid,
                            plink: $scope.plink,
                        }
                    }).success(function (data) {
                        $attrs.ustatus = data.UserStatus;

                        $scope.unHeart = data.UserStatus;
                        $scope.heartCounter = data.Count;

                    });
                };

                // clean url for ideaing URL (take only permalink)
                $scope.cleanUrl = function(url){
                    var domainBuilder = "https://"+window.location.host+"/ideas/";
                    return url.replace(domainBuilder,'');
                };

                $scope.heartAction = function(){
                    // an anonymous will be returned without performing any action.
                    if($attrs.uid==0)
                        return;

                    $http({
                        url: '/api/heart/add-heart',
                        method: "POST",
                        data:{
                            section: $attrs.sec,
                            uid: $scope.uid,
                            iid: $scope.iid,
                            plink: $scope.cleanUrl($scope.plink),
                            uht: $scope.unHeart
                        }
                    }).success(function (data) {
                        $scope.heartCounterAction();
                        $scope.unHeart = ! $scope.unHeart;
                    });
                };

                $scope.heartCounterAction();

            },

            template: '      <div class="">'+
            '                    <a href="#" class="likes"'+
            '                       ng-click="heartAction()"'+
            '                    >'+
            '                        <i ng-class="unHeart != false ? \'m-icon m-icon--heart-solid\' : \'m-icon m-icon--ScrollingHeaderHeart\'">'+
            '                                <span class="m-hover">'+
            '                                    <span class="path1"></span><span class="path2"></span>'+
            '                                </span>'+
            '                        </i>'+
            '                        <span class="social-stats__text" ng-bind="heartCounter">&nbsp; </span>'+
            '                    </a>'+
            '                </div>'

        }
    }])

    .controller('pagingController', function($scope, $timeout, $uibModal, $http, pagingApi, $filter) {

        $scope.initGrid = function($category){
            $scope.allContent = [];
            $scope.content = [];
            $scope.newStuff = [];
            $scope.currentPage = 1;
            $scope.currentDay = 'Today';
            $scope.contentBlock = angular.element( document.querySelector('.main-content') );
            $scope.filterLoad = [];
            $scope.readContent = [];
            $scope.ideaCategory = false;
            $scope.hasMore = false;
            //$scope.globalOffset = 0;

            $scope.loadReadContent($category);
        }
      

        $scope.renderHTML = function(html_code)
        {
            var decoded = angular.element('<div />').html(html_code).text();
            return decoded;
        };

        $scope.loadReadContent = function($category, $callback){

            $('.category-menu a, .mid-menu a').removeClass('active');

            $('.category-menu, .mid-menu').find('a.category-link__' + $category).addClass('active');

                $scope.currentPage = 1;
                $scope.ideaCategory = $category;
                $scope.firstLoad = pagingApi.getReadContent($category).success(function (response) {
                     $scope.readContent = response;
                     $('.popular-box').fadeIn();
                });

        

            $scope.firstLoad = pagingApi.getGridContent(1, 0, false, false,  $scope.ideaCategory).success(function (response) {
                $scope.allContent[0] = response;

                var newContent = [];
                newContent[0] = $scope.sliceToRows(response['content']['ideas'], response['content']['products']);

                $scope.content = newContent;

                $scope.hasMore = response['hasMore'];
                $scope.unreadCount = response['unreadCount'];

            });
        };


        $scope.loadMore = function() {

            if($('.bottom-load-more').hasClass('disabled')){
                return false;
            }

            $scope.currentPage++;
            $scope.allContent[$scope.currentPage] = [];

            var $limit = 0;
            $scope.filterBy = null;
            var $daysBack = false;

            $scope.nextLoad =  pagingApi.getGridContent($scope.currentPage, $limit, $scope.currentTag, $scope.filterBy, $scope.ideaCategory).success(function (response) {

                var newContent = $scope.sliceToRows(response['content']['ideas'], response['content']['products']);;
                // if($scope.currentPage == 2){
                //     newContent['currentDay'] = 'Yesterday';
                // }else{
                //     newContent['currentDay'] = $daysBack + ' Days Ago';
                // }
                $scope.newStuff[0] = newContent;

                $scope.content = $scope.content.concat($scope.newStuff);

                $scope.hasMore = response['hasMore'];
                $scope.unreadCount = response['unreadCount'];

                $('.bottom-load-more').removeClass('disabled').attr('disabled', false);
            });
        };


        $scope.sliceToRows = function($ideas, $products){
            var $return = [];
            console.log('$ideas');

            console.log($ideas);
            $return['row-1'] = $ideas.slice(0, 1);
            $return['row-2'] = $ideas.slice(2, 4);
            $return['row-3'] = $products.slice(0, 3);
            $return['row-4'] = $ideas.slice(4, 5);
            $return['row-5'] = $ideas.slice(5, 7);
            $return['row-6'] = $products.slice(3, 6);
           
            return $return;
        };


            $scope.switchCategory = function(categoryName) {

                if($('.bottom-load-more').hasClass('disabled')){
                    return false;
                }

                if($scope.ideaCategory == categoryName){
                    return false;
                }

                currentRoute = $filter('getURISegment')(1);

                if(currentRoute && currentRoute != 'smart-home' && currentRoute != 'smart-body' && currentRoute != 'smart-entertainment' && currentRoute != 'smart-travel'){ // not a category page

                    if(categoryName == 'default'){
                        categoryName = '';
                    }

                    window.location.href  = '/' + categoryName;
                    return false;
                }

                $('.popular-box').fadeOut(function(){
                    $scope.ideaCategory = categoryName;

                    $('.guide-switch').click();
                    $scope.loadReadContent(categoryName);

                    $scope.filterBy = false;

                    if(categoryName == 'default'){
                        window.history.replaceState({category: 'smarthome'}, 'Smart Home', '/');
                    }else{
                        window.history.replaceState({category: 'smarthome'}, 'Smart Home', categoryName);
                    }
                });


            }

            $scope.fadeAnimation = function ($node, $action, $callback) {
                $($node).fadeOut(
                    $callback()
                );

            };

            // email subscription //

            $scope.subscribe = function () {

                $scope.responseMessage = '';

                $http({
                    url: '/api/subscribe',
                    method: "POST",
                    data: {
                        'Email': $scope.SubscriberEmail
                    }
                }).success(function (data) {

                    if (data.status_code == 406) {

                        $scope.responseMessage = "Please enter a valid email address";
                    }

                    else if (data.status_code == 200) {
                        $scope.responseMessage = "Successfully Subscribed";
                        $scope.SubscriberEmail = '';

                    } else {
                        $scope.responseMessage = "Email already subscribed";
                    }
                });

            };

            $scope.open = function (key) {
                var templateUrl = "room-related-product-" + key + ".html";
                var modalInstance = $uibModal.open({
                    templateUrl: templateUrl,
                    size: 'lg',
                    controller: 'ModalInstanceCtrltest'
                });
            };

            $scope.openProfileSetting = function () {
                var templateUrl = "profile-setting.html";
                var modalInstance = $uibModal.open({
                    templateUrl: templateUrl,
                    size: 'lg',
                    windowClass: 'profile-setting-modal',
                    controller: 'ModalInstanceCtrltest'
                });
            };

            $scope.openProductPopup = function (id) {
                pagingApi.openProductPopup($scope, $uibModal, $timeout, id);
            }
        })
            .controller('SearchController', function ($scope, $http, $uibModal, pagingApi, $timeout, $filter, $window) {

        $scope.searchPage = function(){
            var $route = $filter('getURISegment')(2);
            var $searchQuery = false;
            if ($route == 'search') {
                if ($searchQuery = $filter('getURISegment')(3)) {
                    $scope.$searchQuery = $searchQuery;
                }
            }

            $scope.currentPage = 1;
            $scope.offset = 0;
            $scope.type = 'undefined';
            $scope.sortBy = false;
            $scope.hasMore = false;

            $scope.firstLoad = pagingApi.getSearchContent($scope.$searchQuery, 15, 0).success(function (response) {
                $scope.content = response['content'];
                $scope.hasMore = response['hasMore'];

                $('#search-header').show();
                $('#hit-count').text(response['count']);
            });
        }

        //$scope.getContentFromSearch = function() {


        $scope.loadMore = function () {

            if ($('.bottom-load-more').hasClass('disabled')) {
                return false;
            }

            $scope.offset = 15 * $scope.currentPage++;
            $scope.nextLoad = pagingApi.getSearchContent($scope.$searchQuery, 15, $scope.offset, $scope.type, $scope.sortBy).success(function (response) {
                var $newStuff = $scope.content.concat(response['content'])

                if ($scope.sortBy) {
                    $newStuff.sort(function (a, b) {
                        return parseFloat(a[$scope.sortBy]) - parseFloat(b[$scope.sortBy]);
                    });
                }

                $scope.content = $newStuff;
                $scope.hasMore = response['hasMore'];
                $scope.currentPage++;
                $('.bottom-load-more').removeClass('disabled').attr('disabled', false);

            });
        }


        $scope.filterSearchContent = function($filterBy, $sortBy) {

            if(!$filterBy){
                $filterBy = $scope.type;
            }

            if($filterBy){
                if(!$sortBy && $('a[data-filterby="'+$filterBy+'"]').hasClass('active')){
                    return true;
                }

                $scope.type = $filterBy;
                $scope.currentPage = 1;
                $scope.offset = 0;

                $('a[data-filterby]').removeClass('active');
                $('a[data-filterby="'+$filterBy+'"]').addClass('active');

            }

            if($filterBy == 'all'){
                $('a[data-filterby]').removeClass('active');
                $('a[data-filterby="false"]').addClass('active');

                $filterBy = 'undefined';
            }


            if(!$sortBy){
                $sortBy = $scope.sortBy;
            }

            if($sortBy && $sortBy != 'undefined'){

                if(!$filterBy && $('a[data-sotyby="'+$sortBy+'"]').hasClass('active')){
                    return true;
                }

                $scope.sortBy = $sortBy;
                $scope.currentPage = 1;
                $scope.offset = 0;

                $('a[data-sortby]').removeClass('active');
                $('a[data-sortby="'+$sortBy+'"]').addClass('active');
            }

            var contentBlock =  $('.grid-box-3');

            contentBlock.fadeOut(500, function(){
                $scope.nextLoad =  pagingApi.getSearchContent($scope.$searchQuery, 15, $scope.offset, $filterBy, $sortBy).success(function (response) {
                    $scope.content = response['content'];
                    $scope.hasMore = response['hasMore'];
                    $('#hit-count').text(response['count']);
                    contentBlock.fadeIn();

                });
            });
        }

        $scope.openSearchDropdown = function (query){
                $http({
                    method: "get",
                    url: '/api/search/find-categories/' + query,
                }).success(function (response) {
                    $scope.categorySuggestions = response;
                }).error(function (response) {
                    $scope.categorySuggestions = [];
                });
        }

        $scope.renderHTML = function(html_code)
        {
            var decoded = angular.element('<div />').html(html_code).text();
            return decoded;
        };

        $scope.$window = $window;

        $scope.open = false;

        $scope.toggleSearch = function () {
            $scope.open = !$scope.open;

            if ($scope.open) {
                $scope.$window.onclick = function (event) {
                    closeSearchWhenClickingElsewhere(event, $scope.toggleSearch);
                };
            } else {
                $scope.open = false;
                $scope.$window.onclick = null;
                $scope.$apply();
            }
        };

        function closeSearchWhenClickingElsewhere(event, callbackOnClose) {

            var clickedElement = event.target;
            if (!clickedElement) return;

            var elementClasses = clickedElement.classList;
            console.log(clickedElement.classList);
            var clickedOnSearchDrawer = elementClasses.contains('top-search') || elementClasses.contains('cat-suggestions');

            if (!clickedOnSearchDrawer) {
                callbackOnClose();
                return;
            }

        }

        $scope.openProductPopup = function(id){
            pagingApi.openProductPopup($scope, $uibModal, $timeout, id);
        }


    })
//    .controller('ModalInstanceCtrltest', function ($scope, $uibModalInstance) {
//        
//        $scope.ok = function () {
//            $uibModalInstance.close();
//        };

//        $scope.cancel = function () {
//            $uibModalInstance.dismiss('cancel');
//        };
//    })
    .controller('shoplandingController', ['$scope', '$http', 'pagingApi', '$timeout', '$window', '$uibModal', function ($scope, $http, pagingApi, $timeout, $window, $uibModal) {
        
        $scope.renderHTML = function(html_code)
        {
            var decoded = angular.element('<div />').html(html_code).text();
            return decoded;
        };

        $scope.openProductPopup = function(id){
            pagingApi.openProductPopup($scope, $uibModal, $timeout, id);
        }

        $scope.hasMore = false;

        var everythingLoaded = setInterval(function() {
            if (/loaded|complete/.test(document.readyState)) {
                clearInterval(everythingLoaded);
                var footer = document.getElementsByClassName('about-footer')[0];
                footer.style.display = 'block';
                footer.style.position = 'static';
            }
        }, 10);

        angular.element($window).bind("scroll", function() {

            var topMenuClasses = document.getElementById("publicApp").classList;
            if(document.documentElement.clientWidth > 620) {
                if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
                    if (!topMenuClasses.contains("shop-top-menu-container")) {
                        topMenuClasses.add("shop-top-menu-container");
                    }
                } else {
                    if (topMenuClasses.contains("shop-top-menu-container")) {
                        topMenuClasses.remove("shop-top-menu-container");
                    }
                }
            }else {
                if (topMenuClasses.contains("shop-top-menu-container")) {
                    topMenuClasses.remove("shop-top-menu-container");
                }
            }
        });

        $scope.nextLoad = pagingApi.getPlainContent(1, 3, 'deal', 'idea').success(function (response) {
            $scope.dailyDeals = response['content'];
            $timeout(function() {
                jQuery('#daily-deals').royalSlider({
                    arrowsNav: true,
                    loop: false,
                    keyboardNavEnabled: true,
                    controlsInside: false,
                    imageScaleMode: 'fit',
                    arrowsNavAutoHide: false,
                    controlNavigation: 'bullets',
                    controlsInside: true,
                    thumbsFitInViewport: false,
                    navigateByClick: false,
                    startSlideId: 0,
                    autoPlay: false,
                    transitionType:'move',
                    globalCaption: false,
                    deeplinking: {
                      enabled: true,
                      change: false
                    },
                    /* size of all images http://help.dimsemenov.com/kb/royalslider-jquery-plugin-faq/adding-width-and-height-properties-to-images */
                    imgWidth: "100%",
                    autoHeight: true,
                    imageScaleMode: "fill",
                    //    autoScaleSliderWidth: 1500,
                    //    autoScaleSliderHeight: 500,
                    //    autoScaleSlider: true
                });
                }, 
            100);
            
            
              

        });


        pagingApi.getPlainContent(1, 9, false, 'product').success(function (response) {
            $scope.newestArrivals = [];
            for(var i=0; i<= response['content'].length; i++){
                if(i%3 == 0){
                    var newestArrival = [response['content'][i]];
                }else{
                    newestArrival.push(response['content'][i]);
                    if(i%3 == 2 || i == response['content'].length-1){
                        $scope.newestArrivals.push(newestArrival);
                    }
                }
                $scope.hasMore = response['hasMore'];
            }
            
            $timeout(function(){
                jQuery('#newest-arrivals').royalSlider({
                    arrowsNav: true,
                    loop: false,
                    keyboardNavEnabled: true,
                    controlsInside: false,
                    arrowsNavAutoHide: false,
                    controlNavigation: 'bullets',
                    controlsInside: true,
                    thumbsFitInViewport: false,
                    navigateByClick: false,
                    startSlideId: 0,
                    autoPlay: false,
                    transitionType:'move',
                    globalCaption: false,
                    deeplinking: {
                      enabled: true,
                      change: false
                    },
                    /* size of all images http://help.dimsemenov.com/kb/royalslider-jquery-plugin-faq/adding-width-and-height-properties-to-images */
                    imgWidth: "100%",
                    imageScaleMode: "fill",
                    autoHeight: true
                }, 100);
            })
        });
    }])

    .controller('shopcategoryController', function ($scope, $filter, pagingApi, $window, $uibModal, $timeout) {
        $scope.renderHTML = function(html_code)
        {
            var decoded = angular.element('<div />').html(html_code).text();
            return decoded;
        };
        $scope.openProductPopup = function(id){
            pagingApi.openProductPopup($scope, $uibModal, $timeout, id);
        }
        $scope.currentPage = 1;
        $scope.currentCategory = false;
        $scope.$filterBy = false;
        $scope.sortBy = false;
        $scope.hasMore = false;


        var $route =  $filter('getURISegment')(2);
        var $category = false;
        var filterTopOffset = 500;

        var everythingLoaded = setInterval(function() {
            if (/loaded|complete/.test(document.readyState)) {
                clearInterval(everythingLoaded);
                var footer = document.getElementsByClassName('about-footer')[0];
                footer.style.display = 'block';
                footer.style.position = 'static';

                var roomFilter = document.getElementsByClassName('room-filter')[0],
                    rect = roomFilter.getBoundingClientRect(),
                    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                filterTopOffset = rect.top + scrollTop;
            }
        }, 10);

        angular.element($window).bind("scroll", function() {

            var topMenuClasses = document.getElementById("publicApp").classList;
            if(document.documentElement.clientWidth > 620) {
                if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
                    if (!topMenuClasses.contains("shop-top-menu-container")) {
                        topMenuClasses.add("shop-top-menu-container");
                    }
                } else {
                    if (topMenuClasses.contains("shop-top-menu-container")) {
                        topMenuClasses.remove("shop-top-menu-container");
                    }
                }
            }else {
                if (topMenuClasses.contains("shop-top-menu-container")) {
                    topMenuClasses.remove("shop-top-menu-container");
                }
            }

            if (document.querySelector('.show-filter') !== null) {
                var showFilter = document.getElementsByClassName('show-filter')[0];
                if (showFilter.querySelector('.room-filter') !== null) {
                    // .. it exists as a child
                    var roomFilter = document.getElementsByClassName('room-filter')[0],
                        roomFilterClassList = roomFilter.classList;

                    if(document.body.scrollTop > (filterTopOffset - 55)){
                        if (!roomFilterClassList.contains("room-filter-fixed")) {

                            var rect = roomFilter.getBoundingClientRect(),
                                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                            filterTopOffset = rect.top + scrollTop;

                            roomFilterClassList.add("room-filter-fixed");
                            roomFilter.style.left = (showFilter.getBoundingClientRect().left + (window.pageXOffset || document.documentElement.scrollLeft)) + 'px';
                        }
                    }else{
                        if (roomFilterClassList.contains("room-filter-fixed")) {
                            roomFilterClassList.remove("room-filter-fixed");
                            roomFilter.style.left = '-220px';
                        }
                    }
                }

            }



        });

        if($route == 'shop'){
            if($category = $filter('getURISegment')(5)){
                $scope.currentCategory = $category;
            }else if($category = $filter('getURISegment')(4)){
                $scope.currentCategory = $category;
            }else{
                $scope.currentCategory = $filter('getURISegment')(3);
            }
        }

        // For Forced route confuguration
        if ($filter('getURISegment')(2) == 'smartbody') {

            $scope.currentCategory = 'smartbody';

            if ($filter('getURISegment')(3) != false) {
                $scope.currentCategory = $filter('getURISegment')(3);
            }
        }

    //    console.log('route :', $route, $filter('getURISegment')(3),$scope.currentCategory);


        $scope.nextLoad = pagingApi.getPlainContent(1, 15,  $scope.currentCategory, 'product', $scope.currentCategory).success(function (response) {

            if($scope.sortBy){
                response.sort(function(a, b) {
                    return parseFloat(a[$scope.sortBy]) - parseFloat(b[$scope.sortBy]);
                });
            }

            $scope.content = response['content'];
            $scope.hasMore = response['hasMore'];
        });

        $scope.loadMore = function() {

            if($('.bottom-load-more').hasClass('disabled')){
                return false;
            }

            $scope.currentPage++;

            var $limit = 15;

            $scope.nextLoad =  pagingApi.getPlainContent($scope.currentPage, $limit,  $scope.currentCategory, 'product', $scope.currentCategory).success(function (response) {
                var $newStuff = $scope.content.concat(response['content'])

                if($scope.sortBy){
                    $newStuff.sort(function (a, b) {
                        return parseFloat(a[$scope.sortBy]) - parseFloat(b[$scope.sortBy]);
                    });
                }

                $scope.content = $newStuff;
                $scope.hasMore = response['hasMore'];
                $('.bottom-load-more').removeClass('disabled').attr('disabled', false);

            });
        };

        //$scope.sortContent = function($sortBy){
        //
        //    if($sortBy === $scope.sortBy){
        //        return true;
        //    }
        //
        //    $('a[data-sortby]').removeClass('active');
        //    $('a[data-sortby="'+$sortBy+'"]').addClass('active');
        //
        //    var contentBlock =  $('.grid-box-3');
        //
        //    contentBlock.fadeOut(500, function(){
        //        $scope.nextLoad =  pagingApi.getPlainContent(1, 15,  $scope.currentCategory, 'product', $scope.currentCategory).success(function (response) {
        //            if($sortBy) {
        //                response.sort(function (a, b) {
        //                    return parseFloat(a[$sortBy]) - parseFloat(b[$sortBy]);
        //                });
        //                $scope.sortBy = $sortBy;
        //                $scope.content = response;
        //                contentBlock.fadeIn();
        //            }else{
        //                $scope.content = response;
        //                contentBlock.fadeIn();
        //            }
        //            $scope.sortBy = $sortBy;
        //
        //        });
        //    });
        //}

        $scope.filterPlainContent = function($filterBy, $sortBy) {

            //if($filterBy === $scope.currentCategory){
            //    return true;
            //}

            if($filterBy){
                if($('a[data-filterby="'+$filterBy+'"]').hasClass('active')){
                    return true;
                }

                $scope.currentCategory = $filterBy;
                $('a[data-filterby]').removeClass('active');
                $('a[data-filterby="'+$filterBy+'"]').addClass('active');

            }

            if($sortBy && $sortBy != 'undefined' && $sortBy != $scope.sortBy){

                if($('a[data-sotyby="'+$sortBy+'"]').hasClass('active')){
                    return true;
                }

                $('a[data-sortby]').removeClass('active');
                $('a[data-sortby="'+$sortBy+'"]').addClass('active');
            }

            var contentBlock =  $('.grid-box-3');

            contentBlock.fadeOut(500, function(){

                $scope.nextLoad =  pagingApi.getPlainContent(1, 15,   $scope.currentCategory, 'product',  $scope.currentCategory).success(function (response) {
                    if($sortBy != false){
                        $scope.sortBy = $sortBy;
                    }

                    if($scope.sortBy && $scope.sortBy != 'default' ){
                        response['content'].sort(function (a, b) {
                            return parseFloat(a[$scope.sortBy]) - parseFloat(b[$scope.sortBy]);
                        });
                    }

                    $scope.content = response['content'];
                    $scope.hasMore = response['hasMore'];

                    contentBlock.fadeIn();
                });
            });
        }
    })
    .directive('a', function() {
    return {
        restrict: 'E',
        link: function(scope, elem, attrs) {
            if(attrs.ngClick || attrs.href === '' || attrs.href === '#'){
                elem.on('click', function(e){
                    e.preventDefault();
                });
            }
        }
    };
  })
    .factory('pagingApi', function($http, $window, $q) {
        var pagingApi = {};
        pagingApi.openProductPopup = function ($scope, $uibModal, $timeout, productId) {
            var body = angular.element(document).find('body');
            if(body[0].offsetWidth < 880){
                return;
            }
            
            document.getElementsByTagName('html')[0].className += " hide-overflow ";
            var templateUrl = "product-popup.html";
            $http({
                url: '/api/product/get-product/' + productId,
                method: "get",
            }).success(function (data) {  
                $scope.productData = data;
            var modalInstance = $uibModal.open({
              templateUrl: templateUrl,
              size: 'lg',
              windowClass : 'product-popup-modal',
                    controller: 'ProductModalInstanceCtrl',
                    resolve: {
                        productData: function(){
                            return $scope.productData;
                        }
                    }
            });
            modalInstance.opened.then(function(){
                $timeout(function() {
                        var data = $scope.productData;
                        if (data.status_code == 200) {
                            console.log(data.data);
                            var data = data.data;
                            var imageHTML = "";
                            for(var key in data.selfImages.picture){
                                var picture = data.selfImages.picture[key];
                                imageHTML += '\
                                    <div>\
                                        <img class="rsImg " \
                                             src="'+ picture['link'] +'"\
                                             class="attachment-large wp-post-image"\
                                             alt=""/>\
                                    </div>\
                                '
                            }
                            $('.product-popup-modal #product-slider').html(imageHTML);
                            $('.product-popup-modal .base-url-holder').attr('data-base-url', '/product/' + data.product_permalink);
                            $('.product-popup-modal .p-title').html("<a target='_blank' href='/product/"+ data.productInformation['Permalink'] +"'>"+ data.productInformation['ProductName'] +"</a>");

                            var html = '\
                                <a class="get-round" href="/open/' + productId + '/product" target="_blank">Get it</a>\
                                <img class="vendor-logo" width="107" src="'+ data.storeInformation['ImagePath'] +'" alt="'+ data.storeInformation['StoreName'] +'">\
                            ';
                            $('.product-popup-modal .p-get-it-amazon .p-body').html(html);
                            

//                            $('.product-popup-modal .get-round').attr('href', data.productInformation['AffiliateLink']);
                            
                            if(data.productInformation['Review']){
                                var pScore = parseInt(((( Number(data.productInformation['Review'][0].value) > 0 ? Number(data.productInformation['Review'][0].value) : Number(data.productInformation['Review'][1].value)) + Number(data.productInformation['Review'][1].value))/2)*20) + "%";
                                $('.product-popup-modal .p-score').html(pScore);

                            }else{
                                //$('.p-average-ideaing-score').css('visibility', 'hidden');
                                $('.p-average-ideaing-score, .reviews-medium-container').hide();

                            }

                            var price;
                            if(data.productInformation['SellPrice']){
                                price = data.productInformation['SellPrice'];
                            }else{
                                price = 0;
                            }
                            $('.product-popup-modal .aws-price').html(price);
                            
                            var features;
                            if(data.productInformation['Description']){
                                features = data.productInformation['Description'];
                            }else{
                                features = "";
                            }
                            $('#features').html(features);
                            
                            var starRatingHtml = "";
                                $stars = data.productInformation['Review'][0].value;
                                $fStar = Math.floor($stars);
                                $cStar = Math.ceil($stars);
                                $halfStar = -1;
                                if ($fStar == $cStar)
                                    $halfStar = $cStar;

                                for($i=1; $i<=5; $i++){
                                    if($i <= $fStar){
                                        starRatingHtml += '\
                                        <span class="star active">\
                                            <i class="m-icon--star-blue-full"></i>\
                                        </span>\
                                        ';
                                    }else if($cStar == $i){
                                        starRatingHtml += '\
                                        <span class="star half">\
                                            <i class=" m-icon--star-blue-half2"></i>\
                                        </span>\
                                        ';
                                    }else{
                                        starRatingHtml += '\
                                        <span class="star">\
                                            <i class=" m-icon--star-blue-full-lines"></i>\
                                        </span>\
                                        ';
                                    }
                                }
                                $(".product-popup-modal .critic .star-rating").html(starRatingHtml);
                                var counter = data.productInformation['Review'][0].counter == '' ? 0 : data.productInformation['Review'][0].counter;
                                if(counter>1){
                                    var starRatingLabelHtml =  counter + '\
                                        <span class="light-black">\
                                            Reviews\
                                        </span>\
                                    ';
                                }else{
                                    var starRatingLabelHtml =  counter + '\
                                        <span class="light-black">\
                                            Review\
                                        </span>\
                                    ';
                                }
                                $(".product-popup-modal .critic .star-rating-label").html(starRatingLabelHtml);

                            var criticOuterRatingHtml = "";
                                if(data.productInformation['Review']){
                                    var outrReviews = data.productInformation['Review'].slice(2);
                                    for( reviewKey in outrReviews ){
                                        var review = outrReviews[reviewKey];
                                        //console.log("reviewKey", reviewKey)
                                        //console.log("review", review)
                                        criticOuterRatingHtml += '\
                                            <div class="critic-outer-rating">\
                                                <div class="line-label ">\
                                                    <a\
                                                        href="' + review.link + '"\
                                                        target="_blank">'+ review.key + '\
                                                    </a></div>\
                                                <div class="star-rating" style="text-align: center">';
                                                
                                                    $stars = review.value ? review.value : 0;
                                                    $fStar = Math.floor($stars);
                                                    $cStar = Math.ceil($stars);
                                                    $halfStar = -1;
                                                    if ($fStar == $cStar)
                                                        $halfStar = $cStar;
                                                    // TODO - move to model or Angular

                                                    for($i=1; $i<=5; $i++){
                                                        if($i <= $fStar){
                                                            criticOuterRatingHtml += '\
                                                                <span class="star active">\
                                                                    <i class="m-icon--star-blue-full"></i>\
                                                                </span>\
                                                            ';
                                                        }
                                                        else if($cStar == $i){
                                                            criticOuterRatingHtml += '\
                                                                <span class="star half">\
                                                                    <i class=" m-icon--star-blue-half2"></i>\
                                                                </span>\
                                                            ';
                                                        }
                                                        else{
                                                            criticOuterRatingHtml += '\
                                                                <span class="star">\
                                                                    <i class=" m-icon--star-blue-full-lines"></i>\
                                                                </span>\
                                                            ';
                                                        }
                                                    }
                                        criticOuterRatingHtml += '\
                                                </div>\
                                            </div>\
                                        ';
                                    }
                                }
                            jQuery(".product-popup-modal .critic #critic-outer-rating-holder").html(criticOuterRatingHtml);

                            var starRatingHtml = "";
                                $stars = data.productInformation['Review'][1].value;
                                $fStar = Math.floor($stars);
                                $cStar = Math.ceil($stars);
                                $halfStar = -1;
                                if ($fStar == $cStar)
                                    $halfStar = $cStar;

                                for($i=1; $i<=5; $i++){
                                    if($i <= $fStar){
                                        starRatingHtml += '\
                                        <span class="star active">\
                                            <i class="m-icon--star-blue-full"></i>\
                                        </span>\
                                        ';
                                    }else if($cStar == $i){
                                        starRatingHtml += '\
                                        <span class="star half">\
                                            <i class=" m-icon--star-blue-half2"></i>\
                                        </span>\
                                        ';
                                    }else{
                                        starRatingHtml += '\
                                        <span class="star">\
                                            <i class=" m-icon--star-blue-full-lines"></i>\
                                        </span>\
                                        ';
                                    }
                                }
                                
                                $(".product-popup-modal .amazon .star-rating").html(starRatingHtml);
                                var counter = data.productInformation['Review'][1].counter == '' ? 0 : data.productInformation['Review'][1].counter;
                                var starRatingLabelHtml = '<a href="' + (data.productInformation['Review'][1].link ? data.productInformation['Review'][1].link : "#") + '" target="_blank">'; 
                                if(counter>1){
                                    starRatingLabelHtml +=  counter + '\
                                        <span class="light-black">\
                                            Reviews\
                                        </span>\
                                    ';
                                }else{
                                    starRatingLabelHtml +=  counter + '\
                                        <span class="light-black">\
                                            Review\
                                        </span>\
                                    ';
                                }
                                starRatingLabelHtml += "</a>";
                                $(".product-popup-modal .amazon .star-rating-label").html(starRatingLabelHtml);
                            
                            var criticQuoteHtml = '\
                                <div>' + (data.productInformation['ReviewExtLink'] ? data.productInformation['ReviewExtLink'] : "") + '</div>';
                            $('.product-popup-modal .critic-quote').html(criticQuoteHtml);

                            $http({
                                url: '/api/comment/get-product-comment/'+productId,
                                method: "GET"
                            }).success(function (result) {
                                var comments = result.data;
                                var commentsCount = comments.length;
                                var commentsCountView = commentsCount < 2 ? commentsCount +" "+"Comment" : commentsCount +" "+"Comments";
                                var commentsHtml = "";
                                for(var i=0; i<comments.length; i++){
                                    var comment = comments[i];
                                    commentsHtml += '\
                                        <div class="p-comment-row">\
                                            <div class="pull-left text-center p-comment-user">\
                                                <img src="'+ comment.Picture + '" width="50px" class="p-photo"><br>' + comment.UserName + '</div>\
                                            <div class="p-comment">'
                                                + comment.Comment +
                                                '<div class="p-footer">\
                                                    <time class="p-time pull-left">'+comment.PostTime+'</time>\
                                                    <div class="clearfix"></div>\
                                                </div>\
                                            </div>\
                                        </div>\
                                    ';
                                }
                                
                                
                                $('.p-comment-content-holder').html(commentsHtml);
                                $('.p-comment-responses').html(commentsCountView);
                              //  console.log($scope.comments.length);
                            });

                            
                    jQuery('#product-slider').royalSlider({
                        loop: false,
                        keyboardNavEnabled: true,
                        controlsInside: false,
                                imageScaleMode: 'fit',
                        arrowsNavAutoHide: false,
                        controlNavigation: 'thumbnails',
                        thumbsFitInViewport: false,
                        navigateByClick: true,
                        startSlideId: 0,
                        autoPlay: false,
                        transitionType: 'move',
                        globalCaption: false,
                        autoScaleSlider: false,
                                imgHeight: "100%",
//                                imgWidth: "100%",
//                                imgWidth: "100%",
//                                autoHeight: true,  
                        deeplinking: {
                          enabled: true,
                          change: false
                        },
                        
                        autoHeight: true,
                    });
                    document.getElementById( 'product-slider' ).style.visibility = 'visible';
                        }
                    }, 100)
                })
                    

            modalInstance.result.finally(function(){
                var className = document.getElementsByTagName('html')[0].className;
                className = className.replace('hide-overflow', '');
                document.getElementsByTagName('html')[0].className = className;

            });
                pagingApi.countSocialShares('product/' + data.data.product_permalink);
            });


        };

        pagingApi.fakeUpdateCounts = function ($service) {
            var currentCounters =  $('.share-buttons a[data-service="' + $service + '"]').children('.share-count');
            var totalCounters = $('b.share-count.all');
			
			var currentCount = Number(currentCounters.html());
			currentCounters.html(currentCount + 1);

			var totalCount = Number(totalCounters.html());
			totalCounters.html(totalCount + 1);
		}

		pagingApi.openSharingModal = function ($service, $scope) {

            if($('.base-url-holder').length && $('.base-url-holder').data('base-url')){
                var baseUrl = 'https://' + window.location.host + $('.base-url-holder').data('base-url');
            }else{
                var baseUrl = 'https://' + window.location.host + window.location.pathname;
            }

            var shareUrl = false;

            var $pitnerestShare = function(){
                    var e=document.createElement('script');
                    e.setAttribute('type','text/javascript');
                    e.setAttribute('charset','UTF-8');
                    e.setAttribute('src','https://assets.pinterest.com/js/pinmarklet.js?r='+Math.random()*99999999);
                    document.body.appendChild(e);

                setTimeout(function(){
					pagingApi.fakeUpdateCounts('pinterest');
                }, 10000);
            }
 
            switch($service){ 
                case 'facebook':
                    shareUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + baseUrl;
                    break;
                case 'twitter':
                    var title = $('h1').first().text().trim();
                    shareUrl = 'https://twitter.com/share?url=' + baseUrl + '&counturl=' + baseUrl + '&hashtags=smarthome&text=' + title.replace('%', '%25');
                    break;
                case 'googleplus':
                    shareUrl = 'https://plus.google.com/share?url=' + baseUrl;
                    break;
                case 'pinterest':
                    $pitnerestShare();
                    return true
            }

            if(!shareUrl){
                return false;
            }

            //$scope.openWindow = function() {
            var $modal = $window.open(shareUrl, 'share-box' + Math.random(), 'width=500,height=400');
            //};

            // TODO -- fire counter updates for shares, only on pages where they are used (CMS)

            var timer = setInterval(function() {
                if($modal.closed) {
                    clearInterval(timer);

                    if($service == 'twitter'){
                        $http({
                            url: '/api/social/update-twi-count',
                            method: "POST",
                            params: {'url': baseUrl}
                        });
                    }

                    setTimeout(function(){
			pagingApi.fakeUpdateCounts($service);
                    }, 2000);
                    console.log('share counters updated')
                }
            }, 1000);

        };

        pagingApi.countSocialShares = function ($url) {
            if(typeof $url !== "undefined"){
                var thisUrl =  window.location.host + $url;
            }else{
                var thisUrl = window.location.host + window.location.pathname;
            }

            $http({
                url: '/api/social/get-social-counts',
                method: "GET",
                params: {'url': thisUrl}
            }).success(function (response) {
                $('.share-count.all').html(response.all);

                if(response.all > 0){
                    $('.share-count.all.passive').hide();
                    $('.share-count.all.active').show();
                }

                $('.share-count.twi').html(response.twitter);
                $('.share-count.fb').html(response.facebook);
                $('.share-count.gp').html(response.gplus);
                $('.share-count.pint').html(response.pinterest);
                $('.share-count.inst').html(response.instagram);
            });
        }

        pagingApi.getPlainContent = function(page, limit, tag, type, productCategoryID, sortBy) {
            return $http({
                method: 'GET',
                url: '/api/paging/get-content/' + page + '/' + limit + '/' + tag + '/' + type + '/' + productCategoryID + '/' + sortBy,
            });
        }


        pagingApi.getReadContent = function(category) {
            return $http({
                method: 'GET',
                url: '/api/paging/get-read-content/' + category
            });
        }

        pagingApi.getGridContent = function(page, limit, tag, type, category, daysBack) {
            return $http({
                method: 'GET',
                url: '/api/paging/get-grid-content/' + page + '/' + limit + '/' + tag + '/' + type + '/' + category + '/' + daysBack,
            });
        }

        pagingApi.getSearchContent = function(query, limit, offset, type, sortBy) {
            return $http({
                method: "get",
                url: '/api/find/' + query + '/' + limit + '/' + offset + '/' + type + '/' + sortBy,
            });
        }

        pagingApi.getFilteredContent = function(currentPage, $tag, $type, $sliceFunction) {
            var promiseArray = [];

            for(var $page = 1; $page < currentPage + 1; $page++) {

                promiseArray.push(
                    $http.get('/api/paging/get-grid-content/' + $page + '/' + 9 + '/' + $tag+ '/' + $type)
                );
            }

            var $return = $q.all(promiseArray).then(function successCallback(response) {
                var $i = 0;
                var $filtered = [];

                response.forEach(function(batch) {

                    var endContent = [];

                    endContent['ideas'] = batch.data['content']['ideas'];
                    endContent['products'] = batch.data['content']['products'];

                    if($type != null && $type != 'idea'){
                        endContent['featured'] = [];
                    }else{
                        endContent['featured'] =  batch.data['content']['featured']; // we don't filter
                    }

                    $hasMore = batch.data['hasMore'];

                    $filtered[$i] = $sliceFunction(endContent['regular'], endContent['featured'], endContent['products'] );
                    $i++;
                });

                var $return = [];

                $return['content'] = $filtered;
                $return['hasMore'] = $hasMore;

                return $return;
            });
            return $return;
        }





        return pagingApi;
    })


//
//angular.module('pagingApp.services', []).
//    factory('pagingApi', function($http, $q) {
//
//        var pagingApi = {};
//
//        pagingApi.getGridContent = function(page, limit, tag, category) {
//            return $http({
//                method: 'GET',
//                url: '/api/paging/get-content/' + page + '/' + limit + '/' + tag + '/' + category,
//            });
//        }
//
//        pagingApi.getFilteredContent = function(currentPage, $tag, $category, $sliceFunction) {
//            var promiseArray = [];
//
//            for(var $page = 1; $page < currentPage + 2; $page++) {
//
//                promiseArray.push(
//                    $http.get('/api/paging/get-content/' + $page + '/' + 9 + '/' + $tag+ '/' + $category)
//                );
//            }
//
//            var $return = $q.all(promiseArray).then(function successCallback(response) {
//                var $i = 0;
//                var $filtered = [];
//
//                response.forEach(function(batch) {
//
//                    var endContent = [];
//
//                    endContent['regular'] = batch.data['regular'];
//
//                    if($category != null && $category != 'idea'){
//                        endContent['featured'] = [];
//                    }else{
//                        endContent['featured'] =  batch.data['featured']; // we don't filter
//                    }
//
//                    $filtered[$i] = $sliceFunction(endContent['regular'], endContent['featured'] );
//                    $i++;
//                });
//
//                var $return = $filtered;
//
//                return $return;
//            });
//            return $return;
//        }
//
//        return pagingApi;
//    });

/*.factory('layoutApi', function($http) {

        var layoutApi = {};

        layoutApi.getProductsForShopMenu = function() {
            return $http({
                method: 'GET',
                url: '/api/layout/get-shop-menu/',
            });
        }


        return layoutApi;
    })
    .directive('a', function() {
        return {
            restrict: 'E',
            link: function(scope, elem, attrs) {
                if(attrs.ngClick || attrs.href === '' || attrs.href === '#'){
                    elem.on('click', function(e){
                        e.preventDefault();
                    });
                }
            }
        };
    });*/
;

angular.module('pagingApp').value('cgBusyDefaults',{
    message:'',
    backdrop: false,
    templateUrl: '/assets/svg/spinner.html',
    delay: 300,
    minDuration: 700,
    wrapperClass: ''
});

angular.module('pagingApp.filters', [])
    .filter('getURISegment', function() {
        // we cannot use Angular $location, bacause it conflicts with vanila history.state
        return function(index) {
            var segments = $(location).attr('href').split("/");
            cutoff = segments.splice(0, 3); // cut off base

            if(segments[index - 1]){
                return segments[index - 1];
            }else{
                return false;
            }
        }
    });



// bootstrap for modularization ( add id="pagingApp" with initializing ng-app='pagingApp')
//angular.bootstrap(document.getElementById('pagingApp'),['pagingApp']);



