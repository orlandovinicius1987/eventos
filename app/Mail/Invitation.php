<?php

namespace App\Mail;

class Invitation extends Mailable
{
    /**
     * @return mixed
     */
    protected function hasAttachment()
    {
        return $this->notification->invitation->subEvent->invitation_file;
    }
    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $filePath = public_path(
            $this->notification->invitation->subEvent->invitation_file
        );
        $this->to($this->notification->routeNotificationForMail())
            ->subject($this->notification->subject)
            ->markdown('emails.invitation');
        if ($this->hasAttachment()) {
            $this->attach(
                public_path(
                    $this->notification->invitation->subEvent->invitation_file
                ),
                [
                    'as' =>
                        'convite.' . pathinfo($filePath, PATHINFO_EXTENSION),
                    'mime' => mime_content_type($filePath),
                ]
            );
        }

        return $this;
    }
}
