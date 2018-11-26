<?php

namespace App\Data\Repositories;

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

    public function markAsAccepted($eventId, $subEventId, $invitationId)
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

        info('invite()');

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
}
