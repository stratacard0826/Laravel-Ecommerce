<?php

    namespace App\Models;

    use Illuminate\Database\Eloquent\Model;
    use Illuminate\Support\Collection;
    use Carbon\Carbon;

    class WpPostMeta extends \Eloquent {

        protected  $primaryKey = 'meta_id';
        protected $connection = 'wpdb';
        protected $table = 'postmeta';
        public $timestamps = false;

        protected $fillable = ['post_id','meta_key'];


        /**
         * Define Relationship
         * /
         *
         * /*
         * @return media object
         */

        public function wpPost()
        {
            return $this->belongsTo('App\Models\WpPost','post_id');
        }



    }
