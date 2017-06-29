<?php

    namespace App\Models;

    use Illuminate\Database\Eloquent\Model;

    class UserSetting extends Model {

        /**
         * The database table used by the model.
         *
         * @var string
         */
        protected $table = 'user_settings';


        protected $hidden = ['created_at', 'updated_at'];

        protected $fillable = ['user_id'];


        /**
         * Define Relationship
         * /
         *
         * /*
         * @return media object
         */
        public function user()
        {
            return $this->belongsTo('App\Models\User');
        }

        // Query

        /**
         * @param $input
         * @return static
         */
        public function checkUserProfile($input)
        {

            $settings = UserSetting::firstOrCreate(['user_id' => $input['UserId']]);

           // dd($settings);
            return $settings;
        }


    }
