<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddConfigsToResumes extends Migration
{
    /**
     * Run the migrations.
     *
     * This migration help us add fields that will save the configuration for a resume
     * @return void
     */
    public function up()
    {
        Schema::table('resumes', function (Blueprint $table) {
            $table->boolean('hobbies')->default(false)->nullable(true);
            $table->boolean('skills')->default(false)->nullable(true);
            $table->boolean('experiences')->default(false)->nullable(true);
            $table->boolean('achievements')->default(false)->nullable(true);
            $table->boolean('educations')->default(false)->nullable(true);
            $table->boolean('awards')->default(false)->nullable(true);
            $table->boolean('certificates')->default(false)->nullable(true);
            $table->unsignedInteger('model_id')->default(null)->nullable(true)->comment('We are not sure yet if we will create a table models. We will use a models name until we create the model table. That is silly I know :)');
            $table->unsignedInteger('theme_id')->default(null)->nullable(true)->comment('same comment as model_id :)');
            $table->unsignedInteger('font_id')->default(null)->nullable(true)->comment('same comment as model_id :)');
            $table->string('model_name')->default('saly')->nullable(true);
            $table->string('theme_name')->default(null)->nullable(true);
            $table->string('font_name')->default(null)->nullable(true);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('resumes', function (Blueprint $table) {
            $table->dropColumn('hobbies');
            $table->dropColumn('skills');
            $table->dropColumn('experiences');
            $table->dropColumn('achievements');
            $table->dropColumn('educations');
            $table->dropColumn('awards');
            $table->dropColumn('certificates');
            $table->dropColumn('model_id');
            $table->dropColumn('theme_id');
            $table->dropColumn('font_id');
            $table->dropColumn('model_name');
            $table->dropColumn('theme_name');
            $table->dropColumn('font_name');
        });
    }
}
