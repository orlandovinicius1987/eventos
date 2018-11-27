<?php

use App\Data\Models\Invitation;
use App\Services\DataImporter\Service;

Artisan::command('eventos:import {client} {file}', function ($client, $file) {
    app(Service::class)->importCSV(file_get_contents($file), $client, $this);
})->describe('Display an inspiring quote');

Artisan::command('eventos:send-mail', function () {
    Mail::to('acr@antoniocarlosribeiro.com')->send(
        new \App\Mail\Invitation(Invitation::find(567))
    );
})->describe('Display an inspiring quote');
