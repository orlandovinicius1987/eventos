<?php

Route::group(['prefix' => '/sectors'], function () {
    Route::get('/', 'Sectors@all')->name('sectors.all');

    Route::post('/{id}', 'Sectors@update')->name('sectors.update');

    Route::post('/', 'Sectors@store')->name('sectors.store');
});
