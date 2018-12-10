<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;

class EventUpdated extends Broadcastable
{
    protected $event;

    /**
     * Create a new event instance.
     *
     * @param $event
     */
    public function __construct($event)
    {
        $this->event = $event;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new Channel('event.' . $this->event->id);
    }
}
