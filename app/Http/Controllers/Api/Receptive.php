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
    public function invitationAccepted(Request $request, $subEventId)
    {
        return app(InvitationsRepository::class)->fillteredAcceptedBySubEventId(
            $subEventId
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
}
