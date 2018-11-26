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
    public function accept_____(
        UninviteRequest $request,
        $eventId,
        $subEventId,
        $invitationId
    ) {
        app(InvitationsRepository::class)->accept(
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

    public function download($eventId, $subEventId, $id)
    {
        return app(InvitationsRepository::class)->download($id);
    }

    public function acceptable($eventId, $subEventId, $uuid)
    {
        $invite = app(InvitationsRepository::class)->findByUuid($uuid);
        $msg = null;
        return view('pages.invite-acceptable')
            ->with('invite', $invite)
            ->with('eventId', $eventId)
            ->with('subEventId', $subEventId)
            ->with('uuid', $uuid)
            ->with('msg', $msg);
    }

    public function accept(
        AcceptableStore $request,
        $eventId,
        $subEventId,
        $uuid
    ) {
        $invite = app(InvitationsRepository::class)->findByUuid($uuid);
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
            app(InvitationsRepository::class)->accept(
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
                ->with('uuid', $uuid);
    }

    public function html($eventId, $subEventId, $id)
    {
        return app(InvitationsRepository::class)->html($id);
    }
}
