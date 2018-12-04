<?php

namespace App\Data\Repositories;

use App\Data\Models\PersonInstitution;

class Invitables extends Repository
{
    /**
     * @var string
     */
    protected $model = PersonInstitution::class;

    protected function filterAllColumns($query, $text)
    {
        $query->where(function ($query) use ($text) {
            $query->orWhere('institutions.name', 'ilike', "%{$text}%");
            $query->orWhere('people.name', 'ilike', "%{$text}%");
            $query->orWhere('roles.name', 'ilike', "%{$text}%");
        });

        return $query;
    }

    public function getInvitables($subEventId)
    {
        return $this->applyFilter(
            app(PersonInstitutions::class)->newQuery(null, [
                '(select count("invitations"."person_institution_id") from "invitations" where "person_institutions"."id" = "invitations"."person_institution_id" and "invitations"."sub_event_id" = ' .
                    $subEventId .
                    ') as is_invited_to_sub_event',
            ])
        );
    }

    protected function filterCheckboxes($query, array $filter)
    {
        if (isset($filter['not_invited']) && $filter['not_invited']) {
            $query->whereRaw(
                'person_institutions.id not in (select person_institution_id from invitations where sub_event_id = ' .
                    $filter['not_invited'] .
                    ')'
            );
        }
    }

    /**
     * Filter Selects
     *
     * @param $query
     * @param array $filter
     * @return mixed
     */
    protected function filterSelects($query, array $filter)
    {
        if (isset($filter['sub_event']) && !is_null($filter['sub_event'])) {
            $query->invitedToSubEvent($filter['sub_event']);
        }
        if (isset($filter['role']) && !is_null($filter['role'])) {
            $query->where('role_id', $filter['role']);
        }
        if (isset($filter['institution']) && !is_null($filter['institution'])) {
            $query->where('institution_id', $filter['institution']);
        }

        return $query;
    }
}
