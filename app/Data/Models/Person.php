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

    public function addresses()
    {
        return $this->morphMany('App\Data\Models\Address', 'addressable');
    }

    public function contacts()
    {
        return $this->morphMany('App\Data\Models\Contact', 'contactable');
    }
}
