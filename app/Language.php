<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Language extends Model
{
    public function resumes(){
        return $this->belongsToMany('App\Resume');
    }
}
