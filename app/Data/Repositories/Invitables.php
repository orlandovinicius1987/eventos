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
                $query->orWhere('institutions.name', 'ilike', "%{$text}%");
                $query->orWhere('people.name', 'ilike', "%{$text}%");
                $query->orWhere('roles.name', 'ilike', "%{$text}%");
            });

        return $query;
    }

    public function getInvitables($subEventId)
    {
        return $this->applyFilter(
            app(PersonInstitutions::class)
                ->newQuery()
                ->whereRaw(
                    'person_institutions.id not in (select person_institution_id from invitations where sub_event_id = ' .
                        $subEventId .
                        ')'
                )
        );
    }
}
