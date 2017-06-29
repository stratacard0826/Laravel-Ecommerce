<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Response;
use Illuminate\Http\Response as IlluminateResponse;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Storage;
use Illuminate\Contracts\Filesystem\Factory;

use App\Models\Product;
use App\Models\Search;
use AWS;
use Input;
use Redirect;


class SearchController extends Controller
{


    public function deleteAllDocs($csDomainClient){
        ini_set('memory_limit', '5024M');

        $result = $csDomainClient->search(array('query' => 'matchall', 'queryParser' => 'structured', 'size' => 10000));

        foreach ($result["hits"]["hit"] as $hit){
           $send[] = array(
               'type'        => 'delete',
               'id'        => $hit['id'],
           );
           $result = $csDomainClient->uploadDocuments(array(
               'documents'     => json_encode($send),
               'contentType'     =>'application/json'
           ));
        }

        print_r($result);
        echo '<br/>';
    }


    public function reIndexAll(){
        ini_set('memory_limit', '1024M');
        ini_set('max_execution_time', 7200);   
        
       // 1. Setup CloudSeach client
       $csDomainClient = AWS::createClient('CloudSearch',
           [
               'endpoint'    => 'https://search-ideaing-production-sykvgbgxrd4moqagcoyh3pt5nq.us-west-2.cloudsearch.amazonaws.com',
           ]
       );

       $result = $csDomainClient->indexDocuments(array(
           // DomainName is required
           'DomainName' => 'https://search-ideaing-production-sykvgbgxrd4moqagcoyh3pt5nq.us-west-2.cloudsearch.amazonaws.com',
       ));

        print_r($result);
        echo '<br/>';
    }  

    public function indexData($indexType = false){
        ini_set('memory_limit', '1024M');
        set_time_limit (600);

        if($indexType == 'content'){
            $endPoin = 'https://search-ideaing-production-sykvgbgxrd4moqagcoyh3pt5nq.us-west-2.cloudsearch.amazonaws.com';
            $index = Search::buildIndex();
        }else if($indexType == 'categories'){
            $endPoin = 'https://search-ideaing-categories-fclsu4tj7xw64w7pfqnvkoedxq.us-west-2.cloudsearch.amazonaws.com';
            $index = Search::buildCategoriesIndex();
        }else{
            return 'Please specify the index type';
        }

        $csDomainClient = AWS::createClient('CloudsearchDomain',
            [
                'endpoint' => $endPoin,
            ]
        );

        self::deleteAllDocs($csDomainClient);

       foreach($index as $key => $batch){

           $send[] = array(
               'type'   => 'add',
               'id'     => $key,
               'fields' => $batch
           );
            

           $result = $csDomainClient->uploadDocuments(array(
               'documents'   => json_encode($send),
               'contentType' =>'application/json'
           ));
       }

        print_r($result);
    }


    public function formatAndRedirectSearch(){

            $input = Input::all();

            $searchQuery = str_replace('+', '-', $input['search']);

            return Redirect::to('search/' . $searchQuery);

    }


