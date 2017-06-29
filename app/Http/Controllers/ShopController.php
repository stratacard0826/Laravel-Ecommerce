<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\ProductCategory;
use PageHelper;
use Route;
use MetaTag;


class ShopController extends ApiController
{
    public function __construct()
    {
        //check user authentication and get user basic information
        $this->authCheck = $this->RequestAuthentication(array('admin', 'editor', 'user'));

    }

    public function forcedShopIndexForSmartBody($parent = null)
    {
        //  return $this->index('active', 'smartbody');
        if (empty($parent))
            return $this->index('smartbody');
        else
            return $this->index('active', $parent);
    }

    public function index($grandParent = false, $parent = false, $child = false)
    {
       //   dd($grandParent,$parent,$child);

        $userData = $this->authCheck;

        if ($this->authCheck['method-status'] == 'success-with-http') {
            $userData = $this->authCheck['user-data'];
        }

        if (!$grandParent) { // shop landing page
            $categoryTree = ProductCategory::buildCategoryTree(true);

            MetaTag::set('title', 'Shop Smart Home & Home Automation Gadgets | Ideaing');
            MetaTag::set('description', 'Buy the newest home automation gadgets, travel, wearables, and décor. Save and get deals on the best products for your home.');

            return view('shop.index')
                ->with('userData', $userData)
                ->with('categoryTree', $categoryTree)
                ->with('isShopPage', '1');
        } else {

            if ($child) {
                $category = $child;
            } elseif ($parent) {
                $category = $parent;
            } else {
                $category = $grandParent;
            }

            if (!$categoryModel = ProductCategory::where('extra_info', $category)->first()) {
                return redirect('/shop/');
            }

            $filterCategories = ProductCategory::where('parent_id', $categoryModel->id)->get();

            if (($filterCategories->isEmpty())) {
                $filterCategories = ProductCategory::where('parent_id', $categoryModel->parent_id)->get();
            }

            $categoryTree = ProductCategory::buildCategoryTree(false);
            $parentCategory = @ProductCategory::where('id', $categoryModel->parent_id)->first();

            $masterCategory = $parentCategory ?: $categoryModel;
            switch ($grandParent) {
                case "smart-home":
                    $categoryModel->background_image = asset("assets/images/shop-category/smarthome.jpg");
                    break;
                case "smart-travel":
                    $categoryModel->background_image = asset("assets/images/shop-category/travel.jpg");
                    break;
                case "smart-body":
                    $categoryModel->background_image = asset("assets/images/shop-category/wearables.jpg");
                    break;
                case "decor":
                    $categoryModel->background_image = asset("assets/images/shop-category/homedecor.jpg");
                    break;
            }

            if ((!$parent || !$child) && $categoryModel->parent_id && $trueParent = ProductCategory::find($categoryModel->parent_id)) {
//                if () {
//                    foreach($parents as $par){
                if (!$trueParent->parent_id) {
                    $key['grandparent'] = $trueParent->extra_info;
                    $key['parent'] = false;
                } else {
                    $key['parent'] = $trueParent->extra_info;
                    $key['grandparent'] = ProductCategory::find($trueParent->parent_id)->extra_info;
                }
//
                $canonicURL = PageHelper::getCanonicalLink(Route::getCurrentRoute(), [$key['grandparent'], $key['parent'], $categoryModel->extra_info]);

//                }
            } else {
                $canonicURL = PageHelper::getCanonicalLink(Route::getCurrentRoute(), [$grandParent, $parent, $child]);
            }

            MetaTag::set('title', $categoryModel->meta_title);
            MetaTag::set('description', $categoryModel->meta_description);

            return view('shop.shop-category')
                ->with('userData', $userData)
                ->with('currentCategory', $categoryModel)
                ->with('parentCategory', $parentCategory)
                ->with('categoryTree', $categoryTree)
                ->with('grandParent', $grandParent)
                ->with('masterCategory', $masterCategory)
                ->with('filterCategories', $filterCategories)
                ->with('canonicURL', $canonicURL)
                ->with('isShopPage', '1');

        }


    }


}
