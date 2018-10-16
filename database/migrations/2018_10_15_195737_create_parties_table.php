<?php

use App\Data\Models\Party;
use App\Services\CSV;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePartiesTable extends Migration
{
    private function import()
    {
        (new CSV())->parse(file_get_contents(database_path('data/parties.csv')))->slice(1)->each(function($party) {
            Party::create([
                'name' => $party[0],
                'initials' => $party[1],
                'number' => $party[2],
            ]);
        });
    }

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('parties', function (Blueprint $table) {
            $table->increments('id');

            $table->string('name');

            $table->integer('number');

            $table->string('initials');

            $table->timestamps();
        });

        $this->import();
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('parties');
    }
}
