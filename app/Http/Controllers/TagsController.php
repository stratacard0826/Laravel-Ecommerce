<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Models\Tag;


class TagsController extends ApiController
{

    /**
     * TagsController constructor.
     */
    public function __construct()
    {
        // Apply the jwt.auth middleware to all methods in this controller
        $this->middleware('jwt.auth',
            ['except' => [
                'addTagInfo','updateTagInfo','deleteTagInfo','addTags','showAllTags','showTagByProductId',
                'getProductsByTag','searchTagByName'//,'temporaryCategoryTagGenerator'

            ]]);

        $this->tag = new Tag();

    }

    /*public function temporaryCategoryTagGenerator()
    {
       // use App\Models\ProductCategory;

        $cats = \App\Models\ProductCategory::all();
       // dd($cats);

        foreach($cats as $cat)
        {
           $tagData['TagName'] = $cat['category_name'];
           $tagData['TagDescription'] = 'Category Tag';

           // echo $cat['category_name'];

            // Create default Category tags followed by category name
            $this->tag->createTagInfo($tagData);

        }
        dd();

       // $tagData['TagName'] = $inputData['CategoryName'];
      //  $tagData['TagDescription'] = 'Category Tag';


    }*/

    public function searchTagByName($name)
    {

        //return = ;
        $value = $this->tag->where("tag_name", "like", "%$name%")->get(array("id","tag_name as name"));

        return $value;
    }

    public function addTagInfo()
    {
        $input = \Input::all();
      //  dd($input['TagName']);

        try
        {
            $newProduct = $this->tag->createTagInfo($input);

            return $this->setStatusCode(\Config::get("const.api-status.success"))
                ->makeResponse($newProduct);

        } catch (Exception $ex)
        {
            return $this->setStatusCode(\Config::get("const.api-status.system-fail"))
                ->makeResponseWithError("System Failure !", $ex);
        }

    }

    public function showTagByProductId($productId)
    {
        try
        {
            $tagList = $this->tag->showTagsForProduct($productId);

            return $this->setStatusCode(\Config::get("const.api-status.success"))
                ->makeResponse($tagList);

        } catch (Exception $ex)
        {
            return $this->setStatusCode(\Config::get("const.api-status.system-fail"))
                ->makeResponseWithError("System Failure !", $ex);
        }

    }

    public function updateTagInfo()
    {
        $input = \Input::all();
        //  dd($input['TagName']);

        try
        {
            $tagInfo = $this->tag->updateTagInfo( $input);

            return $this->setStatusCode(\Config::get("const.api-status.success"))
                ->makeResponse($tagInfo);

        } catch (Exception $ex)
        {
            return $this->setStatusCode(\Config::get("const.api-status.system-fail"))
                ->makeResponseWithError("System Failure !", $ex);
        }

    }

    public function showAllTags()
    {
        try
        {
            $tagInfo = $this->tag->all();

            return $this->setStatusCode(\Config::get("const.api-status.success"))
                ->makeResponse($tagInfo);

        } catch (Exception $ex)
        {
            return $this->setStatusCode(\Config::get("const.api-status.system-fail"))
                ->makeResponseWithError("System Failure !", $ex);
        }

    }

    public function getProductsByTag($tagId)
    {
        try
        {
            $tagInfo = $this->tag->getProductsByTag($tagId);

            return $this->setStatusCode(\Config::get("const.api-status.success"))
                ->makeResponse($tagInfo);

        } catch (Exception $ex)
        {
            return $this->setStatusCode(\Config::get("const.api-status.system-fail"))
                ->makeResponseWithError("System Failure !", $ex);
        }

    }

    /** Delete tag after removing associated relation
     * @return mixed
     */
    public function deleteTagInfo()
    {
        $input = \Input::get('TagId');

        try
        {

            // Detach all the tag from the relation first
            $this->tag->find($input)->products()->detach();

            $tag = $this->tag->find($input)->delete();

            return $this->setStatusCode(\Config::get("const.api-status.success"))
                ->makeResponse($tag);

        } catch (Exception $ex)
        {
            return $this->setStatusCode(\Config::get("const.api-status.system-fail"))
                ->makeResponseWithError("System Failure !", $ex);
        }

    }

    //addTags
    public function addTags()
    {
        $inputData = \Input::all();

        try
        {
            $newProduct = $this->tag->associateTagsForProduct($inputData);

            return $this->setStatusCode(\Config::get("const.api-status.success"))
                ->makeResponse($newProduct);

        } catch (Exception $ex)
        {
            return $this->setStatusCode(\Config::get("const.api-status.system-fail"))
                ->makeResponseWithError("System Failure !", $ex);
        }

    }




}
