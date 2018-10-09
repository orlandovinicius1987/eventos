<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableInvitation extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('invitation', function (Blueprint $table) {
            $table->increments('id');

            $table->integer('subevent_id');
            $table->integer('person_id');

            $table->timestamp('accepted_at')->nullable();
            $table->timestamp('declined_at')->nullable();

            $table->timestamp('sent_at')->nullable();
            $table->timestamp('received_at')->nullable();

            $table->timestamp('checkin_at')->nullable();

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
        Schema::dropIfExists('invitation');
    }
}
