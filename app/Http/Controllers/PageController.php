<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App;
use App\Http\Requests;
use Illuminate\Support\Collection;
use App\Http\Controllers\Controller;
//use FeedParser;
use Kryptonit3\Counter\Counter;
use MetaTag;
use App\Models\Product;
use App\Models\User;
use App\Models\ProductCategory;
use App\Models\Tag;
use App\Models\Room;
use App\Models\Giveaway;
use App\Models\HomeHero;
use URL;
use Input;
use App\Models\Sharing;
use Sitemap;
use PageHelper;
use Route;
use DB;
use Redis;
//use Counter;
use Request as Req;


class PageController extends ApiController
{

    public function __construct()
    {
        //check user authentication and get user basic information

        $this->authCheck = $this->RequestAuthentication(array('admin', 'editor', 'user'));

        $this->clearTemporarySessionData();
    }


    public function searchPage()
    {
        $userData = $this->authCheck;
        if ($this->authCheck['method-status'] == 'success-with-http') {
            $userData = $this->authCheck['user-data'];
        }

        MetaTag::set('title', 'Search Results | Ideaing');

        return view('search.index')->with('userData', $userData);
    }


    /**
     * Display the homepage.
     *
     * @return \Illuminate\Http\Response
     */


    public function home()
    {
        $userData = $this->authCheck;
        if ($this->authCheck['method-status'] == 'success-with-http') {
            $userData = $this->authCheck['user-data'];
        }
        $sliderContent = self::getHeroSliderContent();

        $result = [];

        $mostPopular = self::getMostPopular(false, false, 3);

        MetaTag::set('title', 'Ideaing | Ideas for Smarter Living');
        MetaTag::set('description', 'Ideaing inspires you to live a smarter and beautiful home. Get ideas on using home automation devices including WiFi cameras, WiFi doorbells, door locks, security, energy, water and many more.');
        //return $result;
        return view('home')
            ->with('userData', $userData)
            ->with('sliderContent', $sliderContent)
            ->with('mostPopular', $mostPopular)
            ->with('homehero', $result);
    }

    public function categoryPage($thisCategory = false)
    {

        $userData = $this->authCheck;
        if ($this->authCheck['method-status'] == 'success-with-http') {
            $userData = $this->authCheck['user-data'];
        }
        $thisCategory = Req::segment(1);

        if(!$thisCategory ){
            $thisCategory = 'default';
        }
      
        $result = [];

        $sliderContent = self::getHeroSliderContent();

        MetaTag::set('title', 'Ideaing | Ideas for Smarter Living'); // TODO -- add from CRUD
        MetaTag::set('description', 'Ideaing inspires you to live a smarter and beautiful home. Get ideas on using home automation devices including WiFi cameras, WiFi doorbells, door locks, security, energy, water and many more.');
        return view('category.category')
            ->with('userData', $userData)
            ->with('thisCategory', $thisCategory)
            ->with('sliderContent', $sliderContent)
            ;
    }

    public function welcome()
    {
        $userData = $this->authCheck;
        if ($this->authCheck['method-status'] == 'success-with-http') {
            $userData = $this->authCheck['user-data'];
        }
        $thisCategory = Req::segment(1);

        if(!$thisCategory ){
            $thisCategory = 'default';
        }

        $result = [];

        $sliderContent = self::getHeroSliderContent();

        MetaTag::set('title', 'Ideaing | Ideas for Smarter Living'); // TODO -- add from CRUD
        MetaTag::set('description', 'Ideaing inspires you to live a smarter and beautiful home. Get ideas on using home automation devices including WiFi cameras, WiFi doorbells, door locks, security, energy, water and many more.');
        return view('category.category')
            ->with('userData', $userData)
            ->with('thisCategory', $thisCategory)
            ->with('sliderContent', $sliderContent)
            ;
    }

