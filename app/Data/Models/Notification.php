<?php

namespace App\Data\Models;

use App\Data\Repositories\Invitations;
use Illuminate\Notifications\Notifiable;
use Ramsey\Uuid\Uuid;

class Notification extends BaseWithClient
{
    use Notifiable;

    /**
     * @var array
     */
    protected $fillable = [
        'invitation_id',
        'subject',
        'destination',
        'content_type',
    ];

    protected $table = 'notifications';

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

        $this->sent_by_id = $this->getCurrentAuthenticatedUserId();

        $this->save();

        $this->invitation->markAsSent($this->content_type);
    }

    public function markAsReceived()
    {
        if (!$this->received_at) {
            $this->received_at = now();

            $this->save();

            $this->invitation->markAsReceived(
                'automatically',
                $this->content_type
            );
        }
    }

    public function routeNotificationForMail()
    {
        return $this->destination;
    }

    public function invitations()
    {
        return app(Invitations::class)->getAllInvitationsFor($this->invitation);
    }
}
