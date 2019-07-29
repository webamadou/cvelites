<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCompanies extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('companies', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->bigIncrements('id');
            $table->string('name')->default(null)->nullable(true);
            $table->text('description')->default(null)->nullable(true);
            $table->string('legal_status')->default(null)->nullable(true);
            $table->string('address')->default(null)->nullable(true);
            $table->bigInteger('domain_id')->unsigned()->default(null)->nullable(true);
            $table->timestamp('exist_since')->useCurrent(true)->nullable(true);
            $table->unsignedInteger('status')->default(date(1))->nullable(true);
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
        Schema::dropIfExists('companies');
    }
}