    public static function getMostPopular($daysBack = false, $category = false, $itemsPerCategory = 4){

        $cacheKey = "most-popular-$daysBack-$category-$itemsPerCategory";

       // if ($cachedContent = PageHelper::getFromRedis($cacheKey, true)) {
       //     $return = $cachedContent;
       // } else {

            // 1. get most popular ideas
            $url = URL::to('/') . '/ideas/feeds/index.php?most-popular';

            // if($daysBack){
            //     $url .= '&daysback=' . $daysBack;
            // }

            if($category && $category != 'default'){
                $url .= '&count=4&category-name='.$category;

                $json[$category] = PageHelper::getFromCurl($url);

                $rawIdeas[$category] = json_decode($json[$category]);

                // print_r($rawIdeas); die();

                // if($rawIdeas->totalCount > 0){
                    $ideas[$category] = $rawIdeas[$category]->posts;
                // }else{
                //     $ideas[$category] = [];
                // }


            }else{
                $url .= '&count=1';

                $json = PageHelper::getFromCurl($url . '&category-name=smart-home');
                $rawIdeas['smart-home'] = json_decode($json);

                $json = PageHelper::getFromCurl($url . '&category-name=smart-body');
                $rawIdeas['smart-body'] = json_decode($json);

                $json = PageHelper::getFromCurl($url . '&category-name=smart-entertainment');
                $rawIdeas['smart-entertainment'] = json_decode($json);

                $json = PageHelper::getFromCurl($url . '&category-name=smart-travel');
                $rawIdeas['smart-travel'] = json_decode($json);

                $ideas = [];

                // print_r($rawIdeas); die();

                foreach($rawIdeas as $categoryName => $ideaSet){
                    if(isset($ideaSet->posts)){
                        $ideas[$categoryName] = [$ideaSet->posts[0]];
                    }
                }

            }
             // 2. get products
            $productSettings = [
                'ActiveItem' => true,
                'limit' => $itemsPerCategory == 1 ? 1 : ($itemsPerCategory - 1),
                'page' => false,
                'FilterType' => false,
                'FilterText' => false, 
                'ShowFor' => false,
                'WithTags' => false,
                'WithAverageScore' => false,
                'MostPopular' => true,
            ];

             $prod = new Product(); 

        $return = [];

        if($category){
            $categorObj = ProductCategory::where('extra_info', $category)->first();

            if($categorObj){
                $productSettings['CategoryId'] = $categorObj->id;
                $productSettings['limit'] = 5;

            }
            $allProducts = $prod->getProductList($productSettings);


            foreach($allProducts['result'] as $prod){
                $prodID = $prod->id;
                $count =  0;
                $prod->count = $count;
            }

            $sortedProds = array_values(array_sort($allProducts['result'], function($value){
                return $value->count;
            }));

            $sortedProds = array_reverse($sortedProds);

            $products[$category] = array_slice($sortedProds, 0, ($itemsPerCategory - 1));

            $array = array_merge(isset($ideas[$category]->posts) ? $ideas[$category]->posts : [], $products[$category]);

            $return[$category] = array_slice($array, 0, $itemsPerCategory);

        }else{
            $productSettings['limit'] = 1;

            $productSettings['CategoryId'] = 44;
            $products['smart-home'] = $prod->getProductList($productSettings);
            $products['smart-home'] = $products['smart-home']['result'];

          foreach($products['smart-home'] as $pr){
                    $prodID = $pr->id;
                    $count =  0;
                    $pr->count = $count;
           }

 
            $productSettings['CategoryId'] = 62;
            $products['smart-body'] = $prod->getProductList($productSettings);
            $products['smart-body'] = $products['smart-body']['result'];

              foreach($products['smart-body'] as $pr){
                    $prodID = $pr->id;
                    $count =  0;
                    $pr->count = $count;
           }


            $productSettings['CategoryId'] = 159;
            $products['smart-entertainment'] = $prod->getProductList($productSettings);
            $products['smart-entertainment'] = $products['smart-entertainment']['result'];

                foreach($products['smart-entertainment'] as $pr){
                    $prodID = $pr->id;
                    $count =  0;
                    $pr->count = $count;
           }

            $productSettings['CategoryId'] = 55;
            $products['smart-travel'] = $prod->getProductList($productSettings);
            $products['smart-travel'] = $products['smart-travel']['result'];


                foreach($products['smart-travel'] as $pr){
                    $prodID = $pr->id;
                    $count =  0;
                    $pr->count = $count;
           }

        }

        $return = ['ideas' => $ideas, 'products' => $products];

//        foreach($products as $category){
//            $return['totalCount'] += $category['total'];
//        }



            // TODO --> get Products by most popular

//                    foreach($allProducts['result'] as $prod){
//                        $prodID = $prod->id;
//                        $count =  Counter::show('product-details-'.$prodID);
//                        $prod->count = $count;
//                    }
//
//                    $sortedProds = array_values(array_sort($allProducts['result'], function($value){
//                        return $value->count;
//                    }));
//
//                    $sortedProds = array_reverse($sortedProds);
//
//                    $return['products'] = array_slice($sortedProds, 0, 2);



//        if($allCategories){
//
//            $ch = curl_init();
//            curl_setopt($ch, CURLOPT_URL, $url . '&category-name=smart-travel');
//            curl_setopt($ch, CURLOPT_HEADER, 0);
//            curl_setopt($ch, CURLOPT_VERBOSE, true);
//            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
//            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
//            curl_setopt($ch, CURLOPT_ENCODING, "");
//            $json = curl_exec($ch);
//            $ideas['smart-travel'] = json_decode($json);
//
//            $productSettings['CategoryId'] = 55;
//            $products['smart-travel'] = $prod->getProductList($productSettings);
//
//            $return['smart_travel'] = array_merge($ideas['smart-travel'] ?: [], $products['smart-travel']['result']);
//        }

            // array sort produ result, get three top ones.
            $cached = PageHelper::putIntoRedis($cacheKey, $return, '1 day');

       // }

        return (object)$return;
    }


    public static function getHeroSliderContent($count = 3, $category = false)
    {
        $cacheKey = "slider-ideas-$count-$category";

//        if ($cachedContent = PageHelper::getFromRedis($cacheKey, true)) {
//            $return = $cachedContent;
//        } else {
            $url = URL::to('/') . '/ideas/feeds/index.php?count='.$count.'&only-slider';

            if($category){
                $url .= '&category-name=' . $category;
            }

            $json = PageHelper::getFromCurl($url);
        ;

            $return = json_decode($json, true);

            $cached = PageHelper::putIntoRedis($cacheKey, $return, '24 hours');
//        }

        return @$return['posts'];

    }


