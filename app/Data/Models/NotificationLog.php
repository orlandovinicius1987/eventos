<?php

namespace App\Data\Models;

use Ramsey\Uuid\Uuid;

class NotificationLog extends Base
{
    /**
     * @var array
     */
    protected $fillable = [
        'invitation_id',
        'subject',
        'destination',
        'sent_at',
    ];

    protected $table = 'notification_log';

    public function save(array $options = [])
    {
        $this->uuid = $this->uuid ?? (string) Uuid::uuid4();

        return parent::save($options);
    }

    public function invitation()
    {
        return $this->belongsTo(Invitation::class);
    }
}
