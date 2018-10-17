<?php
namespace App\Data\Models;

class SubEvent extends Base
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
        'event_id'
    ];

    public function addresses()
    {
        return $this->morphMany('App\Data\Models\Address', 'addressable');
    }
}
