<?php

    /**
     * Created by PhpStorm.
     * User: sanzeeb
     * Date: 1/11/2016
     * Time: 5:53 PM
     */
    namespace App\Core\ProductApi;
    class ProductStrategy {

        public function __construct()
        {
            $this->apiType = null;
        }

        public function setApiType(ProductApiInterface $outputApi)
        {
            $this->apiType = $outputApi;
        }

        public function loadData($itemId){
           return $this->apiType->getProductInformation($itemId);
        }


    }