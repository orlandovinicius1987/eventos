<?php

namespace App\Mail;

class Invitation extends Mailable
{
    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $this->to($this->invitation->routeNotificationForMail())
            ->from('cerimonial@alerj.rj.gov.br', 'Cerimonial Alerj')
            ->subject('Convite - ' . $this->invitation->subEvent->event->name)
            ->markdown('emails.invitation');

        return $this;
    }
}
