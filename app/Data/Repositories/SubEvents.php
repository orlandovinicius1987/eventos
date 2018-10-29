<?php

namespace App\Data\Repositories;

use App\Data\Models\SubEvent as SubEventModel;
use App\Data\Repositories\Addresses as AddressesRepository;

class SubEvents extends Repository
{
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
}