    public function getContent($page = 1, $limit = 5, $tag = false, $type = false, $productCategory = false, $sortBy = false)
    {

        $cacheKey = "plain-content-$page-$limit-$tag-$type-$productCategory-$sortBy";

        if ($cachedContent = PageHelper::getFromRedis($cacheKey)) {
            $return = $cachedContent;
            $return->fromCache = true;
            $return->cacheKey = $cacheKey;
            return json_encode($return);
        }

        if ($tag && $tag !== 'undefined' && $tag != 'false' && $tag != '') {
            $tagID = Tag::where('tag_name', $tag)->lists('id')->toArray();
        } else {
            $tagID = false;
            $tag = false;
        }

        $offset = $limit * ($page - 1);
        $leftOver = 0;

        if ($type == 'product' || !$stories = self::getStories($limit + 1, $offset, $tag)) {
            $stories = [];
        }

        if ($productCategory) {
            $productCategory = ProductCategory::where('extra_info', $productCategory)->first();
        }

        if (@$productCategory) {
            $productCategoryID = $productCategory->id;
        } else {
            $productCategoryID = false;
        }

        if ($type == 'idea' || !$products = self::getProducts($limit + 1, $page, $offset, $tagID, $productCategoryID, $sortBy)) {
            $products['result'] = [];
        }

        // we try to pull one extra item in each category, to know if there is more content availiable (in that case, we later display a 'Load More' button
        $stories = array_slice($stories, 0, $limit);
        if (!empty(array_slice($stories, $limit, 1))) {
            $leftOver++;
        }

        $prods = array_slice($products['result'], 0, $limit);
        if (!empty(array_slice($products['result'], $limit, 1))) {
            $leftOver++;
        }

        $return['content'] = array_merge($stories, $prods);

        $return['content'] = array_values(array_sort($return['content'], function ($value) {
            $value = (object)$value;
            return strtotime($value->raw_creation_date);

        }));

        $return['content'] = array_reverse($return['content']);


        if ($leftOver > 0) {
            $return['hasMore'] = true;
        } else {
            $return['hasMore'] = false;
        }

        $cached = PageHelper::putIntoRedis($cacheKey, $return, '1 hour');

        $return['wasCached'] = $cached;
        $return['fromCache'] = false;

        return $return;
    }

    public function getTimelineContent($daysback = 1, $tag = false, $type = false, $categoryName = false)
    {

        $cacheKey = "timeline-content-$daysback-$tag-$type-$categoryName";

       if($cachedContent = PageHelper::getFromRedis($cacheKey)){
           $return = $cachedContent;
           $return->fromCache = true;
           $return->cacheKey = $cacheKey;
           return json_encode($return);
       }

        if ($tag && $tag !== 'undefined' && $tag != 'false' && $tag != '') {
            $tagID = Tag::where('tag_name', $tag)->lists('id')->toArray();
        } else {
            $tagID = false;
            $tag = false;
        }


        $timeStamp = date('Y-m-d', strtotime('-'.$daysback.' days'));
        $date = date_create($timeStamp);


        $productSettings = [
            'ActiveItem' => true,
            'limit' => 3,
            'page' => 1,
            'Date' => date_format($date, 'Y-m-d'),
//            'CustomSkip' => $offset,
//            'CategoryId' => $productCategoryID,
//            'sortBy' => $sortBy,
            'FilterType' => false,
            'FilterText' => false,
            'ShowFor' => false,
            'WithTags' => false,
            'WithAverageScore' => true,
        ];

//        if (@$productCategoryID) {
//            $productSettings['GetChildCategories'] = true;
//        }

        if (is_array($tagID)) {
            $productSettings['TagId'] = $tagID;
        }

        $prod = new Product();

        $products = $prod->getProductList($productSettings);

        if ($type == 'idea' || !$products) {
            $products['result'] = [];
        }


        $url = URL::to('/') . '/ideas/feeds/index.php?count=3&no-featured';

        if ($tag && $tag != 'false') {
            $url .= '&tag=' . $tag;
        }

        $dateQuery = '&year='.date_format($date, 'Y').'&monthnum='.date_format($date, 'm').'&day='.date_format($date, 'd') ;

        $url .= $dateQuery;

        $json = PageHelper::getFromCurl($url);

        $ideaCollection = json_decode($json);

        $newIdeaCollection = new Collection();
        $comment = new App\Models\Comment();

        if ($ideaCollection) {
            foreach ($ideaCollection as $singleIdea) {
                $tempIdea = collect($singleIdea);
                $countValue = $comment->ideasCommentCounter($singleIdea->id);
                $tempIdea->put('CommentCount', $countValue);
                $newIdeaCollection->push($tempIdea);
            }
        }

        // type casting to object
        $regularStories = json_decode($newIdeaCollection->toJson(), FALSE);

        $featuredUrl = URL::to('/') . '/ideas/feeds/index.php?count=1&only-featured&no-deals';
//
//
        if ($tag && $tag != 'false' && $tag != false) {
            $featuredUrl .= '&tag=' . $tag;
        }
//
//        if ($category && $category != 'false') {
//            $featuredUrl .= '&category-name=' . $category;
//        }
//
        curl_setopt($ch, CURLOPT_URL, $featuredUrl);
        $json = curl_exec($ch);
        curl_close($ch);

        $return['featured'] = json_decode($json);
        $ideaCollection = json_decode($json);

        $newIdeaCollection = new Collection();
        $comment = new App\Models\Comment();

        if ($ideaCollection) {
            foreach ($ideaCollection as $singleIdea) {
                $tempIdea = collect($singleIdea);
                $countValue = $comment->ideasCommentCounter($singleIdea->id);
                $tempIdea->put('CommentCount', $countValue);
                $newIdeaCollection->push($tempIdea);
            }
        }

        $featuredStories = $newIdeaCollection;

//        return $return;




        // we try to pull one extra item in each category, to know if there is more content availiable (in that case, we later display a 'Load More' button
//        $regularStories = array_slice($stories['regular'], 0, $storyLimit);
//
//        if (!empty(array_slice($stories['regular'], $storyLimit, 1))) {
//            $leftOver++;
//        }
//
//
//        if ($stories['featured']) {
//            $featuredStories = array_slice($stories['featured']->toArray(), 0, $featuredLimit);
//            if (!empty(array_slice($stories['featured']->toArray(), $featuredLimit, 1))) {
//                $leftOver++;
//            }
//        } else {
//            $featuredStories = [];
//        }
//
//        $prods = array_slice($products['result'], 0, $productLimit);
//
//        if (!empty(array_slice($products['result'], $productLimit, 1))) {
//            $leftOver++;
//        }
//
        $return['content']['regular'] = array_merge($regularStories, $products['result']);
        $return['content']['featured'] = $featuredStories;

        usort($return['content']['regular'], function ($a, $b) {
            return strtotime(@$b->raw_creation_date) - strtotime(@$a->raw_creation_date);
        });

        return $return;
    }

