<?php

    namespace App\Models;

    use Illuminate\Database\Eloquent\Model;

    class HomeHero extends Model {
    	/**
         * The database table used by the model.
         *
         * @var string
         */
        protected $table = 'homehero';
        protected $fillable = array(
            'hero_image',
            'hero_image_title',
            'hero_image_alt',
            'hero_image_desc',
            'hero_image_caption',
            'hero_image_link_title',
            'hero_image_link',
            'hero_image_products',
            'hero_status'
        );
        protected $hidden = ['created_at'];
        // return room information data for public view
        public function getViewForPublic($permalink, $id = null)
        {
            $column = $id == null ? 'room_permalink' : 'id';
            $value = $id == null ? $permalink : $id;

            $roomInfo = Room::where($column, $value)
                ->first();
            return $roomInfo;

        }
        public function heroDetailsViewGenerate()
        {
            // dd($productData);
            $homeheroImages = HomeHero::all();
            foreach ($homeheroImages as $hero) {
                $products = json_decode($hero->hero_image_products);
                $temp = new Product();
                foreach ($products as $elementKey => $pr) {
                    $product = $temp->getSingleProductInfoForView($pr->product_id);
                    if($product)
                    {
                        $strReplace = env('IMG_CDN') . '/';
                        $path = str_replace($strReplace, '', $product->media_link);
                        $path = $strReplace . 'thumb-' . $path;
                        $pr->media_link = $path;
                        $pr->product_name = $product->product_name;
                        $pr->price = $product->price;
                        $pr->sale_price = $product->sale_price ;
                        $pr->store = $temp->getStoreInfoByProductId($pr->product_id);
                        $pr->affiliate_link = $product->affiliate_link;
                        $pr->product_permalink = $product->product_permalink;
                    }
                    else{
                        $pr->product_id="";
                        unset($products[$elementKey]);
                    }
                }
                $hero['Image_Products'] = $products;
            }
            return $homeheroImages;

        }
    }