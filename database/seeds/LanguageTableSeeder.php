<?php

use Illuminate\Database\Seeder;

class LanguageTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('languages')->insert(
            [
                [
                    "name" => "Français",
                    "code" => "fr",
                ],
                [
                    "name" => "English",
                    "code" => "en",
                ],
                [
                    "name" => "Española",
                    "code" => "es",
                ]
            ]
        );
    }
}
