<?php

namespace App\Listeners;

class SendNotification extends Listener
{
    /**
     * Handle the event.
     *
     * @param $event
     * @return void
     */
    public function handle($event)
    {
        $event->getInvitation()->sendInvitation();
    }
}
