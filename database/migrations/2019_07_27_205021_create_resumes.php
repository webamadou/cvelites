<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateResumes extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('resumes', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->bigIncrements('id');
            $table->string('name')->default(null)->nullable(true);
            $table->string('lang')->default('français')->nullable(true);
            $table->string('lang_code')->default('fr')->nullable(true);
            $table->string('code')->default(null)->nullable(true);
            $table->bigInteger('user_id')->unsigned()->default(null)->nullable(true);
            $table->bigInteger('model_id')->unsigned()->default(null)->nullable(true);
            $table->string('model_name')->default(null)->nullable(true)->comment('We are cheating on this one');
            $table->bigInteger('theme_id')->unsigned()->default(null)->nullable(true);
            $table->string('theme_name')->default(null)->nullable(true)->comment('We are cheating on this one also');
            $table->bigInteger('font_id')->unsigned()->default(null)->nullable(true);
            $table->string('font_name')->default(null)->nullable(true)->comment('We are cheating on this one again');

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
        Schema::dropIfExists('resumes');
    }
}
