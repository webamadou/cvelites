<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddDetailsToUsers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public $table_name = 'users';
    public function up()
    {
        Schema::table($this->table_name, function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->string('title')->default(null)->nullable(true);
            $table->text('presentation')->default(null)->nullable(true);
            $table->date('birth_date')->default(null)->nullable(true);
            $table->string('birth_place')->default(null)->nullable(true);
            $table->unsignedInteger('country_id')->default(null)->nullable(true);
            $table->string('address')->default(null)->nullable(true);
            $table->unsignedInteger('views')->default(null)->nullable(true);
            $table->unsignedInteger('status')->default(null)->nullable(true);
        });

        Schema::table($this->table_name,function(Blueprint $table){
            $table->foreign('country_id', 'user_country_model_country_foreign')
                ->references('id')->on('countries')
                ->onDelete('NO ACTION')
                ->onUpdate('NO ACTION');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropForeign('user_country_model_country_foreign');
            $table->dropColumn('title');
            $table->dropColumn('presentation');
            $table->dropColumn('birth_date');
            $table->dropColumn('birth_place');
            $table->dropColumn('country_id');
            $table->dropColumn('address');
            $table->dropColumn('views');
            $table->dropColumn('status');
        });
    }
}
