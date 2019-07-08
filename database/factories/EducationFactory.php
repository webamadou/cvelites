<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Education;
use Faker\Generator as Faker;

$factory->define(Education::class, function (Faker $faker) {
    $user = \App\User::all()->random(1)->first();
    $school = \App\School::all()->random(1)->first();

    return [
        'user_id' => $user->id,
        'school_id' => $school->id,
        'degree' => $faker->sentence(4, true),
        'graduation_year' => $faker->year,
        'description' => $faker->paragraph(3, true),
        'address' => $faker->address
    ];
});
