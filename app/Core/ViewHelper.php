<?php
    /**
     * Created by PhpStorm.
     * User: sanzeeb
     * Date: 12/22/2015
     * Time: 10:51 AM
     */

    namespace App\Core;


    class ViewHelper {

        public static function categoryRouteBuilder($extraInfo)
        {
            $key = (\Config::get('const.blog-name'))+'/';

            if(strpos($extraInfo ,$key))
                echo "/"+$key+$extraInfo;
            else
                echo "/category/"+$extraInfo;

        }

        public static function test($val = null)
        {
            return $val;

        }
    }