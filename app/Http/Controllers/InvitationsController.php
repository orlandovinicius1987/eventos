<?php

namespace App\Http\Controllers;

use App\Http\Requests\AcceptStore;
use App\Data\Repositories\Invitations as InvitationsRepository;
use App\Http\Requests\RejectStore;

class InvitationsController extends Controller
{
    /**
     * @param $eventId
     * @param $subEventId
     * @param $invitationId
     * @return mixed
     */
    public function accept($eventId, $subEventId, $invitationId)
    {
        $invitation = app(InvitationsRepository::class)->findById(
            $invitationId
        );

        return view('invitations.accept')
            ->with('invitation', $invitation)
            ->with('eventId', $eventId)
            ->with('subEventId', $subEventId)
            ->with('invitationId', $invitationId);
    }

    /**
     * @param AcceptStore $request
     * @param $eventId
     * @param $subEventId
     * @param $invitationId
     * @return \Illuminate\Http\RedirectResponse
     */
    public function markAsAccepted(
        AcceptStore $request,
        $eventId,
        $subEventId,
        $invitationId
    ) {
        $invitation = app(InvitationsRepository::class)->findById(
            $invitationId
        );

        $view = app(InvitationsRepository::class)->accept(
            $eventId,
            $subEventId,
            $invitationId,
            only_numbers($request['cpf'])
        );

        return view($view)
            ->with('invitation', $invitation)
            ->with('eventId', $eventId)
            ->with('subEventId', $subEventId)
            ->with('invitationId', $invitationId);
    }

    /**
     * @param $eventId
     * @param $subEventId
     * @param $invitationId
     * @return mixed
     */
    public function reject($eventId, $subEventId, $invitationId)
    {
        $invitation = app(InvitationsRepository::class)->findById(
            $invitationId
        );

        return view('invitations.reject')
            ->with('invitation', $invitation)
            ->with('eventId', $eventId)
            ->with('subEventId', $subEventId)
            ->with('invitationId', $invitationId);
    }

    /**
     * @param AcceptStore $request
     * @param $eventId
     * @param $subEventId
     * @param $invitationId
     * @return \Illuminate\Http\RedirectResponse
     */
    public function markAsRejected(
        RejectStore $request,
        $eventId,
        $subEventId,
        $invitationId
    ) {
        $invitation = app(InvitationsRepository::class)->findById(
            $invitationId
        );

        $view = app(InvitationsRepository::class)->reject(
            $eventId,
            $subEventId,
            $invitationId,
            only_numbers($request['cpf'])
        );

        return view($view)
            ->with('invitation', $invitation)
            ->with('eventId', $eventId)
            ->with('subEventId', $subEventId)
            ->with('invitationId', $invitationId);
    }
}
