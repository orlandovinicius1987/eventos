<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;

class RoleUpdated extends Broadcastable
{
    public $role;

    /**
     * Create a new event instance.
     *
     * @param $role
     */
    public function __construct($role)
    {
        $this->role = $role;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new Channel('role.' . $this->role->id);
    }
}
