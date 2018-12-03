<?php

namespace App\Listeners;

use App\Data\Repositories\Invitations;
use App\Events\InvitationAccepted;
use Illuminate\Contracts\Queue\ShouldQueue;

class SendCredentials implements ShouldQueue
{
    /**
     * Handle the event.
     *
     * @param  InvitationAccepted  $event
     * @return void
     */
    public function handle(InvitationAccepted $event)
    {
        app(Invitations::class)
            ->findById($event->invitationId)
            ->send();
    }
}
