<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Domain;
use Faker\Generator as Faker;

$factory->define(Domain::class, function (Faker $faker) {
    return [
        'name' => $faker->word,
        'description' => $faker->paragraph(3),
        'status' => 1,
        'created_at' => date('Y-m-d H:i:s'),
        'updated_at' => date('Y-m-d H:i:s')
    ];
});
