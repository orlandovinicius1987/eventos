<?php

namespace App\Data\Models;

use function Sodium\crypto_box_publickey_from_secretkey;

class Person extends BaseWithClient
{
    /**
     * @var array
     */
    protected $fillable = [
        'name',
        'nickname',
        'title',
        'client_id',
        'birthdate',
        'cpf',
        'photo',
    ];

    protected $table = 'people';

    protected $orderBy = ['people.name' => 'asc'];

    protected $hidden = ['photo'];

    protected $appends = ['photoUrl'];

    /**
     * Columns which can be used on filter
     *
     * @var array
     */
    protected $filterableColumns = [
        'people.name',
        'people.nickname',
        'people.title',
    ];

    public function getSelectColumns()
    {
        return coollect($this->selectColumns);
    }

    public function person_institutions()
    {
        return $this->hasMany(PersonInstitution::class);
    }

    public function categories()
    {
        return $this->morphToMany(Category::class, 'categorizable');
    }

    public function getPhotoUrlAttribute()
    {
        return route('people.photo', $this->id);
    }

    /**
     * Filter users with no photo
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeHasNoPhoto($query)
    {
        return $query->whereNull('photo');
    }

    /**
     * Select all people that has institution
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopePresentInInstitution($query, $institution_id)
    {
        $query->whereIn('id', function ($query) use ($institution_id) {
            $query->select('person_id')->from('person_institutions');

            $query->join(
                'institutions',
                'institutions.id',
                'person_institutions.institution_id'
            );

            $query->where('institutions.id', '=', $institution_id);
        });

        return $query;
    }

    /**
     * Select all people that has role
     *
     * @param $query
     * @param $role_id
     * @return mixed
     */
    public function scopePresentInRole($query, $role_id)
    {
        $query->whereIn('id', function ($query) use ($role_id) {
            $query->select('person_id')->from('person_institutions');

            $query->join('roles', 'roles.id', 'person_institutions.role_id');

            $query->where('roles.id', '=', $role_id);
        });

        return $query;
    }
}
