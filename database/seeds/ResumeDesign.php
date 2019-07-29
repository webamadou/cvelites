<?php

use App\Skill;
use App\User;
use Illuminate\Database\Seeder;

class ResumeDesign extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //$faker =  \Faker\Factory::create();
        DB::table('fonts')->insert(
            [
                'name' => 'Roboto',
                'class_name' => 'Roboto',
                'sources' => 'Google',
                'status' => 1,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')
            ]
        );
        DB::table('themes')->insert(
            [
                'name' => 'default',
                'status' => 1,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')
            ]
        );
        DB::table('models')->insert(
            [
                'name' => 'default',
                'file_name' => 'saly',
                'status' => 1,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')
            ]
        );
    }
}
