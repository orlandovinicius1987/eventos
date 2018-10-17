<?php

namespace App\Data\Models;

class Person extends BaseWithClient
{
    /**
     * @var array
     */
    protected $fillable = [
        'name',
        'position',
        'title',
        'phone',
        'email',
        'zipcode',
        'street',
        'complement',
        'neighbourhood',
        'city',
        'state',
        'client_id'
    ];
}
