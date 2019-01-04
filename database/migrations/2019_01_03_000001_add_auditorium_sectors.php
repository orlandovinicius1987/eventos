<?php

use App\Data\Models\Sector;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddAuditoriumSectors extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        foreach (
            [
                ['name' => 'Auditório Andréia Zito', 'color' => '#532234'],
                [
                    'name' => 'Auditório Senador Nelson Carneiro',
                    'color' => '#17533A',
                ],
            ]
            as $item
        ) {
            Sector::updateOrCreate(
                ['name' => $item['name']],
                ['color' => $item['color']]
            );
        }
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
