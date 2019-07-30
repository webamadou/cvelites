<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Education extends Model
{
    protected $table = 'educations';
    protected $guarded = [];

    public function resume(){
        return $this->belongsTo('App\Resume');
    }

    public function school(){
        return $this->belongsTo('App\School');
    }
}
