<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;

class PersonInstitutionAddressesGotChanged extends Broadcastable
{
    public $personInstitution;

    /**
     * Create a new event instance.
     *
     * @param $personInstitution
     */
    public function __construct($personInstitution)
    {
        $this->personInstitution = $personInstitution;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new Channel(
            'person-institution.' . $this->personInstitution->id
        );
    }
}
