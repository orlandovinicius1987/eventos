<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddNotesColumnToPersonInstitutions extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::table('person_institutions', function (Blueprint $table) {
            $table->text('notes')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down()
    {
        Schema::table('person_institutions', function (Blueprint $table) {
            $table->dropColumn('notes');
        });
    }
}
