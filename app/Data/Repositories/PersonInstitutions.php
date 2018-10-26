<?php

namespace App\Data\Repositories;

use App\Data\Models\PersonInstitution as PersonInstitutionModel;

class PersonInstitutions extends Repository
{
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
     * @var string
     */
    protected $model = PersonInstitutionModel::class;
}
