<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Font extends Model
{
    protected $guarded = [];

    public function resumes(){
        return $this->hasMany('App\Resume');
    }
}
