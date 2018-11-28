<?php

namespace App\Listeners;

use App\Data\Repositories\Invitations;
use App\Events\InvitationAccepted;
use App\Events\NewEmailActived;
use Illuminate\Contracts\Queue\ShouldQueue;

class SendNewEmailActived implements ShouldQueue
{
    /**
     * Handle the event.
     *
     * @param  NewEmailActived  $event
     * @return void
     */
    public function handle(NewEmailActived $event)
    {
        app(Invitations::class)
            ->findById($event->invitationId)
            ->send('new-email-actived');
    }
}
