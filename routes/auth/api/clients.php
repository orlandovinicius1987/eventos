<?php

Route::group(['prefix' => '/clients'], function () {
    Route::get('/{id}/settings', 'Clients@getSettings')->name(
        'clients.get-settings'
    );

    Route::post('/{clientId}/settings/{id}', 'Clients@updateSettings')->name(
        'clients.update-settings'
    );
});
