<?php

    namespace App\Models;

    use Illuminate\Database\Eloquent\Model;
    use PageHelper;


    class Sharing extends Model {

        protected $appKey = '2rbUiELX0UTgh762oqzZvYVCZ';
        protected $appSectet = '85HBY0flKGsMPAdVjIpdsiV4H3Y5N2xUJ7fNbRYfAX2w8EWfff';


        public static function getCountsFromAPIs($url = ''){

            $data['facebook']  = self::getFacebookLikes($url);

            if (!$data['twitter'] = PageHelper::getFromRedis('twitter-shares-' . $url)) {
                $data['twitter']   = self::getTweets($url);
                if($data['twitter'] > 0){
                    PageHelper::putIntoRedis('twitter-shares-' . $url, $data['twitter'], '3 hours');
                }
            }

            $data['gplus']     = self::getPlusones($url);
            $data['pinterest'] = self::getPinterestShares($url);

            $data['all'] = array_sum($data);

            return $data;
        }

        public static function getFollowersFromAPIs($url = ''){
            $fans['facebook'] = self::getFacebookFollowers();
            $fans['twitter'] = self::getTwitterFollowers();
            $fans['gplus'] = self::getGooglePlusFollowers();
            $fans['pinterest'] = self::getPinterestFollowers();
            $fans['instagram'] = self::getInstagramFollowers();

            return $fans;
        }


        private static function getFacebookLikes($url) {
            $json_string = file_get_contents('http://graph.facebook.com/?id='.$url);
            $json = json_decode($json_string, true);
            if(isset($json['shares'])){
                return intval($json['shares']);
            } else {
                return 0;
            }
        }

        private static function getFacebookFollowers() {
            $json_string = file_get_contents('https://graph.facebook.com/v2.5/?fields=likes.summary(true).limit(0)&id=609910205748189&access_token=244498015882895%7C742d8db5713e9c10a01fa150380ed797');
            $json = json_decode($json_string, true);
            if($count = $json['likes']){
                return intval($count);
            } else {
                return 0;
            }
        }

        private static function getPlusones($url) {
            $curl = curl_init();
            curl_setopt($curl, CURLOPT_URL, "https://clients6.google.com/rpc");
            curl_setopt($curl, CURLOPT_POST, 1);
            curl_setopt($curl, CURLOPT_POSTFIELDS, '{"method":"pos.plusones.get","id":"p","params":{"nolog":true,"id":"' . $url . '","source":"widget","userId":"@viewer","groupId":"@self"},"jsonrpc":"2.0","key":"p","apiVersion":"v1"}');
            curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($curl, CURLOPT_HTTPHEADER, array('Content-type: application/json'));
            $curl_results = curl_exec ($curl);
            curl_close ($curl);

            $json = json_decode($curl_results, true);
            if(isset($json['result']['metadata']['globalCounts']['count'])){
                return intval( $json['result']['metadata']['globalCounts']['count'] );
            } else {
                return 0;
            }
        }

        private static function getGooglePlusFollowers() {
            $json_string = file_get_contents('https://www.googleapis.com/plus/v1/people/+Ideaingsmarterliving?key=AIzaSyAp7CNY6xSR2FS9493v8jcyY3qqJGIt2ac');
            $json = json_decode($json_string, true);
            if($count = $json['circledByCount']){
                return intval($count);
            } else {
                return 0;
            }
        }


        private static function getPinterestShares($url) {
            $json_string = file_get_contents('http://api.pinterest.com/v1/urls/count.json?&url='.$url .'&format=json');
            $json_string = str_replace('receiveCount(', '', $json_string);
            $json_string = str_replace(')', '', $json_string);
            $json = json_decode( $json_string, true );
            if (isset($json)) {
                return intval($json['count']);
            } else {
                return 0;
            }
        }

        private static function getPinterestFollowers() {
            $json_string = get_meta_tags('http://pinterest.com/ideaing_com/');
            if ($count = $json_string['pinterestapp:followers']) {
                return intval($count);
            } else {
                return 0;
            }
        }

//    function get_stumble($url) {
//        $json_string = file_get_contents('http://www.stumbleupon.com/services/1.01/badge.getinfo?url='.$url);
//        $json = json_decode($json_string, true);
//        if (isset($json['result']['views'])) {
//            return intval($json['result']['views']);
//        } else {return 0;}
//    }


        private static function getInstagramFollowers() {
            $json_string = file_get_contents("https://api.instagram.com/v1/users/self/?access_token=2276664979.2b5c184.0feeca7cb91147cd81d4a8a591824c06");
            $json = json_decode($json_string, true);
            if($count =  @$json['data']['counts']['followed_by']){
                return intval($count);
            } else {
                return 0;
            }
        }
        private static function getTweets($url) {
            // Twitter API, the king of overkills
            $bearer_token = Sharing::getTwitterBearerToken(); // get the bearer token
            $json_string = Sharing::searchTwtterForTerm($bearer_token, $url); //  search for the work 'test'
            $json = json_decode($json_string, true);
            if($count = count($json['statuses'])){
                return intval($count);
            } else {
                return 0;
            }
        }

        private static function getTwitterFollowers() {
            $bearer_token = Sharing::getTwitterBearerToken(); // get the bearer token

            $json_string = Sharing::pullTwtterFollowers($bearer_token); //  search for the work 'test'
            $json = json_decode($json_string, true);
            if($count = count(@$json['ids'])){
                return intval($count);
            } else {
                return 0;
            }
        }


        /**
     * Search
     * Basic Search of the Search API
     * Based on https://dev.twitter.com/docs/api/1.1/get/search/tweets
     */
    public static function searchTwtterForTerm($bearer_token, $query, $result_type='mixed', $count='15'){
        $url = "https://api.twitter.com/1.1/search/tweets.json"; // base url
        $q = urlencode(trim($query)); // query term
        $formed_url ='?q='.$q; // fully formed url
        if($result_type!='mixed'){$formed_url = $formed_url.'&result_type='.$result_type;} // result type - mixed(default), recent, popular
        if($count!='15'){$formed_url = $formed_url.'&count='.$count;} // results per page - defaulted to 15
        $formed_url = $formed_url.'&include_entities=true'; // makes sure the entities are included, note @mentions are not included see documentation
        $headers = array(
            "GET /1.1/search/tweets.json".$formed_url." HTTP/1.1",
            "Host: api.twitter.com",
            "User-Agent: jonhurlock Twitter Application-only OAuth App v.1",
            "Authorization: Bearer ".$bearer_token
        );
        $ch = curl_init();  // setup a curl
        curl_setopt($ch, CURLOPT_URL,$url.$formed_url);  // set url to send to
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers); // set custom headers
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); // return output
        $retrievedhtml = curl_exec ($ch); // execute the curl
        curl_close($ch); // close the curl
        return $retrievedhtml;
    }

    public static function pullTwtterFollowers($bearer_token){
        $url = "https://api.twitter.com/1.1/followers/ids.json?user_id=23203721"; // base url
        $headers = array(
            "GET /followers/ids.json?user_id=23203721 HTTP/1.1",
            "Host: api.twitter.com",
            "User-Agent: jonhurlock Twitter Application-only OAuth App v.1",
            "Authorization: Bearer ".$bearer_token
        );
        $ch = curl_init();  // setup a curl
        curl_setopt($ch, CURLOPT_URL,$url);  // set url to send to
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers); // set custom headers
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); // return output
        $retrievedhtml = curl_exec ($ch); // execute the curl
        curl_close($ch); // close the curl
        return $retrievedhtml;
    }


    /**
     *	Get the Bearer Token, this is an implementation of steps 1&2
     *	from https://dev.twitter.com/docs/auth/application-only-auth
     */
        public static function getTwitterBearerToken(){
        // Step 1
        // step 1.1 - url encode the consumer_key and consumer_secret in accordance with RFC 1738
        $encoded_consumer_key = urlencode('2rbUiELX0UTgh762oqzZvYVCZ');
        $encoded_consumer_secret = urlencode('85HBY0flKGsMPAdVjIpdsiV4H3Y5N2xUJ7fNbRYfAX2w8EWfff');
        // step 1.2 - concatinate encoded consumer, a colon character and the encoded consumer secret
        $bearer_token = $encoded_consumer_key.':'.$encoded_consumer_secret;
        // step 1.3 - base64-encode bearer token
        $base64_encoded_bearer_token = base64_encode($bearer_token);
        // step 2
        $url = "https://api.twitter.com/oauth2/token"; // url to send data to for authentication
        $headers = array(
            "POST /oauth2/token HTTP/1.1",
            "Host: api.twitter.com",
            "User-Agent: jonhurlock Twitter Application-only OAuth App v.1",
            "Authorization: Basic ".$base64_encoded_bearer_token,
            "Content-Type: application/x-www-form-urlencoded;charset=UTF-8"
        );
        $ch = curl_init();  // setup a curl
        curl_setopt($ch, CURLOPT_URL,$url);  // set url to send to
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers); // set custom headers
        curl_setopt($ch, CURLOPT_POST, 1); // send as post
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); // return output
        curl_setopt($ch, CURLOPT_POSTFIELDS, "grant_type=client_credentials"); // post body/fields to be sent
        $header = curl_setopt($ch, CURLOPT_HEADER, 1); // send custom headers
        $httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        $retrievedhtml = curl_exec ($ch); // execute the curl
        curl_close($ch); // close the curl
        $output = explode("\n", $retrievedhtml);
        $bearer_token = '';
        foreach($output as $line)
        {
            if($line === false)
            {
                // there was no bearer token
            }else{
                $bearer_token = $line;
            }
        }
        $bearer_token = json_decode($bearer_token);
        return $bearer_token->{'access_token'};
    }
    /**
     * Invalidates the Bearer Token
     * Should the bearer token become compromised or need to be invalidated for any reason,
     * call this method/function.
     */
    function invalidateTwitterBearerToken($bearer_token){
        $encoded_consumer_key = urlencode('2rbUiELX0UTgh762oqzZvYVCZ');
        $encoded_consumer_secret = urlencode('85HBY0flKGsMPAdVjIpdsiV4H3Y5N2xUJ7fNbRYfAX2w8EWfff');
        $consumer_token = $encoded_consumer_key.':'.$encoded_consumer_secret;
        $base64_encoded_consumer_token = base64_encode($consumer_token);
        // step 2
        $url = "https://api.twitter.com/oauth2/invalidate_token"; // url to send data to for authentication
        $headers = array(
            "POST /oauth2/invalidate_token HTTP/1.1",
            "Host: api.twitter.com",
            "User-Agent: jonhurlock Twitter Application-only OAuth App v.1",
            "Authorization: Basic ".$base64_encoded_consumer_token,
            "Accept: */*",
            "Content-Type: application/x-www-form-urlencoded"
        );

        $ch = curl_init();  // setup a curl
        curl_setopt($ch, CURLOPT_URL,$url);  // set url to send to
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers); // set custom headers
        curl_setopt($ch, CURLOPT_POST, 1); // send as post
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); // return output
        curl_setopt($ch, CURLOPT_POSTFIELDS, "access_token=".$bearer_token.""); // post body/fields to be sent
        $header = curl_setopt($ch, CURLOPT_HEADER, 1); // send custom headers
        $httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        $retrievedhtml = curl_exec ($ch); // execute the curl
        curl_close($ch); // close the curl
        return $retrievedhtml;
    }






}
