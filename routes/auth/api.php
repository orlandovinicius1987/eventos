<?php

Route::group(
    [
        'prefix' => '/api/v1',
        'namespace' => 'Api',
        'middleware' => ['auth', 'app.users']
    ],
    function () {
        require __DIR__ . '/api/addresses.php';
        require __DIR__ . '/api/categories.php';
        require __DIR__ . '/api/contact-types.php';
        require __DIR__ . '/api/contacts.php';
        require __DIR__ . '/api/costumes.php';
        require __DIR__ . '/api/dashboard.php';
        require __DIR__ . '/api/events.php';
        require __DIR__ . '/api/import.php';
        require __DIR__ . '/api/institutions.php';
        require __DIR__ . '/api/people.php';
        require __DIR__ . '/api/roles.php';
        require __DIR__ . '/api/sectors.php';
        require __DIR__ . '/api/sub-events.php';
        require __DIR__ . '/api/users.php';
        require __DIR__ . '/api/zip-code.php';
        require __DIR__ . '/api/topics.php';
        require __DIR__ . '/api/clients.php';
        require __DIR__ . '/api/uploaded-files.php';
        require __DIR__ . '/api/exportable.php';
    }
);
