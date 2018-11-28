<?php

namespace App\Http\Controllers;

use App\Http\Requests\InvitationsAcceptStore;
use App\Data\Repositories\Invitations as InvitationsRepository;
use App\Http\Requests\InvitationsRejectStore;
use Illuminate\Support\Facades\Session;

class Invitations extends Controller
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
     * @param InvitationsAcceptStore $request
     * @param $eventId
     * @param $subEventId
     * @param $invitationId
     * @return \Illuminate\Http\RedirectResponse
     */
    public function markAsAccepted(
        InvitationsAcceptStore $request,
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
        return redirect()
            ->route('messages.show')
            ->with('view', $view)
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
     * @param InvitationsAcceptStore $request
     * @param $eventId
     * @param $subEventId
     * @param $invitationId
     * @return \Illuminate\Http\RedirectResponse
     */
    public function markAsRejected(
        InvitationsRejectStore $request,
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

    public function markAsReceiveAndDownloadImage($uuid)
    {
        app(InvitationsRepository::class)->markAsReceived($uuid);

        return response()->download(public_path('images/dummy.png'));
    }
}
