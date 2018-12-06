<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;

class SubEventCreated extends Event
{
    public $subEvent;

    /**
     * Create a new event instance.
     *
     * @param $subEvent
     */
    public function __construct($subEvent)
    {
        $this->subEvent = $subEvent;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new Channel('sub-event.' . $this->subEvent->id);
    }
}
