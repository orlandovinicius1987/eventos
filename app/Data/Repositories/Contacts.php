<?php

namespace App\Data\Repositories;

use App\Events\ContactWasCreated;
use App\Events\ContactWasUpdated;
use App\Data\Models\Contact as ContactModel;

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
        event(new ContactWasCreated(parent::updateFromArray($array)));
    }

    public function update($id, $array)
    {
        event(new ContactWasUpdated(parent::update($id, $array)));
    }
}
