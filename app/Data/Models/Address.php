<?php
namespace App\Data\Models;

class Address extends BaseWithClient
{
    protected $table = 'addresses';

    protected $orderBy = ['street' => 'asc'];

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
        'latitude',
        'longitude',
    ];

    public function addressable()
    {
        return $this->morphTo();
    }
}
