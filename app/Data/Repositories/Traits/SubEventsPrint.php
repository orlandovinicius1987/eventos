<?php

namespace App\Data\Repositories\Traits;

use App\Services\PDF\Service as PDF;

trait SubEventsPrint
{
    public function print($id)
    {
        $subEvent = $this->findById($id);

        return app(PDF::class)->download(
            $this->generateHtml($subEvent),
            $this->makePdfFileName($subEvent)
        );
    }

    public function makePdfFileName($subEvent)
    {
        return str_slug(
            $subEvent->event->name .
                ' ' .
                $subEvent->name .
                ' ' .
                now()->format('Y m d H i')
        ) . '.pdf';
    }

    public function generateHtml($subEvent)
    {
        return view('pdf.sub-events')
            ->with([
                'heading' => $subEvent->event->name . ' - ' . $subEvent->name,
                'title' => 'Lista Geral de Convidados',
                'date' => now()->format('m/d/Y H i'),
                'subEvent' => $subEvent,
                'invitations' => $this->orderInvitations(
                    $subEvent->invitations
                ),
            ])
            ->render();
    }

    public function orderInvitations($invitations)
    {
        return $invitations->sortBy(function ($invitation) {
            return $invitation->personInstitution->institution->name .
                $invitation->personInstitution->person->name;
        });
    }
}
