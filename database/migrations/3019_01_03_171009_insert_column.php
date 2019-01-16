<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class InsertColumn extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function import()
    {
        (new CSV())
            ->parse(file_get_contents(database_path('data/parties.csv')))
            ->each(function ($party) {
                Institution::firstOrCreate([
                    'name' => $party->name,
                    'initials' => $party->initials,
                    'party_number' => $party->number,
                    'is_party' => true,
                ]);
            });
    }
}
