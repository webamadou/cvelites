<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDomains extends Migration
{
    public $table_name = 'domains';
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('domains', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->bigIncrements('id');
            $table->string('name')->default(null)->nullable(true);
            $table->text('description')->default(null)->nullable(true);
            $table->bigInteger('parent_id')->unsigned()->default(null)->nullable(true);
            $table->mediumText('address')->default(null)->nullable(true);
            $table->unsignedInteger('status')->default(1)->nullable(true);

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
        Schema::dropIfExists('domains');
    }
}
