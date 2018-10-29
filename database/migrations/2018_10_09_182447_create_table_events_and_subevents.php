<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableEventsAndSubEvents extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('events', function (Blueprint $table) {
            $table->increments('id');

            $table->string('name');

            $table->integer('client_id');

            $table->timestamps();
        });

        Schema::create('sub_events', function (Blueprint $table) {
            $table->increments('id');

            $table->string('name');
            $table->date('date');
            $table->time('time');

            $table->string('place')->nullable();

            $table->string('invitation_text')->nullable();
            $table->string('confirmation_text')->nullable();
            $table->string('credential_send_text')->nullable();

            $table->integer('event_id');

            $table->integer('confirmed_by')->nullable();
            $table->date('confirmed_at')->nullable();

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
        Schema::dropIfExists('sub_events');

        Schema::dropIfExists('events');
    }
}
