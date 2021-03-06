<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Domain extends Model
{
    protected $guarded = [];

    public function domain(){
        return $this->belongsTo('App\Domain');
    }
}
