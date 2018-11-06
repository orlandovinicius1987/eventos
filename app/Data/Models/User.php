<?php
namespace App\Data\Models;

use App\Data\Models\Traits\Selectable;
use Illuminate\Notifications\Notifiable;
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

    public function getClientIdAttribute()
    {
        return 1;
    }
}
