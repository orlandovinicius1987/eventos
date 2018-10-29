<?php

namespace App\Providers;

use Horizon;
use Illuminate\Support\ServiceProvider;
use PragmaRX\Coollection\Package\Coollection;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Coollection::setRaiseExceptionOnNull(false);

        Horizon::auth(function ($request) {
            return true;
        });
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
