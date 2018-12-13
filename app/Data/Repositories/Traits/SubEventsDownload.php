<?php

namespace App\Data\Repositories\Traits;

use App\Services\PDF\Service as PDF;

trait SubEventsDownload
{
    public function download($id)
    {
        $subEvent = $this->findById($id);

        return app(PDF::class)
            ->initialize($this->generateHtml($subEvent))
            ->download(make_pdf_filename($subEvent->event->name));
    }

    public function generateHtml($subEvent)
    {
        return //'subHeading' => $subEvent->name,
            //'title' => 'Lista Geral de Convidados',
            view('pdf.sub-events')
                ->with([
                    'heading' => $subEvent->event->name,
                    'subHeading' => 'Lista Geral de Convidados',
                    'date' => now()->format('m/d/Y  H:i'),
                    'subEvent' => $subEvent,
                    'invitations' => $this->getInvitations($subEvent),
                ])
                ->render();
    }

    public function orderInvitations($invitations)
    {
        return $invitations->sortBy(function ($invitation) {
            return $invitation->personInstitution->person->name;
        });
    }

    public function getInvitations($subEvent)
    {
        $invitations = collect();

        $subEvent->event->subEvents
            ->filter(function ($subEvent) {
                return blank($subEvent->associated_subevent_id);
            })
            ->each(function ($subEvent) use ($invitations) {
                $subEvent->invitations->each(function ($invitation) use (
                    $invitations
                ) {
                    $invitations->push($invitation);
                });
            });

        return $this->orderInvitations($invitations);
    }
}
