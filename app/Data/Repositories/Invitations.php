<?php

namespace App\Data\Repositories;

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
}
