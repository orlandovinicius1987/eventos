<?php

namespace App\Data\Repositories;

use App\Data\Models\SubEvent as SubEventModel;
use App\Data\Models\SubEvent;
use App\Data\Repositories\Addresses as AddressesRepository;
use App\Data\Repositories\Traits\AddressesTraits;

class SubEvents extends Repository
{
    use AddressesTraits;

    /**
     * @var string
     */
    protected $model = SubEventModel::class;

    /**
     * @param $eventId
     * @param $subEventId
     */
    public function confirm($eventId, $subEventId)
    {
        $subEvent = $this->findById($subEventId);

        $subEvent->confirmed_at = now();

        $subEvent->save();
    }

    /**
     * @param $eventId
     * @param $subEventId
     */
    public function finalize($eventId, $subEventId)
    {
        $subEvent = $this->findById($subEventId);

        $subEvent->ended_at = now();

        $subEvent->save();
    }

    /**
     * @return mixed
     */
    public function getAvailableAddresses()
    {
        return app(AddressesRepository::class)->getByAddressableType(
            SubEventModel::class
        );
    }

    /**
     * @param $eventId
     */
    public function filterByEventId($eventId)
    {
        $response = parent::filterByEventId($eventId);

        $response['available_addresses'] = $this->getAvailableAddresses();

        return $response;
    }

    public function storeFromArray($array)
    {
        $subEvent = parent::storeFromArray($array);
        if ($array['address']['zipcode']) {
            $this->createAddress($subEvent, $array['address']);
        }

        return $subEvent;
    }

    public function update($id, $attributes)
    {
        $subEvent = parent::update($id, $attributes);

        if (!$subEvent->address && $array['address']['zipcode']) {
            $this->createAddress($subEvent, $attributes['address']);
        } else {
            app(AddressesRepository::class)->updateAddress(
                $subEvent->address,
                $attributes['address']
            );
        }

        return $subEvent;
    }
}
