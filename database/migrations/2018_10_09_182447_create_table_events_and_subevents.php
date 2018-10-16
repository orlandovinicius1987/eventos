<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableEventsAndSubevents extends Migration
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

            $table->integer('confirmed_by')->nullable();

            $table->date('confirmed_at')->nullable();

            $table->integer('client_id');

            $table->timestamps();
        });

        Schema::create('subevents', function (Blueprint $table) {
            $table->increments('id');

            $table->string('name');
            $table->date('date');
            $table->time('time');

            $table->string('invitation_text')->nullable();
            $table->string('confirmation_text')->nullable();
            $table->string('credential_send_text')->nullable();

            $table->integer('event_id');

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
        Schema::dropIfExists('subevents');

        Schema::dropIfExists('events');
    }
}
