<?php

namespace App\Data\Models;

use Ramsey\Uuid\Uuid;
use App\Events\InviteeCheckedIn;
use App\Events\InvitationUpdated;
use App\Events\InvitationAccepted;
use App\Events\InvitationRejected;
use App\Services\Markdown\Service;
use App\Notifications\SendThankYou;
use App\Notifications\SendRejection;
use App\Notifications\SendInvitation;
use App\Notifications\SendCredentials;
use App\Data\Repositories\ContactTypes;
use App\Data\Repositories\Notifications;
use App\Services\QRCode\Service as QRCode;

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

    protected $with = [
        'personInstitution',
        'subEvent',
        'notifications',
        'checkedInBy',
    ];

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

    protected function extractEmails($contactList)
    {
        return collect(preg_split('/[\\,;\/ |]/', trim($contactList)))
            ->map(function ($email) {
                return trim($email);
            })
            ->filter(function ($email) {
                return filter_var($email, FILTER_VALIDATE_EMAIL);
            });
    }

    protected function extractEmailsFromContact($contacts)
    {
        $emails = [];

        $contacts->each(function ($contact) use (&$emails) {
            $this->extractEmails($contact->contact)->each(function (
                $email
            ) use (&$emails) {
                $emails[] = $email;
            });
        });

        return collect($emails);
    }

    protected function makeSubjectText($notification): string
    {
        switch ($notification) {
            case SendCredentials::class:
                return 'CREDENCIAL DE ACESSO';
            case SendRejection::class:
                return 'CONVITE DECLINADO';
            case SendInvitation::class:
                return 'CONVITE';
            case SendThankYou::class:
                return 'NOSSO OBRIGADO';
        }

        throw new \Exception(
            'Notification class not supported: ' . $notification
        );
    }

    protected function makeNotificationContentType($notification): string
    {
        switch ($notification) {
            case SendCredentials::class:
                return 'credentials';
            case SendRejection::class:
                return 'rejection';
            case SendInvitation::class:
                return 'invitation';
            case SendThankYou::class:
                return 'thanks';
        }

        throw new \Exception(
            'Notification class not supported: ' . $notification
        );
    }

    protected function makeSubject($notification)
    {
        return "{$this->subEvent->event->name} - " .
            $this->makeSubjectText($notification);
    }

    /**
     * @param $how
     */
    protected function setReceivedAt($how)
    {
        $this->received_at = $this->received_at
            ? $this->received_at
            : ($how === 'manual'
                ? null
                : now());
    }

    protected function canSendEmail()
    {
        return filled($this->subEvent->confirmed_at) && $this->hasEmail();
    }

    protected function dispatchMails($notification)
    {
        $this->getEmails()->each(function ($email) use ($notification) {
            $this->createNotificationModel($email, $notification)->notify(
                new $notification()
            );
        });
    }

    /**
     * @return mixed
     */
    protected function getEmails()
    {
        return $this->extractEmailsFromContact(
            $this->personInstitution->contacts
                ->where('is_active', true)
                ->where(
                    'contact_type_id',
                    app(ContactTypes::class)->findByCode('email')->id
                )
        );
    }

    /**
     *
     * Accepts a message
     *
     * @param $how
     */
    public function accept($how)
    {
        $this->accepted_at = now();
        $this->accepted_by_id =
            $how === 'manual' ? $this->getCurrentAuthenticatedUserId() : null;

        $this->setReceivedAt($how);

        $this->declined_at = null;
        $this->declined_by_id = null;

        $this->save();

        event(new InvitationAccepted($this));
        event(new InvitationUpdated($this));
    }

    /**
     *
     * Declines a message
     *
     * @param $how
     */
    public function reject($how)
    {
        $this->declined_at = now();
        $this->declined_by_id =
            $how === 'manual' ? $this->getCurrentAuthenticatedUserId() : null;

        $this->accepted_at = null;
        $this->accepted_by_id = null;

        $this->setReceivedAt($how);

        $this->save();

        event(new InvitationRejected($this));
        event(new InvitationUpdated($this));
    }

    /**
     *
     * Declines a message
     *
     * @param $how
     */
    public function received($how)
    {
        $this->setReceivedAt($how);

        $this->save();
    }

    /**
     * @return mixed
     */
    protected function hasCheckedIn()
    {
        return filled($this->checkin_at);
    }

    /**
     * @return mixed
     */
    protected function hasBeenThanked()
    {
        return filled($this->thanked_at);
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

    protected function parseMarkdown($text)
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

        if (blank($this->id)) {
            $this->created_by_id = $this->getCurrentAuthenticatedUserId();
        }

        if (filled($this->id)) {
            $this->updated_by_id = $this->getCurrentAuthenticatedUserId();
        }

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

    public function sendThankYou()
    {
        if (
            $this->canSendEmail() &&
            $this->hasCheckedIn() &&
            !$this->hasBeenThanked()
        ) {
            $this->dispatchMails(SendThankYou::class);
        }
    }

    public function sendInvitation($force = false)
    {
        if (
            $this->canSendEmail() &&
            $this->subEventCanReceiveInvitations() &&
            ($force || (!$this->hasBeenDeclined() && !$this->hasBeenAccepted()))
        ) {
            $this->dispatchMails(SendInvitation::class);
        }
    }

    public function sendCredentials($force = false)
    {
        if (
            $this->canSendEmail() &&
            $this->subEventCanReceiveCredentials() &&
            ($force || (!$this->hasBeenDeclined() && $this->hasBeenAccepted()))
        ) {
            $this->dispatchMails(SendCredentials::class);
        }
    }

    public function sendRejection($force = false)
    {
        if ($this->canSendEmail() && ($force || $this->hasBeenDeclined())) {
            $this->dispatchMails(SendRejection::class);
        }
    }

    public function createNotificationModel($destination, $notification)
    {
        return app(Notifications::class)->create([
            'invitation_id' => $this->id,
            'destination' => $destination,
            'subject' => $this->makeSubject($notification),
            'content_type' => $this->makeNotificationContentType($notification),
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
        return $query->whereIn(
            'invitations.person_institution_id',
            array_pluck($personInstitutions, 'id')
        );
    }

    /**
     * Scope a query to only include invitations from subEvent
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @param $subEventId
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

            'uuid_convite' => $this->uuid,
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

        $variables['rejection_text'] = $this->parseMarkdown(
            $this->replaceVariables($this->subEvent->rejection_text, $variables)
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
    public function generateQRCodeFile()
    {
        $relativePath = 'qr-codes/';

        $fullPath = storage_path($relativePath);

        $fileName = $this->code . '.png';

        $qrCode = app(QRCode::class);

        $text = $this->code;

        $qrCode->generateFile($fileName, $fullPath, $text);

        return $fullPath . $fileName;
    }

    /**
     * Get QR code image in string
     *
     * @return mixed
     */
    public function getQRCodeAttribute()
    {
        $qrCode = app(QRCode::class);

        return $qrCode->generateString(
            route('invitations.show-via-qrcode', ['uuid' => $this->uuid])
        );
    }

    /**
     * Get QR code image in Blob URL
     *
     * @return mixed
     */
    public function getQRCodeBlobAttribute()
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

    /**
     * Invitation sent scope.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeSent($query)
    {
        return $query->whereNotNull('sent_at');
    }

    /**
     * Not sent credential scope.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeCredentialsNotSent($query)
    {
        return $query->whereNull('credentials_sent_at');
    }

    public function notifications()
    {
        return $this->hasMany(Notification::class)->orderBy(
            'created_at',
            'desc'
        );
    }

    public function markAsDone(
        $what,
        $content_type = 'invitation',
        $how = 'automatically'
    ) {
        $prefix = $content_type === 'invitation' ? '' : 'credentials_';

        if (!$this->{$prefix . $what . '_at'}) {
            $this->{$prefix . $what . '_at'} = now();

            $this->{$prefix . $what . '_by_id'} =
                $how === 'manual'
                    ? $this->getCurrentAuthenticatedUserId()
                    : null;

            $this->save();

            event(new InvitationUpdated($this));
        }
    }

    public function markAsSent($content_type = 'invitation')
    {
        $this->markAsDone('sent', $content_type);
    }

    public function markAsReceived($how = 'automatically', $type = 'invitation')
    {
        $this->markAsDone('received', $type, $how);
    }

    public function checkedIn()
    {
        return !is_null($this->checkin_at);
    }

    public function makeCheckin()
    {
        if ($this->checkedIn()) {
            return false;
        }

        $this->checkin_at = now();

        $this->checkin_by_id = current_user()->id;

        $this->save();

        event(new InviteeCheckedIn($this));

        return true;
    }

    public function canSendThankYou()
    {
        return blank($this->thanked_at);
    }

    public function checkedInBy()
    {
        return $this->belongsTo(User::class, 'checkin_by_id');
    }

    public function canBeManipulatedByInvitee()
    {
        return blank($this->subEvent->confirmations_end_date) ||
            $this->subEvent->confirmations_end_date->isToday() ||
            $this->subEvent->confirmations_end_date->isFuture();
    }

    protected function subEventCanReceiveInvitations()
    {
        return $this->subEvent->send_invitations;
    }

    protected function subEventCanReceiveCredentials()
    {
        return $this->subEvent->send_credentials;
    }
}
