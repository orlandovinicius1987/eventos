<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddMessageIdToNotifications extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('notifications', function (Blueprint $table) {
            $table
                ->string('message_id')
                ->nullable()
                ->index();

            $table->timestamp('clicked_at')->nullable();

            $table->timestamp('delivered_at')->nullable();

            $table->timestamp('failed_at')->nullable();

            $table->timestamp('opened_at')->nullable();

            $table->timestamp('reported_at')->nullable();

            $table->timestamp('unsubscribed_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('notifications', function (Blueprint $table) {
            $table->dropColumn('message_id');

            $table->dropColumn('clicked_at');

            $table->dropColumn('delivered_at');

            $table->dropColumn('failed_at');

            $table->dropColumn('opened_at');

            $table->dropColumn('reported_at');

            $table->dropColumn('unsubscribed_at');
        });
    }
}
