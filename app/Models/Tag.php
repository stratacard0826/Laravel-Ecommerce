<?php

    namespace App\Models;

    use Illuminate\Database\Eloquent\Model;
    use App\Models\Product;

    class Tag extends Model {

        /**
         * The database table used by the model.
         *
         * @var string
         */
        protected $table = 'tags';

        protected $fillable = array(
            'id',
            'tag_name',
            'tag_description',
        );

        protected $hidden = ['created_at', 'updated_at'];


        /**
         * Define Relationship
         * /
         *
         * /*
         * @return media object
         */
        public function products()
        {
            return $this->morphedByMany('App\Models\Product', 'taggable');
        }

        // Query

        /**
         * @param $input
         * @return static
         */
        public function createTagInfo($input)
        {
            $newProduct = Tag::create(['tag_name' => $input['TagName'], 'tag_description' => $input['TagDescription']]);

            return $newProduct;
        }

        public function showTagsForProduct($productId)
        {
            $product = new Product();
            $tagCollection = $product->find($productId)->tags->unique();

            $data = [];
            foreach($tagCollection as $tag)
            {
                $tmp = array(
                    'id' => $tag->id,
                    'name' => $tag->tag_name
                );

                array_push($data,$tmp);

            }
            return $data;

        }

        public function getProductsByTag($tagId)
        {
           return Tag::find($tagId)->products;
        }

        public function updateTagInfo($tag)
        {
            $tagData = array(
                "tag_name"        => ($tag['TagName'] != null) ? $tag['TagName'] : "",
                "tag_description" => ($tag['TagDescription'] != null) ? $tag['TagDescription'] : ""
            );

            Tag::where('id','=',$tag['TagId'])->update($tagData);

            return Tag::where('id','=',$tag['TagId'])->first();
        }

        public function associateTagsForProduct($inputData)
        {

            $productId = isset($inputData['ProductId']) ? $inputData['ProductId'] : null;

            $productTags = $inputData['Tags'];

            if($productTags == '' || $productId == null)
                return;

            $product = Product::where('id','=',$productId)->first();

            // Detaching all associated old tags before entering new set of tags.
            $product->tags()->detach();

            foreach($productTags as $key => $value){

                if(isset($value['id']))
                {
                    $tag = Tag::where('id','=',$value['id'])->first();

                    $tag->products()->save($product);
                }
            }

        }
    }
