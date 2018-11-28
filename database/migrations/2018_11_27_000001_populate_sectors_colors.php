<?php

use App\Data\Models\Sector;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class PopulateSectorsColors extends Migration
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
                    ['name' => 'Galeria', 'color' => '#455D9A'],
                    ['name' => 'Tribuna de Honra', 'color' => '#597532'],
                    ['name' => 'Tribuna Especial', 'color' => '#E8BC28'],
                    ['name' => 'Plenário', 'color' => '#65A43D'],
                    ['name' => 'Cerimonial', 'color' => '#B39963'],
                    ['name' => 'Imprensa', 'color' => '#C23334'],
                    ['name' => 'Segurança', 'color' => '#000000'],

                    ['name' => 'Estacionamento', 'color' => '#E65C21'],
                    ['name' => 'Funcionarios', 'color' => '#713379'],
                ]
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
