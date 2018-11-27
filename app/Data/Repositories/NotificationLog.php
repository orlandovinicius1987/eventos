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
