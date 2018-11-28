<?php

namespace App\Listeners;

use App\Data\Repositories\Invitations;
use App\Events\InvitationAccepted;
use App\Events\InvitationRejected;
use Illuminate\Contracts\Queue\ShouldQueue;

class SendRejection implements ShouldQueue
{
    /**
     * Handle the event.
     *
     * @param  InvitationAccepted  $event
     * @return void
     */
    public function handle(InvitationRejected $event)
    {
        app(Invitations::class)
            ->findById($event->invitationId)
            ->sendRejection();
    }
}
