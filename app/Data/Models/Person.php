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
    ];

    protected $orderBy = ['name' => 'asc'];

    public function categories()
    {
        return $this->morphToMany(Category::class, 'categorizable');
    }
}
