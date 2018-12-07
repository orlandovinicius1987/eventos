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
        $this->to($this->notification->routeNotificationForMail())
            ->subject($this->notification->subject)
            ->markdown('emails.invitation')
            ->attach(
                public_path('images/invitations/2019-01-posse-governador.jpg'),
                [
                    'as' => 'convite.jpg',
                    'mime' => 'application/jpg',
                ]
            );

        return $this;
    }
}
