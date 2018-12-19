<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class RefactorThanks extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::table('invitations', function (Blueprint $table) {
            $table->renameColumn('thanked_at', 'thanks_sent_at');

            $table->timestamp('thanks_received_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down()
    {
        Schema::table('invitations', function (Blueprint $table) {
            $table->renameColumn('thanks_sent_at', 'thanked_at');

            $table->dropColumn('thanks_received_at');
        });
    }
}
