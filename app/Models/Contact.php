<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{


    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'contacts';


    protected $hidden = ['created_at','updated_at'];

    /**
     * Define Relationship
     * /
     *
     * /*
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */



}