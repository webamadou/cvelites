<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateExperiencesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public $table_name = "experiences";
    public function up()
    {
        if (Schema::hasTable($this->table_name))
            return;
        Schema::create($this->table_name, function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->bigIncrements('id');
            $table->string('title')->default(null)->nullable(true);
            $table->bigInteger('company_id');
            $table->bigInteger('user_id');
            $table->text('description')->default(null)->nullable(true);
            $table->date('started_at')->default(null)->nullable(true);
            $table->date('ended_at')->default(null)->nullable(true);
            $table->boolean('still_there')->default(false)->nullable(true);
            $table->unsignedInteger('status')->default(0)->nullable(true);

            $table->timestamps();
        });

        /*Schema::table($this->table_name,function(Blueprint $table){
            $table->foreign('company_id')->references('id')->on('companies')->onDelete('NO ACTION')->onUpdate('NO ACTION');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('NO ACTION')->onUpdate('NO ACTION');
        });*/
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
