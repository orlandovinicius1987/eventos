<?php

Route::group(['prefix' => '/uploaded-files'], function () {
    Route::get('/', 'UploadedFiles@all')->name('uploaded-files.all');

    Route::post('/{id}', 'UploadedFiles@update')->name('uploaded-files.update');

    Route::post('/', 'UploadedFiles@store')->name('uploaded-files.store');
});
