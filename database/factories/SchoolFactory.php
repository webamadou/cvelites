<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\School;
use Faker\Generator as Faker;

$factory->define(School::class, function (Faker $faker) {
    $schoolType = \App\SchoolType::all()->random(1)->first();
    return [
        'name' => $faker->name,
        'school_type_id' => $schoolType->id,
        'address' => $faker->address,
        'created_at' => date('Y-d-m H:i:s'),
        'updated_at' => date('Y-d-m H:i:s'),
    ];
});
