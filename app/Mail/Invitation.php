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
                public_path($this->notification->invitation->subEvent->invitation_file),
                [
                    'as' => 'convite.png',
                    'mime' => 'image/png',
                ]
            );

        return $this;
    }
}
