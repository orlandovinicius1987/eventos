<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;

class InstitutionsChanged extends Event
{
    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new Channel('institutions');
    }
}
