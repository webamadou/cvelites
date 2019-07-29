<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableIndexes extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table("users",function(Blueprint $table){
            $table->foreign('country_id', 'user_country_model_country_foreign')
                ->references('id')->on('countries')
                ->onDelete('NO ACTION')
                ->onUpdate('NO ACTION');
        });
        Schema::table("resumes",function(Blueprint $table){
            $table->foreign('user_id', 'user_resume_model_resume_foreign')
                ->references('id')->on('users')
                ->onDelete('NO ACTION')
                ->onUpdate('NO ACTION');
            $table->foreign('theme_id', 'theme_resume_model_theme_foreign')
                ->references('id')->on('themes')
                ->onDelete('NO ACTION')
                ->onUpdate('NO ACTION');
            $table->foreign('model_id', 'model_resume_model_model_foreign')
                ->references('id')->on('models')
                ->onDelete('NO ACTION')
                ->onUpdate('NO ACTION');
            $table->foreign('font_id', 'font_resume_model_font_foreign')
                ->references('id')->on('fonts')
                ->onDelete('NO ACTION')
                ->onUpdate('NO ACTION');
        });
        Schema::table("experiences",function(Blueprint $table){
            $table->foreign('company_id', 'company_experiences_model_experiences_foreign')
                ->references('id')->on('companies')
                ->onDelete('NO ACTION')
                ->onUpdate('NO ACTION');
            $table->foreign('resume_id', 'resumes_experiences_model_experiences_foreign')
                ->references('id')->on('resumes')
                ->onDelete('NO ACTION')
                ->onUpdate('NO ACTION');
        });
        Schema::table("awards",function(Blueprint $table){
            $table->foreign('resume_id', 'resume_awards_model_awards_foreign')
                ->references('id')->on('resumes')
                ->onDelete('NO ACTION')
                ->onUpdate('NO ACTION');
        });
        Schema::table("educations",function(Blueprint $table){
            $table->foreign('resume_id', 'resume_educations_model_educations_foreign')
                ->references('id')->on('resumes')
                ->onDelete('NO ACTION')
                ->onUpdate('NO ACTION');
        });
        Schema::table("skills",function(Blueprint $table){
            $table->foreign('resume_id', 'resume_skill_model_skill_foreign')
                ->references('id')->on('resumes')
                ->onDelete('NO ACTION')
                ->onUpdate('NO ACTION');
        });
        Schema::table("resume_skill",function(Blueprint $table){
            $table->foreign('resume_id', 'join_table_resume_skill_resume_foreign')
                ->references('id')->on('resumes')
                ->onDelete('CASCADE')
                ->onUpdate('CASCADE');
            $table->foreign('skill_id', 'join_table_resume_skill_skill_foreign')
                ->references('id')->on('skills')
                ->onDelete('CASCADE')
                ->onUpdate('CASCADE');
        });
        Schema::table("language_resume",function(Blueprint $table){
            $table->foreign('resume_id', 'join_table_language_resume_resume_foreign')
                ->references('id')->on('resumes')
                ->onDelete('CASCADE')
                ->onUpdate('CASCADE');
            $table->foreign('language_id', 'join_table_language_resume_language_foreign')
                ->references('id')->on('languages')
                ->onDelete('CASCADE')
                ->onUpdate('CASCADE');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //return;
        Schema::disableForeignKeyConstraints();
        Schema::table("users", function (Blueprint $table){
            $table->dropForeign("user_country_model_country_foreign");
        });
        Schema::table("resumes", function (Blueprint $table){
            $table->dropForeign("user_resume_model_resume_foreign");
            $table->dropForeign("theme_resume_model_theme_foreign");
            $table->dropForeign("model_resume_model_model_foreign");
            $table->dropForeign("font_resume_model_font_foreign");
        });
        Schema::table("experiences", function (Blueprint $table){
            $table->dropForeign("company_experiences_model_experiences_foreign");
            $table->dropForeign("resumes_experiences_model_experiences_foreign");
        });
        Schema::table("awards", function (Blueprint $table){
            $table->dropForeign("resume_awards_model_awards_foreign");
        });
        Schema::table("educations", function (Blueprint $table){
            $table->dropForeign("resume_educations_model_educations_foreign");
        });
        Schema::table("skills", function (Blueprint $table){
            $table->dropForeign("resume_skill_model_skill_foreign");
        });
        Schema::table("resume_skill", function (Blueprint $table){
            $table->dropForeign( 'join_table_resume_skill_resume_foreign');
            $table->dropForeign('join_table_resume_skill_skill_foreign');
        });
        Schema::table("language_resume", function (Blueprint $table){
            $table->dropForeign('join_table_language_resume_language_foreign');
            $table->dropForeign( 'join_table_language_resume_resume_foreign');
        });
    }
}