    public function getGridContent($page = 1, $limit = 7, $tag = false, $type = false, $categoryName = false, $daysback = false)
    {
        $cacheKey = "grid-content-$page-$limit-$tag-$type-$categoryName";

        if(!env('IS_DEV') && $cachedContent = PageHelper::getFromRedis($cacheKey)){
           $return = $cachedContent;
           $return->fromCache = true;
           $return->cacheKey = $cacheKey;
           return json_encode($return);
        }

        if($categoryName == 'default'){

            $categoryName = false;
        }

        if ($tag && $tag !== 'undefined' && $tag != 'false' && $tag != '') {
            $tagID = Tag::where('tag_name', $tag)->lists('id')->toArray();
        } else {
            $tagID = false;
            $tag = false;
        }

        if ($limit == 'undefined' || $limit == 0) {
            $productLimit = 6;
            $productOffset = 6 * ($page - 1);

            $storyLimit = 7;
            $storyOffset = 5 * ($page - 1);

        } else {
            $productLimit = $limit;
            $storyLimit = $limit;

            $productOffset = $limit * ($page - 1);
            $storyOffset = $limit * ($page - 1);
        }

        $featuredLimit = 3;
        $featuredOffset = $featuredLimit * ($page - 1);
        $leftOver = 0;

        $daysback = false;

        if($daysback && $daysback != 'undefined'){
            $daysback = strtotime('-'.$daysback.' days');
            $daysback = date('Y-m-d', $daysback);
        }else{
            $daysback = false;
//            $daysback = strtotime('today'); TODO - temp until we have enough time content
        }

        if ($type == 'product' || !$stories = self::getGridStories($storyLimit + 1, $storyOffset, $featuredLimit, $featuredOffset, $tag, $categoryName, $daysback)) {
            $stories = [
                'regular' => [],
                'featured' => [],
                'totalCount' => 0,

            ];
        }

            switch ($categoryName) {
                case 'smart-home':
                    $productCategoryID = 44;
        break;
                case 'smart-body':
                    $productCategoryID = 62;
        break;
                case 'smart-travel':
                    $productCategoryID = 55;
        break;
                case 'smart-entertainment':
                    $productCategoryID = 159;
        break;
                default:
                    $productCategoryID = false;
            }


        if ($type == 'idea' || !$products = self::getProducts($productLimit + 1, $page, $productOffset, $tagID, $productCategoryID, false, $daysback)) {
            $products['result'] = [];
        }

        if (!$stories['regular']) {
            $stories['regular'] = [];
        }

        // we try to pull one extra item in each category, to know if there is more content availiable (in that case, we later display a 'Load More' button
        $regularStories = array_slice($stories['regular'], 0, $storyLimit);

        if (!empty(array_slice($stories['regular'], $storyLimit, 1))) {
            $leftOver++;
        }

        $prods = array_slice($products['result'], 0, $productLimit);

        if (!empty(array_slice($products['result'], $productLimit, 1))) {
            $leftOver++;
        }

        $return['content']['ideas'] = $regularStories;
        $return['content']['products'] = $prods;

        if ($leftOver > 0) {
            $return['hasMore'] = true;
        } else {
            $return['hasMore'] = false;
        }

        $return['unreadCount'] = ($products['total'] + $stories['totalCount']) - ($productLimit + $storyLimit) * $page;
        
        $cached = PageHelper::putIntoRedis($cacheKey, $return, '1 hour');
        $return['wasCached'] = $cached;
        $return['fromCache'] = false;

        return $return;
    }


    public function getReadContent($thisCategory = false)
    {
        if(!$thisCategory){
            $thisCategory = 'default';
        }

        $cacheKey = "read-content-$thisCategory";

             // if(!env('IS_DEV') && $cachedContent = PageHelper::getFromRedis($cacheKey)){
             //       $return = $cachedContent;
             //       $return->fromCache = true;
             //       $return->cacheKey = $cacheKey;
             //       return json_encode($return);
             //  }

          if($thisCategory == 'default'){
            $return['staticSliderContent']  = false;
            $return['mostPopular']    = self::getMostPopular();
        }else{
            $rand = rand(1,2);
            if($rand == 1){
                $daysBack = 20;
            }else{
                $daysBack = false;
            }
            $return['staticSliderContent'] = self::getHeroSliderContent(1, $thisCategory);
            $return['mostPopular']   = self::getMostPopular($daysBack, $thisCategory, 5);
        }

        $cached = PageHelper::putIntoRedis($cacheKey, $return, '4 hours');

        return $return;
    }


