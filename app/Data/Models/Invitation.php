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

    protected $with = ['personInstitution'];

    protected $orderBy = ['invitations.id' => 'asc'];

    protected $selectColumns = ['person_institutions.*', 'invitations.*'];

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
        $this->code = $this->invitationCodeGenerator();
        $this->uuid = (string) Uuid::uuid4();

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
}
