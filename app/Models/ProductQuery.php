<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductQuery extends Model
{

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'product_queries';

   // protected $fillable = ['personal_info'];

    protected $hidden = ['created_at','updated_at'];

    /**
     * Define Relationship
     * /
     *
     * /*
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }

    public function product()
    {
        return $this->belongsTo('App\Models\Product');
    }

    public function saveProductRequest($data)
    {
       // dd($data);
        $productQuery = new ProductQuery();
        $productQuery->product_id = $data['productId'];
        $productQuery->reference = $data['reference'];

        return $productQuery->save();

    }


}
