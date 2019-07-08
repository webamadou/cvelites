<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSchoolsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public $table_name = 'schools';
    public function up()
    {
        if(Schema::hasTable($this->table_name))
            return;
        Schema::create($this->table_name, function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->bigIncrements('id');
            $table->string('name');
            $table->text('description')->default(null)->nullable(true);
            $table->text('legal_status')->default(null)->nullable(true);
            $table->text('address')->default(null)->nullable(true);
            $table->unsignedInteger('country_id')->default(null)->nullable(true);

            $table->timestamps();
        });

        Schema::table($this->table_name, function(Blueprint $table) {
            $table->foreign('country_id')
                ->references('id')->on('countries')
                ->onUpdate('NO ACTION')
                ->onDelete('NO ACTION');
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
