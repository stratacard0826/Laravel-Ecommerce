<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;

use App\Http\Requests;
// use App\Http\Controllers\Controller;
use Illuminate\Http\Response as IlluminateResponse;
use App\Models\ProductCategory;
use App\Models\Tag;
use App\Models\ProductCategoryRead;
use Crypt;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Carbon\Carbon;

use CustomAppException;
use Config;


class ProductCategoryController extends ApiController
{


    public function __construct()
    {
        // Apply the jwt.auth middleware to all methods in this controller
        //  $this->middleware('jwt.auth', ['except' => ['showCategoryItems', 'showProductInCategoryName', 'updateCategory', 'index', 'addCategory', 'showAllRootCategory', 'destroy']]);
        $this->productCategory = new ProductCategory();

        $this->tag = new Tag();

        $this->productCategoryRead = new ProductCategoryRead();

    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //  return "hi";
        // dd(Config::get('Constant.val'));
        /*try
        {
            $this->productCategory->throwExc();
        } catch (CustomAppException $ex)
        {
            return $ex;
        }*/
    }


    /**
     * Add a category in parent id is not provided or else add a subcategory.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function addCategory(Request $request)
    {
        try {
            $inputData = \Input::all();

            // set validation rule to filter input

            $validationRules = [

                'rules' => [
                    'CategoryName' => 'required | max: 50',
                    'ExtraInfo' => 'required | max: 50',
                    'ParentId' => 'integer'
                ],
                'values' => [
                    'CategoryName' => isset($inputData['CategoryName']) ? $inputData['CategoryName'] : null,
                    'ExtraInfo' => isset($inputData['ExtraInfo']) ? $inputData['ExtraInfo'] : null,
                    'ParentId' => (isset($inputData['ParentId']) or ($inputData['ParentId'] != "")) ? $inputData['ParentId'] : null,
                    'MetaTitle' => isset($inputData['MetaTitle']) ? $inputData['MetaTitle'] : null,
                    'MetaDescription' => isset($inputData['MetaDescription']) ? $inputData['MetaDescription'] : null,
                ]
            ];

            list($inputData, $validator) = $this->inputValidation($inputData, $validationRules);

            if ($validator->fails()) {

                $validatorMessage = $validator->messages()->toArray();

                return $this->setStatusCode(\Config::get("const.api-status.validation-fail"))
                            ->makeResponseWithError(array('Validation failed', $validatorMessage));

            } elseif ($validator->passes()) {
                $newCategory = $this->productCategory->addCategory($inputData);

                $tagData['TagName'] = $inputData['CategoryName'];
                $tagData['TagDescription'] = 'Category Tag';

                // Create default Category tags followed by category name
                $this->tag->createTagInfo($tagData);

                /*if ($newCategory == false)
                {
                    return $this->setStatusCode(IlluminateResponse::HTTP_INTERNAL_SERVER_ERROR)
                        ->makeResponseWithError('Can not save category.');
                } else*/


                // return error if a not existing product id given.

