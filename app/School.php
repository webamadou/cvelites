<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class School extends Model
{
    public function Country(){
        return $this->belongsTo('App\Country');
    }
}
