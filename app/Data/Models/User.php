<?php

namespace App\Data\Models;

use App\Data\Models\Traits\Selectable;
use Illuminate\Notifications\Notifiable;
use App\Data\Repositories\Clients as ClientsRepository;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable, Selectable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'permissions',
        'profiles',
    ];

    protected $orderBy = ['name' => 'asc'];

    protected $appends = ['permissions_array'];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = ['password', 'remember_token'];

    private function filterProfilesForCurrentClient($permissions)
    {
        return collect(json_decode($permissions, true))
            ->filter(function ($value, $key) {
                list($client) = extract_client_and_permission($key);

                return $client === get_current_client()->slug;
            })
            ->toJson();
    }

    private function filterPermissionsForCurrentClient($permissions)
    {
        return collect(json_decode($permissions, true))
            ->mapWithKeys(function ($value, $key) {
                list($client, $permission) = extract_client_and_permission(
                    $key
                );

                return [
                    $key => ['client' => $client, 'permission' => $permission],
                ];
            })
            ->filter(function ($permission) {
                return $permission['client'] === get_current_client()->slug;
            })
            ->pluck('permission')
            ->values()
            ->unique()
            ->toArray();
    }

    public function getProfilesAttribute()
    {
        return $this->filterProfilesForCurrentClient(
            $this->attributes['profiles']
        );
    }

    public function getProfilesArrayAttribute()
    {
        return json_decode($this->profiles, true);
    }

    public function getPermissionsArrayAttribute()
    {
        return $this->filterPermissionsForCurrentClient($this->permissions);
    }

    protected function makeProfilesList()
    {
        $allowed = collect(
            json_decode($this->attributes['profiles'], true)
        )->mapWithKeys(function ($value, $key) {
            list($client, $profile) = extract_client_and_permission($key);

            return [$client => $profile];
        });

        return $allowed;
    }

    /**
     * Add webhook url for slack.
     *
     * @return \Illuminate\Config\Repository|mixed
     */
    public function routeNotificationForSlack()
    {
        return config('services.slack.webhook_url');
    }

    //TODO trabalhar futuramente com uma escolha de o sistema favorito , para que este seja o sistema inicial da aplicação
    public function getClientIdAttribute()
    {
        return array_first($this->allowed_clients)->id;
    }

    public function getAllowedClientsAttribute()
    {
        $allowed = $this->makeProfilesList();

        return app(ClientsRepository::class)
            ->all()
            ->filter(function ($client) use ($allowed) {
                return $this->isSuperUser($allowed) ||
                    array_has($allowed, $client->slug);
            });
    }

    /**
     * @param $allowed
     * @return bool
     */
    public function isSuperUser($allowed): bool
    {
        return isset($allowed['all']) && $allowed['all'] === 'administrador';
    }

    public function getIsSecurityAttribute()
    {
        return isset($this->profiles_array['Seguranca']) &&
            !isset($this->profiles_array['Administrador']);
    }

    /**
     * @return array
     */
    public function getJoins()
    {
        return coollect($this->joins);
    }

    public function getIsAdministratorAttribute()
    {
        return isset($this->profiles_array['Administrador']);
    }
}
