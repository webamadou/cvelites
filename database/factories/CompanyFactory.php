<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Company;
use Faker\Generator as Faker;

$factory->define(Company::class, function (Faker $faker) {
    $domain = \App\Domain::all()->random(1)->first();
    return [
        'name' => $faker->company,
        'description' => $faker->paragraph(3, true),
        'legal_status' => 'SA',
        'address' => $faker->address,
        'domain_id' => $domain->id,
        'status' => 1,
        'created_at' => date('Y-d-m H:i:s'),
        'updated_at' => date('Y-d-m H:i:s'),
    ];
});
