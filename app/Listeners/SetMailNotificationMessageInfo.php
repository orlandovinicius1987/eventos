<?php

namespace App\Listeners;

use App\Data\Repositories\Notifications;
use Illuminate\Mail\Events\MessageSending;

class SetMailNotificationMessageInfo
{
    /**
     * Handle the event.
     *
     * @param  MessageSending  $message
     * @return void
     */
    public function handle($message)
    {
        app(Notifications::class)->setMessageId(
            $message->data['notification']->id,
            $message->message->getId()
        );
    }
}
