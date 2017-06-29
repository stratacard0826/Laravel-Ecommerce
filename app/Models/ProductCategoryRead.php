<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductCategoryRead extends Model
{

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'product_category_read';

    protected $fillable = ['product_category_id','page_title','meta_description'];

    protected $hidden = ['created_at','updated_at'];

    /**
     * Define Relationship
     * /
     *
     * /*
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function ProductCategory()
    {
        return $this->belongsTo('App\Models\ProductCategory');
    }


    public function getCategoryReadDataList()
    {
        return ProductCategoryRead::with('ProductCategory')->get();
    }

    public function saveCategoryReadData($data)
    {
       // dd($data);
        try{
            $readItem = ProductCategoryRead::firstOrNew(['product_category_id' => $data['CategoryId']]);

        }catch(\Exception $ex)
        {
            dd($ex);
        }
       // $readItem->category_id = $data['CategoryId'];
        $readItem->page_title = $data['PageTitle'];
        $readItem->meta_description = $data['MetaDescription'];

        return $readItem->save();
    }

    public function updateCategoryReadData($inputData)
    {
        // dd($data);

        $data = [
            'id' => $inputData['SelectedReadCategoryId'],
            'product_category_id' => $inputData['CategoryId'],
            'page_title' => $inputData['PageTitle'],
            'meta_description' => $inputData['MetaDescription']
        ];

        return ProductCategoryRead::where('id',$data['id'])->update($data);

    }

    public function deleteCategoryReadData($data)
    {
        return ProductCategoryRead::where('id',$data['SelectedReadCategoryId'])->delete();
    }


}
