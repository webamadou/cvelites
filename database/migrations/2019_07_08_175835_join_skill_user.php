<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class JoinSkillUser extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public $table_name = 'skill_user';
    public function up()
    {
        Schema::create($this->table_name, function(Blueprint $table){
            $table->bigIncrements('id');
            $table->bigInteger('skill_id')->default(null);
            $table->bigInteger('user_id')->default(null);
            $table->integer('level')->default(0)->nullable(true);
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
