<?php

namespace App\Notifications;

class SendInvitation extends Notification
{
    protected $notification;

    /**
     * Get the mail representation of the notification.
     *
     * @param  $notification
     *
     * @return \App\Mail\Invitation
     */
    public function toMail($notification)
    {
        return new \App\Mail\Invitation($notification);
    }
}
