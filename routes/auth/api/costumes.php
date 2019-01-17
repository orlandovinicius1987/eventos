<?php

Route::group(['prefix' => '/costumes'], function () {
    Route::get('/', 'Costumes@all')->name('costumes.all');

    Route::post('/{id}', 'Costumes@update')->name('costumes.update');

    Route::post('/', 'Costumes@store')->name('costumes.store');
});
