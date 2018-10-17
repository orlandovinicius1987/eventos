<?php
namespace App\Data\Models;

class Address extends Base
{
    protected $table = 'addresses';

    /**
     * @var array
     */
    protected $fillable = [
        'zipcode',
        'street',
        'number',
        'complement',
        'neighbourhood',
        'city',
        'state',
        'addressable_id',
        'addressable_type',
        'client_id',
    ];

    public function addressable()
    {
        return $this->morphTo();
    }
}
