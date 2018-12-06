<?php

namespace App\Listeners;

use App\Events\InvitationWasCreated;

class SendNotification extends Listener
{
    /**
     * Handle the event.
     *
     * @param  InvitationWasCreated  $event
     * @return void
     */
    public function handle(InvitationWasCreated $event)
    {
        $event->invitation->sendInvitation();
        //$event->invitation->sendCredentials();
    }
}
