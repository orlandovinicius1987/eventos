<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use App\Data\Models\Costume as CostumeModel;

class CreateCostumeTable extends Migration
{
    private $insertArray = ['Esporte fino', 'Social', 'A rigor'];

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('costumes', function (Blueprint $table) {
            $table->increments('id');

            $table->string('name');

            $table->timestamps();
        });

        foreach ($this->insertArray as $item) {
            $row = new CostumeModel();
            $row->name = $item;
            $row->save;
        }

        Schema::table('sub_events', function (Blueprint $table) {
            $table->integer('costume_id')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('costumes');

        Schema::table('sub_events', function (Blueprint $table) {
            $table->dropColumn('costume_id');
        });
    }
}
