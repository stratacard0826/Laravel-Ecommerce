<?php

    /**
     * Created by PhpStorm.
     * User: sanzeeb
     * Date: 1/11/2016
     * Time: 5:54 PM
     */

    namespace App\Core\ProductApi;

    interface ProductApiInterface {

        public function getProductInformation($itemId);

    }