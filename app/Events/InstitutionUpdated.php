<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;

class InstitutionUpdated extends Broadcastable
{
    protected $institution;

    /**
     * Create a new event instance.
     *
     * @param $institution
     */
    public function __construct($institution)
    {
        $this->institution = $institution;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new Channel('institution.' . $this->institution->id);
    }
}
