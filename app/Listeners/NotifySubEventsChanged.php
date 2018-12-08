<?php

namespace App\Listeners;

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
                $event->getSubEvent()->event ??
                    $event->getInvitation()->subEvent->event ??
                    $event->getNotification()->invitation->subEvent->event
            )
        );
    }
}
