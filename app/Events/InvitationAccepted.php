<?php

namespace App\Events;

use Illuminate\Queue\SerializesModels;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;

class InvitationAccepted
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

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
