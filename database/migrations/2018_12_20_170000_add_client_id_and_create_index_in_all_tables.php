<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddClientIdAndCreateIndexInAllTables extends Migration
{
    private $tables = [
        'contact_types',
        'contacts',
        'costumes',
        'invitations',
        'notifications',
        'person_institutions',
        'roles',
        'sectors',
        //Indexes
        'categories',
        'institutions',
        'sub_events',
    ];

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        foreach ($this->tables as $tab) {
            Schema::table($tab, function (Blueprint $table) use ($tab) {
                if (!Schema::hasColumn($tab, 'client_id')) {
                    $table
                        ->integer('client_id')
                        ->default(1)
                        ->unsigned();
                }
                $table->index('client_id');
            });

            Schema::table($tab, function (Blueprint $table) {
                $table
                    ->integer('client_id')
                    ->unsigned()
                    ->default(null)
                    ->change();
            });
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        foreach ($this->tables as $tab) {
            Schema::table($tab, function (Blueprint $table) use ($tab) {
                $table->dropIndex($tab . '_client_id_index');
                $table->dropColumn('client_id');
            });
        }
    }
}
