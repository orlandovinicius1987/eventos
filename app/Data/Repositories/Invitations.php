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
        $this->addDataProcessingPlugin(function ($invitation) {
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

    public function fillteredAcceptedBySubEventId($subEventId)
    {
        return $this->applyFilter(
            $this->newQuery()
                ->whereNotNull('accepted_at')
                ->where('sub_event_id', $subEventId)
        );
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
