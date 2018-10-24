<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePersonInstitutions extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('person_institutions', function (Blueprint $table) {
            $table->increments('id');

            $table->integer('person_id')->unsigned();

            $table->integer('institution_id')->unsigned();

            $table->integer('role_id')->unsigned();

            $table
                ->integer('advised_id')
                ->unsigned()
                ->nullable();

            $table->string('title')->nullable();

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
        Schema::dropIfExists('person_institutions');
    }
}
