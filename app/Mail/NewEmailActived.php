<?php

namespace App\Mail;

class NewEmailActived extends Mailable
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
            ->subject('Email Novo Adicionado')
            ->markdown('emails.new-email-actived');

        return $this;
    }
}
