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

    public function categories()
    {
        return $this->morphToMany(Category::class, 'categorizable');
    }

    public function getPhotoUrlAttribute()
    {
        return route('people.photo', $this->id);
    }
}
