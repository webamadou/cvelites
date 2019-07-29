<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Education;
use Faker\Generator as Faker;

$factory->define(Education::class, function (Faker $faker) {
    $resume = \App\Resume::all()->random(1)->first();
    $school = \App\School::all()->random(1)->first();

    return [
        'title' => $faker->words(3, true),
        'description' => $faker->paragraph(3, true),
        'resume_id' => $resume->id,
        'school_id' => $school->id,
        'degree' => $faker->sentence(4, true),
        'graduation_year' => $faker->dateTimeInInterval($startDate = '- 5 years', $interval = '+ 0 days', $timezone = null),
        'address' => $faker->address
    ];
});
