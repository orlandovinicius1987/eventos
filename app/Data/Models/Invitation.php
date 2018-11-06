<?php

namespace App\Data\Models;

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

    protected $with = ['personInstitution'];

    protected $orderBy = ['invitations.id' => 'asc'];

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
        $this->code_invitation = $this->codeInvitationGenerator();
        $this->uuid_invitation = (string) Uuid::uuid4();
        return parent::save($options);
    }

    private function codeInvitationGenerator()
    {
        do {
            $codeInvitation = collect(
                array_merge(
                    array_random(range('A', 'Z'), 3),
                    array_random(range(0, 9), 3)
                )
            )->implode('');
        } while ($this->where('code_invitation', $codeInvitation)->first());

        return $codeInvitation;
    }
}
