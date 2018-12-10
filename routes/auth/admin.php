<?php

Route::group(
    [
        'prefix' => '/admin',
        'namespace' => 'Admin',
        'middleware' => ['auth', 'app.users'],
    ],
    function () {
        require __DIR__ . '/web/home.php';
    }
);
