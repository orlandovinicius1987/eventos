<?php

use App\Services\DataImporter\Service;

Artisan::command('eventos:import {client} {file}', function ($client, $file) {
    app(Service::class)->importCSV(file_get_contents($file), $client, $this);
})->describe('Display an inspiring quote');
