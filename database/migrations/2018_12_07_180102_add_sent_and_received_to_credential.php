<?php

use App\Data\Models\Invitation;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddSentAndReceivedToCredential extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::table('invitations', function (Blueprint $table) {
            $table->timestamp('credentials_sent_at')->nullable();
            $table
                ->integer('credentials_sent_by_id')
                ->unsigned()
                ->nullable();

            $table->timestamp('credentials_received_at')->nullable();
        });
    }
    /**
     * Reverse the migrations.
     */
    public function down()
    {
        Schema::table('invitations', function (Blueprint $table) {
            $table->dropColumn('credentials_sent_at');
            $table->dropColumn('credentials_sent_by_id');

            $table->dropColumn('credentials_received_at');
        });
    }
}
