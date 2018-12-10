<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\SubEventStore;
use App\Http\Requests\UnInvite as UninviteRequest;
use App\Data\Repositories\SubEvents as SubEventsRepository;
use App\Data\Repositories\Invitations as InvitationsRepository;
use App\Data\Repositories\Invitables as InvitablesRepository;
use App\Http\Requests\MoveInvitations as MoveInvitationsRequest;

class Invitations extends Controller
{
    const MARK_MODE_MANUAL = 'manual';

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

    /**
     * Mark an invite as accepted
     *
     * @param UninviteRequest $request
     * @param $eventId
     * @param $subEventId
     * @param $invitationId
     * @return mixed
     */
    public function markAsAccepted(
        UninviteRequest $request,
        $eventId,
        $subEventId,
        $invitationId
    ) {
        app(InvitationsRepository::class)->markAsAccepted(
            $eventId,
            $subEventId,
            $invitationId,
            self::MARK_MODE_MANUAL
        );

        return $this->emptyResponse();
    }

    /**
     * Mark an invite as rejected
     *
     * @param UninviteRequest $request
     * @param $eventId
     * @param $subEventId
     * @param $invitationId
     * @return mixed
     */
    public function markAsRejected(
        UninviteRequest $request,
        $eventId,
        $subEventId,
        $invitationId
    ) {
        app(InvitationsRepository::class)->markAsRejected(
            $eventId,
            $subEventId,
            $invitationId,
            self::MARK_MODE_MANUAL
        );

        return $this->emptyResponse();
    }

    /**
     * Mark an invite as accepted
     *
     * @param UninviteRequest $request
     * @param $eventId
     * @param $subEventId
     * @param $invitationId
     * @return mixed
     */
    public function markAsReceived(
        UninviteRequest $request,
        $eventId,
        $subEventId,
        $invitationId,
        $type
    ) {
        app(InvitationsRepository::class)->markAsReceived(
            $eventId,
            $subEventId,
            $invitationId,
            self::MARK_MODE_MANUAL,
            $type
        );

        return $this->emptyResponse();
    }

    public function invitables($eventId, $subEventId)
    {
        return app(InvitablesRepository::class)->getInvitables(
            $subEventId,
            request()->get('query')
        );
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

    public function moveInvitations(
        MoveInvitationsRequest $request,
        $eventId,
        $subEventId
    ) {
        app(InvitationsRepository::class)->moveInvitations(
            $request->get('newSubEventId'),
            $request->get('currentSubEventId'),
            $request->get('invitees')
        );

        return $this->emptyResponse();
    }

    public function download($eventId, $subEventId, $id)
    {
        return app(InvitationsRepository::class)->download($id);
    }

    public function html($eventId, $subEventId, $id)
    {
        return app(InvitationsRepository::class)->html($id);
    }

    public function sendInvitation($eventId, $subEventId, $id)
    {
        return app(InvitationsRepository::class)->sendInvitation(
            $eventId,
            $subEventId,
            $id
        );
    }

    public function sendCredentials($eventId, $subEventId, $id)
    {
        return app(InvitationsRepository::class)->sendCredentials(
            $eventId,
            $subEventId,
            $id
        );
    }

    public function sendRejection($eventId, $subEventId, $id)
    {
        return app(InvitationsRepository::class)->sendInvitation(
            $eventId,
            $subEventId,
            $id
        );
    }
}
