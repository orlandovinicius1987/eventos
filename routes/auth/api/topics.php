<?php

Route::group(['prefix' => '/topics'], function () {
    Route::get('/', 'Topics@all')->name('topics.all');

    Route::post('/{id}', 'Topics@update')->name('topics.update');

    Route::post('/{id}', 'Topics@update')->name('topics.update');

    Route::post('/', 'Topics@store')->name('topics.store');
});
