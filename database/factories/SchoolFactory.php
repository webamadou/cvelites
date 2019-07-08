<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\School;
use Faker\Generator as Faker;

$factory->define(School::class, function (Faker $faker) {
    $country = \App\Country::all()->random(1)->first();
    return [
        'name' => $faker->name,
        'description' => $faker->paragraph(3, true),
        'legal_status' => '',
        'address' => $faker->address,
        'created_at' => date('Y-d-m H:i:s'),
        'updated_at' => date('Y-d-m H:i:s'),
    ];
});
