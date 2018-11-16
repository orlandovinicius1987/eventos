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

    private function registerLogging()
    {
        if ($this->app->environment(['staging', 'production'])) {
            $this->app->register(
                \Rollbar\Laravel\RollbarServiceProvider::class
            );
        }
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->registerLogging();
    }
}
