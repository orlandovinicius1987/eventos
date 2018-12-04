<?php

Route::group(['prefix' => '/addresses'], function () {
    Route::get('/', 'Addresses@all')->name('addresses.all');

    Route::post('/{id}', 'Addresses@update')->name('addresses.update');

    Route::post('/', 'Addresses@store')->name('addresses.store');
});
