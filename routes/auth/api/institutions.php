<?php

Route::group(['prefix' => '/institutions'], function () {
    Route::get('/', 'Institutions@all')->name('institutions.all');

    Route::post('/{id}', 'Institutions@update')->name('institutions.update');

    Route::post('/', 'Institutions@store')->name('institutions.store');
});
