<?php

namespace App\Data\Repositories;

use App\Events\PersonInstitutionsGotChanged;
use Illuminate\Database\Query\Builder;
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

    /**
     * @param null $type
     * @return Builder
     */
    protected function newQuery($type = null)
    {
        $query = parent::newQuery($type);

        $query->join('roles', 'roles.id', '=', 'person_institutions.role_id');

        $query->join(
            'institutions',
            'institutions.id',
            '=',
            'person_institutions.institution_id'
        );

        return $query;
    }

    /**
     * @param $personInstitutionId
     * @return mixed
     */
    public function allAdvisorsByPersonInstitution($personInstitutionId)
    {
        return $this->filterByAdvisedId($personInstitutionId);
    }

    public function fireEventsForRelationships($model)
    {
        event(new PersonInstitutionsGotChanged($model->person));
    }
}
