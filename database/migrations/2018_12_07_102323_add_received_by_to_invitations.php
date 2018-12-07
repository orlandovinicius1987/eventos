<?php

use App\Data\Models\Invitation;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddReceivedByToInvitations extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::table('invitations', function (Blueprint $table) {
            $table
                ->integer('received_by_id')
                ->unsigned()
                ->nullable();
        });

        Invitation::whereNull('received_at')
            ->whereNotNull('accepted_at')
            ->get()
            ->each(function ($invitation) {
                $invitation->received_at = $invitation->accepted_at;

                $invitation->save();
            });
    }
    /**
     * Reverse the migrations.
     */
    public function down()
    {
        Schema::table('invitations', function (Blueprint $table) {
            $table->dropColumn('received_by_id');
        });
    }
}
