<?php

Route::group(['prefix' => '/contacts'], function () {
    Route::get('/', 'Contacts@all')->name('contacts.all');

    Route::post('/{id}', 'Contacts@update')->name('contacts.update');

    Route::post('/', 'ContactTypes@store')->name('contactTypes.store');
});
