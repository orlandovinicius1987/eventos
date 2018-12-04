<?php

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

    Route::group(['prefix' => '{personId}/person-institutions'], function () {
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
            [
                'prefix' => '{personInstitutionId}/contacts',
            ],
            function () {
                Route::get('/', 'Contacts@allByPersonInstitution')->name(
                    'contacts.all-by-person-institution'
                );

                Route::post('/', 'Contacts@store')->name('contacts.store');

                Route::post(
                    '/{id}',
                    'Contacts@updateForPersonInstitution'
                )->name('contacts.update');
            }
        );

        Route::group(
            [
                'prefix' => '{personInstitutionId}/advisors',
            ],
            function () {
                Route::get(
                    '/',
                    'PersonInstitutions@allAdvisorsByPersonInstitution'
                )->name('advisors.all-advisors-by-person-institution');

                Route::post('/', 'Advisors@store')->name('advisors.store');

                Route::post('/{id}', 'Advisors@update')->name(
                    'advisors.update'
                );
            }
        );

        Route::group(
            [
                'prefix' => '{personInstitutionId}/addresses',
            ],
            function () {
                Route::get('/', 'PersonInstitutionsAddresses@all')->name(
                    'person-institutions-addresses.store.all'
                );

                Route::post('/', 'PersonInstitutionsAddresses@store')->name(
                    'person-institutions-addresses.store'
                );

                Route::post(
                    '/{id}',
                    'PersonInstitutionsAddresses@update'
                )->name('person-institutions-addresses.update');
            }
        );
    });

    Route::group(['prefix' => '{personId}/categories'], function () {
        Route::get('/', 'PersonCategories@all')->name('person-categories.all');

        Route::post(
            '/{id}/un-categorize/',
            'PersonCategories@unCategorize'
        )->name('person-categories.un-categorize');

        Route::post('/categorizables/', 'PersonCategories@categorize')->name(
            'person-categories.categorize'
        );

        Route::get('/categorizables/', 'PersonCategories@categorizables')->name(
            'person-categories.categorizables'
        );

        Route::post('/categorize/', 'PersonCategories@categorize')->name(
            'person-categories.categorize'
        );
    });
});
