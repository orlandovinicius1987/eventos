<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddConfirmationLimitToSubevents extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::table('sub_events', function (Blueprint $table) {
            $table->date('confirmations_end_date')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down()
    {
        Schema::table('sub_events', function (Blueprint $table) {
            $table->dropColumn('confirmations_end_date');
        });
    }
}
