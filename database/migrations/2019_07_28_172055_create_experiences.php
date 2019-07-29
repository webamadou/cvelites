<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateExperiences extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('experiences', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->bigIncrements('id');
            $table->string('title')->nullable(true)->default(null);
            $table->text('description')->default(null)->nullable(true);
            $table->bigInteger('company_id')->unsigned()->default(null)->nullable(true);
            $table->bigInteger('resume_id')->unsigned()->default(null)->nullable(true);
            $table->dateTime('started_at')->default(null)->nullable(true);
            $table->dateTime('end_at')->default(null)->nullable(true);
            $table->unsignedInteger('still_there')->default(null)->nullable(true);
            $table->unsignedInteger('status')->default(null)->nullable(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('experiences');
    }
}
