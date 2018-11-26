<?php

namespace App\Data\Models;

use App\Notifications\SendCredential;
use Ramsey\Uuid\Uuid;
use App\Notifications\SendInvitation;
use App\Data\Repositories\ContactTypes;
use Illuminate\Notifications\Notifiable;

class Invitation extends Base
{
    use Notifiable;

    /**
     * @var array
     */
    protected $fillable = [
        'sub_event_id',
        'person_institution_id',
        'accepted_at',
        'declined_at',
        'sent_at',
        'received_at',
        'checkin_at',
    ];

    protected $with = ['personInstitution', 'subEvent'];

    protected $orderBy = ['invitations.id' => 'asc'];

    protected $selectColumns = ['person_institutions.*', 'invitations.*'];

    protected $appends = ['client_id'];

    protected $joins = [
        'person_institutions' => [
            'person_institutions.id',
            '=',
            'invitations.person_institution_id',
        ],
    ];

    protected function canSendInvitation()
    {
        return is_null($this->sent_at);
    }

    public function personInstitution()
    {
        return $this->belongsTo(PersonInstitution::class);
    }

    public function subEvent()
    {
        return $this->belongsTo(SubEvent::class);
    }

    public function save(array $options = [])
    {
        $this->code = $this->code ?? $this->invitationCodeGenerator();

        $this->uuid = $this->uuid ?? (string) Uuid::uuid4();

        return parent::save($options);
    }

    protected function invitationCodeGenerator()
    {
        do {
            $code = collect(
                array_merge(
                    array_random(range('A', 'Z'), 4),
                    array_random(range(0, 9), 4)
                )
            )->implode('');
        } while ($this->where('code', $code)->first());

        return $code;
    }

    public function hasEmail()
    {
        return $this->personInstitution->contacts
            ->where(
                'contact_type_id',
                app(ContactTypes::class)->findByCode('email')->id
            )
            ->count() > 0;
    }

    public function related()
    {
        $related = [];

        foreach ($this->subEvent->event->subEvents as $subEvent) {
            foreach ($subEvent->invitations as $invitation) {
                if (
                    $this->person_institution_id ===
                        $invitation->person_institution_id &&
                    $invitation->id !== $this->id
                ) {
                    $related[] = $invitation;
                }
            }
        }

        return $related;
    }

    public function send()
    {
        if (!$this->canSendInvitation()) {
            return;
        }

        $this->accepted_at
            ? $this->notify(new SendCredential($this->id))
            : $this->notify(new SendInvitation($this->id));
    }

    public function getClientIdAttribute()
    {
        return $this->personInstitution->person->client_id;
    }

    /**
     * Route notifications for the mail channel.
     *
     * @return string
     */
    public function routeNotificationForMail()
    {
        return $this->personInstitution
            ->contacts()
            ->activeOnly()
            ->emailOnly()
            ->get()
            ->pluck('contact')
            ->toArray();
    }
}