    public function getStories($limit, $offset, $tag)
    {

        $url = URL::to('/') . '/ideas/feeds/index.php?count=' . $limit . '&offset=' . $offset;

        if ($tag && $tag != 'false') {
            $url .= '&tag=' . $tag;
        }

        $json = PageHelper::getFromCurl($url);

        $ideaCollection = json_decode($json);

        $newIdeaCollection = new Collection();
        $comment = new App\Models\Comment();

        if ($ideaCollection) {

            foreach ($ideaCollection as $singleIdea) {

                if ($tag == 'deal') {
                    $singleIdea->dealPage = true;
                }

                $tempIdea = collect($singleIdea);

                $countValue = $comment->ideasCommentCounter($singleIdea->id);

                $tempIdea->put('CommentCount', $countValue);

                $newIdeaCollection->push($tempIdea);

            }
        }


        return $newIdeaCollection->toArray();//$return;
    }


    public function getGridStories($limit, $offset, $featuredLimit, $featuredOffset, $tag = false, $category = false, $daysback = false)
    {
        if(@env('PROD_FEED')){
            $url = 'https://ideaing.com/ideas/feeds/index.php?count=' . $limit . '&no-featured&offset=' . $offset;
        }else{
            $url = URL::to('/') . '/ideas/feeds/index.php?count=' . $limit . '&no-featured&offset=' . $offset;
        }
        if ($tag && $tag != 'false') {
            $url .= '&tag=' . $tag;
        }

        if ($category && $category != 'false') {
            $url .= '&category-name=' . $category;
        }

        if ($limit == 10 && $category != 'deals') { // CMS homepage, needs to have no deals
            $url .= '&no-deals';
        }

        if($daysback){
            $date = date_create($daysback);
            $dateQuery = '&year='.date_format($date, 'Y').'&monthnum='.date_format($date, 'm').'&day='.date_format($date, 'd') ;
            $url .= $dateQuery;
        }

        $json = PageHelper::getFromCurl($url);

        $ideaCollection = json_decode($json);
        $newIdeaCollection = new Collection();
        $comment = new App\Models\Comment();

        if ($ideaCollection && isset($ideaCollection->posts)) {

            foreach ($ideaCollection->posts as $singleIdea) {

                $tempIdea = collect($singleIdea);

                $countValue = $comment->ideasCommentCounter($singleIdea->id);

                $tempIdea->put('CommentCount', $countValue);

                $newIdeaCollection->push($tempIdea);

            }
            $return['totalCount'] = $ideaCollection->totalCount;
        }else{
            $return['totalCount'] = 0;
        }


        $return['regular'] = json_decode($newIdeaCollection->toJson(), FALSE);

//if(@env('PROD_FEED')){
//        $featuredUrl = 'https://ideaing.com/ideas/feeds/index.php?count=' . $featuredLimit . '&only-featured&offset=' . $featuredOffset . '&no-deals';
//        }else{
//            $featuredUrl = URL::to('/') . '/ideas/feeds/index.php?count=' . $featuredLimit . '&only-featured&offset=' . $featuredOffset . '&no-deals';
//        }
//
//        if(@$dateQuery){
//            $featuredUrl .= $dateQuery;
//        }
//
//        if ($tag && $tag != 'false' && $tag != false) {
//            $featuredUrl .= '&tag=' . $tag;
//        }
//
//        if ($category && $category != 'false') {
//            $featuredUrl .= '&category-name=' . $category;
//        }
//
//        curl_setopt($ch, CURLOPT_URL, $featuredUrl);
//        $json = curl_exec($ch);
//        curl_close($ch);
//
//        // $return['featured'] = json_decode($json);
//
//        $ideaCollection = json_decode($json);
//
//        $newIdeaCollection = new Collection();
//        $comment = new App\Models\Comment();
//
//        if ($ideaCollection && isset($ideaCollection->posts)) {
//
//            foreach ($ideaCollection->posts as $singleIdea) {
//
//                $tempIdea = collect($singleIdea);
//
//                $countValue = $comment->ideasCommentCounter($singleIdea->id);
//
//                $tempIdea->put('CommentCount', $countValue);
//
//                $newIdeaCollection->push($tempIdea);
//
//            }
//        }
//
//        $return['featured'] = $newIdeaCollection;
//
//        $return['totalCount'] += $ideaCollection->totalCount;

        return $return;
    }

    public function getRelatedStories($currentStoryID, $limit, $tags)
    {
        $tagString = implode('-', $tags);
        $cacheKey = "related-products-$currentStoryID-$limit-$tagString";

        if ($cachedContent = PageHelper::getFromRedis($cacheKey)) {
            return $cachedContent;
        } else {
            $url = URL::to('/') . '/ideas/feeds/index.php?count=' . $limit . '&no-deals';

            if ($tags && $tags != 'false') {
                $url .= '&tag_in=' . strtolower(implode(',', $tags));
            }
            if ($currentStoryID) {
                $url .= '&excludeid=' . $currentStoryID;
            }

            $json = PageHelper::getFromCurl($url);

            $return = json_decode($json);
            PageHelper::putIntoRedis($cacheKey, $return);
            return $return;
        }
    }

    public function signupPage($email = '')
    {
        MetaTag::set('title', 'Sign Up | Ideaing');

        return view('user.signup')->with('email', $email)->with('tab', 'signup');
    }

