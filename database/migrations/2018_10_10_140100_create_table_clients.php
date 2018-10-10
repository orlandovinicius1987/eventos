<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use App\Data\Models\Client;

class CreateTableClients extends Migration
{
    private $insertArray = ['Cerimonial', 'Forum'];
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clients', function (Blueprint $table) {
            $table->increments('id');

            $table->string('name');

            $table->timestamps();
        });

        collect($this->insertArray)->each(function ($item, $key) {
            $row = new Client();
            $row->name = $item;
            $row->save();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('clients');
    }
}
