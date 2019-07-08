<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class JoinLanguageResume extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public $table_name = "language_resume";
    public function up()
    {
        Schema::create($this->table_name, function (Blueprint $table){
           $table->bigIncrements('id');
           $table->bigInteger('language_id');
           $table->bigInteger('resume_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists($this->table_name);
    }
}
