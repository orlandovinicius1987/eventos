<?php

namespace App\Notifications;

class SendThankYou extends Notification
{
    protected $notification;

    /**
     * Get the mail representation of the notification.
     *
     * @param  $notification
     *
     * @return \App\Mail\ThankYou
     */
    public function toMail($notification)
    {
        return new \App\Mail\ThankYou($notification);
    }
}
