<?php

namespace App\Http\Controllers;


use Aws\CloudFront\Exception\Exception;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\Media;
use Illuminate\Contracts\Filesystem\Factory;
use Storage;
use Folklore\Image\Facades;
use Carbon\Carbon;
use App\Models\ProductCategory;
use App\Core\ProductApi\ProductStrategy;
use Input;

class ProductController extends ApiController
{

    public function __construct()
    {
        $this->product = new Product();

        $this->media = new Media();
    }

    /**
     * @param $permalink
     * @return mixed
     */
    public function isPermalinkExist($permalink)
    {
        $product = $this->product->checkPermalink($permalink);//($inputData['Permalink']);
        if ($product == false)
            return $this->setStatusCode(\Config::get("const.api-status.success"))
                        ->makeResponse(\Config::get("const.product.permalink-exist"));
        else
            return $this->setStatusCode(\Config::get("const.api-status.success-with-variation"))
                        ->makeResponse($product);
    }


    /** Set a default product entry with post status as Inactive.
     * @return mixed
     */
    public function addProduct()
    {
        try {
            $newProduct = $this->product->create(['post_status' => 'Inactive']);

            return $this->setStatusCode(\Config::get("const.api-status.success"))
                        ->makeResponse($newProduct);

        } catch (Exception $ex) {
            return $this->setStatusCode(\Config::get("const.api-status.system-fail"))
                        ->makeResponseWithError("System Failure !", $ex);
        }

    }


    /**
     * @param null $id
     * @return mixed
     */
    public function getProductById($id = null)
    {
        try {
            $productModel = new Product();
            $productData['product'] = $productModel->getViewForPublic('', $id);
            $catTree = $productModel->getCategoryHierarchy($productData['product']->product_category_id);
            $result = $productModel->productDetailsViewGenerate($productData, $catTree);


            $product = $this->product->where('id', $id)->first();

            // automatic update price for any changes and fetch new data with updated price
            if ($this->product->updateProductPrice($product['product_vendor_id'], $product['store_id'])) {
                $product = $this->product->where('id', $id)->first();
            }
            $product['selfImages'] = $result['selfImages'];
            $product['productInformation'] = $result['productInformation'];
            $product['storeInformation'] = $result['storeInformation'];

            if ($product == null) {
                return $this->setStatusCode(\Config::get("const.api-status.app-failure"))
                            ->makeResponseWithError(\Config::get("const.product.product-not-found"));
            } else {
                return $this->setStatusCode(\Config::get("const.api-status.success"))
                            ->makeResponse($product);
            }

        } catch (Exception $ex) {
            return $this->setStatusCode(\Config::get("const.api-status.system-fail"))
                        ->makeResponseWithError("System Failure !", $ex);
        }

    }


    // Generating Category tree Hierarchy
    public function generateCategoryHierarchy($catId = 0)
    {
        //todo : implement proper response mechanism
        $categories = $this->product->getCategoryHierarchy($catId);

        if (\Input::ajax()) {
            return $this->setStatusCode(\Config::get("const.api-status.success"))
                        ->makeResponse($categories);
        } else {
            return $categories;
        }
    }

    /*
     * generate data for public view
     * */
    /**
     * @param $permalink
     * @return mixed
     */
    public function productDetailsView($permalink)
    {
        try {
            $productData['product'] = $this->product->getViewForPublic($permalink);
            $result = $this->productDetailsBuilder($productData);


            return $this->setStatusCode(\Config::get("const.api-status.success"))
                        ->makeResponse($result);

        } catch (Exception $ex) {
            return $this->setStatusCode(\Config::get("const.api-status.system-fail"))
                        ->makeResponseWithError("System Failure !", $ex);
        }
    }


    public function productDetailsViewByName($name)
    {
        try {
            $productData['product'] = $this->product->getViewForPublicByName($name);
            $result = $this->productDetailsBuilder($productData);


            return $this->setStatusCode(\Config::get("const.api-status.success"))
                        ->makeResponse($result);

        } catch (Exception $ex) {
            return $this->setStatusCode(\Config::get("const.api-status.system-fail"))
                        ->makeResponseWithError("System Failure !", $ex);
        }
    }

    /** Build the view for product details by product data
     * @param $productData
     * @return mixed
     */
    private function productDetailsBuilder($productData)
    {
        // Get category tree
        $catTree = $this->generateCategoryHierarchy($productData['product']->product_category_id);

        $result = $this->product->productDetailsViewGenerate($productData, $catTree);

        return $result;
    }

