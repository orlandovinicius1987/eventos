<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddSubeventTexts extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('sub_events', function (Blueprint $table) {
            $table->renameColumn('confirmation_text', 'credentials_text');

            $table->renameColumn('credential_send_text', 'thank_you_text');

            $table->text('rejection_text')->nullable();
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
            $table->renameColumn('credentials_text', 'confirmation_text');

            $table->renameColumn('thank_you_text', 'credential_send_text');

            $table->dropColumn('rejection_text');
        });
    }
}
