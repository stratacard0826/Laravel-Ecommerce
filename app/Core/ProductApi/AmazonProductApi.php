<?php

    /**
     * Created by PhpStorm.
     * User: sanzeeb
     * Date: 1/11/2016
     * Time: 5:55 PM
     */
    namespace App\Core\ProductApi;

    class AmazonProductApi implements ProductApiInterface {

        public function __construct()
        {
            $this->itmeId = null;
        }

        public function makeUrl()
        {

            // Your AWS Access Key ID, as taken from the AWS Your Account page 
            $aws_access_key_id = \Config::get("const.product-api-key.amazon-product-api.access-key");//"AKIAIQYICLTUI4NBTPGA";

            // Your AWS Secret Key corresponding to the above ID, as taken from the AWS Your Account page
            $aws_secret_key = \Config::get("const.product-api-key.amazon-product-api.secret-key");//"9QvJL0SABeZoJaGV8iebsDI1Kv5AUcdg0zv9Dlch";

            // The region you are interested in
            $endpoint = "webservices.amazon.com";

            $uri = "/onca/xml";
            $itemId = $this->itmeId;

            $params = array(
                "Service"        => "AWSECommerceService",
                "Operation"      => "ItemLookup",
                "AWSAccessKeyId" => $aws_access_key_id,//"AKIAIQYICLTUI4NBTPGA",
                "AssociateTag"   => \Config::get("const.product-api-key.amazon-product-api.associate-tag"),
                "ItemId"         => $itemId,
                "IdType"         => "ASIN",
                "ResponseGroup"  => "Images,ItemAttributes,Offers"
            );

            // Set current timestamp if not set
            if (!isset($params["Timestamp"]))
            {
                $params["Timestamp"] = gmdate('Y-m-d\TH:i:s\Z');
            }

            // Sort the parameters by key
            ksort($params);

            $pairs = array();

            foreach ($params as $key => $value)
            {
                array_push($pairs, rawurlencode($key) . "=" . rawurlencode($value));
            }

            // Generate the canonical query
            $canonical_query_string = join("&", $pairs);

            // Generate the string to be signed
            $string_to_sign = "GET\n" . $endpoint . "\n" . $uri . "\n" . $canonical_query_string;

            // Generate the signature required by the Product Advertising API
            $signature = base64_encode(hash_hmac("sha256", $string_to_sign, $aws_secret_key, true));

            // Generate the signed URL
            $request_url = 'http://' . $endpoint . $uri . '?' . $canonical_query_string . '&Signature=' . rawurlencode($signature);

            return $request_url;
        }

        public function getData($path)
        {
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, $path);
            curl_setopt($ch, CURLOPT_FAILONERROR, 1);
            curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($ch, CURLOPT_TIMEOUT, 15);
            $retValue = curl_exec($ch);
            curl_close($ch);

            return $retValue;
        }

        // Implement getProductInformation() method.
        /**
         *
         */
        public function getProductInformation($itemId)
        {
            try
            {
                $this->itmeId = $itemId;

                // 1. initialize
                $ch = curl_init();

                // 2. set the options, including the url
                curl_setopt($ch, CURLOPT_URL, $this->makeUrl());
                curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
                curl_setopt($ch, CURLOPT_HEADER, 0);

                // 3. execute and fetch the resulting HTML output
                $output = curl_exec($ch);

                // 4. free up the curl handle
                curl_close($ch);

                $xml = simplexml_load_string($output, "SimpleXMLElement", LIBXML_NOCDATA);
                $json = json_encode($xml);

                $data = json_decode($json, true);

                $title = isset($data['Items']['Item']['ItemAttributes']['Title']) ? $data['Items']['Item']['ItemAttributes']['Title'] : "";
                $imageLink = isset($data['Items']['Item']['LargeImage']['URL']) ? $data['Items']['Item']['LargeImage']['URL'] : "";
                $listPrice = isset($data['Items']['Item']['ItemAttributes']['ListPrice']['Amount']) ? $data['Items']['Item']['ItemAttributes']['ListPrice']['Amount'] / 100 : "";
                $salePrice = isset($data['Items']['Item']['OfferSummary']['LowestNewPrice']['Amount']) ? $data['Items']['Item']['OfferSummary']['LowestNewPrice']['Amount'] / 100 : "";
                $available = isset($data['Items']['Item']['Offers']['Offer']['OfferListing']['Availability']) ? $data['Items']['Item']['Offers']['Offer']['OfferListing']['Availability'] : "No information available";
                $affiliateLink = isset($data['Items']['Item']['DetailPageURL']) ? $data['Items']['Item']['DetailPageURL'] : "";

                $productHeight = isset($data['Items']['Item']['ItemAttributes']['ItemDimensions']['Height']) ? $data['Items']['Item']['ItemAttributes']['ItemDimensions']['Height'] / 100 : "";
                $productWidth = isset($data['Items']['Item']['ItemAttributes']['ItemDimensions']['Width']) ? $data['Items']['Item']['ItemAttributes']['ItemDimensions']['Width'] / 100 : "";
                $productLength = isset($data['Items']['Item']['ItemAttributes']['ItemDimensions']['Length']) ? $data['Items']['Item']['ItemAttributes']['ItemDimensions']['Length'] / 100 : "";
                $productWeight = isset($data['Items']['Item']['ItemAttributes']['ItemDimensions']['Weight']) ? $data['Items']['Item']['ItemAttributes']['ItemDimensions']['Weight'] / 100 : "";

                $packageHeight = isset($data['Items']['Item']['ItemAttributes']['PackageDimensions']['Height']) ? $data['Items']['Item']['ItemAttributes']['PackageDimensions']['Height'] / 100 : "";
                $packageWidth = isset($data['Items']['Item']['ItemAttributes']['PackageDimensions']['Width']) ? $data['Items']['Item']['ItemAttributes']['PackageDimensions']['Width'] / 100 : "";
                $packageLength = isset($data['Items']['Item']['ItemAttributes']['PackageDimensions']['Length']) ? $data['Items']['Item']['ItemAttributes']['PackageDimensions']['Length'] / 100 : "";
                $packageWeight = isset($data['Items']['Item']['ItemAttributes']['PackageDimensions']['Weight']) ? $data['Items']['Item']['ItemAttributes']['PackageDimensions']['Weight'] / 100 : "";

                $partNumber = isset($data['Items']['Item']['ItemAttributes']['PartNumber']) ? $data['Items']['Item']['ItemAttributes']['PartNumber'] : "";

                $model = isset($data['Items']['Item']['ItemAttributes']['Model']) ? $data['Items']['Item']['ItemAttributes']['Model'] : "";
                $manufacturer = isset($data['Items']['Item']['ItemAttributes']['Manufacturer']) ? $data['Items']['Item']['ItemAttributes']['Manufacturer'] : "";
                $itemQuantity = isset($data['Items']['Item']['ItemAttributes']['PackageQuantity']) ? $data['Items']['Item']['ItemAttributes']['PackageQuantity'] : "";
                $color = isset($data['Items']['Item']['ItemAttributes']['Color']) ? $data['Items']['Item']['ItemAttributes']['Color'] : "";

                $features = isset($data['Items']['Item']['ItemAttributes']['Feature']) ? $data['Items']['Item']['ItemAttributes']['Feature'] : "";


                $productSize = $productHeight . " X " . $productWidth . " X " . $productLength . " Inches";
                $packageSize = $packageHeight . " X " . $packageWidth . " X " . $packageLength . " Inches";
                $weight = $productWeight . " Pound";


                $information = [
                    'ApiTitle'         => $title,
                    'ApiImageLink'     => $imageLink,
                    'ApiPrice'         => $listPrice,
                    'ApiSalePrice'     => $salePrice,
                    'AffiliateLink'    => $affiliateLink,
                    'ApiAvailable'     => $available,

                    'ApiSpecification' => [
                        'PartNumber'   => $partNumber,
                        'Model'        => $model,
                        'Manufacturer' => $manufacturer,
                        'ItemQuantity' => $itemQuantity,
                        'Color'        => $color,
                        'ProductSize'  => $productSize,
                        'PackageSize'  => $packageSize,
                        'Weight'       => $weight,
                        'Features'     => $features,
                    ]
                ];

                return $information;

            } catch (Exception $ex)
            {
                return $ex;
            }
        }


    }