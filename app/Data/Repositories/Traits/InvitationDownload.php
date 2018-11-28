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

    /**
     *
     * Appends the QrCode Blob URL to $invitations
     *
     * @param $invitations
     * @return mixed
     */
    public function appendQrCodes($invitations)
    {
        foreach ($invitations as $invitation) {
            $invitation->append('qr_code_blob');
        }

        return $invitations;
    }

    public function generateHtml($invitations)
    {
        $invitations = $this->appendQrCodes($invitations);

        return view('pdf.invitations.invitation-base')
            ->with([
                'invitations' => $invitations,
            ])
            ->render();
    }
}
