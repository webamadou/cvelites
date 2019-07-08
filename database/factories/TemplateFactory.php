<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Template;
use Faker\Generator as Faker;

$factory->define(Template::class, function (Faker $faker) {
    $domain = App\Domain::all()->random(1)->first();
    return [
        'name' => $faker->word,
        'description' => $faker->paragraph(3, true),
        'domain_id' => $domain->id,
        'views' => $faker->numberBetween(0,20),
        'status' => 1
    ];
});
