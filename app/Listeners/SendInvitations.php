<?php

namespace App\Listeners;

use App\Data\Repositories\Events;
use App\Events\InvitationsChanged;

class SendInvitations extends Listener
{
    /**
     * Handle the event.
     *
     * @param  InvitationsChanged  $event
     * @return void
     */
    public function handle(InvitationsChanged $event)
    {
        app(Events::class)->sendInvitations($event->getSubEvent()->event->id);
    }
}
