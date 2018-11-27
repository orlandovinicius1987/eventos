<?php

namespace App\Data\Repositories;

use App\Data\Models\NotificationLog as NotificationLogModel;

class NotificationLog extends Repository
{
    /**
     * @var string
     */
    protected $model = NotificationLogModel::class;

    public function createNotifications($invitation, $destinations, $subject)
    {
        return coollect((array) $destinations)->each(function (
            $destination
        ) use ($invitation, $subject) {
            $this->create([
                'invitation_id' => $invitation->id,
                'subject' => $subject,
                'destination' => $destination->address,
            ]);
        });
    }

    public function logWasSent($notification)
    {
        $notification->sent_at = now();

        $notification->save();
    }
}
