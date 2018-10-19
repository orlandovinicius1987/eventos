<?php

namespace App\Providers;

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
