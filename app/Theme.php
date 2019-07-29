<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Theme extends Model
{
    protected $guarded = [];

    public function resumes(){
        return $this->hasMany('App\Resume');
    }
}
