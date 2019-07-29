<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        $this->call(CountryTableSeeder::class);
        $this->call(UserTableSeeder::class);
        $this->call(ResumeDesign::class);//This will seed fonts models and themes
        $this->call(SchoolTypeTableSeeder::class);
        $this->call(DomainTableSeeder::class);
        $this->call(CompanyTableSeeder::class);
        $this->call(LanguageTableSeeder::class);
        $this->call(SchoolTableSeeder::class);
        $this->call(ResumeTableSeeder::class);
        $this->call(ExperienceTableSeeder::class);
        $this->call(AwardTableSeeder::class);
        $this->call(EducationTableSeeder::class);
        $this->call(SkillTableSeeder::class);
        $this->call(HobbyTableSeeder::class);
        //$this->call(TemplateTableSeeder::class);
        $this->call(AchievementTableSeeder::class);
    }
}
