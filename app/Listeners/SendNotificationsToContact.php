<?php

namespace App\Listeners;

use App\Events\ContactCreated;
use App\Data\Repositories\Notifications;

class SendNotificationsToContact extends Listener
{
    /**
     * Handle the event.
     *
     * @param  ContactCreated  $event
     * @return void
     */
    public function handle(ContactCreated $event)
    {
        app(Notifications::class)->notifyContact($event->getContact());
    }
}
