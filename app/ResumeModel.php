<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ResumeModel extends Model
{
    protected $table = 'models';
    protected $guarded = [];

    public function resumes(){
        return $this->hasMany('App\Resume');
    }
}
