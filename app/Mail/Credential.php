<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Container\Container;
use App\Data\Repositories\Invitations;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Mail\Mailer as MailerContract;

class Credential extends Mailable
{
    use Queueable, SerializesModels;

    protected $invitationFile;

    public $credentials;

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        info([
            "Invitations - Credentials ---- ",
            $this->notification->invitations(),
        ]);
        $this->credentials = $this->notification->invitations();

        $this->invitationFile = app(Invitations::class)->savePdf(
            $this->notification->invitation
        );

        $this->to($this->notification->routeNotificationForMail())
            ->subject($this->notification->subject)
            ->markdown('emails.credential')
            ->attach($this->invitationFile, [
                'as' => basename($this->invitationFile),
                'mime' => 'application/pdf',
            ]);

        return $this;
    }

    /**
     * Send the message using the given mailer.
     *
     * @param  \Illuminate\Contracts\Mail\Mailer  $mailer
     * @return void
     */
    public function send(MailerContract $mailer)
    {
        $this->withLocale($this->locale, function () use ($mailer) {
            Container::getInstance()->call([$this, 'build']);

            $mailer->send($this->buildView(), $this->buildViewData(), function (
                $message
            ) {
                $this->buildFrom($message)
                    ->buildRecipients($message)
                    ->buildSubject($message)
                    ->runCallbacks($message)
                    ->buildAttachments($message);
            });

            $this->unlinkPdf();
        });
    }

    protected function unlinkPdf()
    {
        unlink($this->invitationFile);
    }
}
