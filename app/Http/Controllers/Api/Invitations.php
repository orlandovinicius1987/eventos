<?php

namespace App\Http\Controllers\Api;

use App\Data\Repositories\Invitations as InvitationsRepository;
use App\Http\Controllers\Controller;
use App\Data\Repositories\SubEvents as SubEventsRepository;
use App\Http\Requests\SubEventStore;
use Illuminate\Http\Request;

class Invitations extends Controller
{
    /**
     * Get all data
     *
     * @return \Illuminate\Http\Response|Collection
     */
    public function all(Request $request, $eventId, $subEventId)
    {
        return app(InvitationsRepository::class)->getBySubEventId($subEventId);
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
}
