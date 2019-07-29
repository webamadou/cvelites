<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Experience;
use Faker\Generator as Faker;

$factory->define(Experience::class, function (Faker $faker) {
    $company = \App\Company::all()->random(1)->first();
    $resume = \App\Resume::all()->random(1)->first();
    $date_start = $faker->dateTimeInInterval($startDate = '+0 years', $interval = '+ 5 days', $timezone = null);
    $date_end = $faker->dateTimeInInterval($startDate = '+0 years', $interval = '+ 15 days', $timezone = null);

    return [
        'title' => $faker->word,
        'description' => $faker->paragraph(3, true),
        'company_id' => $company->id,
        'resume_id' => $resume->id,
        'started_at' => $date_start,
        'ended_at' => $date_end,
        'still_there' => true,
        'status' => 1
    ];
});
