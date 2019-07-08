<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Resume extends Model
{
    public function languages(){
        return $this->belongsToMany('App\Language');
    }

    public function templates(){
        return $this->belongsToMany("App\Template");
    }
}
