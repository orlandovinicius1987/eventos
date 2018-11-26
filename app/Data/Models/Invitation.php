<?php

namespace App\Data\Models;

use App\Data\Repositories\ContactTypes;
use Ramsey\Uuid\Uuid;

class Invitation extends Base
{
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

    protected $joins = [
        'person_institutions' => [
            'person_institutions.id',
            '=',
            'invitations.person_institution_id',
        ],
    ];

    public function personInstitution()
    {
        return $this->belongsTo(PersonInstitution::class);
    }

    public function subEvent()
    {
        return $this->belongsTo(SubEvent::class, 'sub_event_id');
    }

    public function save(array $options = [])
    {
        $this->code = $this->code ?? $this->invitationCodeGenerator();

        $this->uuid = $this->uuid ?? (string) Uuid::uuid4();

        return parent::save($options);
    }

    private function invitationCodeGenerator()
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

    /**
     * Scope a query to only include some person_institutions invitations
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeFilterByPersonInstitutions($query, $personInstitutions)
    {
        $idsArray = array_pluck($personInstitutions, 'id');

        return $query->whereIn('invitations.person_institution_id', $idsArray);
    }

    /**
     * Scope a query to only include invitations from subEvent
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeFilterBySubEvent($query, $subEventId)
    {
        $query->whereIn('invitations.id', function ($query) use ($subEventId) {
            $query->select('invitations.id')->from('invitations');

            $query->join(
                'sub_events',
                'invitations.sub_event_id',
                'sub_events.id'
            );

            $query->where('sub_events.id', '=', $subEventId);
        });

        return $query;
    }
}
