<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddUsersByToSubevents extends Migration
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
                ->integer('created_by_id')
                ->unsigned()
                ->nullable();

            $table
                ->integer('updated_by_id')
                ->unsigned()
                ->nullable();

            $table
                ->integer('accepted_by_id')
                ->unsigned()
                ->nullable();

            $table
                ->integer('sent_by_id')
                ->unsigned()
                ->nullable();

            $table
                ->integer('declined_by_id')
                ->unsigned()
                ->nullable();
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
            $table->dropColumn('created_by_id');

            $table->dropColumn('updated_by_id');

            $table->dropColumn('accepted_by_id');

            $table->dropColumn('sent_by_id');

            $table->dropColumn('declined_by_id');
        });
    }
}
