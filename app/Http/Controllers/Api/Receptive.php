<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Data\Repositories\Roles as RolesRepository;
use Illuminate\Http\Request;
use App\Data\Repositories\Invitations as InvitationsRepository;

class Receptive extends Controller
{
    /**
     * Get all data
     *
     * @return array
     */
    public function invitationAccepted(Request $request, $eventId, $subEventId)
    {
        return app(InvitationsRepository::class)->fillteredAcceptedByEventId(
            $eventId
        );
    }

    public function makeCheckin(
        Request $request,
        $eventId,
        $subEventId,
        $invitationId
    ) {
        return app(InvitationsRepository::class)->makeCheckin($invitationId);
    }

    public function makeCheckinWithCode(
        Request $request,
        $eventId,
        $subEventId,
        $code
    ) {
        return app(InvitationsRepository::class)->makeCheckinWithCode(
            $subEventId,
            $code
        );
    }
}
