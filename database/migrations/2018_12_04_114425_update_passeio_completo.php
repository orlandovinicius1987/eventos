<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use App\Data\Models\Costume as CostumeModel;
use App\Data\Repositories\Costumes as CostumesRepositories;

class UpdatePasseioCompleto extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $costume = app(CostumesRepositories::class)->findByName(
            'Social, passeio completo ou uniforme correspondente'
        );
        $costume->name = 'Passeio completo ou uniforme correspondente';
        $costume->save();
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        $costume = app(CostumesRepositories::class)->findByName(
            'Passeio completo ou uniforme correspondente'
        );
        $costume->name = 'Social, passeio completo ou uniforme correspondente';
        $costume->save();
    }
}
