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
            ->from('cerimonial@alerj.rj.gov.br', 'Cerimonial Alerj')
            ->subject(
                'Cancelamento de Convite - ' .
                    $this->invitation->subEvent->event->name
            )
            ->markdown('emails.rejection');

        return $this;
    }
}