    /**
     * @return mixed
     */
    public function getAllProductList()
    {
        try {
            $settings['ActiveItem'] = (\Input::get('ActiveItem') == 'Active') ? true : false;
            $settings['CategoryId'] = (\Input::get('CategoryId') == null) ? null : \Input::get('CategoryId');
            // $settings['FilterType'] = (\Input::get('FilterType') == null) ? null : \Input::get('FilterType');
            // $settings['FilterText'] = (\Input::get('FilterText') == null) ? null : \Input::get('FilterText');

            $settings['FilterPublisher'] = (\Input::get('FilterPublisher') == null) ? null : \Input::get('FilterPublisher');
            $settings['FilterProduct'] = (\Input::get('FilterProduct') == null) ? null : \Input::get('FilterProduct');


            $settings['ShowFor'] = (\Input::get('ShowFor') == null) ? null : \Input::get('ShowFor');
            $settings['WithTags'] = (\Input::get('WithTags') != true) ? false : true;

            $settings['limit'] = \Input::get('limit');
            $settings['page'] = \Input::get('page');

            $settings['PageSource'] = 'admin-product-list';

            $productList = $this->product->getProductList($settings, true);

            $settings['total'] = $productList['total'];
            array_forget($productList, 'total');

            return $this->setStatusCode(\Config::get("const.api-status.success"))
                        ->makeResponse(array_merge($productList, $settings));
        } catch (Excpetion $ex) {
            return $this->setStatusCode(\Config::get("const.api-status.system-fail"))
                        ->makeResponseWithError("System Failure !", $ex);
        }
    }


    public function exportProductList()
    {
        $settings = [
            'ActiveItem' => true,
            'SortByHitCounter' => true
        ];

        $products = $this->product->getProductListForExport($settings);

        $productList = collect();

        $csv = \League\Csv\Writer::createFromFileObject(new \SplTempFileObject());

        $csv->insertOne(['id', 'title', 'price', 'link', 'brand', 'description', 'availability', 'condition', 'image_link']);


        // formating products for export
        foreach ($products as $product) {
            // Set the image url
            foreach ($product->medias as $image) {
                if ($image->is_hero_item == 1) {
                    $imageLink = $image->media_link;

                    break;
                }
            }

            $imageLink = empty($imageLink) ? $product->medias[0]->media_link : $imageLink;

            // set the product availability status as per Facebook Ads request
            if (
                (strpos($product->product_availability, 'Usually ship') !== false) ||
                (strpos($product->product_availability, 'No information available') !== false) ||
                (strpos($product->product_availability, 'Ships within') !== false) ||
                (strpos($product->product_availability, 'Available for order now') !== false) ||
                (strpos($product->product_availability, 'Estimated Delivery') !== false) ||
                (empty($product->product_availability))
            ) {
                $availabilityStatus = 'in stock';
            } elseif (strpos($product->product_availability, 'Order now and') !== false) {
                $availabilityStatus = 'preorder';
            } elseif (strpos($product->product_availability, 'Contact Showroom') !== false) {
                $availabilityStatus = 'available for order';
            } else {
                $availabilityStatus = 'out of stock';
            }

            $item = [
                'id' => $product->id,
                'title' => $product->product_name,
                'price' => $product->sale_price . ' ' . 'USD',
                'link' => $product->affiliate_link,
                'brand' => $product->store->store_name,

                'description' => strip_tags($product->product_description),

                'availability' => $availabilityStatus,
                'condition' => 'New',
                //  'image_link' => preg_replace('/\//', '/',$imageLink),
                'image_link' => $imageLink

            ];
            $productList->push($item);

            $csv->insertOne($item);

        }

        $filename = 'products.csv';

        $csv->output($filename);
    }


    /**
     * @return mixed
     */
    public function updateProductInfo()
    {
        try {
            $inputData = \Input::all();

            $newProduct = $this->product->updateProductInfo($inputData);

            return $this->setStatusCode(\Config::get("const.api-status.success"))
                        ->makeResponse($newProduct);
        } catch (Exception $ex) {
            return $this->setStatusCode(\Config::get("const.api-status.system-fail"))
                        ->makeResponseWithError("System Failure !", $ex);
        }
    }


    /** Delete product.
     * @return mixed
     * @internal param $productId
     */
    public function deleteProduct()
    {
        $id = \Input::get('ProductId');

        $records = $this->product->find($id);
        if ($records == null)
            return $this->setStatusCode(\Config::get("const.api-status.system-fail"))
                        ->makeResponseWithError("No data available !");

        foreach ($records->medias as $record) {
            $this->deleteMediaById($record->id);
        }

        $this->product->find($id)->delete();

        return $this->setStatusCode(\Config::get("const.api-status.success"))
                    ->makeResponse("Data deleted Successfully");

    }


