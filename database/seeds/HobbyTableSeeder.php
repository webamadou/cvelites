<?php

use Illuminate\Database\Seeder;

class HobbyTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    protected $guarded = [];

    public function run()
    {
        factory(App\Hobby::class, 12)->create();

        for ($i = 0; $i <= 12; $i++){
            $user = App\User::all()->random(1)->first();
            $hobbies = App\Hobby::all()->random(3);
            $user->hobbies()->sync($hobbies);
        }
    }
}
