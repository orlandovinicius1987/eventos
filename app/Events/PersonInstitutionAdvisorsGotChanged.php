<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;

class PersonInstitutionAdvisorsGotChanged extends Broadcastable
{
    protected $person;

    /**
     * Create a new event instance.
     *
     * @param $person
     */
    public function __construct($person)
    {
        $this->person = $person;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new Channel('person-institution.' . $this->person->id);
    }
}
