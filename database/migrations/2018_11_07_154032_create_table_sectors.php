<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableSectors extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sectors', function (Blueprint $table) {
            $table->increments('id');

            $table->string('name');
            $table->string('color');

            $table->timestamps();
        });

        Schema::table('sub_events', function (Blueprint $table) {
            $table->integer('sector_id')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sectors');

        Schema::table('sub_events', function (Blueprint $table) {
            $table->dropColumn('sector_id');
        });
    }
}
