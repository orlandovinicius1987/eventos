<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Exceptions\InvitationNotFoundException;
use App\Data\Repositories\Invitations as InvitationsRepository;

class Receptive extends Controller
{
    /**
     * Get all data
     *
     * @param Request $request
     * @param $eventId
     * @return array
     */
    public function invitations(Request $request, $eventId)
    {
        return app(InvitationsRepository::class)->fillteredAcceptedByEventId(
            $eventId
        );
    }

    public function makeCheckin(Request $request, $eventId)
    {
        try {
            $invitation = app(InvitationsRepository::class)->findByUuid(
                $request->get('uuid')
            );

            return $this->response(
                $invitation,
                0,
                !$invitation->makeCheckin()
                    ? 'Este convidado já havia feito check-in'
                    : null
            );
        } catch (InvitationNotFoundException $exception) {
            return $this->response(false, 0, 'Convite não localizado');
        }
    }
}
