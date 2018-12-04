<?php

Route::group(['prefix' => '/sub-events'], function () {
    Route::get('/', 'SubEvents@associateableSubEvent')->name(
        'sub-events.associateableSubEvent'
    );

    Route::get('/all-about-to-happen', 'SubEvents@allAboutToHappen')->name(
        'sub-events.all-about-to-happen'
    );
});
