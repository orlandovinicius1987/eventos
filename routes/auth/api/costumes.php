<?php

Route::group(['prefix' => '/costumes'], function () {
    Route::get('/', 'Costumes@all')->name('costumes.all');
});
