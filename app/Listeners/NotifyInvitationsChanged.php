<?php

namespace App\Listeners;

use App\Events\InvitationsChanged;

class NotifyInvitationsChanged extends Listener
{
    /**
     * Handle the event.
     *
     * @param  $event
     * @return void
     */
    public function handle($event)
    {
        event(new InvitationsChanged($event->invitation->subEvent));
    }
}
