<?php

Route::group(['prefix' => '/categories'], function () {
    Route::get('/', 'Categories@all')->name('categories.all');

    Route::post('/{id}', 'Categories@update')->name('categories.update');

    Route::post('/{id}', 'Categories@update')->name('categories.update');

    Route::post('/', 'Categories@store')->name('categories.store');
});
