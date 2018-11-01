<?php

namespace App\Data\Repositories;

use App\Data\Models\PersonInstitution as PersonInstitutionModel;

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

    public function allAdvisorsByPersonInstitution($personInstitutionId)
    {
        return $this->filterByAdvisedId($personInstitutionId);
    }
}
