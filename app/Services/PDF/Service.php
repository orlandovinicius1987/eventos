<?php

namespace App\Services\PDF;

use Barryvdh\DomPDF\Facade as PDF;

class Service
{
    public function download(
        $html,
        $fileName = null,
        $paperSize = 'A4',
        $extraOptions = []
    ) {
        $pdf = PDF::setOptions(
            array_merge(
                [
                    'defaultFont' => 'Helvetica',
                ],
                $extraOptions
            )
        )->setPaper($paperSize);

        $pdf->getDomPDF()->set_base_path(realpath(public_path('css')));

        return $pdf->loadHTML($html)->download($this->makeFileName($fileName));
    }

    private function makeFileName($fileName)
    {
        return $fileName ?: base_path('subEvent.pdf');
    }
}
