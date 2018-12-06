<?php

namespace App\Data\Repositories;

use App\Data\Models\Contact as ContactModel;
use App\Events\PersonInstitutionContactsGotChanged;

class Contacts extends Repository
{
    /**
     * @var string
     */
    protected $model = ContactModel::class;

    /**
     * @param $personInstitutionId
     * @return mixed
     */
    public function allByPersonInstitutionId($personInstitutionId)
    {
        return $this->filterByPersonInstitutionId($personInstitutionId);
    }

    /**
     * @param $array
     * @return mixed|void
     */
    public function storeFromArray($array)
    {
        $this->fireEvents(parent::storeFromArray($array), 'Created');
    }

    public function update($id, $array)
    {
        $this->fireEvents(parent::update($id, $array), 'Updated');
    }

    public function fireEventsForRelationships($model)
    {
        event(
            new PersonInstitutionContactsGotChanged($model->personInstitution)
        );
    }
}
