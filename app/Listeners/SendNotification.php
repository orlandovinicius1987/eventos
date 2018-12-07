<?php

namespace App\Listeners;

use App\Events\InvitationCreated;

class SendNotification extends Listener
{
    /**
     * Handle the event.
     *
     * @param  InvitationCreated  $event
     * @return void
     */
    public function handle(InvitationCreated $event)
    {
        $event->invitation->sendInvitation();
        //$event->invitation->sendCredentials();
    }
}
