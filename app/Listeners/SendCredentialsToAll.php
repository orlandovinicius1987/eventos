<?php

namespace App\Listeners;

use App\Data\Repositories\Events;
use App\Events\InvitationsChanged;

class SendCredentialsToAll extends Listener
{
    /**
     * Handle the event.
     *
     * @param  InvitationsChanged  $event
     * @return void
     */
    public function handle(InvitationsChanged $event)
    {
        app(Events::class)->SendCredentials($event->getSubEvent()->event->id);
    }
}
