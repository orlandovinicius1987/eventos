<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;

class ContactTypeUpdated extends Broadcastable
{
    protected $contactType;

    /**
     * Create a new event instance.
     *
     * @param $contactType
     */
    public function __construct($contactType)
    {
        $this->contactType = $contactType;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new Channel('contact-type.' . $this->contactType->id);
    }
}
