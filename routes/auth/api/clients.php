<?php

Route::group(['prefix' => '/clients'], function () {
    Route::get('/', 'Clients@current')->name('clients.current');

    Route::post('/{id}', 'Clients@update')->name('clients.update');
});
