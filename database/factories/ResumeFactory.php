<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Resume;
use Faker\Generator as Faker;

$factory->define(Resume::class, function (Faker $faker) {
    $user = App\User::all()->random(1)->first();

    return [
        'name' => $faker->word,
        'user_id' => $user->id,
        'description' => $faker->paragraph(3,true),
        'status' => 1,
    ];
});
