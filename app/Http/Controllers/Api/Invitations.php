<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\SubEventStore;
use App\Http\Requests\UnInvite as UninviteRequest;
use App\Data\Repositories\SubEvents as SubEventsRepository;
use App\Data\Repositories\Invitations as InvitationsRepository;
use App\Data\Repositories\Invitables as InvitablesRepository;

class Invitations extends Controller
{
    /**
     * Get all data
     *
     * @return \Illuminate\Http\Response|Collection
     */
    public function all(Request $request, $eventId, $subEventId)
    {
        return app(InvitationsRepository::class)->filterBySubEventId(
            $subEventId
        );
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
     * UnInvite a person
     *
     * @param UninviteRequest $request
     * @param $eventId
     * @param $subEventId
     * @param $invitationId
     * @return mixed
     */
    public function unInvite(
        UninviteRequest $request,
        $eventId,
        $subEventId,
        $invitationId
    ) {
        app(InvitationsRepository::class)->uninvite(
            $eventId,
            $subEventId,
            $invitationId
        );

        return $this->emptyResponse();
    }

    public function invitables($eventId, $subEventId)
    {
        return app(InvitablesRepository::class)->getInvitables($subEventId);
    }

    public function invite($eventId, $subEventId)
    {
        app(InvitationsRepository::class)->invite(
            $eventId,
            $subEventId,
            request()->get('invitees')
        );

        return $this->emptyResponse();
    }
}
