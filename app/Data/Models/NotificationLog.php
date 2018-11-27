<?php

namespace App\Data\Models;

class NotificationLog extends Base
{
    /**
     * @var array
     */
    protected $fillable = ['invitation_id', 'subject', 'destination'];

    protected $table = 'notification_log';
}
