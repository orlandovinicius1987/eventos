<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableCategorized extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('categorized', function (Blueprint $table) {
            $table->increments('id');

            $table->integer('category_id')->unsigned();

            $table
                ->integer('categorizable_id')
                ->unsigned()
                ->index();

            $table->string('categorizable_type');

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
        Schema::dropIfExists('categorized');
        Schema::dropIfExists('politicals_parties');
    }
}
