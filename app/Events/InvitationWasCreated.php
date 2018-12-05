<?php

namespace App\Events;

use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class InvitationWasCreated extends Event
{
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
}
