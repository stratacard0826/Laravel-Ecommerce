<?php

    namespace App\Models;

    use Illuminate\Database\Eloquent\Model;

    class Room extends Model {
    	/**
         * The database table used by the model.
         *
         * @var string
         */
        protected $table = 'rooms';
        protected $fillable = array(
            'room_name',
            'room_permalink',
            'room_description',
            'meta_title',
            'meta_description',
            'room_status',
            'hero_image_1',
            'hero_image_1_title',
            'hero_image_1_alt',
            'hero_image_1_desc',
            'hero_image_1_caption',
            'hero_image_1_link_title',
            'hero_image_1_link',
            'hero_image_1_products',
            'hero_image_2',
            'hero_image_2_title',
            'hero_image_2_alt',
            'hero_image_2_desc',
            'hero_image_2_caption',
            'hero_image_2_link_title',
            'hero_image_2_link',
            'hero_image_2_products',
            'hero_image_3',
            'hero_image_3_title',
            'hero_image_3_alt',
            'hero_image_3_desc',
            'hero_image_3_caption',
            'hero_image_3_link_title',
            'hero_image_3_link',
            'hero_image_3_products',
        );
        protected $hidden = ['created_at'];
        public function updateRoom($room)
        {
            try
            {

                $data = array(
                    
                );

                $roomId = $room['id'];

                Product::where('id', '=', $roomId)->update($data);

                $data = Product::where('id', $roomId)->first();

                return $data;

            } catch (Exception $ex)
            {
                return $ex;
            }
        }
        // return room information data for public view
        public function getViewForPublic($permalink, $id = null)
        {
            $column = $id == null ? 'room_permalink' : 'id';
            $value = $id == null ? $permalink : $id;

            $roomInfo = Room::where($column, $value)
                ->first();
            return $roomInfo;

        }
        public function roomDetailsViewGenerate($roomData)
        {
            // dd($productData);
            $roomInfo['Id'] = $roomData['room']->id;
            $roomInfo['RoomName'] = $roomData['room']->room_name;
            $roomInfo['Permalink'] = $roomData['room']->room_permalink;
            $roomInfo['Description'] = $roomData['room']->room_description;
            $roomInfo['MetaDescription'] = $roomData['room']->meta_description;
            $roomInfo['MetaTitle'] = $roomData['room']->meta_title;
            
            $roomInfo['Status'] = $roomData['room']->room_status;

            $image1['Image'] = $roomData['room']->hero_image_1;
            $images = [];
            if($roomData['room']->hero_image_1)
            {
                $Image = [];
                $Image['Image'] = $roomData['room']->hero_image_1;
                $Image['Image_alt'] = $roomData['room']->hero_image_1_alt;
                $Image['Image_Title'] = $roomData['room']->hero_image_1_title;
                $Image['Image_Caption'] = $roomData['room']->hero_image_1_caption;
                $Image['Image_hyperlink'] = $roomData['room']->hero_image_1_link;
                $Image['Image_hyperlink_title'] = $roomData['room']->hero_image_1_link_title;
                
                $products = json_decode($roomData['room']->hero_image_1_products);
                $temp = new Product();
                foreach ($products as $elementKey => $pr) {
                    $product = $temp->getSingleProductInfoForView($pr->product_id);
                    if($product)
                    {
                        $strReplace = env('IMG_CDN') . '/';
                        $path = str_replace($strReplace, '', $product->media_link);
                        $path = str_replace('https://s3-us-west-1.amazonaws.com/ideaing-01/', '', $path);
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
                $Image['Image_Products'] = $products;
                $Image['Image_Description'] = $roomData['room']->hero_image_1_desc;
                $images[] = $Image;
            }
            if($roomData['room']->hero_image_2)
            {
                $Image = [];
                $Image['Image'] = $roomData['room']->hero_image_2;
                $Image['Image_alt'] = $roomData['room']->hero_image_2_alt;
                $Image['Image_Title'] = $roomData['room']->hero_image_2_title;
                $Image['Image_Caption'] = $roomData['room']->hero_image_2_caption;
                $Image['Image_hyperlink'] = $roomData['room']->hero_image_2_link;
                $Image['Image_hyperlink_title'] = $roomData['room']->hero_image_2_link_title;

                $products = json_decode($roomData['room']->hero_image_2_products);

                $temp = new Product();
                foreach ($products as $pr) {
                    $product = $temp->getSingleProductInfoForView($pr->product_id);
                    if($product)
                    {
                        $strReplace = env('IMG_CDN') . '/';
                        $path = str_replace($strReplace, '', $product->media_link);
                        $path = $strReplace . 'thumb-' . $path;
                        $path = str_replace('https://s3-us-west-1.amazonaws.com/ideaing-01/', '', $path);
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
                $Image['Image_Products'] = $products;
                $Image['Image_Description'] = $roomData['room']->hero_image_2_desc;
                $images[] = $Image;
            }
            
            if($roomData['room']->hero_image_3)
            {
                $Image = [];
                $Image['Image'] = $roomData['room']->hero_image_3;
                $Image['Image_alt'] = $roomData['room']->hero_image_3_alt;
                $Image['Image_Title'] = $roomData['room']->hero_image_3_title;
                $Image['Image_Caption'] = $roomData['room']->hero_image_3_caption;
                $Image['Image_hyperlink'] = $roomData['room']->hero_image_3_link;
                $Image['Image_hyperlink_title'] = $roomData['room']->hero_image_3_link_title;

                $products = json_decode($roomData['room']->hero_image_3_products);
                $temp = new Product();
                foreach ($products as $pr) {
                    $product = $temp->getSingleProductInfoForView($pr->product_id);
                    if($product)
                    {
                        $strReplace = env('IMG_CDN') . '/';
                        $path = str_replace($strReplace, '', $product->media_link);
                        $path = str_replace('https://s3-us-west-1.amazonaws.com/ideaing-01/', '', $path);
                        
                        $path = $strReplace . 'thumb-' . $path;
                        $pr->media_link = $path;
                        $pr->product_name = $product->product_name;
                        $pr->price = $product->price;
                        $pr->sale_price = $product->sale_price ;
                        $pr->store = $product->storeInfo;
                        $pr->store = $temp->getStoreInfoByProductId($pr->product_id);
                        $pr->affiliate_link = $product->affiliate_link;
                        $pr->product_permalink = $product->product_permalink;
                    }
                    else{
                        $pr->product_id="";
                        unset($products[$elementKey]);
                    }
                }
                $Image['Image_Products'] = $products;
                $Image['Image_Description'] = $roomData['room']->hero_image_3_desc;
                $images[] = $Image;
            }
            $roomInfo['images'] = $images;
            $result['roomInformation'] = $roomInfo;
            return $result;
        }
    }