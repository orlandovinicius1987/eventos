<?php

use App\Data\Models\Invitation;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddDeclinationColsToInvitations extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::table('invitations', function (Blueprint $table) {
            $table->timestamp('declination_sent_at')->nullable();

            $table->timestamp('declination_received_at')->nullable();
        });

        Invitation::all()->each(function ($invitation) {
            $invitation->declination_sent_at = $invitation->credentials_sent_at;

            $invitation->declination_received_at =
                $invitation->credentials_received_at;

            $invitation->credentials_sent_at = null;

            $invitation->credentials_received_at = null;

            $invitation->save();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down()
    {
        Schema::table('invitations', function (Blueprint $table) {
            $table->dropColumn('declination_sent_at');

            $table->dropColumn('declination_received_at');
        });
    }
}
