<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Skill;
use Faker\Generator as Faker;

$factory->define(Skill::class, function (Faker $faker) {
    $resume = App\Resume::all()->random(1)->first();
    return [
        'name' => $faker->word,
        'resume_id' => $resume->id,
        'description' => $faker->paragraph(3, true),
        'status' => 1
    ];
});
