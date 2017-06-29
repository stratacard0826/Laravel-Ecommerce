<?php

    namespace App\Models;

    use Illuminate\Database\Eloquent\Model;

    use Illuminate\Database\Eloquent\SoftDeletes;

    class Giveaway extends Model {
        use SoftDeletes;
        
    	/**
         * The database table used by the model.
         *
         * @var string
         */
        protected $table = 'giveaway';
        protected $fillable = array(
            'giveaway_title',
            'giveaway_permalink',
            'giveaway_desc',
            'giveaway_meta_desc',
            'giveaway_toc',
            'giveaway_image',
            'giveaway_mobile_image',
            'giveaway_image_title',
            'giveaway_image_alt',
            'giveaway_status',
            'goes_live',
            'ends',
        );
        protected $hidden = ['created_at'];

        public function hearts()
        {
            return $this->morphMany('App\Models\Heart', 'heartable');
        }

        public function users()
        {
            return $this->hasMany('App\Models\User');
        }

        public function comments()
        {
            return $this->morphMany('App\Models\Comment', 'commentable');
        }
    }