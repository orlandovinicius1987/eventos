<?php

namespace App\Mail;

class Rejection extends Mailable
{
    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $this->to($this->invitation->routeNotificationForMail())
            ->subject(
                'Convite Declinado - ' .
                    $this->invitation->subEvent->event->name
            )
            ->markdown('emails.rejection');

        return $this;
    }
}
