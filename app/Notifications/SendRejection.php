<?php

namespace App\Notifications;

use App\Data\Models\Invitation;
use App\Data\Repositories\Invitations;

class SendRejection extends Notification
{
    protected $notification;

    /**
     * Get the mail representation of the notification.
     *
     * @param  Invitation $invitation
     *
     * @return \App\Mail\Rejection
     */
    public function toMail($notification)
    {
        return new \App\Mail\Rejection($notification);
    }
}
