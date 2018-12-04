<?php

Route::group(['prefix' => '/contact-types'], function () {
    Route::get('/', 'ContactTypes@all')->name('contactTypes.all');

    Route::post('/{id}', 'ContactTypes@update')->name('contactTypes.update');

    Route::post('/', 'ContactTypes@store')->name('contactTypes.store');
});
