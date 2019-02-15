<?php

namespace App\Data\Repositories\Traits;

use App\Data\Repositories\Addresses as AddressesRepository;

trait AddressesTraits
{

    /**
     * @param $addressable
     * @param $attributes - array
     * @return mixed
     */
    protected function createAddress($addressable, $attributes)
    {
        return app(AddressesRepository::class)->storeFromArray(
            app(AddressesRepository::class)->fillAddressableFromModel(
                $attributes,
                $addressable
            )
        );
    }

    public function updateAddress($address, $attributes)
    {
        $address->fill(
            coollect($attributes)
                ->only($address->fillable)
                ->toArray()
        );

        $address->save();

        $this->fireEvents($address, 'Updated');
    }
}
