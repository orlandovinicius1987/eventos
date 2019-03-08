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
            ->from($this->fromArray('address'), $this->fromArray('name'))
            ->subject($this->notification->subject)
            ->markdown('emails.thank-you');

        return $this;
    }
}
