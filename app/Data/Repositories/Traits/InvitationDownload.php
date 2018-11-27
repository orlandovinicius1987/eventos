<?php

namespace App\Data\Repositories\Traits;

use App\Services\PDF\Service as PDF;

trait InvitationDownload
{
    public function download($id)
    {
        $invitation = $this->findById($id);

        return app(PDF::class)
            ->initialize(
                $this->generateHtml($this->getAllInvitationsFor($invitation)),
                [0, 0, 272, 558]
            )
            ->download(
                make_pdf_filename($invitation->personInstitution->person->name)
            );
    }

    public function savePdf($invitation)
    {
        $fileName = storage_path(
            'app/pdf/' .
                make_pdf_filename($invitation->personInstitution->person->name)
        );

        app(PDF::class)
            ->initialize(
                $this->generateHtml($this->getAllInvitationsFor($invitation))
            )
            ->save($fileName);

        return $fileName;
    }

    public function html($id)
    {
        return $this->generateHtml(
            $this->getAllInvitationsFor($this->findById($id))
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
