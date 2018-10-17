<?php

use App\Services\CSV;
use App\Data\Models\Institution;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInstitutionsTable extends Migration
{
    private function import()
    {
        (new CSV())
            ->parse(file_get_contents(database_path('data/parties.csv')))
            ->each(function ($party) {
                Institution::create([
                    'name' => $party->name,
                    'initials' => $party->initials,
                    'party_number' => $party->number,
                    'is_party' => true,
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
        Schema::create('institutions', function (Blueprint $table) {
            $table->increments('id');

            $table->string('name');

            $table->string('initials')->nullable();

            $table->boolean('is_party')->default(false);

            $table->integer('party_number')->nullable();

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
        Schema::dropIfExists('institutions');
    }
}
