<?php

namespace App\Data\Repositories\Traits;

use App\Services\PDF\Service as PDF;

trait InvitationDownload
{
    public function download($id)
    {
        $invitation = $this->findById($id);

        return app(PDF::class)->download(
            $this->generateHtml($invitation),
            make_pdf_filename($invitation->personInstitution->person->name),
            [0, 0, 252, 538]
        );
    }

    public function generateHtml($invitation)
    {
        return view('pdf.invitation')
            ->with([
                'invitation' => $invitation,
            ])
            ->render();
    }
}
