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

            Route::group(['prefix' => '{eventId}/sub-events'], function () {
                Route::get('/', 'SubEvents@all')->name('sub-events.all');

                Route::post('/', 'SubEvents@store')->name('sub-events.store');

                Route::group(
                    ['prefix' => '{subEventId}/invitations'],
                    function () {
                        Route::get('/', 'Invitations@all')->name(
                            'invitations.all'
                        );

                        Route::post('/', 'Invitations@store')->name(
                            'invitations.store'
                        );
                    }
                );
            });
        });

        Route::group(['prefix' => '/people'], function () {
            Route::get('/', 'People@all')->name('people.all');

            Route::post('/{id}', 'People@update')->name('people.update');

            Route::post('/', 'People@store')->name('people.store');
        });

        Route::group(['prefix' => '/roles'], function () {
            Route::get('/', 'Roles@all')->name('roles.all');

            Route::post('/{id}', 'Roles@update')->name('roles.update');

            Route::post('/', 'Roles@store')->name('roles.store');
        });

        Route::post('/import', 'Import@store')->name('import.store');
    });
});

Route::get('/test', 'HomeController@testRoute')->name('test');
