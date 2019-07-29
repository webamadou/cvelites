<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAchievements extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('achievements', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('resume_id')->unsigned()->default(null)->nullable(true);
            $table->string('title')->default(null)->nullable(true);
            $table->text('description')->nullable(true)->default(null);
            $table->integer('status')->default(0)->nullable(true);

            $table->timestamps();
        });
        Schema::table('achievements', function(Blueprint $table){
           $table->foreign('resume_id', 'resume_achievement_model_achievement_foreign')
               ->references('id')->on('resumes')
               ->onDelete('NO ACTION')
               ->onUpdate('NO ACTION');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::disableForeignKeyConstraints();

        Schema::dropIfExists('achievements');
    }
}
