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

    protected $table = 'people';

    protected $orderBy = ['people.name' => 'asc'];

    protected $hidden = ['photo'];

    protected $appends = ['photoUrl'];

    protected $selectColumns = ['people.*'];

    protected $joins = [
        'people as peopleAlias' => ['people.id', '=', 'peopleAlias.id'],
    ];

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

    //    /**
    //     * Select distinct id
    //     *
    //     * @param \Illuminate\Database\Eloquent\Builder $query
    //     * @return \Illuminate\Database\Eloquent\Builder
    //     */
    //    public function scopeDistinctId($query)
    //    {
    //        return $query->select(\DB::raw("DISTINCT ON (\"people\".\"id\") *"));
    //    }
}
