<?php

namespace App\Data\Repositories\Traits;

use App\Data\Repositories\Addresses as AddressesRepository;

trait AddressesTraits
{
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
    }
}
