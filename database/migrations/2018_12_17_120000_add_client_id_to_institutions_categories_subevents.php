<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddClientIdToInstitutionsCategoriesSubEvents extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('institutions', function (Blueprint $table) {
            $table
                ->integer('client_id')
                ->default(1)
                ->unsigned();
        });

        Schema::table('categories', function (Blueprint $table) {
            $table
                ->integer('client_id')
                ->default(1)
                ->unsigned();
        });

        Schema::table('sub_events', function (Blueprint $table) {
            $table
                ->integer('client_id')
                ->default(1)
                ->unsigned();
        });

        Schema::table('institutions', function (Blueprint $table) {
            $table
                ->integer('client_id')
                ->unsigned()
                ->default(null)
                ->change();
        });

        Schema::table('categories', function (Blueprint $table) {
            $table
                ->integer('client_id')
                ->unsigned()
                ->default(null)
                ->change();
        });

        Schema::table('sub_events', function (Blueprint $table) {
            $table
                ->integer('client_id')
                ->unsigned()
                ->default(null)
                ->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('institutions', function (Blueprint $table) {
            $table->dropColumn('client_id');
        });

        Schema::table('categories', function (Blueprint $table) {
            $table->dropColumn('client_id');
        });

        Schema::table('sub_events', function (Blueprint $table) {
            $table->dropColumn('client_id');
        });
    }
}
