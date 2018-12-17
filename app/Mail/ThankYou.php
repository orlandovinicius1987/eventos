<?php

namespace App\Mail;

class ThankYou extends Mailable
{
    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $this->to($this->notification->routeNotificationForMail())
            ->subject($this->notification->subject)
            ->markdown('emails.thank-you');

        return $this;
    }
}
