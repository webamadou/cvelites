<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Language;
use Faker\Generator as Faker;

$factory->define(Language::class, function (Faker $faker) {
    return [
        [
            [
                "name" => "Français",
                "code" => "fr",
                "status" => 1
            ], [
                "name" => "English",
                "code" => "en",
                "status" => 1
            ], [
                "name" => "Española",
                "code" => "es",
                "status" => 1
            ], [
                "name" => "Arabic",
                "code" => "ar",
                "status" => 1
            ], [
                "name" => "Italian",
                "code" => "it",
                "status" => 1
            ], [
                "name" => "Portuguese",
                "code" => "pt",
                "status" => 1
            ]
        ]
    ];
});
