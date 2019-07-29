<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableUsers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('first_name')->nullable(true);
            $table->string('email')->unique();
            $table->string('telephone')->default(null)->nullable(true);
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->text('auth_token')->default(null)->nullable(true);
            $table->mediumText('avatar')->nullable(true)->default(null);
            $table->integer('gender')->nullable(true)->default(null);
            $table->string('title')->default(null)->nullable(true);
            $table->string('user_slug')->default(null)->nullable(true)->unique();
            $table->text('presentation')->default(null)->nullable(true);
            $table->date('birth_date')->default(null)->nullable(true);
            $table->string('birth_place')->default(null)->nullable(true);
            $table->bigInteger('country_id')->unsigned()->default(null)->nullable(true);
            $table->mediumText('address')->default(null)->nullable(true);
            $table->unsignedInteger('views')->default(null)->nullable(true);
            $table->unsignedInteger('status')->default(null)->nullable(true);

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
        Schema::dropIfExists('users');
    }
}
