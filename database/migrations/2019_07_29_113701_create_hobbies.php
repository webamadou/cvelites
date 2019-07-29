<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateHobbies extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hobbies', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name')->nullable(true)->default(null);
            $table->string('icon')->nullable(true)->default(null);
            $table->bigInteger('resume_id')->unsigned()->nullable(true)->default(null);
            $table->unsignedInteger('status')->nullable(true)->default(1);
            $table->timestamps();
        });
        Schema::table('hobbies', function (Blueprint $table){
            $table->foreign('resume_id', 'resume_hobby_model_hobby_foreign')
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
        Schema::dropIfExists('hobbies');
    }
}