    public function loginView()
    {
        MetaTag::set('title', 'Log In | Ideaing');

        return view('user.signup')->with('tab', 'login');
    }

    public function getProducts($limit, $page, $offset, $tagID, $productCategoryID = false, $sortBy = false, $daysback = false)
    {
        $productSettings = [
            'ActiveItem' => true,
            'limit' => $limit,
            'page' => $page,
            'CustomSkip' => $offset,
            'CategoryId' => $productCategoryID,
            'sortBy' => $sortBy,
            'FilterType' => false,
            'FilterText' => false,
            'ShowFor' => false,
            'WithTags' => false,
            'WithAverageScore' => true,
        ];

        if($daysback){
            $date = date_create($daysback);
            $productSettings['Date'] = date_format($date, 'Y-m-d');
         }

        if (@$productCategoryID) {
            $productSettings['GetChildCategories'] = true;
        }

        if (is_array($tagID)) {
            $productSettings['TagId'] = $tagID;
        }

        $prod = new Product();
        $products = $prod->getProductList($productSettings);

        return $products;
    }

    public function getRelatedProducts($productID, $limit, $tagID)
    {
        $cacheKey = "related-products-$productID-$limit-$tagID";
        if ($cachedContent = PageHelper::getFromRedis($cacheKey)) {
            return $cachedContent;
        } else {
            $productSettings = [
                'ActiveItem' => true,
                'excludeID' => $productID,
                'limit' => $limit,
            ];

            if (is_array($tagID)) {
                $productSettings['TagId'] = $tagID;
            }

            $prod = new Product();

            $products = $prod->getProductList($productSettings);
            PageHelper::putIntoRedis($cacheKey, $products);

            return $products;
        }
    }


    public function productDetailsPage($permalink)
    {
        $userData = $this->authCheck;
        if ($this->authCheck['method-status'] == 'success-with-http') {
            $userData = $this->authCheck['user-data'];
        }

        $cacheKey = "product-details-$permalink";

        $product = new Product();

        if ($cachedContent = PageHelper::getFromRedis($cacheKey, true)) {
//            $cachedContent->fromCache = true;
            $result = $cachedContent;

            // TODO -- get rid of loops

            if ($result['productInformation']['Review']) {
                foreach ($result['productInformation']['Review'] as $i => $review) {
                    $result['productInformation']['Review'][$i] = (object)$review;
                }
            }

            if ($result['productInformation']['Specifications']) {
                foreach ($result['productInformation']['Specifications'] as $i => $spec) {
                    $result['productInformation']['Specifications'][$i] = (object)$spec;
                }
            }

            if ($result['relatedIdeas']) {
                foreach ($result['relatedIdeas'] as $i => $idea) {
                    $result['relatedIdeas'][$i] = (object)$idea;
                }
            }

        } else {

            $productData['product'] = $product->getViewForPublic($permalink);

            // Get category tree
            $catTree = $product->getCategoryHierarchy($productData['product']->product_category_id);

            $result = $product->productDetailsViewGenerate($productData, $catTree);

            $currentTags = Product::find($productData['product']['id'])->tags()->lists('tag_id');
            foreach ($currentTags as $tagID) {
                $tagNames[] = str_replace(' ', '-', Tag::find($tagID)->tag_name);
            }

            $tagNames = empty($tagNames) ? "" : $tagNames;

            if ($tagNames != "")
                $relatedIdeas = self::getRelatedStories($productData['product']['id'], 3, $tagNames);
            else
                $relatedIdeas = "";

            $result['relatedIdeas'] = $relatedIdeas;
            $result['canonicURL'] = PageHelper::getCanonicalLink(Route::getCurrentRoute(), $permalink);
            PageHelper::putIntoRedis($cacheKey, $result, '+3 months');
        }


        if ($userData['method-status'] == 'fail-with-http') {
            $isAdmin = false;
            $userData['id'] = 0;
        } else {
            $isAdmin = $userData->hasRole('admin');
        }

        // override the Amazon review if it's zero
        $amazonReview = empty($result['productInformation']['Review'][1]->value) ? $result['productInformation']['Review'][0]->value : $result['productInformation']['Review'][1]->value;

        $reviewScore = intval(((($result['productInformation']['Review'][0]->value > 0 ? $result['productInformation']['Review'][0]->value : $amazonReview) + $amazonReview) / 2) * 20);


        MetaTag::set('title', $result['productInformation']['PageTitle']);
        MetaTag::set('description', $result['productInformation']['MetaDescription']);

        // Product hit counter
        $counter = \Counter::showAndCount('product-details-'.$result['productInformation']['Id']);

        // Update the product table with hit counter
        $product->itemHitCounter([
            'Permalink'=>$permalink,
            'Count' => $counter
        ]);

      //  dd($result['selfImages']['picture']);
        return view('product.product-details')
            ->with('isAdminForEdit', $isAdmin)
            ->with('productId', $result['productInformation']['Id'])
            ->with('userData', $userData)
            ->with('permalink', $permalink)
            ->with('productInformation', $result['productInformation'])
            ->with('reviewScore', $reviewScore)
            ->with('relatedProducts', $result['relatedProducts'])
            ->with('relatedIdeas', $result['relatedIdeas'])
            ->with('selfImages', $result['selfImages'])
            ->with('storeInformation', $result['storeInformation'])
            ->with('canonicURL', $result['canonicURL'])
            ->with('MetaDescription', $result['productInformation']['MetaDescription'])
            ->with('CustomCounter',$counter);
    }

