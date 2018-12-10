<?php

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group(
    [
        'prefix' => '/v1/notifications',
    ],
    function () {
        Route::post('/status/{status}', 'Notifications@status')->name(
            'notifications.status'
        );
    }
);
