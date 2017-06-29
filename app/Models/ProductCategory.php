<?php

    namespace App\Models;

    use Illuminate\Database\Eloquent\Model;
    use Mockery\CountValidator\Exception;
    use Log;
    use CustomAppException;
    use Baum\Node;
    use Illuminate\Support\Collection;

//    class ProductCategory extends Model {
    class ProductCategory extends Node {

        /**
         * The database table used by the model.
         *
         * @var string
         */
        protected $table = 'product_categories';


        // protected $fillable = ['category_name','extra_info','parent_id'];

        protected $hidden = ['lft', 'rgt', 'depth', 'created_at', 'updated_at'];

        /**
         * Define Relationship
         * /
         *
         * /*
         * @return \Illuminate\Database\Eloquent\Relations\HasOne
         */
        public function products()
        {
            return $this->hasMany('App\Models\Product');
        }

        public function ProductCategoryRead()
        {
            return $this->hasOne('App\Models\ProductCategoryRead');
        }


        /**  Add new item in the category and return it category object.
         * @param $product
         * @return mixed|static
         */

        public function addCategory($product)
        {

            if ($product['ParentId'] != null)
                return $this->addSubCategory($product);
            $data = array(
                'category_name' => $product['CategoryName'],
                'extra_info'    => isset($product['ExtraInfo']) ? $product['ExtraInfo'] : null,
                'icon'          => isset($product['Icon']) ? $product['Icon'] : '',
                'meta_title' => @$product['MetaTitle'],
                'meta_description' => @$product['MetaDescription'],
            );
            return ProductCategory::create($data);
        }

        /** Add a sub category item in the category and return it the object.
         * @param $product
         * @return mixed
         */
        public function addSubCategory($product)
        {
            $parentNode = $this->getCategory($product['ParentId']);

            if ($parentNode == null)
                return \Config::get("const.parent-id-not-exist");
            $data = array(
                'category_name' => $product['CategoryName'],
                'extra_info'    => isset($product['ExtraInfo']) ? $product['ExtraInfo'] : null,
                'icon'          => isset($product['Icon']) ? $product['Icon'] : null,
                   'meta_title' => @$product['MetaTitle'],
                'meta_description' => @$product['MetaDescription'],
            );

            return $parentNode->children()->create($data);
        }

        /** Makes an category object through category id.
         * @param $categoryId
         * @return null
         */
        public function getCategory($categoryId)
        {
            try
            {
                return ProductCategory::where('id', '=', $categoryId)->firstOrFail();
            } catch (\Exception $ex)
            {
                return null;
            }
        }

        /** Return all root categories which are not subcategories (parent id is NULL).
         * @return Collection|null
         */
        public function getAllRootCategory()
        {
            try
            {
                $data = ProductCategory::where('parent_id', '=', null)->get();

                $rootCategories = collect();
                foreach ($data as $key => $value)
                {
                    $rootCategories->push([
                        'id' => $value->id,
                        'category' => $value->category_name,
                        'info' => $value->extra_info,
                        'meta_title'        => $value->meta_title,
                        'meta_description'        => $value->meta_description,
                        'hasChildren' => ($this->hasChildOfCategory($value->id)->count() > 0) ? true : false
                    ]);
                }

                return $rootCategories;

            } catch (\Exception $ex)
            {
                return null;
            }

        }

        /** Update category information.
         * @param $categoryOld
         * @return mixed
         */
        public function updateCategoryInfo($categoryOld)
        {
            $category = $this->getCategory($categoryOld['CategoryId']);

            if ($category != null)
            {
                $category->category_name = $categoryOld['CategoryName'];
                $category->extra_info = $categoryOld['ExtraInfo'];
                $category->icon = @$categoryOld['Icon'];
                $category->meta_title = @$categoryOld['MetaTitle'];
                $category->meta_description = @$categoryOld['MetaDescription'];
                $category->save();

                return \Config::get("const.category-updated");

            } else
            {
                return \Config::get("const.category-not-exist");
            }

        }


        /** First checks whether a category is  associated with any product or not ,
         *if not associated then delte the category item and regenerate the configuration
         *fields in database as per algorithm.
         *
         * @param $categoryId
         * @return mixed
         */
        public function deleteCategory($categoryId)
        {
            $products = $this->productWithinCategory($categoryId);
            if ($products->count() > 0)
            {
                return \Config::get("const.category-delete-exists");

            } else
            {
                $category = $this->getCategory($categoryId);
                $category->delete();

                return \Config::get("const.category-delete");
            }
        }

        /** Return all products which are in side category/subcategory
         *
         * @param $categoryId
         * @return mixed
         */
        public function productWithinCategory($categoryId)
        {
            $categoryList = $this->getSubCategoryIdOfRootCategory($categoryId);

            return Product::whereIn('product_category_id', $categoryList)->get();

        }


        /**
         * Return all categories which are in side category/subcategory
         * @param $categoryId
         * @return Collection
         */
        public function getSubCategoryIdOfRootCategory($categoryId)
        {
            $categories = $this->getCategory($categoryId)->getDescendantsAndSelf(array('id'));

            //$products = ProductCategory::find($categoryId)->products;

            $categoryList = collect([]);
            foreach ($categories as $key => $value) {
                $categoryList->push($value->id);
            }
            return $categoryList;
        }

        public function getCategoryItems($categoryId = null)
        {
            if ($categoryId == null)
                return $this->getAllRootCategory();
            else
            {
                $categories = $this->getCategory($categoryId)->getImmediateDescendants(array('id', 'category_name', 'extra_info', 'icon'));

                $categoryList = collect([]);
                foreach ($categories as $key => $value)
                {
                    $categoryList->push([
                        'id'          => $value->id,
                        'category'    => $value->category_name,
                        'info'        => $value->extra_info,
                        'meta_title'        => $value->meta_title,
                        'meta_description'        => $value->meta_description,
                        'icon'        => $value->icon,
                        'hasChildren' => ($this->hasChildOfCategory($value->id)->count() > 0) ? true : false
                    ]);
                }

                return $categoryList;
            }
        }

        public function hasChildOfCategory($categoryId)
        {
            $items = $this->getCategory($categoryId)->getDescendants();

            return $items;

        }

        public static function buildCategoryTree($withGrandChildren = false){

            $topLevelCategories = ProductCategory::where('parent_id', null)->get();

            foreach($topLevelCategories as $top){
                $cats = ProductCategory::where('parent_id', $top->id)->get();

                if($withGrandChildren){
                    $categoryTree[$top->extra_info] = array();
                    foreach($cats as $cat){
                        
                        $grandchildCategory = ProductCategory::where('parent_id', $cat->id)->where(function($query){
                            $query->where('type', '!==', 'room')
                                ->orWhere('type', null);
                        })->get();
                        $categoryTree[$top->extra_info][] = array(
                            'childCategory' => $cat,
                            'grandchildCategories' => $grandchildCategory
                        );
                    }
                }else{
                    $categoryTree[$top->extra_info] = $cats;
                }
            }
            return $categoryTree;
        }
    }
