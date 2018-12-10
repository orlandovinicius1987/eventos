<?php

namespace App\Listeners;

use App\Events\EventUpdated;

class NotifyEventsChanged extends Listener
{
    /**
     * Handle the event.
     *
     * @param  $event
     * @return void
     */
    public function handle($event)
    {
        event(new EventUpdated($event->getSubEvent()->event));
    }
}
