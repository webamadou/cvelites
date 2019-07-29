<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEducations extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('educations', function (Blueprint $table) {
            $table->engine = "InnoDB";
            $table->bigIncrements('id');
            $table->string('title')->nullable(true)->default(null);
            $table->text('description')->nullable(true)->default(null);
            $table->bigInteger('school_id')->unsigned()->nullable(true)->default(null);
            $table->bigInteger('resume_id')->unsigned()->nullable(true)->default(null);
            $table->string('degree')->default(null)->nullable(true);
            $table->dateTime('graduationYear')->default(null)->nullable(true);
            $table->string('address')->default(null)->nullable(true);

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
        Schema::dropIfExists('educations');
    }
}
