<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Award;
use Faker\Generator as Faker;

$factory->define(Award::class, function (Faker $faker) {
    $resume = App\Resume::all()->random(1)->first();
    return [
        'resume_id' => $resume->id,
        'title' => $faker->words(4, true),
        'description' => $faker->paragraph(3, true),
        'obtained_at' => $faker->date('Y-m-d H:i:s')
    ];
});
