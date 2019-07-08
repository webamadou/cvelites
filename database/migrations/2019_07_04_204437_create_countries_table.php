<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCountriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public $table_name = 'countries';
    public function up()
    {
        if(Schema::hasTable($this->table_name))
            return;
        Schema::create($this->table_name, function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('iso', 15)->nullable(true)->default(null);
            $table->string('name');
            $table->string('nicename')->default(null)->nullable(true);
            $table->string('iso3')->default(null)->nullable(true);
            $table->string('numcode')->default(null)->nullable(true);
            $table->string('phonecode')->default(null)->nullable(true);
            $table->string('status')->default(null)->nullable(true);

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
        Schema::dropIfExists($this->table_name);
    }
}
