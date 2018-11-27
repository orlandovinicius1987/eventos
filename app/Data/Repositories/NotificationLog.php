<?php

namespace App\Data\Repositories;

use App\Data\Models\NotificationLog as NotificationLogModel;

class NotificationLog extends Repository
{
    /**
     * @var string
     */
    protected $model = NotificationLogModel::class;

    public function log($invitation, $destination, $subject)
    {
        coollect((array) $destination)->each(function ($destination) use (
            $invitation,
            $subject
        ) {
            info([
                'invitation_id' => $invitation->id,
                'subject' => $subject,
                'destination' => $destination->address,
            ]);

            $this->create([
                'invitation_id' => $invitation->id,
                'subject' => $subject,
                'destination' => $destination->address,
            ]);
        });
    }
}
