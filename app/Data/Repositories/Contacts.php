<?php

namespace App\Data\Repositories;

use App\Events\ContactCreated;
use App\Events\ContactUpdated;
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
        event(new ContactCreated(parent::storeFromArray($array)));
    }

    public function update($id, $array)
    {
        event(new ContactUpdated(parent::update($id, $array)));
    }
}
