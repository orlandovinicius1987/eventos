<?php

namespace App\Data\Repositories\Traits;

use App\Services\PDF\Service as PDF;

trait InvitationDownload
{
    public function download($id)
    {
        $invitation = $this->findById($id);

        return app(PDF::class)->download(
            $this->generateHtml($this->getAllInvitationsFor($invitation)),
            make_pdf_filename($invitation->personInstitution->person->name),
            [0, 0, 272, 558]
        );
    }

    public function generateHtml($invitations)
    {
        return view('pdf.invitations.invitation-base')
            ->with([
                'invitations' => $invitations,
            ])
            ->render();
    }

    public function getAllInvitationsFor($invitation)
    {
        return collect(
            array_merge([$invitation], $invitation->related())
        )->sortBy(function ($invitation) {
            return is_null($invitation->subEvent->associated_subevent_id)
                ? 10
                : 100;
        });
    }
}
