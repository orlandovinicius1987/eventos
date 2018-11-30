<?php

namespace App\Listeners;

use App\Events\ContactWasCreated;
use App\Data\Repositories\Notifications;

class SendNotificationsToContact extends Listener
{
    /**
     * Handle the event.
     *
     * @param  ContactWasCreated  $event
     * @return void
     */
    public function handle(ContactWasCreated $event)
    {
        app(Notifications::class)->notifyContact($event->contact);
    }
}
