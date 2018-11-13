<?php

namespace App\Data\Repositories\Traits;

use App\Services\PDF\Service as PDF;

trait SubEventsPrint
{
    public function print($id)
    {
        $subEvent = $this->findById($id);

        return app(PDF::class)->generate(
            $this->generateHtml($subEvent),
            $this->makePdfFileName($subEvent)
        );
    }

    public function makePdfFileName($subEvent)
    {
        return base_path(
            str_slug($subEvent->event->name . ' ' . $subEvent->name . ' ') .
                '.pdf'
        );
    }

    public function generateHtml($subEvent)
    {
        return view('pdf.sub-events')
            ->with([
                'title' => $subEvent->event->name . ' - ' . $subEvent->name,
                'subTitle' => 'Lista Geral de Convidados',
                'date' => now()->format('m/d/Y H i'),
            ])
            ->render();
    }
}
