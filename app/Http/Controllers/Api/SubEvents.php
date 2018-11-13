<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ConfirmSubEvent;
use App\Data\Repositories\Addresses as AddressesRepository;
use App\Data\Repositories\SubEvents as SubEventsRepository;
use App\Http\Requests\SubEventStore;
use App\Http\Requests\SubEventUpdate;
use Illuminate\Http\Request;

class SubEvents extends Controller
{
    /**
     *
     * Return all subEvents to happen in 7 days
     *
     * @return \Illuminate\Http\Response|Collection
     */
    public function allAboutToHappen()
    {
        return app(SubEventsRepository::class)->allAboutToHappen();
    }

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
     * Get all data
     *
     * @return \Illuminate\Http\Response|Collection
     */
    public function associateableSubEvent()
    {
        return app(SubEventsRepository::class)->all();
    }

    /**
     * Store
     *
     * @param SubeventStore $request
     * @return mixed
     */
    public function store(SubEventStore $request)
    {
        return app(SubEventsRepository::class)->storeFromArray($request->all());
    }

    /**
     * @param SubEventUpdate $request
     * @param $id
     * @return mixed
     */
    public function update(SubEventUpdate $request, $eventId, $subEventId)
    {
        return app(SubEventsRepository::class)->update(
            $subEventId,
            $request->all()
        );
    }

    public function confirm(ConfirmSubEvent $request, $eventId, $subEventId)
    {
        return app(SubEventsRepository::class)->confirm($eventId, $subEventId);
    }

    public function finalize(ConfirmSubEvent $request, $eventId, $subEventId)
    {
        return app(SubEventsRepository::class)->finalize($eventId, $subEventId);
    }
}
