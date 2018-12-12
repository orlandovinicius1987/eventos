<?php

namespace App\Listeners;

use App\Data\Repositories\Invitations;

class SendThankYouToInvitee extends Listener
{
    /**
     * Handle the event.
     *
     * @param  $event
     * @return void
     */
    public function handle($event)
    {
        app(Invitations::class)->sendThankYou($event->getInvitation());
    }
}
