<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Str;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'first_name', 'email', 'password', 'title', 'presentation', 'birth_date', 'birth_place', 'address', 'views', 'status','user_slug', 'avatar'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    protected function getRelatedSlugs($user_slug, $id = 0)
    {
        return User::select('user_slug')->where('user_slug', 'like', $user_slug.'%')
            ->where('id', '<>', $id)
            ->get();
    }
    /**
     * @param $string
     * @param int $id
     * @return string
     * @throws \Exception
     */
    public function createSlug($string, $id = 0)
    {
        $slug = Str::slug($string);
        // Get any that could possibly be related.
        $allSlugs = $this->getRelatedSlugs($slug, $id);
        // If we haven't used it before then we are all good.
        if (!$allSlugs->contains('user_slug', $slug)){
            return $slug;
        }
        // Just append numbers like a savage until we find not used.
        // the 9999 is completely arbitrary
        for ($i = 1; $i <= 9999; $i++) {
            $newSlug = $slug.'-'.$i;
            if (!$allSlugs->contains('user_slug', $newSlug)) {
                return $newSlug;
            }
        }

        throw new \Exception('Can not create a unique slug for the user');
    }

    public function country(){
        return $this->belongsTo('App\Country');
    }
    public function hobbies(){
        return $this->belongsToMany('App\Hobby');
    }
    public function skills(){
        return $this->belongsToMany('App\Skill');
    }
    public function experiences(){
        return $this->hasMany('App\Experience');
    }
    public function achievements(){
        return $this->hasMany('App\Achievement');
    }
    public function educations(){
        return $this->hasMany('App\Education');
    }
    public function awards(){
        return $this->hasMany('App\Award');
    }

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }

    public function getAvatarAttribute($avatar){
        if($avatar){
            return $this->avatar_location.$avatar ;
        }
    }

    protected static function boot()
    {
        parent::boot(); // TODO: Change the autogenerated stub
        static::saving(function($model){
           $model->user_slug = $model->createSlug("$model->first_name-$model->name", $model->id);
        });
    }
}