    public function getRoomPage($permalink)
    {
        $userData = $this->authCheck;
        if ($this->authCheck['method-status'] == 'success-with-http') {
            $userData = $this->authCheck['user-data'];
        }
        $room = new Room();
        $roomData['room'] = $room->getViewForPublic($permalink);
        $result = $room->roomDetailsViewGenerate($roomData);
        MetaTag::set('title', $result['roomInformation']['MetaTitle']);
        MetaTag::set('description', $result['roomInformation']['MetaDescription']);
        //return $result;
        return view('room.landing')
            ->with('userData', $userData)
            ->with('roomInformation', $result['roomInformation']);
    }

    public static function getShopMenu()
    {

        if(env('IS_DEV')){
            return [];
        }

        if ($return = PageHelper::getFromRedis('header-shop-menu')) {
            $return->fromCache = true;
            $return = json_encode($return);
        } else {
            $return = Product::getForShopMenu();
            PageHelper::putIntoRedis('header-shop-menu', $return, '+30 minutes');
        }
        return $return;
    }


    public function getSocialCounts($url = '')
    {
        $input = Input::all();

        $url = 'https://' . $input['url'];

        if (!strpos($url, 'ideaing')) {
            return 'Stop trying to hack my app, thanks';
        }

        return Sharing::getCountsFromAPIs($url);
    }


    public function updateTwitterCount($url = false)
    {
        $input = Input::all();

        if (!@$input['url']) {
            return 'error';
        }
        $clear = PageHelper::deleteFromRedis('twitter-shares-' . $input['url']);

        return 'cleared';
    }

    public function getFollowerCounts()
    {
        if ($return = PageHelper::getFromRedis('footer-follower-counts')) {
            $return->fromCache = true;
            $return = json_encode($return);
        } else {
            $return = Sharing::getFollowersFromAPIs();
            PageHelper::putIntoRedis('footer-follower-counts', $return);
        }

        return $return;
    }

    public function generateSitemap()
    {

        // create new sitemap object
        $sitemap = App::make('sitemap');

        // set cache key (string), duration in minutes (Carbon|Datetime|int), turn on/off (boolean)
        // by default cache is disabled
        $sitemap->setCache('laravel.sitemap', 300, true);

        // check if there is cached sitemap and build new only if is not
        if (!$sitemap->isCached()) {
            // add item to the sitemap (url, date, priority, freq)
            $sitemap->add(URL::to('/'), date('c', strtotime('today')), '1.0', 'daily');

            // INFO PAGES
            $sitemap->add(URL::to('/contactus'), date('c', strtotime('1 February 2016')), '0.3', 'yearly');
            $sitemap->add(URL::to('/aboutus'), date('c', strtotime('1 February 2016')), '0.3', 'yearly');
            $sitemap->add(URL::to('/privacy-policy'), date('c', strtotime('1 February 2016')), '0.3', 'yearly');
            $sitemap->add(URL::to('/terms-of-use'), date('c', strtotime('1 February 2016')), '0.3', 'yearly');
            $sitemap->add(URL::to('/shop'), date('c', strtotime('today')), '1.0', 'daily');


            // SHOP
            $shopCategories = ProductCategory::buildCategoryTree(true);
            foreach ($shopCategories as $grandparent => $parents) {
                $sitemap->add(URL::to('/shop/' . $grandparent), date('c', strtotime('today')), '0.5', 'daily');
                foreach ($parents as $key => $parent) {
                    $sitemap->add(URL::to('/shop/' . $grandparent . '/' . $parent['childCategory']->extra_info), date('c', strtotime('today')), '0.5', 'daily');

                    foreach ($parent['grandchildCategories'] as $grandchild) {
                        $sitemap->add(URL::to('/shop/' . $grandparent . '/' . $parent['childCategory']->extra_info . '/' . $grandchild->extra_info), date('c', strtotime('today')), '0.5', 'daily');
                    }
                }
            }

            $rooms = Room::all();
            foreach ($rooms as $room) {
                $sitemap->add(URL::to('/idea/' . $room->room_permalink), date('c', strtotime('today')), '0.5', 'weekly');
            }

            $products = Product::where('post_status', 'Active')->get();
            foreach ($products as $product) {
                $sitemap->add(URL::to('/product/' . $product->product_permalink), date('c', strtotime($product->updated_at)), '0.5', 'yearly');
            }

            //CMS POSTS -- TODO -- if we wont use images in the sitemap, change into direct call to WP DB for better perf?
            $url = URL::to('/') . '/ideas/feeds/index.php?count=0';

            $json = PageHelper::getFromCurl($url);
            $posts = json_decode($json);

            foreach ($posts as $post) {
                $sitemap->add($post->url, date('c', strtotime($post->updated_at)), '0.5', 'yearly');
            }
        }

        // show your sitemap (options: 'xml' (default), 'html', 'txt', 'ror-rss', 'ror-rdf')
        return $sitemap->render('xml');

    }


    public function privacyPolicy()
    {

        MetaTag::set('title', 'Privacy Policy | Ideaing');
//        MetaTag::set('description', $result['productInformation']['MetaDescription']);

        return view('info.privacy-policy');

    }


    public function contactUs()
    {

        MetaTag::set('title', 'Contact Ideaing Support Team');
//        MetaTag::set('description', $result['productInformation']['MetaDescription']);

        $userData = $this->authCheck;
        if ($this->authCheck['method-status'] == 'success-with-http') {
            $userData = $this->authCheck['user-data'];
        }

        return view('info.contactus')
            ->with('userData', $userData);


    }

