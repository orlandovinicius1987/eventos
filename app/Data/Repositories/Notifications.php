<?php

namespace App\Data\Repositories;

use App\Data\Models\Notification as NotificationModel;

class Notifications extends Repository
{
    protected $model = NotificationModel::class;

    public function markAsReceived($uuid)
    {
        $this->findByUuid($uuid)->markAsReceived();
    }
}
