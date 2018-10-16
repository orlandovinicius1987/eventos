<?php
namespace App\Data\Models;

class Subevent extends Base
{
    /**
     * @var array
     */
    protected $fillable = [
        'name',
        'date',
        'time',
        'zipcode',
        'street',
        'complement',
        'neighbourhood',
        'city',
        'state',
        'latitude',
        'longitude',
        'invitation_text',
        'confirmation_text',
        'credential_send_text',
        'client_id',
        'event_id',
    ];

    public function addresses()
    {
        return $this->morphMany('App\Data\Models\Address', 'addressable');
    }
}
