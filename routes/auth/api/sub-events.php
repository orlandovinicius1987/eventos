<?php

Route::group(['prefix' => '/sub-events'], function () {
    Route::get('/', 'SubEvents@associateableSubEvent')->name(
        'sub-events.associateableSubEvent'
    );

    Route::get('/all-about-to-happen', 'SubEvents@allAboutToHappen')->name(
        'sub-events.all-about-to-happen'
    );

    Route::get('/invitation-image-url', 'SubEvents@makeInvitationImageUrl')->name('sub-events.make-invitation-image-url');
});
