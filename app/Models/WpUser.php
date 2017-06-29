<?php

    namespace App\Models;

    use Illuminate\Database\Eloquent\Model;
    use App\Models\Product;
    use URL;
    use Redirect;
    use Illuminate\Support\Collection;
    use Carbon\Carbon;

    class WpUser extends \Eloquent {

        protected $connection = 'wpdb';
        protected $table = 'users';
        public $timestamps = false;

        /**
         * Define Relationship
         * /
         *
         * /*
         * @return media object
         */

    }
