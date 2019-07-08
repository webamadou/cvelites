<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Hobby;
use Faker\Generator as Faker;

$factory->define(Hobby::class, function (Faker $faker) {
    $user = App\User::all()->random(1)->first();
    return [
        'name' => $faker->word,
        'icon' => $faker->word,
        'status' => 1
    ];
});
