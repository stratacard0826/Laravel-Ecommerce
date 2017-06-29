<?php

    namespace App\Models;

    use Illuminate\Database\Eloquent\Model;
    use App\Models\Product;
    use URL;
    use Redirect;

    class Search extends \Eloquent {

        protected $connection = 'wpdb';
        protected $table = 'users';


        public static function buildIndex()
        {

			  $rawProducts = Product::where('post_status', 'Active')->get();
         //   $rawProducts = Product::where('post_status', 'Active')->take(10)->get();

            foreach($rawProducts as $product){

                // making the thumbnail url by injecting "thumb-" in the url which has been uploaded during media submission.
                $storeInfo = $product->getStoreInfoByProductId($product->id);

                $media = $product->medias()
                                ->where('media_type', '=', 'img-upload')
                                ->where('is_main_item', '=', '1')
                                ->first();

                $feedImage = $media->media_link;

                $data = [
                    'record_id' => $product->id,
                    'title' => $product->product_name,
                    'content' => strip_tags($product->product_description),
                    'date_created' => $product->created_at->format('Y-m-d\TH:i:s\Z'),
                    'price' => $product->price,
                    'sale_price' => $product->sale_price,
                    'categories' => $product->productCategory->category_name,
                    'tags' => $product->tags->lists('tag_name'),

                    'type' => 'product',
                    'affiliate_link' => $product->affiliate_link,
                    'permalink' => $product->product_permalink,
                    'storeinfo' => json_encode($storeInfo),
                    'store' => $storeInfo['StoreName'],
                     'feed_image' => $feedImage,
                ];

                $products[] = $data;
            }

            // 2.Get Ideas

            /*if (env('FEED_PROD') == true){
               $url = 'https://ideaing.com//ideas/feeds/index.php?with_tags&full_content';
               // $url = 'https://ideaing.com//ideas/feeds/index.php?with_tags&full_content&count=10';
            }else{
             $url = URL::to('/') . '/ideas/feeds/index.php?with_tags&full_content';
             //   $url = URL::to('/') . '/ideas/feeds/index.php?with_tags&full_content&count=10';
            }*/

            $url = URL::to('/') . '/ideas/feeds/index.php?with_tags&full_content';

            $json = PageHelper::getFromCurl($url);

            $rawIdeas = json_decode($json);

            foreach($rawIdeas as $idea){
                $data = [
                    'record_id' => $idea->id,
                    'title' => $idea->title,
                    'content' => strip_tags($idea->content),
                    'date_created' => date('Y-m-d\TH:i:s\Z', strtotime($idea->creation_date)), // TODO -- also save string date for display
                    'categories' => $idea->category_all,
                    'tags' => $idea->tags_all,
                    'permalink' => $idea->url,
                    'type' => 'idea',
                    'author' => $idea->author,
                    'authorlink' => $idea->authorlink ?: '',
                    'avator' => $idea->avator,
                    'feed_image' => json_encode($idea->feed_image), // cut off unnecessary data
                    'storeinfo' => ''
                ];

                $ideas[] = $data;
            }

            // Mix up
            $return = array_merge($ideas, $products);

            $return = array_values(array_sort($return, function ($value) {
                return $value['date_created'];
            }));

            return $return;
        }



        public static function buildCategoriesIndex()
        {

            $return = [];

            // SHOP
            $shopCategories = ProductCategory::buildCategoryTree(true);
            foreach($shopCategories as $grandparent => $parents){
                $item = [];

                $item['type'] = 'shop';
                $item['term'] = str_replace('-', '', $grandparent);
                $item['link'] = '/shop/' . $grandparent;

                $return[] = $item;

                foreach ($parents as $key => $parent) {
                    $subItem['type'] = 'shop';
                    $subItem['term'] = $parent['childCategory']->category_name;
                    $subItem['link'] = '/shop/' . $grandparent . '/' . $parent['childCategory']->extra_info;

                    $return[] = $subItem;

                    foreach($parent['grandchildCategories'] as $grandchild){
                        $grandChildItem = [];
                        $grandChildItem['type'] = 'shop';
                        $grandChildItem['term'] = $grandchild->category_name;
                        $grandChildItem['link'] = '/shop/' . $grandparent . '/' . $parent['childCategory']->extra_info . '/' . $grandchild->extra_info;

                        $return[] = $grandChildItem;
                    }
                }
            }

            $rooms = Room::all();
            foreach($rooms as $room){
                $roomItem = [];
                $roomItem['type'] = 'rooms';
                $roomItem['term'] = $room->room_name;
                $roomItem['link'] = '/idea/' . $room->room_permalink;

                $return[] = $roomItem;
            }

            return $return;
        }











    }
