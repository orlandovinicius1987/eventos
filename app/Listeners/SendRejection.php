<?php

namespace App\Listeners;

use App\Events\InvitationRejected;
use App\Data\Repositories\Invitations;

class SendRejection extends Listener
{
    /**
     * Handle the event.
     *
     * @param  InvitationRejected  $event
     * @return void
     */
    public function handle(InvitationRejected $event)
    {
        app(Invitations::class)
            ->findById($event->invitationId)
            ->sendRejection();
    }
}
