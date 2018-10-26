<?php

namespace App\Data\Repositories;

use App\Data\Models\Invitation;
use App\Data\Models\PersonInstitution;
use App\Data\Models\Invitation as InvitationModel;
use Illuminate\Database\Eloquent\Builder;

class Invitations extends Repository
{
    /**
     * @var string
     */
    protected $model = InvitationModel::class;

    protected function filterAllColumns(Builder $query, $text)
    {
        $query
            ->join(
                'person_institutions',
                'person_institutions.id',
                '=',
                'invitations.person_institution_id'
            )
            ->join(
                'institutions',
                'person_institutions.institution_id',
                '=',
                'institutions.id'
            )
            ->join('people', 'person_institutions.person_id', '=', 'people.id')
            ->join('roles', 'person_institutions.role_id', '=', 'roles.id')
            ->where(function ($query) use ($text) {
                $query->orWhere('institutions.name', 'ilike', "%{$text}%");
                $query->orWhere('people.name', 'ilike', "%{$text}%");
                $query->orWhere('roles.name', 'ilike', "%{$text}%");
            });

        return $query;
    }

    private function getPersonInstitutionsRepository()
    {
        return app(PersonInstitutions::class);
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

    public function invite($eventId, $subEventId, $invitees)
    {
        info($invitees);
        foreach ($invitees as $invitee) {
            Invitation::firstOrCreate([
                'sub_event_id' => $subEventId,
                'person_institution_id' => $invitee['id'],
            ]);
        }
    }

    public function getInvitables($subEventId)
    {
        return $this->applyFilter(
            $this->getPersonInstitutionsRepository()
                ->newQuery()
                ->whereRaw(
                    'id not in (select person_institution_id from invitations where sub_event_id = ' .
                        $subEventId .
                        ')'
                )
        );
    }
}
