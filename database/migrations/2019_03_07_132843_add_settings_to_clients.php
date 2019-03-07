<?php

use App\Data\Models\Client;
use function GuzzleHttp\json_decode;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddSettingsToClients extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('clients', function (Blueprint $table) {
            $table->json('settings')->nullable();
        });

        Client::all()->each(function ($client) {
            $client->settings = json_encode([
                'signature' => $client->signature,
            ]);

            $client->save();
        });

        Schema::table('clients', function (Blueprint $table) {
            $table->dropColumn('signature')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('clients', function (Blueprint $table) {
            $table->text('signature')->nullable();
        });

        Client::all()->each(function ($client) {
            $settings = json_decode($client->settings, true);

            $client->signature = $settings['signature'];

            $client->save();
        });

        Schema::table('clients', function (Blueprint $table) {
            $table->dropColumn('settings');
        });
    }
}
