<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCostumeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('costumes', function (Blueprint $table) {
            $table->increments('id');

            $table->string('name');

            $table->text('description');

            $table->timestamps();
        });

        Schema::table('sub_events', function (Blueprint $table) {
            $table->integer('costume_id')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('costumes');

        Schema::table('sub_events', function (Blueprint $table) {
            $table->dropColumn('costume_id');
        });
    }
}
