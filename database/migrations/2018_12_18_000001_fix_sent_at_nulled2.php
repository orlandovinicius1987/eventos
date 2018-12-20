<?php

use App\Data\Models\Invitation;
use Illuminate\Database\Migrations\Migration;

class FixSentAtNulled2 extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        DB::table('migrations')
            ->where('migration', '2018_12_18_000001_fix_sent_at_nulled2')
            ->delete();

        Invitation::whereNull('sent_at')
            ->get()
            ->each(function ($invitation) {
                if (
                    ($notification = $invitation
                        ->notifications()
                        ->where('content_type', 'invitation')
                        ->orderBy('created_at', 'desc')
                        ->first())
                ) {
                    dump($invitation->code);

                    $invitation->sent_at = $notification->created_at;

                    $invitation->save();
                }
            });
    }

    /**
     * Reverse the migrations.
     */
    public function down()
    {
    }
}
