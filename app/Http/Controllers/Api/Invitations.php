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
     * UnInvite a person
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

    public function accept($eventId, $subEventId, $id)
    {
        return view('pages.invite-acceptable')
            ->with('invite', app(InvitationsRepository::class)->findById($id))
            ->with('eventId', $eventId)
            ->with('subEventId', $subEventId)
            ->with('id', $id)
            ->with('msg', null);
    }

    public function acceptable(
        AcceptableStore $request,
        $eventId,
        $subEventId,
        $id
    ) {
        $invite = app(InvitationsRepository::class)->findById($id);

        $cpf = only_numbers($request['cpf']);

        if (
            !is_null($invite->personInstitution->person->cpf) &&
            $invite->personInstitution->person->cpf != $cpf
        ) {
            $this->showErrorMessage(
                'Parece que há algo errado com a seu convite, por favor entre em contato com o Cerimonial Alerj.'
            );
        } else {
            if (is_null($invite->personInstitution->person->cpf)) {
                $invite->personInstitution->person->cpf = $cpf;
                $invite->personInstitution->person->save();
            }
            app(InvitationsRepository::class)->markAsAccepted(
                $eventId,
                $subEventId,
                $invite->id
            );
            $this->showSuccessMessage(
                'Muito obrigado por confirmar presença no evento, em breve enviaremos a sua credencial para acesso ao evento.'
            );
        }

        return //->view('pages.invite-acceptable')
            redirect()
                ->back()
                ->with('invite', $invite)
                ->with('eventId', $eventId)
                ->with('subEventId', $subEventId)
                ->with('uuid', $id);
    }

    public function html($eventId, $subEventId, $id)
    {
        return app(InvitationsRepository::class)->html($id);
    }

    public function send($eventId, $subEventId, $id)
    {
        return app(InvitationsRepository::class)->send(
            $eventId,
            $subEventId,
            $id
        );
    }
}
