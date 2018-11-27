<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\AcceptableStore;
use App\Http\Requests\InstitutionStore;
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
    /**
     * @param $eventId
     * @param $subEventId
     * @param $invitationId
     * @return mixed
     */
    public function acceptable($eventId, $subEventId, $invitationId)
    {
        $invite = app(InvitationsRepository::class)->findById($invitationId);

        return view('pages.invite-acceptable')
            ->with('invite', $invite)
            ->with('eventId', $eventId)
            ->with('subEventId', $subEventId)
            ->with('invitationId', $invitationId);
    }

    /**
     * @param AcceptableStore $request
     * @param $eventId
     * @param $subEventId
     * @param $invitationId
     * @return \Illuminate\Http\RedirectResponse
     */
    public function accept(
        AcceptableStore $request,
        $eventId,
        $subEventId,
        $invitationId
    ) {
        $invite = app(InvitationsRepository::class)->findById($invitationId);

        $view = app(InvitationsRepository::class)->accept(
            $eventId,
            $subEventId,
            $invitationId,
            only_numbers($request['cpf'])
        );

        return //->view('pages.invite-acceptable')
            redirect()
                ->back()
                ->with('invite', $invite)
                ->with('eventId', $eventId)
                ->with('subEventId', $subEventId)
                ->with('invitationId', $invitationId);
    }
}
