<?php

Route::group(['prefix' => '/roles'], function () {
    Route::get('/', 'Roles@all')->name('roles.all');

    Route::post('/{id}', 'Roles@update')->name('roles.update');

    Route::post('/', 'Roles@store')->name('roles.store');
});