                if ($newCategory == \Config::get("const.parent-id-not-exist")) {
                    // dd(\Config::get("const.product-id-exist"));
                    return $this->setStatusCode(\Config::get("const.api-status.app-failure"))
                                ->makeResponseWithError(\Config::get("const.parent-id-not-exist"));

                } else {
                    return $this->setStatusCode(\Config::get("const.api-status.success"))
                                ->makeResponse($newCategory);
                }
            }

        } catch (Exception $ex) {

            return $this->setStatusCode(\Config::get("const.api-status.system-fail"))
                        ->makeResponseWithError("Internal server error !", $ex);

        }
    }

    /**
     * Returns all root category items
     *
     * @return mixed
     */
    public function showAllRootCategory()
    {
        $data = $this->productCategory->getAllRootCategory();

        return $this->setStatusCode(\Config::get("const.api-status.success"))
                    ->makeResponse($data);
        //  dd($data);
    }

    public function showCategoryItems($id = null)
    {
        $data = $this->productCategory->getCategoryItems($id);

        return $this->setStatusCode(\Config::get("const.api-status.success"))
                    ->makeResponse($data);

    }


    public function showProductInCategoryName($identity = null)
    {
        if (!isset($identity))
            return $this->setStatusCode(\Config::get("const.api-status.app-failure"))
                        ->makeResponseWithError(array('Invalid request,please provide category parameter !'));
        try {
            $category = ProductCategory::where('extra_info', '=', $identity)->first();

            if ($category == null)
                return $this->setStatusCode(\Config::get("const.api-status.system-fail"))
                            ->makeResponseWithError(array('Invalid request !'));
            if ($category->count() != 0)
                $products = $this->productCategory->productWithinCategory($category['id']);

            return $this->setStatusCode(\Config::get("const.api-status.success"))
                        ->makeResponse($products);

        } catch (\Exception $ex) {
            return $this->setStatusCode(\Config::get("const.api-status.system-fail"))
                        ->makeResponseWithError(array('Invalid request !', $ex));
        }

    }


    /**
     * Update a category / Subcategory value based on provided category id in POST method
     * @return mixed
     */
    public function updateCategory()
    {
        $inputData = \Input::all();

        // set validation rule to filter input

        $validationRules = [
            'rules' => [
                'CategoryName' => 'required | max: 50',
                'ExtraInfo' => 'required | max: 50',
                'CategoryId' => 'required | integer',
            ],
            'values' => [
                'CategoryName' => isset($inputData['CategoryName']) ? $inputData['CategoryName'] : null,
                'ExtraInfo' => isset($inputData['ExtraInfo']) ? $inputData['ExtraInfo'] : null,
                'CategoryId' => isset($inputData['CategoryId']) ? $inputData['CategoryId'] : null,
                'MetaTitle' => isset($inputData['MetaTitle']) ? $inputData['MetaTitle'] : null,
                'MetaDescription' => isset($inputData['MetaDescription']) ? $inputData['MetaDescription'] : null,
            ]
        ];

        list($inputData, $validator) = $this->inputValidation($inputData, $validationRules);

        if ($validator->fails()) {
            $validatorMessage = $validator->messages()->toArray();

            return $this->setStatusCode(\Config::get("const.api-status.validation-fail"))
                        ->makeResponseWithError(array('Validation failed', $validatorMessage));
        } elseif ($validator->passes()) {
            $message = $this->productCategory->updateCategoryInfo($inputData);

            if ($message == \Config::get("const.category-updated")) {
                return $this->setStatusCode(\Config::get("const.api-status.success"))
                            ->makeResponse($message);
            } else {
                return $this->setStatusCode(\Config::get("const.api-status.app-failure"))
                            ->makeResponseWithError(\Config::get("const.category-not-exist"));
            }
        }

    }

    /** First checks whether a category is  associated with any product or not ,
     *if not associated then delte the category item and regenerate the configuration
     *fields in database as per algorithm.
     *
     */
    public function destroy()
    {
        try {
            $category = \Input::get('CategoryId');

            $message = $this->productCategory->deleteCategory($category);
            if ($message == \Config::get("const.category-delete-exists")) {
                return $this->setStatusCode(\Config::get("const.api-status.app-failure"))
                            ->makeResponseWithError($message);
            } elseif ($message == \Config::get("const.category-delete")) {
                return $this->setStatusCode(\Config::get("const.api-status.success"))
                            ->makeResponse($message);
            }


        } catch (Exception $ex) {
            // \Log::error($ex);

            return $this->setStatusCode(\Config::get("const.api-status.system-fail"))
                        ->makeResponseWithError("Invalid category provided!!");
        }

    }

    public function getAllReadCategoryItem()
    {
        $result = $this->productCategoryRead->getCategoryReadDataList();

        return $this->setStatusCode(\Config::get("const.api-status.success"))
                    ->makeResponse($result);
    }

    public function addReadCategory()
    {
        $inputData = \Input::all();
        try {
            if(empty($inputData['SelectedReadCategoryId']))
            $result = $this->productCategoryRead->saveCategoryReadData($inputData);
            else
                $result = $this->productCategoryRead->updateCategoryReadData($inputData);

            return $this->setStatusCode(\Config::get("const.api-status.success"))
                        ->makeResponse($result);

        } catch (Exception $ex) {
            return $this->setStatusCode(\Config::get("const.api-status.system-fail"))
                        ->makeResponseWithError("System Failure !", $ex);
        }
    }

    public function updateReadCategory()
    {
        $inputData = \Input::all();
        try {
            $result = $this->productCategoryRead->saveCategoryReadData($inputData);

            return $this->setStatusCode(\Config::get("const.api-status.success"))
                        ->makeResponse($result);

        } catch (Exception $ex) {
            return $this->setStatusCode(\Config::get("const.api-status.system-fail"))
                        ->makeResponseWithError("System Failure !", $ex);
        }
    }

    public function deleteReadCategory()
    {
        $inputData = \Input::all();
        try {
            $result = $this->productCategoryRead->deleteCategoryReadData($inputData);

            return $this->setStatusCode(\Config::get("const.api-status.success"))
                        ->makeResponse($result);

        } catch (Exception $ex) {
            return $this->setStatusCode(\Config::get("const.api-status.system-fail"))
                        ->makeResponseWithError("System Failure !", $ex);
        }
    }

    public function getMetaInfoByPermalink()
    {
        $permalink = Request::segment(1);


    }
}
