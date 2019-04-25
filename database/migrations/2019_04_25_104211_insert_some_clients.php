<?php

use Illuminate\Database\Migrations\Migration;
use App\Data\Models\Client;
use App\Data\Repositories\Clients;

class InsertSomeClients extends Migration
{
    private $insertArray = ['GDML', 'GDRFC'];

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        collect($this->insertArray)->each(function ($item, $key) {
            $row = new Client();
            $row->name = $item;
            $row->settings = json_encode(['signature' => null]);
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
        collect($this->insertArray)->each(function ($item, $key) {
            $row = app(Clients::class)->findByName($item);
            $row->delete();
        });
    }
}
