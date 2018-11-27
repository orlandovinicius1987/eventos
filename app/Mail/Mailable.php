<?php

namespace App\Mail;

use App\Data\Repositories\NotificationLog;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Mail\Mailable as IlluminateMailable;
use Illuminate\Contracts\Mail\Mailer as MailerContract;

class Mailable extends IlluminateMailable
{
    use Queueable, SerializesModels;

    /**
     * @var \App\Data\Models\Invitation
     */
    public $invitation;

    /**
     * Create a new message instance.
     *
     * @param $invitation
     */
    public function __construct($invitation)
    {
        $this->invitation = $invitation;
    }

    protected function logNotificationWasSent()
    {
        app(NotificationLog::class)->log(
            $this->invitation,
            $this->to,
            $this->subject
        );
    }

    /**
     * Send the message using the given mailer.
     *
     * @param  \Illuminate\Contracts\Mail\Mailer  $mailer
     * @return void
     */
    public function send(MailerContract $mailer)
    {
        parent::send($mailer);

        $this->logNotificationWasSent();
    }
}