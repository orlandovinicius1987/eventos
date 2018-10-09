<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTablePeople extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('people', function (Blueprint $table) {
            $table->increments('id');

            $table->string('name');
            $table->string('position');
            $table->string('title');
            $table->string('phone')->unique();
            $table->string('email')->unique();

            $table
                ->string('zipcode')
                ->nullable()
                ->index();

            $table
                ->string('street')
                ->nullable()
                ->index();

            $table
                ->string('complement')
                ->nullable()
                ->index();

            $table
                ->string('neighbourhood')
                ->nullable()
                ->index();

            $table
                ->string('city')
                ->nullable()
                ->index();

            $table
                ->string('state')
                ->nullable()
                ->index();

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
        Schema::dropIfExists('people');
    }
}
