<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Hobby extends Model
{
    public function resumes(){
        return $this->belongsToMany('App\Resume');
    }
}
