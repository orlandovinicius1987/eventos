<?php

use App\Services\DataImporter\Service;
use Illuminate\Foundation\Inspiring;

/*
|--------------------------------------------------------------------------
| Console Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of your Closure based console
| commands. Each Closure is bound to a command instance allowing a
| simple approach to interacting with each command's IO methods.
|
*/

Artisan::command('eventos:import {client} {file}', function ($client, $file) {
    app(Service::class)->importCSV(file_get_contents($file), $client, $this);
})->describe('Display an inspiring quote');
