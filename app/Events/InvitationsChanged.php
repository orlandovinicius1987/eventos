<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;

class InvitationsChanged extends Broadcastable
{
    protected $subEvent;

    /**
     * Create a new subEvent instance.
     *
     * @param $subEvent
     */
    public function __construct($subEvent)
    {
        $this->subEvent = $subEvent;
    }

    /**
     * Get the channels the subEvent should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new Channel('sub-event.' . $this->subEvent->id);
    }
}
