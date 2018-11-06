<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AlterTableInvitationsCodeAndUUID extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('invitations', function (Blueprint $table) {
            $table->string('code_invitation')->nullable();
            $table->string('uuid_invitation')->nullable();

            $table->index(['code_invitation', 'uuid_invitation']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('invitations', function (Blueprint $table) {
            $table->dropColumn('code_invitation');
            $table->dropColumn('uuid_invitation');

            $table->dropIndex(['code_invitation', 'uuid_invitation']);
        });
    }
}
