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
        return $this->belongsTo(SubEvent::class, 'sub_event_id');
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

    public function getViewVariables()
    {
        return [
            'empresa' => '',
            'convidado_nome' => $this->personInstitution->person->name,
            'convidado_nome_publico' =>
                $this->personInstitution->person->nickname,
            'evento_nome' => $this->subEvent->event->name,
            'subevento_nome' => $this->subEvent->name,
            'traje_nome' => $this->subEvent->costume
                ? $this->subEvent->costume->name
                : '',
            'traje_descricao' => $this->subEvent->costume
                ? $this->subEvent->costume->description
                : '',
            'data_evento' => $this->subEvent->date, //data do subevento
            'hora_evento' => $this->subEvent->time, //hora do subevento
            'convidado_tratamento' => $this->personInstitution->correct_title,
            'setor_nome' => $this->subEvent->sector
                ? $this->subEvent->sector->name
                : '',
            'local' => $this->subEvent->place,
            'convite_codigo' => $this->code,
            'instituicao_nome' => $this->personInstitution->institution->name,
            'cargo' => $this->personInstitution->role->name,
            'endereco_rua' => $this->subEvent->address
                ? $this->subEvent->address->street
                : '',
            'endereco_numero' => $this->subEvent->address
                ? $this->subEvent->address->number
                : '',
            'endereco_complemento' => $this->subEvent->address
                ? $this->subEvent->address->complement
                : '',
            'endereco_bairro' => $this->subEvent->address
                ? $this->subEvent->address->neighbourhood
                : '',
            'endereco_cidade' => $this->subEvent->address
                ? $this->subEvent->address->city
                : '',
            'endereco_uf' => $this->subEvent->address
                ? $this->subEvent->address->state
                : '',
            'endereco_cep' => $this->subEvent->address
                ? $this->subEvent->address->zipcode
                : '',
            'latitude' => $this->subEvent->address
                ? $this->subEvent->address->latitude
                : '',
            'longitude' => $this->subEvent->address
                ? $this->subEvent->address->longitude
                : '',
            'endereco_completo' => $this->subEvent->address
                ? $this->subEvent->address->full_address
                : '',
            'google_maps_link' => $this->subEvent->address
                ? $this->subEvent->address->google_maps_url
                : '',
            //            '{google_maps_imagem} (url - pensar)' => $invitation,
        ];
    }
}
