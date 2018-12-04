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

    public function setMessageId($id, $messageId)
    {
        $notification = $this->findById($id);

        $notification->message_id = $messageId;

        $notification->save();
    }

    public function registerMessageStatus($status, $data)
    {
        info($data);

        if (($message = $this->findByMessageId($data['message_id']))) {
            $message->{$status . '_at'} = $data['timestamp'];

            $message->save();

            if ($status === 'opened' || $status === 'clicked') {
                $message->markAsReceived();
            }

            info($message->toArray());
        }
    }
}
