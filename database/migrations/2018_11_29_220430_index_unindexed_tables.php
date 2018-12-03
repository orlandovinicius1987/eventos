<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class IndexUnindexedTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('events', function (Blueprint $table) {
            $table->index('client_id');
        });

        Schema::table('sub_events', function (Blueprint $table) {
            $table->index('event_id');

            $table->index('associated_subevent_id');
        });

        Schema::table('people', function (Blueprint $table) {
            $table->index('client_id');

            $table->index('party_id');
        });

        Schema::table('invitations', function (Blueprint $table) {
            $table->index('sub_event_id');
            $table->index('person_institution_id');
        });

        Schema::table('audits', function (Blueprint $table) {
            $table->index('user_id');
        });

        Schema::table('addresses', function (Blueprint $table) {
            $table->index('client_id');
        });

        Schema::table('categorizables', function (Blueprint $table) {
            $table->index('category_id');
        });

        Schema::table('person_institutions', function (Blueprint $table) {
            $table->index('person_id');

            $table->index('institution_id');

            $table->index('role_id');
        });

        Schema::table('sub_events', function (Blueprint $table) {
            $table->index('costume_id');
        });

        Schema::table('sub_events', function (Blueprint $table) {
            $table->index('sector_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('events', function (Blueprint $table) {
            $table->dropIndex('events_client_id_index');
        });

        Schema::table('sub_events', function (Blueprint $table) {
            $table->dropIndex('sub_events_event_id_index');

            $table->dropIndex('sub_events_associated_subevent_id_index');
        });

        Schema::table('people', function (Blueprint $table) {
            $table->dropIndex('people_client_id_index');

            $table->dropIndex('people_party_id_index');
        });

        Schema::table('invitations', function (Blueprint $table) {
            $table->dropIndex('invitations_sub_event_id_index');

            $table->dropIndex('invitations_person_institution_id_index');
        });

        Schema::table('audits', function (Blueprint $table) {
            $table->dropIndex('audits_user_id_index');
        });

        Schema::table('addresses', function (Blueprint $table) {
            $table->dropIndex('addresses_client_id_index');
        });

        Schema::table('categorizables', function (Blueprint $table) {
            $table->dropIndex('categorizables_category_id_index');
        });

        Schema::table('person_institutions', function (Blueprint $table) {
            $table->dropIndex('person_institutions_person_id_index');

            $table->dropIndex('person_institutions_institution_id_index');

            $table->dropIndex('person_institutions_role_id_index');
        });

        Schema::table('sub_events', function (Blueprint $table) {
            $table->dropIndex('sub_events_costume_id_index');

            $table->dropIndex('sub_events_sector_id_index');
        });
    }
}
