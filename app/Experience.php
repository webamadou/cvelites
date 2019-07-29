<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Experience extends Model
{
    protected $guarded = [];

    public function company(){
        return $this->belongsTo('App\Company');
    }

    public function resume(){
        return $this->belongsTo('App\Resume');
    }
}
