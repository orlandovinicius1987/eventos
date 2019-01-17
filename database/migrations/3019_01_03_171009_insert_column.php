<?php

use App\Services\CSV;
use App\Data\Models\Institution;
use Illuminate\Database\Migrations\Migration;

class InsertColumn extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
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

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
    }
}
