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
        'event_id',
    ];

    protected $with = ['event'];

    public function addresses()
    {
        return $this->morphMany(Address::class, 'addressable');
    }

    public function event()
    {
        return $this->belongsTo(Event::class);
    }
}
