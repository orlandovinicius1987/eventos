<?php

namespace App\Providers;

use Laravel\Telescope\EntryType;
use Laravel\Telescope\Telescope;
use Illuminate\Support\Facades\Gate;
use Laravel\Telescope\IncomingEntry;
use Laravel\Telescope\Contracts\EntriesRepository;
use Laravel\Telescope\TelescopeApplicationServiceProvider;

class TelescopeServiceProvider extends TelescopeApplicationServiceProvider
{
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
