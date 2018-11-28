<?php

namespace App\Notifications;

use App\Data\Models\Invitation;
use App\Data\Repositories\Invitations;

class SendCredential extends Notification
{
    protected $invitation;

    protected $credentials;

    /**
     * Create a new notification instance.
     *
     * @param $invitationId
     */
    public function __construct($invitationId)
    {
        $repository = app(Invitations::class)->setCurrentClientId(
            $invitationId
        );

        $this->invitation = $repository->findById($invitationId);

        $this->credentials = $repository->getAllInvitationsFor(
            $this->invitation
        );
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  Invitation $invitation
     *
     * @return \App\Mail\Credential
     */
    public function toMail($invitation)
    {
        return new \App\Mail\Credential($invitation);
    }
}
