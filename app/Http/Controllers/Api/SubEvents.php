<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Data\Repositories\SubEvents as SubEventsRepository;
use App\Data\Repositories\Addresses as AddressesRepository;
use App\Http\Requests\SubEventStore;
use App\Http\Requests\SubEventUpdate;
use Illuminate\Http\Request;

class SubEvents extends Controller
{
    /**
     * Get all data
     *
     * @return \Illuminate\Http\Response|Collection
     */
    public function all(Request $request, $eventId)
    {
        return app(SubEventsRepository::class)->filterByEventId($eventId);
    }

    /**
     * Store
     *
     * @param SubeventStore $request
     * @return mixed
     */
    public function store(SubEventStore $request)
    {
        $array = $request->all();

        $subEvent = app(SubEventsRepository::class)->storeFromArray($array);

        return app(AddressesRepository::class)->storeFromArray(
            app(AddressesRepository::class)->fillAddressableFromModel(
                $array,
                $subEvent
            )
        );
    }

    /**
     * @param SubEventUpdate $request
     * @param $id
     * @return mixed
     */
    public function update(SubEventUpdate $request, $id)
    {
        return app(SubEventsRepository::class)->update($id, $request->all());
    }
}
