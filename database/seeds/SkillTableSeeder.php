<?php

use Illuminate\Database\Seeder;

class SkillTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker =  \Faker\Factory::create();
        factory(App\Skill::class, 12)->create();
        for ($i = 0; $i<12; $i++){
            $user = App\User::all()->random(1)->first();
            $skills = App\Skill::all()->random(4);
            $data = [];
            foreach ($skills as $key => $skill){
                $user->skills()->sync([$skill->id => ['level' => $faker->numberBetween(1,30)]]);
            }
            #$user->skills()->sync($data);
        }
    }
}
