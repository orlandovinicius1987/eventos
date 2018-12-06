<?php

namespace App\Listeners;

use App\Events\InvitationCreated;
use App\Events\SubEventsChanged;

class NotifySubEventsChanged extends Listener
{
    /**
     * Handle the event.
     *
     * @param  $event
     * @return void
     */
    public function handle($event)
    {
        event(
            new SubEventsChanged(
                $event->subEvent->event ?? $event->invitation->subEvent->event
            )
        );
    }
}
