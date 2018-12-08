<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;

class InvitationUpdated extends Broadcastable
{
    /**
     * Information about the invitation update.
     *
     * @var string
     */
    public $invitation;

    /**
     * Create a new event instance.
     *
     * @param $invitation
     */
    public function __construct($invitation)
    {
        $this->invitation = $invitation;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new Channel('invitation.' . $this->invitation->id);
    }
}
