<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;

class PersonInstitutionContactsGotChanged extends Broadcastable
{
    public $personIntitution;

    /**
     * Create a new event instance.
     *
     * @param $personIntitution
     */
    public function __construct($personIntitution)
    {
        $this->personIntitution = $personIntitution;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new Channel('person-institution.' . $this->personIntitution->id);
    }
}
