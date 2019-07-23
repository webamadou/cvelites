<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\User;
use Illuminate\Support\Str;
use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(User::class, function (Faker $faker) {
    $country = \App\Country::all()->random(1)->first();
    return [
        'first_name' => $faker->firstName,
        'name' => $faker->lastName,
        'email' => $faker->unique()->safeEmail,
        'email_verified_at' => now(),
        'telephone' => $faker->phoneNumber,
        'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
        'remember_token' => Str::random(10),
        'title' => $faker->title,
        'presentation' => $faker->paragraph(3,true),
        'birth_date' => $faker->date('Y-m-d H:i:s'),
        'birth_place' => $faker->address,
        'country_id' => $country->id,
        'address' => $faker->address,
        'views' => 1,
        'status' => 1
    ];
});