    /**
     * @return mixed
     */
    public function publishProduct()
    {
        try {
            $inputData = \Input::all();

            $tempInputData = $inputData;
            $tempInputData['Specifications'] = null;
            $tempInputData['SimilarProductIds'] = null;
            $tempInputData['Review'] = null;

            $validationRules = [
                'rules' => [
                    'Name' => 'required',
                    'Permalink' => 'required',
                    'selectedItem' => 'required'
                ],
                'values' => [
                    'Name' => isset($tempInputData['Name']) ? $tempInputData['Name'] : null,
                    'Permalink' => isset($tempInputData['Permalink']) ? $tempInputData['Permalink'] : null,
                    'selectedItem' => isset($tempInputData['CategoryId']) ? $tempInputData['CategoryId'] : null
                ]
            ];

            list($productData, $validator) = $this->inputValidation($tempInputData, $validationRules);

            $productData['Specifications'] = $inputData['Specifications'];
            $productData['SimilarProductIds'] = $inputData['SimilarProductIds'];
            $productData['Review'] = $inputData['Review'];

            //$this->inputValidation($inputData,$validationRules);

            if ($validator->passes()) {
                $updatedProduct = $this->product->updateProductInfo($productData);
                //  $updatedProduct->post_status = 'Active';
                //   $updatedProduct->save();

                return $this->setStatusCode(\Config::get("const.api-status.success"))
                            ->makeResponse("Update Successful.");
            } elseif ($validator->fails()) {
                $validatorMessage = $validator->messages()->toArray();

                return $this->setStatusCode(\Config::get("const.api-status.validation-fail"))
                            ->makeResponseWithError(array('Validation failed', $validatorMessage));
            }


        } catch (Exception $ex) {
            return $this->setStatusCode(\Config::get("const.api-status.system-fail"))
                        ->makeResponseWithError("System Failure !", $ex);
        }

    }

    public function promoteProduct()
    {
        try {
            $inputData = \Input::all();

            $product = $this->product->where('id', $inputData['id'])->first();

            //  dd($product->get());
            $product->created_at = Carbon::createFromFormat('Y-m-d H:i:s', Carbon::now())->toDateTimeString();
            $product->post_status = 'Active';
            $product->publish_at = Carbon::createFromTimestamp(strtotime($inputData['PublishAt']))->toDateTimeString();
            $result = $product->save();

            return $this->setStatusCode(\Config::get("const.api-status.success"))
                        ->makeResponse($result);

        } catch (Exception $ex) {
            return $this->setStatusCode(\Config::get("const.api-status.system-fail"))
                        ->makeResponseWithError("System Failure !", $ex);
        }

    }


    public function searchProductByName($name)
    {
        return Product::where('product_name', 'LIKE', "%$name%")->get(['id', 'product_name AS name']);
    }


    public function getPublisherNames()
    {
        try {
            $result = $this->product->getAllPublishersNameList();

            //$collection = collect();

            // $collection->push(["user_name" => "All Publishers"]);
            // $collection->push($result);

            return $this->setStatusCode(\Config::get("const.api-status.success"))
                        ->makeResponse($result);

        } catch (Exception $ex) {
            return $this->setStatusCode(\Config::get("const.api-status.system-fail"))
                        ->makeResponseWithError("System Failure !", $ex);
        }

    }


    /**
     * @return array
     * @internal param Request|\Request $request
     */


    public function addMediaInfo()
    {
        $inputData = \Input::all();

        $productId = isset($inputData['ProductId']) ? $inputData['ProductId'] : null;

        $product = $this->product->where('id', $productId)->first();

        $media = new Media();

        $media->media_name = $inputData['MediaTitle'];
        $media->media_type = $inputData['MediaType'];
        $media->media_link = $inputData['MediaLink'];
        $media->is_hero_item = $inputData['IsHeroItem'];
        $media->is_main_item = $inputData['IsMainItem'];

        //    dd('media : ', empty($inputData['IsHeroItem']) && empty($inputData['IsMainItem']));
        if (empty($inputData['IsHeroItem']) && empty($inputData['IsMainItem']))
            $media->sequence = $inputData['MediaSequence'];
        else
            $media->sequence = 0;

        try {
            $result = $product->medias()->save($media);

            return $this->setStatusCode(\Config::get("const.api-status.success"))
                        ->makeResponse($result);

        } catch (Exception $ex) {
            return $this->setStatusCode(\Config::get("const.api-status.system-fail"))
                        ->makeResponseWithError("System Failure !", $ex);
        }
    }

    public function getMediaForProduct($id)
    {
        $result['result'] = Product::find($id)->medias;


        $tmp = $result['result']->map(function ($item, $key) {
            $count = 0;

            if (empty($item->is_hero_item) && empty($item->is_main_item))
                $count = 1;

            return $count;
        });

        // $result['count'] = $result['result']->count();

        $result['count'] = $tmp->sum();


        return $this->setStatusCode(\Config::get("const.api-status.success"))
                    ->makeResponse($result);

    }

