<?php

    namespace App\Models;

    use Illuminate\Database\Eloquent\Model;

    class Store extends Model {

        /**
         * The database table used by the model.
         *
         * @var string
         */
        protected $table = 'stores';

        protected $fillable = array(
            'store_name',
            'store_identifier',
            'status',
            'store_description'
        );

        protected $hidden = ['created_at', 'updated_at'];


        /**
         * Define Relationship
         * /
         *
         * /*
         * @return media object
         */

        public function medias()
        {
            return $this->morphMany('App\Models\Media', 'mediable');
        }

        public function products()
        {
            return $this->hasMany('App\Models\Product');
        }


    }
