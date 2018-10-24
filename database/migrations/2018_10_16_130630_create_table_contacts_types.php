<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use App\Data\Models\ContactType;

class CreateTableContactsTypes extends Migration
{
    private $array = [
        [0, 'Celular', 'mobile'],
        [1, 'Whatsapp', 'whatsapp'],
        [2, 'E-mail', 'email'],
        [3, 'Telefone Fixo', 'phone'],
    ];

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contacts_types', function (Blueprint $table) {
            $table->increments('id');

            $table->string('name');
            $table->string('code');

            $table->timestamps();
        });

        collect($this->array)->each(function ($item, $key) {
            $row = new ContactType();
            $row->name = $item[1];
            $row->code = $item[2];
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
        Schema::dropIfExists('contacts_types');
    }
}
