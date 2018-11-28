<?php

namespace App\Notifications;

use App\Data\Models\Invitation;

class SendInvitation extends Notification
{
    protected $invitation;

    /**
     * Get the mail representation of the notification.
     *
     * @param  Invitation $invitation
     *
     * @return \App\Mail\Invitation
     */
    public function toMail($invitation)
    {
        return new \App\Mail\Invitation($invitation);
    }
}
