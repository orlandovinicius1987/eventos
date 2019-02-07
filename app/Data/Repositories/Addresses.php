<?php
namespace App\Data\Repositories;

use App\Data\Models\PersonInstitution;
use App\Data\Models\Address as AddressModel;
use App\Data\Models\SubEvent as SubEventModel;
use App\Data\Repositories\Traits\AddressesTraits;
use App\Events\PersonInstitutionAddressesGotChanged;
use App\Data\Models\PersonInstitution as PersonInstitutionModel;

class Addresses extends Repository
{
    use AddressesTraits;

    /**
     * @var string
     */
    protected $model = AddressModel::class;

    /**
     * @param $personInstitutionId
     * @return mixed
     */
    public function allByPersonInstitutionId($personInstitutionId)
    {
        return $this->applyFilter(
            AddressModel::where('addressable_id', $personInstitutionId)->where(
                'addressable_type',
                PersonInstitutionModel::class
            )
        );
    }

    /**
     * @param $array
     * @param $model
     * @return array
     */
    public function fillAddressableFromModel($array, $model)
    {
        return array_merge($array, [
            'addressable_id' => $model->id,
            'addressable_type' => $model->model,
        ]);
    }

    public function findByAddressable($addressable)
    {
        return $this->newQuery()
            ->where('addressable_id', $addressable['addressable_id'])
            ->where('addressable_type', $addressable['addressable_type'])
            ->first();
    }

    public function storeForPersonInstitution($id, $attributes)
    {
        $address = $this->createAddress(
            app(PersonInstitutions::class)->findById($id),
            $attributes
        );

        $this->fireEvents($address, 'Created');

        return $address;
    }

    public function update($id, $attributes)
    {
        $this->updateAddress(($model = $this->findById($id)), $attributes);
    }

    public function fireEventsForRelationships($model)
    {
        event(new PersonInstitutionAddressesGotChanged($model->addressable));
    }

    /**
     * @return mixed
     */
    public function getAvailableAddresses()
    {
        return $this->filterByAddressableType(SubEventModel::class);
    }
}
