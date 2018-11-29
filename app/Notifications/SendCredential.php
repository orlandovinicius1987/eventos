<?php

namespace App\Notifications;

class SendCredential extends Notification
{
    /**
     * Get the mail representation of the notification.
     *
     * @param  $notification
     *
     * @return \App\Mail\Credential
     */
    public function toMail($notification)
    {
        return new \App\Mail\Credential($notification);
    }
}