    public function aboutUs()
    {

        MetaTag::set('title', 'About Ideaing: What We Do at Ideaing.com');
//        MetaTag::set('description', $result['productInformation']['MetaDescription']);

        //  return view('info.aboutus');

        $userData = $this->authCheck;
        if ($this->authCheck['method-status'] == 'success-with-http') {
            $userData = $this->authCheck['user-data'];
        }

        return view('info.aboutus')
            ->with('userData', $userData);

    }

    public function termsOfUse()
    {

        MetaTag::set('title', 'Terms of Use | Ideaing');
//        MetaTag::set('description', $result['productInformation']['MetaDescription']);

        // return view('info.terms-of-use');

        $userData = $this->authCheck;
        if ($this->authCheck['method-status'] == 'success-with-http') {
            $userData = $this->authCheck['user-data'];
        }

        return view('info.terms-of-use')
            ->with('userData', $userData);
    }

    public function giveaway($permalink = false)
    {

        $userData = $this->authCheck;
        if ($this->authCheck['method-status'] == 'success-with-http') {
            $userData = $this->authCheck['user-data'];
        }

        if ($permalink) {
            $giveaway = Giveaway::where('giveaway_permalink', $permalink)->first();
            $heading = $giveaway->giveaway_title;
        } else {
            $giveaway = Giveaway::whereDate('ends', '>=', date('Y-m-d'))->whereDate('goes_live', '<=', date('Y-m-d'))->first();
            $heading = 'Ideaing Giveaway';
        }

        $ended = false;

        if (!$giveaway) {
            $giveaway = Giveaway::whereDate('ends', '<=', date('Y-m-d'))->first();
            $ended = true;
        }

        $nextGiveaways = Giveaway::where('id', '!=', $giveaway->id)->get();

        if (!$giveaway) {
            return \Redirect::to('not-found');
        }

        if (@$userData['id'] && DB::table('giveaway_users')->where(
                [
                    'user_id' => $userData['id'],
                    'giveaway_id' => $giveaway->id,
                ]
            )->count()
        ) {
            $alreadyIn = true;
        } else {
            $alreadyIn = false;
        }

        $timeLeft = strtotime($giveaway->ends) - time();

//        $dtF = new \DateTime('@0');
//        $dtT = new \DateTime("@$timeLeft");
//        $giveaway->timeLeft = $dtF->diff($dtT)->format('%a days, %h hours and %i minutes');

        $giveaway->timeLeft = $timeLeft;


        // dd($giveaway);
        MetaTag::set('title', $heading);
        MetaTag::set('description', $giveaway->giveaway_meta_desc ?: $giveaway->giveaway_desc);

        if ($userData['method-status'] == 'fail-with-http') {
            $isAdmin = false;
            $userData['id'] = 0;
        } else {
            $isAdmin = $userData->hasRole('admin');
        }


        //  dd($giveaway,$heading);
        return view('giveaway.giveaway')
            ->with('isAdminForEdit', $isAdmin)
            ->with('userData', $userData)
            ->with('nextGiveaways', $nextGiveaways)
            ->with('giveaway', $giveaway)
            ->with('giveawayPermalink', empty($permalink) ? '' : $permalink)
            ->with('ended', $ended)
            ->with('alreadyIn', $alreadyIn)
            ->with('heading', $heading);
    }

    private function clearTemporarySessionData()
    {
        if (!empty(session('page.source.giveaway'))) {
            session(['page.source.giveaway' => null]);
        }
    }

    public function giveawayDetails($permalink)
    {
        $userData = $this->authCheck;
        if ($this->authCheck['method-status'] == 'success-with-http') {
            $userData = $this->authCheck['user-data'];
        }

        $giveaway = Giveaway::whereDate('permalink', $permalink)->first();

        if (!$giveaway) {
            return \Redirect::to('giveaway');
        }

        $heading = $giveaway->giveaway_title;

        if (strtotime($giveaway->ends) < time()) {
            $ended = true;
        } else {
            $ended = false;
        }

        $nextGiveaways = Giveaway::whereDate('goes_live', '>=', date('Y-m-d'))->get();

        if (@$userData['id'] && DB::table('giveaway_users')->where(
                [
                    'user_id' => $userData['id'],
                    'giveaway_id' => $giveaway->id,
                ]
            )->count()
        ) {
            $alreadyIn = true;
        } else {
            $alreadyIn = false;
        }
        // dd($giveaway);

        MetaTag::set('title', $heading);
//        MetaTag::set('description', $result['productInformation']['MetaDescription']);

        return view('giveaway.giveaway')
            ->with('userData', $userData)
            ->with('nextGiveaways', $nextGiveaways)
            ->with('giveaway', $giveaway)
            ->with('ended', $ended)
            ->with('alreadyIn', $alreadyIn)
            ->with('heading', $heading);
    }


    public function cleanRadisCache($key)
    {
        if ($key == \Config::get("const.cache-clean-key"))
            PageHelper::FlashRedis();

    }

    public function testEmail($type)
    {
        return view("email.$type")
            ->with('email', 'bob@bob.com')
//            ->with('nextGiveaways', $nextGiveaways)
//            ->with('giveaway', $giveaway)
//            ->with('ended', $ended)
//            ->with('alreadyIn', $alreadyIn)
//            ->with('heading', $heading)
            ;
    }


}
