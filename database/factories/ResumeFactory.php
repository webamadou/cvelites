<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Resume;
use Faker\Generator as Faker;

$factory->define(Resume::class, function (Faker $faker) {
    $user = App\User::all()->random(1)->first();
    $languages = App\Language::all()->random(1)->first();
    $model = App\ResumeModel::all()->random(1)->first();
    $font = App\Font::all()->random(1)->first();
    $theme = App\Theme::all()->random(1)->first();

    return [
        'name' => $faker->word,
        'lang' => $languages->name,
        'lang_code' => $languages->code,
        'user_id' => $user->id,
        'model_id' => $model->id,
        'model_name' => $model->name,
        'font_id' => $font->id,
        'font_name' => $font->name,
        'theme_id' => $theme->id,
        'theme_name' => $theme->name,
        'status' => 1,
    ];
});
