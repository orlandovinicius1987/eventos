<?php
namespace App\Data\Repositories;

use App\Data\Models\Advisor as AdvisorModel;
use App\Events\PersonInstitutionAdvisorsGotChanged;

class Advisors extends PersonInstitutions
{
    /**
     * @var string
     */
    protected $model = AdvisorModel::class;

    /**
     * @param $personInstitutionId
     * @return mixed
     */
    public function allByPersonInstitutionId($personInstitutionId)
    {
        return $this->filterByPersonInstitutionId($personInstitutionId);
    }

    public function fireEventsForRelationships($model)
    {
        event(new PersonInstitutionAdvisorsGotChanged($model->advised));
    }
}
