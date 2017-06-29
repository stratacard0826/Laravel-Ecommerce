<?php


namespace App\Helpers;

use \Illuminate\Routing\Route;
use  Illuminate\Routing\Router;;
use App\Models\Giveaway;
use App\Models\ProductCategory;
use Kryptonit3\Counter\Counter;
use URL;
use Redis;
use Cookie;

class PageHelper {

    public static function getCanonicalLink($route, $key = false) {

        $base = 'https://ideaing.com';
        $routeName = $route->getName();
        $url = '';

        if($route->getName() == 'productDetails' && $key){
            $url = '/product/' . $key;
        }elseif($routeName == 'shopCategory' && is_array($key)) {
            $url = '/shop';
            foreach ($key as $k) {
                if($k){
                    $url .= '/' . $k;
                }
            }
        }

        if($url){
            $canonical = $base . $url;
            return $canonical;
        }else{
            return false;
        }



    }
    public static function formatForMetaDesc($content) {

        $content = strip_tags($content);
        $excerpt = preg_replace('/(\.)\s+[^\.]*$/', '\1', substr($content, 0, 70));

        return $excerpt;

    }

    public static function getTopMenuItems() {
        $url = URL::to('/') . '/ideas/feeds/index.php?count=5 ';

        $json = self::getFromCurl($url);
        $return = json_decode($json);

        if(!$return){
            $return = [];
        }

        return ($return);
    }

    public static function getCurrentGiveaway($noPopup = false) {
        $giveaway = Giveaway::whereDate('ends', '>=', date('Y-m-d'))->whereDate('goes_live', '<=', date('Y-m-d'))->first();

        if(!$giveaway){
            $giveaway = (object)[];
        }

        if(!isset($_COOKIE['giveaway_pop_shown']) && !$noPopup) {
            setcookie('giveaway_pop_shown', true, (time()+(60*60*24)), '/');
            $giveaway->showPopup = true;
        }else{
            $giveaway->showPopup = false;
        }

        return $giveaway;
    }

    public static function getFromRedis($key, $returnArray = false, $redis = false){

        if(!$redis){
            $redis = new Redis;
            $redis->connect('127.0.0.1', 6379);
        }

        $cachedContent = json_decode($redis->get($key), $returnArray);

        return $cachedContent;
    }

    public static function putIntoRedis($key, $content, $expire = false, $redis = false){

        if(!$redis){
            $redis = new Redis;
            $redis->connect('127.0.0.1', 6379);
        }

        if(!$expire){
            $expire = '+2 days';
        }

        $formattedExpire = strtotime($expire, 0);

        $success = $redis->set($key, json_encode($content));
        $redis->expire($key, $formattedExpire);

        return $success;
    }

    public static function deleteFromRedis($key, $redis = false){

        if(!$redis){
            $redis = new Redis;
            $redis->connect('127.0.0.1', 6379);
        }

        $success = $redis->delete($key);

        return $success;
    }

    public static function FlashRedis($redis = false){

        if(!$redis){
            $redis = new Redis;
            $redis->connect('127.0.0.1', 6379);
        }

        $success = $redis->flushAll();

        return $success;
    }

    public static function getArrayFromCurl($url){
        $json = self::getFromCurl($url);

        return json_decode($json, true);

    }

    public static function getFromCurl($url){
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt($ch, CURLOPT_VERBOSE, true);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);
        curl_setopt($ch, CURLOPT_ENCODING, "");
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);

//        if (curl_errno($ch)) { // for debugging
//            print curl_error($ch);
//        }
        $json = curl_exec($ch);
        curl_close($ch);

        return $json;

    }

    public static function getUrlSegment($segmentIndex){
        $segments = explode("/", parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH));

        if(isset($segments[$segmentIndex - 1])){
            return $segments[$segmentIndex - 1];
        }else{
            return false;
        }

    }
}