<?php

    namespace App\Models;

    use Illuminate\Database\Eloquent\Model;
    use App\Models\Product;
    use URL;
    use Redirect;
    use Illuminate\Support\Collection;
    use Carbon\Carbon;

    class WpPost extends \Eloquent {

        protected  $primaryKey = 'ID';
        protected $connection = 'wpdb';
        protected $table = 'posts';
        public $timestamps = false;

        protected $fillable = ['post_title', 'post_status', 'post_type'];

        /**
         * Define Relationship
         * /
         *
         * /*
         * @return media object
         */

        public function comments()
        {
            return $this->morphMany('App\Models\Comment', 'commentable');
        }

        public function hearts()
        {
            return $this->morphMany('App\Models\Heart', 'heartable');
        }

        public function wpPostMeta()
        {
            return $this->hasMany('App\Models\WpPostMeta');
        }

    }
