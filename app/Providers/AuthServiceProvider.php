<?php

namespace App\Providers;

use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use App\Data\Repositories\Users as UsersRepository;

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
    }
}
