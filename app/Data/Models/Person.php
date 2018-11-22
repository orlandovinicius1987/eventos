<?php

namespace App\Data\Models;

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

    protected $orderBy = ['name' => 'asc'];

    protected $hidden = ['photo'];

    protected $appends = ['photoUrl'];

    /**
     * Columns which can be used on filter
     *
     * @var array
     */
    protected $filterableColumns = ['name', 'nickname', 'title'];

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
}
