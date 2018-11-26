<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class SubEventsTextsTransformToText extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('sub_events', function (Blueprint $table) {
            $table
                ->text('invitation_text')
                ->nullable()
                ->change();
            $table
                ->text('confirmation_text')
                ->nullable()
                ->change();
            $table
                ->text('credential_send_text')
                ->nullable()
                ->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('sub_events', function (Blueprint $table) {
            $table
                ->string('invitation_text')
                ->nullable()
                ->change();
            $table
                ->string('confirmation_text')
                ->nullable()
                ->change();
            $table
                ->string('credential_send_text')
                ->nullable()
                ->change();
        });
    }
}
