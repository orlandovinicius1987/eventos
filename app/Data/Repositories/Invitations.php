<?php

namespace App\Data\Repositories;

use App\Data\Models\Invitation;
use App\Data\Models\Invitation as InvitationModel;
use App\Data\Repositories\Traits\InvitationDownload;

class Invitations extends Repository
{
    use InvitationDownload;

    /**
     * @var string
     */
    protected $model = InvitationModel::class;

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
                $query->orWhere('code', 'i≤like', "%{$text}%");
                $query->orWhere('institutions.name', 'ilike', "%{$text}%");
                $query->orWhere('people.name', 'ilike', "%{$text}%");
                $query->orWhere('roles.name', 'ilike', "%{$text}%");
            });

        return $query;
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

    public function accept($eventId, $subEventId, $invitationId)
    {
        $invitation = $this->findById($invitationId);

        if (
            $invitation->subEvent->event->id == $eventId &&
            $invitation->subEvent->id == $subEventId
        ) {
            $invitation->accepted_at = now();

            $invitation->declined_at = null;

            $invitation->save();

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

    public function transformInvitationText($invitation, $text)
    {
        $replaces = [
            '{convidado_nome}' => $invitation->personInstitution->person->name,
            '{convidado_nome_publico}' =>
                $invitation->personInstitution->person->nickname,
            '{evento_nome}' => $invitation->subEvent->event->name,
            '{subevento_nome}' => $invitation->subEvent->name,
            '{traje_nome}' => $invitation->subEvent->costume->name,
            '{traje_descricao}' => $invitation->subEvent->costume->description,
            '{data_evento}' => $invitation->subEvent->date, //data do subevento
            '{hora_evento}' => $invitation->subEvent->time,
            '{convidado_tratamento}' =>
                $invitation->personInstitution->correct_title,
            '{setor_nome}' => $invitation->subEvent->sector->name,
            '{local}' => $invitation->subEvent->place,
            '{convite_codigo}' => $invitation->code,

            '{instituicao_nome}' =>
                $invitation->personInstitution->institution->name,
            '{cargo}' => $invitation->personInstitution->role->name,

            '{endereco_rua}' => $invitation->subEvent->address->street,
            '{endereco_numero}' => $invitation->subEvent->address->number,
            '{endereco_complemento}' =>
                $invitation->subEvent->address->complement,
            '{endereco_bairro}' =>
                $invitation->subEvent->address->neighbourhood,
            '{endereco_cidade}' => $invitation->subEvent->address->city,
            '{endereco_uf}' => $invitation->subEvent->address->state,
            '{endereco_cep}' => $invitation->subEvent->address->zipcode,
            '{latitude}' => $invitation->subEvent->address->latitude,
            '{longitude}' => $invitation->subEvent->address->longitude,
            '{endereco_completo}' =>
                $invitation->subEvent->address->full_address,
            //            '{google_maps_link}' => $invitation,
            //            '{google_maps_imagem} (url - pensar)' => $invitation,
        ];

        foreach ($replaces as $key => $newWord) {
            $keys[] = $key;
            $newWords[] = $newWord;
        }

        $text = str_replace($keys, $newWords, $text);

        return $text;
    }

    public function transform($data)
    {
        $this->addTransformationPlugin(function ($invitation) {
            $invitation['invitation_text'] = $this->transformInvitationText(
                $invitation,
                $invitation->subEvent->invitation_text
            );

            $invitation['confirmation_text'] = $this->transformInvitationText(
                $invitation,
                $invitation->subEvent->confirmation_text
            );

            $invitation[
                'credential_send_text'
            ] = $this->transformInvitationText(
                $invitation,
                $invitation->subEvent->credential_send_text
            );
            return $invitation;
        });

        return parent::transform($data);
    }
}
