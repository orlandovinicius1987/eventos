<?php

Route::group(['prefix' => '/sectors'], function () {
    Route::get('/', 'Sectors@all')->name('sectors.all');
});
