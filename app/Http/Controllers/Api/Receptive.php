<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Exceptions\InvitationNotFoundException;
use App\Data\Repositories\Invitations as InvitationsRepository;

class Receptive extends Controller
{
    /**
     * @param $invitation
     * @return string
     */
    protected function getUserName($invitation): string
    {
        $userName = filled($invitation->checkedInBy)
            ? '<br>por ' . $invitation->checkedInBy->name
            : '';

        return $userName;
    }

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
            if (!Gate::allows('canMakeCheckinIn')) {
                return $this->response(false, 0, 'Usuário não autorizado para fazer checkin');
            }

            $invitation = app(InvitationsRepository::class)->findByUuid(
                $request->get('uuid')
            );

            return $this->response(
                $invitation,
                0,
                $this->makeResponseMessage($invitation)
            );
        } catch (InvitationNotFoundException $exception) {
            return $this->response(false, 0, 'Convite não localizado');
        }
    }

    /**
     * @param $invitation
     * @return string|null
     */
    protected function makeResponseMessage($invitation)
    {
        return !$invitation->makeCheckin()
            ? 'Este convidado já havia feito check-in' .
                    $this->getUserName($invitation)
            : null;
    }
}
