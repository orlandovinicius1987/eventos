<?php

namespace App\Data\Repositories;

use App\Data\Models\Notification as NotificationModel;

class Notifications extends Repository
{
    /**
     * @var string
     */
    protected $model = NotificationModel::class;

    public function createNotifications($invitation, $destinations, $subject)
    {
        $this->create([
            'invitation_id' => $invitation->id,
            'subject' => $subject,
            'destination' => coollect((array) $destinations)
                ->pluck('address')
                ->implode(', '),
            'sent_at' => now(),
        ]);

        $invitation->sent_at = now();

        $invitation->save();
    }
}
