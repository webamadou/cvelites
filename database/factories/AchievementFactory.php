<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Achievement;
use Faker\Generator as Faker;

$factory->define(Achievement::class, function (Faker $faker) {
    $resume = App\Resume::all()->random(1)->first();
    return [
        'resume_id'     => $resume->id,
        'title'         => $faker->word,
        'description'   => $faker->paragraph(3,true),
        'status'        => 1
    ];
});
