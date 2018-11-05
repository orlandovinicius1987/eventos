<?php

namespace App\Data\Repositories;

use App\Data\Models\PersonInstitution as PersonInstitutionModel;
use Illuminate\Database\Query\Builder;

class PersonInstitutions extends Repository
{
    /**
     * @var string
     */
    protected $model = PersonInstitutionModel::class;

    /**
     * @param $personId
     * @return mixed
     */
    public function allByPerson($personId)
    {
        return $this->filterByPersonId($personId);
    }

    /**
     * @param $institutionId
     * @return mixed
     */
    public function allByInstitution($institutionId)
    {
        return $this->filterByInstitutionId($institutionId);
    }

    /**
     * @return Builder
     */
    protected function newQuery()
    {
        $query = parent::newQuery();

        $query->join('roles', 'roles.id', '=', 'person_institutions.role_id');

        $query->join(
            'institutions',
            'institutions.id',
            '=',
            'person_institutions.institution_id'
        );

        return $query;
    }
}
