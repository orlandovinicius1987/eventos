<?php

Auth::routes();

Route::get('/', 'Home@index')->name('home');

Route::group(
    [
        'prefix' => '/admin',
        'namespace' => 'Admin',
        'middleware' => ['auth', 'app.users'],
    ],
    function () {
        Route::get('/', 'Home@index')->name('admin.index');
    }
);

Route::group(
    [
        'prefix' => 'api/v1',
        'namespace' => 'Api',
        'middleware' => ['auth', 'app.users'],
    ],
    function () {
        Route::get('zipcode/{zipcode}', 'ZipCode@get')->name('api.zipcode.get');

        Route::get('/environment', 'Environment@data');

        Route::get('/dashboard', 'Dashboard@data');

        Route::group(['middleware' => 'auth'], function () {
            Route::group(['prefix' => '/sub-events'], function () {
                Route::get('/', 'SubEvents@associateableSubEvent')->name(
                    'sub-events.associateableSubEvent'
                );

                Route::get(
                    '/all-about-to-happen',
                    'SubEvents@allAboutToHappen'
                )->name('sub-events.all-about-to-happen');
            });

            Route::group(['prefix' => '/events'], function () {
                Route::get('/', 'Events@allHasSubEventsNotFinalized')->name(
                    'events.all'
                );

                Route::post('/', 'Events@store')->name('events.store');

                Route::post('/{id}', 'Events@update')->name('events.update');

                Route::group(['prefix' => '{eventId}/sub-events'], function () {
                    Route::get('/', 'SubEvents@all')->name('sub-events.all');

                    Route::post('/', 'SubEvents@store')->name(
                        'sub-events.store'
                    );

                    Route::post('/{id}', 'SubEvents@update')->name(
                        'sub-events.update'
                    );

                    Route::post('/{id}/confirm', 'SubEvents@confirm')->name(
                        'sub-events.confirm'
                    );

                    Route::post('/{id}/finalize', 'SubEvents@finalize')->name(
                        'sub-events.finalize'
                    );

                    Route::get('/{id}/download', 'SubEvents@download')->name(
                        'sub-events.download'
                    );

                    Route::group(
                        ['prefix' => '{subEventId}/invitations'],
                        function () {
                            Route::get('/', 'Invitations@all')->name(
                                'invitations.all'
                            );

                            Route::get(
                                '/invitables',
                                'Invitations@invitables'
                            )->name('invitations.invitables');

                            Route::post(
                                '/invitables',
                                'Invitations@invite'
                            )->name('invitations.invite');

                            Route::post(
                                '/invitables/move',
                                'Invitations@moveInvitations'
                            )->name('invitations.moveInvitations');

                            Route::post('/', 'Invitations@store')->name(
                                'invitations.store'
                            );

                            Route::post('/{id}', 'Invitations@update')->name(
                                'invitations.update'
                            );

                            Route::get(
                                '/{id}/download',
                                'Invitations@download'
                            )->name('invitations.download');

                            Route::get('/{id}/html', 'Invitations@html')->name(
                                'invitations.html'
                            );

                            Route::post(
                                '/{id}/un-invite',
                                'Invitations@unInvite'
                            )->name('invitations.un-invite');

                            Route::post(
                                '/{id}/mark-as-accepted',
                                'Invitations@markAsAccepted'
                            )->name('invitations.mark-as-accepted');

                            Route::post('/{id}/send', 'Invitations@send')->name(
                                'invitations.send'
                            );
                        }
                    );
                });
            });

            Route::group(['prefix' => '/people'], function () {
                Route::get('/', 'People@all')->name('people.all');

                Route::post('/validate-name', 'People@validateName')->name(
                    'people.validate-name'
                );

                Route::get('/{id}/photo', 'People@photo')->name('people.photo');

                Route::get('/{id}/phone-book', 'People@phoneBook')->name(
                    'people.phone-book'
                );

                Route::post('/', 'People@store')->name('people.store');

                Route::post('/{id}', 'People@update')->name('people.update');

                Route::group(
                    ['prefix' => '{personId}/person-institutions'],
                    function () {
                        Route::get('/', 'PersonInstitutions@allByPerson')->name(
                            'person-institutions.all-by-person'
                        );

                        Route::post('/', 'PersonInstitutions@store')->name(
                            'person-institutions.store'
                        );

                        Route::post('/{id}', 'PersonInstitutions@update')->name(
                            'person-institutions.update'
                        );

                        Route::group(
                            ['prefix' => '{personInstitutionId}/contacts'],
                            function () {
                                Route::get(
                                    '/',
                                    'Contacts@allByPersonInstitution'
                                )->name('contacts.all-by-person-institution');

                                Route::post('/', 'Contacts@store')->name(
                                    'contacts.store'
                                );

                                Route::post(
                                    '/{id}',
                                    'Contacts@updateForPersonInstitution'
                                )->name('contacts.update');
                            }
                        );

                        Route::group(
                            ['prefix' => '{personInstitutionId}/advisors'],
                            function () {
                                Route::get(
                                    '/',
                                    'PersonInstitutions@allAdvisorsByPersonInstitution'
                                )->name(
                                    'advisors.all-advisors-by-person-institution'
                                );

                                Route::post('/', 'Advisors@store')->name(
                                    'advisors.store'
                                );

                                Route::post('/{id}', 'Advisors@update')->name(
                                    'advisors.update'
                                );
                            }
                        );

                        Route::group(
                            ['prefix' => '{personInstitutionId}/addresses'],
                            function () {
                                Route::get(
                                    '/',
                                    'PersonInstitutionsAddresses@all'
                                )->name(
                                    'person-institutions-addresses.store.all'
                                );

                                Route::post(
                                    '/',
                                    'PersonInstitutionsAddresses@store'
                                )->name('person-institutions-addresses.store');

                                Route::post(
                                    '/{id}',
                                    'PersonInstitutionsAddresses@update'
                                )->name('person-institutions-addresses.update');
                            }
                        );
                    }
                );

                Route::group(
                    ['prefix' => '{personId}/categories'],
                    function () {
                        Route::get('/', 'PersonCategories@all')->name(
                            'person-categories.all'
                        );

                        Route::post(
                            '/{id}/un-categorize/',
                            'PersonCategories@unCategorize'
                        )->name('person-categories.un-categorize');

                        Route::post(
                            '/categorizables/',
                            'PersonCategories@categorize'
                        )->name('person-categories.categorize');

                        Route::get(
                            '/categorizables/',
                            'PersonCategories@categorizables'
                        )->name('person-categories.categorizables');

                        Route::post(
                            '/categorize/',
                            'PersonCategories@categorize'
                        )->name('person-categories.categorize');
                    }
                );
            });

            Route::group(['prefix' => '/roles'], function () {
                Route::get('/', 'Roles@all')->name('roles.all');

                Route::post('/{id}', 'Roles@update')->name('roles.update');

                Route::post('/', 'Roles@store')->name('roles.store');
            });

            Route::group(['prefix' => '/costumes'], function () {
                Route::get('/', 'Costumes@all')->name('costumes.all');
            });

            Route::group(['prefix' => '/sectors'], function () {
                Route::get('/', 'Sectors@all')->name('sectors.all');
            });

            Route::group(['prefix' => '/addresses'], function () {
                Route::get('/', 'Addresses@all')->name('addresses.all');

                Route::post('/{id}', 'Addresses@update')->name(
                    'addresses.update'
                );

                Route::post('/', 'Addresses@store')->name('addresses.store');
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

                Route::post('/', 'Institutions@store')->name(
                    'institutions.store'
                );
            });

            Route::group(['prefix' => '/contact-types'], function () {
                Route::get('/', 'ContactTypes@all')->name('contactTypes.all');

                Route::post('/{id}', 'ContactTypes@update')->name(
                    'contactTypes.update'
                );

                Route::post('/', 'ContactTypes@store')->name(
                    'contactTypes.store'
                );
            });

            Route::group(['prefix' => '/contacts'], function () {
                Route::get('/', 'Contacts@all')->name('contacts.all');

                Route::post('/{id}', 'Contacts@update')->name(
                    'contacts.update'
                );

                Route::post('/', 'ContactTypes@store')->name(
                    'contactTypes.store'
                );
            });

            Route::post('/import', 'Import@store')->name('import.store');

            Route::group(['prefix' => '/users'], function () {
                Route::post('/per-page/{size}', 'Users@perPage')->name(
                    'users.per-page'
                );
            });
        });
    }
);

Route::group(
    [
        'prefix' => '',
        'namespace' => 'Api',
        'middleware' => ['auth', 'app.users'],
    ],
    function () {
        Route::group(
            [
                'prefix' =>
                    '/events/{eventId}/sub-events/{subEventId}/invitations/{id}',
            ],
            function () {
                Route::post('/acceptable', 'Invitations@acceptable')->name(
                    'invitations.acceptable'
                );

                Route::get('/accept', 'Invitations@accept')->name(
                    'invitations.accept'
                );

                Route::get('/reject', 'Invitations@reject')->name(
                    'invitations.reject'
                );
            }
        );
    }
);
