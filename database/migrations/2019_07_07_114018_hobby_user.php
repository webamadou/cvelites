<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class HobbyUser extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public $table_name = 'hobby_user';

    public function up()
    {
        if (Schema::hasTable($this->table_name))
            return ;
        Schema::create($this->table_name, function (Blueprint $table){
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->bigInteger('hobby_id');
            $table->bigInteger('user_id');
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
