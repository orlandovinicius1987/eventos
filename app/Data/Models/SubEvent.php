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
        'place',
        'invitation_text',
        'confirmation_text',
        'credential_send_text',
        'event_id',
    ];

    protected $with = ['event'];

    public function address()
    {
        return $this->morphTo(Address::class, 'addressable');
    }

    public function event()
    {
        return $this->belongsTo(Event::class);
    }
}
