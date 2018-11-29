<?php

namespace App\Data\Models;

use Ramsey\Uuid\Uuid;
use App\Data\Repositories\Invitations;
use Illuminate\Notifications\Notifiable;

class Notification extends Base
{
    use Notifiable;

    /**
     * @var array
     */
    protected $fillable = ['invitation_id', 'subject', 'destination'];

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

    public function markAsSent()
    {
        $this->sent_at = now();

        $this->save();
    }

    /**
     * Route notifications for the mail channel.
     *
     * @return string
     */
    public function routeNotificationForMail()
    {
        return $this->destination;
    }

    public function invitations()
    {
        app(Invitations::class)->getAllInvitationsFor($this->invitation);
    }
}
