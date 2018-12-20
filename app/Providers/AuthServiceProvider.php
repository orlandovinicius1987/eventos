<?php

namespace App\Providers;

use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use App\Data\Repositories\Users as UsersRepository;
use App\Data\Repositories\SubEvents as SubEventsRepository;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        'App\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        Gate::define('canEdit', function ($user) {
            return app(UsersRepository::class)->userHasPermission(
                $user,
                'edit'
            );
        });

        Gate::define('canRead', function ($user) {
            return app(UsersRepository::class)->userHasPermission(
                $user,
                'read'
            );
        });

        Gate::define('canCreate', function ($user) {
            return app(UsersRepository::class)->userHasPermission(
                $user,
                'create'
            );
        });

        Gate::define('appUser', function ($user) {
            return app(UsersRepository::class)->userHasAnyPermission($user);
        });

        Gate::define('canReceptive', function ($user) {
            return app(UsersRepository::class)->userHasPermission(
                $user,
                'receptive'
            );
        });

        Gate::define('canSecurity', function ($user) {
            return app(UsersRepository::class)->userHasPermission(
                $user,
                'security'
            );
        });

        Gate::define('canMakeCheckinIn', function ($user, $subEventId) {
            $subEvent = app(SubEventsRepository::class)->findById($subEventId);
            if(!$subEvent->security_can_recept && $user->is_security){
                return false;
            }else{
                return true;
            }
        });
    }
}
