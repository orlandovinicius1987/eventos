<?php

Auth::routes();

Route::get('/', 'Home@index')->name('home');

Route::group(
    ['prefix' => '/admin', 'namespace' => 'Admin', 'middleware' => 'auth'],
    function () {
        Route::get('/', 'Home@index')->name('admin.index');
    }
);

Route::group(['prefix' => 'api/v1', 'namespace' => 'Api'], function () {
    Route::get('/environment', 'Environment@data');

    Route::group(['middleware' => 'auth'], function () {
        Route::group(['prefix' => '/events'], function () {
            Route::get('/', 'Events@all')->name('events.all');

            Route::post('/', 'Events@store')->name('events.store');

            Route::post('/{id}', 'Events@update')->name('events.update');

            Route::group(['prefix' => '{eventId}/sub-events'], function () {
                Route::get('/', 'SubEvents@all')->name('sub-events.all');

                Route::post('/', 'SubEvents@store')->name('sub-events.store');

                Route::post('/{id}', 'SubEvents@update')->name(
                    'sub-events.update'
                );

                Route::group(
                    ['prefix' => '{subEventId}/invitations'],
                    function () {
                        Route::get('/', 'Invitations@all')->name(
                            'invitations.all'
                        );

                        Route::post('/', 'Invitations@store')->name(
                            'invitations.store'
                        );

                        Route::post('/{id}', 'Invitations@update')->name(
                            'invitations.update'
                        );
                    }
                );
            });
        });

        Route::group(['prefix' => '/people'], function () {
            Route::get('/', 'People@all')->name('people.all');

            Route::post('/{id}', 'People@update')->name('people.update');

            Route::post('/', 'People@store')->name('people.store');

            Route::group(
                ['prefix' => '{eventId}/person-institutions'],
                function () {
                    Route::get('/', 'PersonInstitutions@all')->name(
                        'person-institutions.all'
                    );

                    Route::post('/', 'PersonInstitutions@store')->name(
                        'person-institutions.store'
                    );

                    Route::post('/{id}', 'PersonInstitutions@update')->name(
                        'person-institutions.update'
                    );
                }
            );
        });

        Route::group(['prefix' => '/roles'], function () {
            Route::get('/', 'Roles@all')->name('roles.all');

            Route::post('/{id}', 'Roles@update')->name('roles.update');

            Route::post('/', 'Roles@store')->name('roles.store');
        });

        Route::group(['prefix' => '/categories'], function () {
            Route::get('/', 'Categories@all')->name('categories.all');

            Route::post('/{id}', 'Categories@update')->name(
                'categories.update'
            );

            Route::post('/{id}', 'Categories@update')->name(
                'categories.update'
            );

            Route::post('/', 'Categories@store')->name('categories.store');
        });

        Route::group(['prefix' => '/institutions'], function () {
            Route::get('/', 'Institutions@all')->name('institutions.all');

            Route::post('/{id}', 'Institutions@update')->name(
                'institutions.update'
            );

            Route::post('/', 'Institutions@store')->name('institutions.store');
        });

        Route::group(['prefix' => '/contactTypes'], function () {
            Route::get('/', 'ContactTypes@all')->name('contactTypes.all');

            Route::post('/{id}', 'ContactTypes@update')->name(
                'contactTypes.update'
            );

            Route::post('/', 'ContactTypes@store')->name('contactTypes.store');
        });

        Route::post('/import', 'Import@store')->name('import.store');

        Route::group(['prefix' => '/users'], function () {
            Route::post('/per-page/{size}', 'Users@perPage')->name(
                'users.per-page'
            );
        });
    });
});

Route::get('/test', 'HomeController@testRoute')->name('test');
