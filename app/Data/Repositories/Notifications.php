<?php

namespace App\Data\Repositories;

use App\Data\Models\Notification as NotificationModel;
use App\Events\NotificationSent;

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
        if (($notification = $this->findByUuid($uuid))) {
            $notification->markAsReceived();
        } elseif (($invitation = app(Invitations::class)->findByUuid($uuid))) {
            $invitation->notifications->each(function ($notification) {
                $notification->markAsReceived();
            });
        }
    }

    public function notifyContact($contact)
    {
        if ($this->canReceiveNotifications($contact)) {
            app(Invitations::class)
                ->getAllInvitationsForContact($contact)
                ->each(function ($invitation) {
                    $invitation->sendInvitation();
                });
        }
    }

    public function setMessageId($id, $messageId)
    {
        $notification = $this->findById($id);

        $notification->message_id = $messageId;

        $notification->markAsSent();

        event(new NotificationSent($notification));
    }

    public function registerMessageStatus($status, $data)
    {
        if (($message = $this->findByMessageId($data['message_id']))) {
            $message->{$status . '_at'} = $data['timestamp'];

            $message->save();

            if ($status === 'opened' || $status === 'clicked') {
                $message->markAsReceived();
            }
        }
    }
}
