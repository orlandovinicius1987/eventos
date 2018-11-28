<?php

namespace App\Data\Repositories;

use App\Events\InvitationAccepted;
use App\Events\InvitationRejected;
use DB as Database;
use App\Data\Models\Invitation;
use App\Data\Models\Invitation as InvitationModel;
use App\Data\Repositories\Traits\InvitationDownload;
use App\Events\InvitationsChanged;

class Invitations extends Repository
{
    use InvitationDownload;

    /**
     * @var string
     */
    protected $model = InvitationModel::class;

    protected $variables;

    public function filterBySubEventId($subEventId)
    {
        $this->addDataPlugin(function ($invitation) {
            $invitation['pending'] = [
                [
                    'type' => $invitation->hasEmail() ? 'success' : 'danger',
                    'label' => $invitation->hasEmail()
                        ? 'nenhuma'
                        : 'não possui e-mail',
                ],
            ];

            $invitation['has_email'] = $invitation->hasEmail();

            return $invitation;
        });

        return parent::filterBySubEventId($subEventId);
    }

    protected function filterCheckboxes($query, array $filter)
    {
        if (isset($filter['hasNoEmail']) && $filter['hasNoEmail']) {
            $query->whereRaw('(
                select count(*) count
                    from contacts c
                    where person_institution_id = invitations.person_institution_id
                    and c.contact_type_id = (select id from contact_types where code = \'email\')
                ) = 0');
        }

        if (isset($filter['notSent']) && $filter['notSent']) {
            $query->whereNull('sent_at');
        }

        if (isset($filter['notReceived']) && $filter['notReceived']) {
            $query->whereNull('received_at');
        }

        if (isset($filter['notAccepted']) && $filter['notAccepted']) {
            $query->whereNull('accepted_at');
        }

        if (isset($filter['notCheckedIn']) && $filter['notCheckedIn']) {
            $query->whereNull('checkin_at');
        }

        if (isset($filter['notAnswered']) && $filter['notAnswered']) {
            $query->whereNull('accepted_at');
            $query->whereNull('declined_at');
        }
    }

    protected function filterAllColumns($query, $text)
    {
        $query
            ->join(
                'institutions',
                'person_institutions.institution_id',
                '=',
                'institutions.id'
            )
            ->join('people', 'person_institutions.person_id', '=', 'people.id')
            ->join('roles', 'person_institutions.role_id', '=', 'roles.id')
            ->where(function ($query) use ($text) {
                $query->orWhere('code', 'ilike', "%{$text}%");
                $query->orWhere('institutions.name', 'ilike', "%{$text}%");
                $query->orWhere('people.name', 'ilike', "%{$text}%");
                $query->orWhere('roles.name', 'ilike', "%{$text}%");
            });

        return $query;
    }

    private function getViewVariablesFor($invitation)
    {
        if (isset($this->variables[$invitation->id])) {
            return $this->variables[$invitation->id];
        }

        return $this->variables[
            $invitation->id
        ] = $invitation->getViewVariables();
    }

    public function unInvite($eventId, $subEventId, $invitationId)
    {
        $invitation = $this->findById($invitationId);

        if (
            $invitation->subEvent->event->id == $eventId &&
            $invitation->subEvent->id == $subEventId
        ) {
            $invitation->delete();

            return true;
        }

        return false;
    }

    public function markAsAccepted($eventId, $subEventId, $invitationId)
    {
        $invitation = $this->findById($invitationId);

        if (
            !$invitation->accepted_at &&
            $invitation->subEvent->event->id == $eventId &&
            $invitation->subEvent->id == $subEventId
        ) {
            $invitation->accepted_at = now();

            $invitation->declined_at = null;

            $invitation->save();

            event(new InvitationAccepted($invitation->id));

            return true;
        }

        return false;
    }

    public function markAsRejected($eventId, $subEventId, $invitationId)
    {
        $invitation = $this->findById($invitationId);

        if (
            $invitation->subEvent->event->id == $eventId &&
            $invitation->subEvent->id == $subEventId
        ) {
            $invitation->accepted_at = null;

            $invitation->declined_at = now();

            $invitation->save();

            event(new InvitationRejected($invitation->id));

            return true;
        }

        return false;
    }

    public function invite($eventId, $subEventId, $invitees)
    {
        foreach ($invitees as $invitee) {
            Invitation::firstOrCreate([
                'sub_event_id' => $subEventId,
                'person_institution_id' => $invitee['id'],
            ]);
        }

        event(new InvitationsChanged($eventId));
    }

    public function send($eventId, $subEventId, $invitationId)
    {
        $invitation = $this->findById($invitationId);

        if (
            $invitation->subEvent->event->id == $eventId &&
            $invitation->subEvent->id == $subEventId
        ) {
            $invitation->send();
        }
    }

    public function setCurrentClientId($invitationId)
    {
        $invitation = Database::table('invitations')
            ->join(
                'person_institutions',
                'invitations.person_institution_id',
                '=',
                'person_institutions.id'
            )
            ->join('people', 'person_institutions.person_id', '=', 'people.id')
            ->where('invitations.id', $invitationId)
            ->first();

        set_current_client_id($invitation->client_id);

        return $this;
    }

    public function moveInvitations(
        $newSubEventId,
        $currentSubEventId,
        $invitees
    ) {
        $invitations = InvitationModel::filterByPersonInstitutions($invitees)
            ->filterBySubEvent($currentSubEventId)
            ->get();

        foreach ($invitations as $invitation) {
            $invitation->sub_event_id = $newSubEventId;
            $invitation->save();
        }
    }

    public function transform($data)
    {
        $this->addDataPlugin(function ($invitation) {
            $invitation['variables'] = $this->getViewVariablesFor($invitation);

            return $invitation;
        });

        return parent::transform($data);
    }

    public function accept($eventId, $subEventId, $invitationId, $cpf_confirmed)
    {
        $invitation = $this->findById($invitationId);
        if (
            !is_null(
                ($cpf_stored = $invitation->personInstitution->person->cpf)
            ) &&
            $cpf_stored != $cpf_confirmed
        ) {
            return 'Parece que há algo errado com a seu convite, por favor entre em contato com o Cerimonial Alerj.';
        } else {
            if (is_null($cpf_stored)) {
                $invitation->personInstitution->person->cpf = $cpf_confirmed;
                $invitation->personInstitution->person->save();
            }

            $this->markAsAccepted($eventId, $subEventId, $invitation->id);
        }

        return 'Muito obrigado por CONFIRMAR presença no evento, em breve enviaremos a sua credencial para acesso ao evento.';
    }

    public function reject($eventId, $subEventId, $invitationId, $cpf_confirmed)
    {
        if (
            ($invitation = $this->findById($invitationId))->personInstitution
                ->person->cpf != $cpf_confirmed
        ) {
            return 'Parece que há algo errado com a seu convite e/ou CPF, por favor entre em contato com o Cerimonial Alerj.';
        }

        $this->markAsRejected($eventId, $subEventId, $invitation->id);

        return 'Cancelamento realizado com sucesso.';
    }

    /**
     * Generates QR code png image in storage/qr-codes
     *
     * @param $invitation_id
     */
    public function generateQrCodeFor($invitation_id)
    {
        $invitation = Invitation::find($invitation_id);

        $invitation->generateQrCode();
    }

    public function markAsReceived($uuid)
    {
        $invitation = $this->findByUuid($uuid);

        $invitation->received_at = now();

        $invitation->save();

        return $invitation;
    }

    public function getAllInvitationsFor($invitation)
    {
        return collect(
            array_merge([$invitation], $invitation->related())
        )->sortBy(function ($invitation) {
            return is_null($invitation->subEvent->associated_subevent_id)
                ? 10
                : 100;
        });
    }

    public function fillteredAcceptedBySubEventId($subEventId)
    {
        return $this->applyFilter(
            $this->newQuery()
                ->whereNotNull('accepted_at')
                ->where('sub_event_id', $subEventId)
        );
    }

    public function fillteredAcceptedByEventId($eventId)
    {
        return $this->applyFilter(
            $this->newQuery()
                ->join('sub_events', 'sub_event_id', '=', 'sub_events.id')
                ->whereNotNull('accepted_at')
                ->where('event_id', $eventId)
        );
    }

    public function makeCheckin($invitationId)
    {
        $this->model = $this->findById($invitationId);

        info($this->model);

        $data = date('m-d-Y');
        $data .= ' ' . date('H:i:s');

        $this->model->checkin_at = $data;
        $this->model->save();

        return $this->model;
    }

    public function makeCheckinWithCode($subEventId, $code)
    {
        $this->model = $this->findBySubEventIdAndCode($subEventId, $code);

        $data = date('m-d-Y');
        $data .= ' ' . date('H:i:s');

        $this->model->checkin_at = $data;
        $this->model->save();

        return $this->model;
    }

    public function findBySubEventIdAndCode($subEventId, $code)
    {
        return InvitationModel::where('sub_event_id', $subEventId)
            ->where('code', $code)
            ->first();
    }
}
