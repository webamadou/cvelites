<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddLangueToResumes extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public $table_name = 'resumes';
    public function up()
    {
        Schema::table($this->table_name, function (Blueprint $table) {
            if(!Schema::hasColumn($this->table_name, 'lang')) {
                $table->string('lang')->nullable(true)->default('français')->comment('This column is used to set the lang of a resume. A user can have many resume set in deferent lang');
            }
            if(!Schema::hasColumn($this->table_name, 'lang_code')) {
                $table->string('lang_code')->nullable(true)->default('fr');
            }
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table($this->table_name, function (Blueprint $table) {
            $table->dropColumn('lang');
            $table->dropColumn('lang_code');
        });
    }
}
