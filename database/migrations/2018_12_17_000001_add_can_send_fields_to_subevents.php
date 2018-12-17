<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddCanSendFieldsToSubevents extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::table('sub_events', function (Blueprint $table) {
            $table->boolean('send_invitations')->default(false);
            $table->boolean('send_credentials')->default(false);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down()
    {
        Schema::table('sub_events', function (Blueprint $table) {
            $table->dropColumn('send_invitations');
            $table->dropColumn('send_credentials');
        });
    }
}
