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
            $table->integer('confirmed_by');
            $table->date('confirmed_at');

            $table->integer('client_id');

            $table->timestamps();
        });

        Schema::create('subevents', function (Blueprint $table) {
            $table->increments('id');

            $table->string('name');
            $table->date('date');
            $table->time('time');
            $table->text('address');

            $table->float('latitude');
            $table->float('longitude');

            $table->text('invitation_text');
            $table->text('confirmation_text');
            $table->text('credential_send_text');

            $table->integer('client_id');

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
        Schema::dropIfExists('events');
        Schema::dropIfExists('subevents');
    }
}
