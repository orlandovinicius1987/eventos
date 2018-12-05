<?php

Route::group(
    [
        'prefix' =>
            '/events/{eventId}/sub-events/{subEventId}/invitations/{invitationId}',
    ],
    function () {
        Route::get('/accept', 'Invitations@accept')->name('invitations.accept');

        Route::post('/markAsAccepted', 'Invitations@markAsAccepted')->name(
            'invitations.mark-as-accepted'
        );

        Route::get('/reject', 'Invitations@reject')->name('invitations.reject');

        Route::post('/markAsRejected', 'Invitations@markAsRejected')->name(
            'invitations.mark-as-rejected'
        );
    }
);
