<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Data\Repositories\SubEvents as SubEventsRepository;
use App\Http\Requests\SubEventStore;
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
        return app(SubEventsRepository::class)->getByEventId($eventId);
    }

    /**
     * Store
     *
     * @param SubeventStore $request
     * @return \Illuminate\Http\Response|Collection
     */
    public function store(SubEventStore $request)
    {
        return app(SubEventsRepository::class)->storeFromArray($request->all());
    }
}
