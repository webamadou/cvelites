<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Template extends Model
{
    public function resumes(){
        return $this->belongsToMany('App\Resume');
    }
}