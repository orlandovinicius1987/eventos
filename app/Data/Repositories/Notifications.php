<?php

namespace App\Data\Repositories;

use App\Data\Models\Notification as NotificationModel;

class Notifications extends Repository
{
    protected $model = NotificationModel::class;

    private function canReceiveNotifications($contact)
    {
        return $contact->canReceiveNotifications() &&
            $contact->contact_type_id ==
                app(ContactTypes::class)->findByCode('email')->id;
    }

    public function markAsReceived($uuid)
    {
        $this->findByUuid($uuid)->markAsReceived();
    }

    public function notifyContact($contact)
    {
        if ($this->canReceiveNotifications($contact)) {
            app(Invitations::class)
                ->getAllInvitationsForContact($contact)
                ->each(function ($invitation) {
                    $invitation->send();
                });
        }
    }
}
