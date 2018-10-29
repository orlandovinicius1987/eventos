<?php

namespace App\Providers;

use Laravel\Telescope\EntryType;
use Laravel\Telescope\Telescope;
use Illuminate\Support\Facades\Gate;
use Laravel\Telescope\IncomingEntry;
use Illuminate\Support\ServiceProvider;
use Laravel\Telescope\Contracts\EntriesRepository;
use Laravel\Telescope\TelescopeApplicationServiceProvider;

class TelescopeServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->authorization();
    }

    /**
     * Configure the Telescope authorization services.
     *
     * @return void
     */
    protected function authorization()
    {
        if (class_exists(Telescope::class)) {
            $this->gate();

            Telescope::auth(function ($request) {
                return app()->environment('local') ||
                    Gate::check('viewTelescope', [$request->user()]);
            });
        }
    }

    private function getEnvironment()
    {
        try {
            return $this->app->environment();
        } catch (\Exception $exception) {
        }

        return 'local';
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        if (class_exists(Telescope::class)) {
            // Telescope::night();

            Telescope::filter(function (IncomingEntry $entry) {
                if ($this->getEnvironment() == 'local') {
                    return true;
                }

                return $entry->isReportableException() ||
                    $entry->isFailedJob() ||
                    $entry->isScheduledTask() ||
                    $entry->hasMonitoredTag();
            });
        }
    }

    /**
     * Register the Telescope gate.
     *
     * This gate determines who can access Telescope in non-local environments.
     *
     * @return void
     */
    protected function gate()
    {
        Gate::define('viewTelescope', function ($user) {
            return in_array($user->email, [
                //
            ]);
        });
    }
}
