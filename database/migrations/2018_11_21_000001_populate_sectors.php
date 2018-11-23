<?php

use App\Data\Models\Sector;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class PopulateSectors extends Migration
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
                [
                    ['name' => 'Galeria', 'color' => '#739735'],
                    ['name' => 'Tribuna de Honra', 'color' => '#997220'],
                    ['name' => 'Plenário', 'color' => '#224792'],
                    ['name' => 'Estacionamento', 'color' => '#000000'],
                ]
                as $item
            ) {
                Sector::create($item);
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
