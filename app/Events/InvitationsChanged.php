<?php

namespace App\Events;

class InvitationsChanged extends Event
{
    public $eventId;

    public function __construct($eventId)
    {
        $this->eventId = $eventId;
    }
}
