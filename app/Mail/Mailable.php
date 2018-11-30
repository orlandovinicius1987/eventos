<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use App\Data\Repositories\Invitations;
use App\Data\Models\Notification;
use Illuminate\Mail\Mailable as IlluminateMailable;
use Illuminate\Contracts\Mail\Mailer as MailerContract;

class Mailable extends IlluminateMailable
{
    use Queueable, SerializesModels;

    /**
     * @var \App\Data\Models\Invitation
     */
    public $notification;

    public $invitation;

    protected $notifications;

    protected $repository;

    /**
     * Create a new message instance.
     *
     * @param Notification $notification
     */
    public function __construct($notification)
    {
        $this->notification = $notification;

        $this->invitation = $this->notification->invitation;

        $this->repository = app(Invitations::class);
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

        $this->notification->markAsSent();
    }
}
