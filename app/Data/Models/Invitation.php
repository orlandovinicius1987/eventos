<?php

namespace App\Data\Models;

use Ramsey\Uuid\Uuid;
use App\Services\Markdown\Service;
use App\Notifications\SendRejection;
use App\Notifications\SendCredentials;
use App\Notifications\SendInvitation;
use App\Data\Repositories\ContactTypes;
use App\Data\Repositories\Notifications;
use App\Services\QrCode\Service as QrCode;

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

    protected $with = ['personInstitution', 'subEvent', 'notifications'];

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

    protected $viewVariables;

    protected $pathToQrCodes;

    private function canSendEmail()
    {
        return !is_null($this->subEvent->confirmed_at) && $this->hasEmail();
    }

    /**
     * @return mixed
     */
    protected function getEmails()
    {
        return $this->personInstitution->contacts->where(
            'contact_type_id',
            app(ContactTypes::class)->findByCode('email')->id
        );
    }

    private function getMailSubject()
    {
        return $this->hasBeenAccepted()
            ? 'Credencial para acesso ao evento '
            : ($this->hasBeenDeclined()
                ? 'Convite Declinado - ' . $this->subEvent->event->name
                : 'Convite - ' . $this->subEvent->event->name);
    }

    private function getMailable()
    {
        return $this->hasBeenAccepted()
            ? SendCredentials::class
            : ($this->hasBeenDeclined()
                ? SendRejection::class
                : SendInvitation::class);
    }

    /**
     * @return mixed
     */
    protected function hasBeenAccepted()
    {
        return filled($this->accepted_at);
    }

    /**
     * @return mixed
     */
    protected function hasBeenDeclined()
    {
        return filled($this->declined_at);
    }

    private function parseMarkdown($text)
    {
        return app(Service::class)->text($text);
    }

    public function personInstitution()
    {
        return $this->belongsTo(PersonInstitution::class);
    }

    public function subEvent()
    {
        return $this->belongsTo(SubEvent::class, 'sub_event_id');
    }

    public function getFormattedDateAttribute()
    {
        return $this->date->format('d/m/Y');
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
        return $this->getEmails()->count() > 0;
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
        if ($this->canSendEmail()) {
            $mailable = $this->getMailable();
            $this->getEmails()->each(function ($contact) use ($mailable) {
                $this->createNotification($contact->contact)->notify(
                    new $mailable()
                );
            });
        }
    }

    public function createNotification($destination)
    {
        return app(Notifications::class)->create([
            'invitation_id' => $this->id,
            'destination' => $destination,
            'subject' => $this->getMailSubject(),
        ]);
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

    public function getVariablesAttribute()
    {
        return $this->getViewVariables();
    }

    public function getViewVariables()
    {
        if ($this->viewVariables) {
            return $this->viewVariables;
        }

        $variables = [
            'site_url' => route('home'),

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
            'data_evento' => $this->subEvent->formatted_date, //data do subevento
            'hora_evento' => $this->subEvent->formatted_time, //hora do subevento
            'convidado_tratamento' => $this->personInstitution->correct_title,
            'setor_nome' => $this->subEvent->sector
                ? $this->subEvent->sector->name
                : '',
            'local' => $this->subEvent->place,
            'convite_codigo' => $this->code,
            'instituicao_nome' => $this->personInstitution->institution->name,
            'cargo' => $this->personInstitution->role->name,
            'endereco_rua' => $this->subEvent->address->street ?? '',
            'endereco_numero' => $this->subEvent->address->number ?? '',
            'endereco_complemento' =>
                $this->subEvent->address->complement ?? '',
            'endereco_bairro' => $this->subEvent->address->neighbourhood ?? '',
            'endereco_cidade' => $this->subEvent->address->city ?? '',
            'endereco_uf' => $this->subEvent->address->state ?? '',
            'endereco_cep' => $this->subEvent->address->zipcode ?? '',
            'latitude' => $this->subEvent->address->latitude ?? '',
            'longitude' => $this->subEvent->address->longitude ?? '',
            'endereco_completo' => $this->subEvent->address->full_address ?? '',
            'google_maps_link_url' =>
                $this->subEvent->address->google_maps_link_url ?? '',
            'google_maps_image_url' =>
                $this->subEvent->address->google_maps_image_url ?? '',
        ];

        $variables['invitation_text'] = $this->parseMarkdown(
            $this->replaceVariables(
                $this->subEvent->invitation_text,
                $variables
            )
        );

        $variables['credentials_text'] = $this->parseMarkdown(
            $this->replaceVariables(
                $this->subEvent->credentials_text,
                $variables
            )
        );

        $variables['thank_you_text'] = $this->parseMarkdown(
            $this->replaceVariables($this->subEvent->thank_you_text, $variables)
        );

        return $this->viewVariables = $variables;
    }

    public function replaceVariables($text, $variables)
    {
        $values = array_values($variables);

        $keys = array_map(function ($key) {
            return '{' . $key . '}';
        }, array_keys($variables));

        return str_replace($keys, $values, $text);
    }

    /**
     * Create QR code png file and return its path
     *
     * @return string
     */
    public function generateQrCodeFile()
    {
        $relativePath = 'qr-codes/';
        $fullPath = storage_path($relativePath);
        $this->pathToQrCodes = $fullPath;
        $fileName = $this->code . '.png';

        $qrCode = app(QrCode::class);
        $text = $this->code;
        $qrCode->generateFile($fileName, $fullPath, $text);

        return $fullPath . $fileName;
    }

    /**
     * Get QR code image in string
     *
     * @return mixed
     */
    public function getQrCodeAttribute()
    {
        $qrCode = app(QrCode::class);

        return $qrCode->generateString(
            route('invitations.show-via-qrcode', ['uuid' => $this->uuid])
        );
    }

    /**
     * Get QR code image in Blob URL
     *
     * @return mixed
     */
    public function getQrCodeBlobAttribute()
    {
        return base64_encode($this->qr_code);
    }

    /**
     * Not sent scope.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeNotSent($query)
    {
        return $query->whereNull('sent_at');
    }

    public function notifications()
    {
        return $this->hasMany(Notification::class);
    }
}
