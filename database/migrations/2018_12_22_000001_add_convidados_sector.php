<?php

use App\Data\Models\Sector;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddConvidadosSector extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('populate_sectors', function (Blueprint $table) {
            foreach (
                [['name' => 'Convidados', 'color' => '#6F10B7']]
                as $item
            ) {
                Sector::updateOrCreate(
                    ['name' => $item['name']],
                    ['color' => $item['color']]
                );
            }
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
