<?php

namespace App\Listeners;

use App\Events\InvitationAccepted;
use App\Data\Repositories\Invitations;

class SendCredentials extends Listener
{
    /**
     * Handle the event.
     *
     * @param  InvitationAccepted  $event
     * @return void
     */
    public function handle(InvitationAccepted $event)
    {
        app(Invitations::class)
            ->findById($event->invitationId)
            ->sendCredentials();
    }
}
