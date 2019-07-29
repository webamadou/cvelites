<?php

use Illuminate\Database\Seeder;

class ResumeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Resume::class, 30)->create();
        /*for ($i = 0; $i<12; $i++){
            $languages = App\Language::all()->random(2);
            //$templates = App\Template::all()->random(2);
            $resume = App\Resume::all()->random(1)->first();
            $resume->languages()->sync($languages);
            //$resume->templates()->sync($templates);
        }*/
    }
}
