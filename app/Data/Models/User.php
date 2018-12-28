<?php

namespace App\Data\Models;

use App\Data\Models\Traits\Selectable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

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

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = ['password', 'remember_token'];

    public function getProfilesArrayAttribute()
    {
        return json_decode($this->profiles, true);
    }

    public function getPermissionsArrayAttribute()
    {
        return json_decode($this->permissions, true);
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
        return 1;
    }

    /**
     * @return array
     */
    public function getJoins()
    {
        return coollect([]);
    }

    public function getIsAdministratorAttribute()
    {
        return isset($this->profiles_array['Administrador']);
    }
}
