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
    Route::post('events-search/', 'EventsSearch@search')->name(
        'api.eventsSearch.search'
    );
});

Route::get('/test', 'HomeController@testRoute')->name('test');
