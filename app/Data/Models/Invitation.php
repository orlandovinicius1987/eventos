<?php

namespace App\Data\Models;

class Invitation extends Base
{
    /**
     * @var array
     */
    protected $fillable = [
        'sub_event_id',
        'person_institution_id',
        'accepted_at',
        'declined_at',
        'sent_at',
        'received_at',
        'checkin_at',
    ];

    protected $with = ['personInstitution'];

    protected $orderBy = ['invitations.id' => 'asc'];

    public function personInstitution()
    {
        return $this->belongsTo(PersonInstitution::class);
    }

    public function subEvent()
    {
        return $this->belongsTo(SubEvent::class);
    }
}
