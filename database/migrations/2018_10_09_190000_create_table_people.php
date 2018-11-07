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

            $table->string('nickname')->nullable();

            $table->string('title')->nullable();

            $table->integer('client_id');

            $table->integer('party_id')->nullable();

            $table->date('birthdate')->nullable();

            $table->string('cpf')->nullable();

            $table->text('photo')->nullable();

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
