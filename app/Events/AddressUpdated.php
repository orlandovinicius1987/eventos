<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;

class AddressUpdated extends Broadcastable
{
    protected $address;

    /**
     * Create a new event instance.
     *
     * @param $institution
     */
    public function __construct($address)
    {
        $this->address = $address;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new Channel('address.' . $this->address->id);
    }
}