    public function searchData($query = false, $size = 12, $offset = 0, $type = false, $sort = false){

        $input = Input::all();

        if(!$query){
            $query = Input::get('search');

        }

        $query = str_replace('-', ' ', $query);
        $query = str_replace('%20', ' ', $query);

        $csDomainClient = AWS::createClient('CloudsearchDomain',
            [
                'endpoint'    => 'https://search-ideaing-production-sykvgbgxrd4moqagcoyh3pt5nq.us-west-2.cloudsearch.amazonaws.com',
            ]
        );

        // needs to be formatted differently if it's a pharse
        if(preg_match('/\s/',$query)){
            if(strlen($query) > 6){ // fuzzy search for longer words
                $query = '"' . $query . '"~2';
            }elseif(strlen($query) > 4){
                $query = '"' . $query . '"~1';
            }
        }else{
            if(strlen($query) > 6){ // fuzzy search for longer words
                $query =  $query . '~2';
            }elseif(strlen($query) > 4){
                $query = $query . '~1';
            }
        }

        $arguments = [
            'query' =>  $query,
            'size'  =>  $size + 1,
            'start' =>  $offset,
        ];

        if($sort && $sort != 'undefined' && $sort != 'false'){
            $arguments['sort'] = "$sort asc";
        }else{
            $arguments['sort'] = "date_created asc";

        }

        if($type && $type != 'undefined' && $type != 'false'){
            $arguments['filterQuery'] = "(term field=type '$type')";
//                "type: '$type''";
        }

        $results = $csDomainClient->search($arguments);

        $return = [];
        foreach( $results->getPath('hits/hit') as $hit){
            $item =[];

            foreach($hit['fields'] as $key => $it){ // flatten results TODO - get rid of this
                if(is_array($it) && count($it) == 1){
                    $item[$key] = $it[0];
                }
            }

            if($item['type'] == 'idea'){
                $item['url'] = $item['permalink'];
                $item['feed_image'] = json_decode($item['feed_image']);



            }elseif($item['type'] == 'product'){
                $item['product_name'] = $item['title'];
                $item['product_permalink'] = $item['permalink'];
                $item['media_link_full_path'] = @$item['feed_image'];
                $item['storeInfo'] = json_decode($item['storeinfo']);
            }

            if(isset($item['record_id'])){
              $item['id'] = $item['record_id'];
            }

            if(!(isset($item['tags']) && strpos($item['tags'], 'deal') !== false)){
                $return[] = $item;
            }

        }

        $final['content'] = $return;
        $final['count'] = $results->getPath('hits/found');

        if(!empty(array_slice($return, $size, 1))){
             $final['hasMore'] = true;
             unset($final['content'][count($final['content'])-1]);
        }else{
             $final['hasMore'] = false;
        }

        return $final;
    }


    public function searchCategories($query = false){


        if(!$query){
            $query = Input::get('search');
        }

        $query = strtolower($query);

        // 1.Search categories
        $csDomainClient = AWS::createClient('CloudsearchDomain',
            [
                'endpoint'    => env('CATS_ENDPOINT'),
            ]
        );

        if(strlen($query) > 4){ // fuzzy search for longer words
            $query = "$query~1"; 
        }elseif(strlen($query) > 6){
            $query = "$query~2"; 
        }

        $arguments = [
            'query' =>  $query,
        ];

        $results = $csDomainClient->search($arguments);

        $return = [];
        foreach( $results->getPath('hits/hit') as $hit){
            $item =[];

            foreach($hit['fields'] as $key => $it){ // flatten results TODO - get rid of this
                if(is_array($it) && count($it) == 1){
                    $item[$key] = $it[0];
                }
            }

            $return[] = $item;
        }

        // 2.Search content for exact matches

        $csDomainClient = AWS::createClient('CloudsearchDomain',
            [
                'endpoint'    => env('CONTENT_ENDPOINT'),
            ]
        );

        $arguments = [
            'query' =>  $query,
            'fields' =>  'title',
            'filterQuery' => "(term field=type 'product')",
            'size' =>  3,
        ];

        $results = $csDomainClient->search($arguments);

        foreach( $results->getPath('hits/hit') as $hit){
            $item =[];

            foreach($hit['fields'] as $key => $it){ // flatten results TODO - get rid of this
                if(is_array($it) && count($it) == 1){
                    $item[$key] = $it[0];
                }
            }

            $item['term'] = $item['title'];
            $item['link'] = '/product/' . $item['permalink'];
            $item['type'] = 'Shop';
            $item['isProduct'] = 1;

            $return[] = $item;
        }


        $arguments = [
            'query' =>  $query,
            'fields' =>  'title,content',
            'filterQuery' => "(term field=type 'idea')",
            'size' =>  3,
        ];

        $results = $csDomainClient->search($arguments);

        foreach( $results->getPath('hits/hit') as $hit){
            $item =[];

            foreach($hit['fields'] as $key => $it){ // flatten results TODO - get rid of this
                if(is_array($it) && count($it) == 1){
                    $item[$key] = $it[0];
                }
            }

            $item['term'] = $item['title'];
            $item['type'] = 'ideas';
            $item['link'] = $item['permalink'];
            $return[] = $item;
        }

        return $return;
    }

}