    public function deleteSingleMediaItem()
    {
        $id = \Input::get('MediaId');
        try {
            $this->deleteMediaById($id);

            return $this->setStatusCode(\Config::get("const.api-status.success"))
                        ->makeResponse("File deleted successfully");
        } catch (Exception $ex) {
            return $this->setStatusCode(\Config::get("const.api-status.system-fail"))
                        ->makeResponseWithError("System Failure !", $ex);
        }
    }


    /*

    public function addMediaForProduct(Request $request)
    {
        return $this->media->fileUploader($request);
    }
     */


    /** Fetch product information form vendor API
     * @param $itemId
     * @return mixed
     */
    public function getProductInfoFromApi($itemId)
    {
        try {
            $value = $this->product->getApiProductInformation($itemId); // test id "B0147EVKCQ"
            // return $value;
            return $this->setStatusCode(\Config::get("const.api-status.success"))
                        ->makeResponse($value);
        } catch (Exception $ex) {
            return $this->setStatusCode(\Config::get("const.api-status.system-fail"))
                        ->makeResponseWithError("System Failure !", $ex);
        }
    }

    /**
     *  Update product price after certain time through API for each execution
     */
    public function priceUpdate()
    {
        $this->product->updateProductPrice();
    }

    /** Delete medias for product
     * @param $id
     */
    private function deleteMediaById($id)
    {
        try {
            $mediaItem = $this->media->where('id', $id)->first();

            //delete entry from database
            $this->media->where('id', $id)->delete();

            if (($mediaItem['media_type'] == 'img-upload') || ($mediaItem['media_type'] == 'video-upload')) {
                // delete file from S3
                $strReplace = \Config::get("const.file.s3-path");// "http://s3-us-west-1.amazonaws.com/ideaing-01/";
                $file = str_replace($strReplace, '', $mediaItem['media_link']);
                $s3 = Storage::disk('s3');
                $s3->delete($file);

                if ($mediaItem['media_type'] == 'img-upload') {
                    $file = 'thumb-' . $file;
                    $s3->delete($file);
                }
            }
        } catch (\Exception $ex) {
            return;
        }
    }

    public function getPrice()
    {
        $input = Input::all();

        if (@$input['id']) {
            $product = Product::find($input['id']);
        } elseif (@$input['url']) {
            $product = Product::find($input['url']);
        } else {
            $product = false;
        }

        if ($product) {
            return $product->sale_price;
        } else {
            return ['error' => ' No Product Found'];
        }
    }

    public function getForThumb()
    {
        $input = Input::all();

        if (@$input['id']) {
            $product = Product::find($input['id']);
        } elseif (@$input['url']) {
            $product = Product::find($input['url']);
        } else {
            $product = false;
        }

        if ($product) {
            if ($storeLogo = Media::where('mediable_type', 'App\Models\Store')->where('mediable_id', $product->store_id)->first()) {
                $product->storeLogo = $storeLogo->media_link;
            } else {
                $product->storeLogo = '';
            }

            return $product;
        } else {
            return ['error' => ' No Product Found'];
        }
    }

    public static function getForBar($id)
    {
        if (!$id || $id == '') {
            return false;
        }

        $ids = explode(',', $id);

        $ids = array_unique($ids);

        if (!$ids) {
            $ids = [$id];
        }

        $products = Product::whereIn('id', $ids)->get();

        foreach ($products as $prod) {
            if ($image = Media::where('mediable_type', 'App\Models\Product')->where('mediable_id', $prod->id)->where('is_main_item', 1)->first()) {
                $prod->image = $image->media_link;
            }

//            if(isset($prod->store_id) &&  ($prod->store_id == 1 || $prod->store_id == '1')){
//                $prod->storeLogo = 'https://s3-us-west-1.amazonaws.com/ideaing-01/amazon-logo-small.svg';
//            }else
            if ($storeLogo = Media::where('mediable_type', 'App\Models\Store')->where('mediable_id', $prod->store_id)->first()) {
                $prod->storeLogo = $storeLogo->media_link;
            } else {
                $prod->storeLogo = '';
            }
        }

        return json_encode($products);
    }

    // Sync product info with WP's post and postmeta tables

    public function wpSync()
    {
        try {

            $inputData = \Input::all();

            $result = $this->product->wpProductSync($inputData['ProductId']);

            return $this->setStatusCode(\Config::get("const.api-status.success"))
                        ->makeResponse($result);
        } catch (Exception $ex) {
            return $this->setStatusCode(\Config::get("const.api-status.system-fail"))
                        ->makeResponseWithError("System Failure !", $ex);
        }

    }


}