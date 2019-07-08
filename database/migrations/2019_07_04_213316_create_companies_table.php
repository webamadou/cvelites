<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCompaniesTable extends Migration
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
            $table->string('name');
            $table->text('description')->default(null)->nullable(true);
            $table->string('legal_status')->nullable(true)->default(null);
            $table->string('address')->nullable(true)->default(null);
            $table->unsignedInteger('domain_id')->nullable(true)->default(null);
            $table->unsignedInteger('status')->nullable(true)->default(0);
            $table->date('exist_since')->nullable(true);

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
