<?php

namespace App\Notifications;

use App\Data\Models\Invitation;

class SendCredential extends Notification
{
    /**
     * Get the mail representation of the notification.
     *
     * @param  Invitation $invitation
     *
     * @return \App\Mail\Credential
     */
    public function toMail($invitation)
    {
        return new \App\Mail\Credential($invitation);
    }
}
