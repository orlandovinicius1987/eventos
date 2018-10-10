<?php
namespace App\Data\Models;

class Person extends Base
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
    ];
}
