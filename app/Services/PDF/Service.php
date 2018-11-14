<?php

namespace App\Services\PDF;

use Barryvdh\DomPDF\Facade as PDF;

class Service
{
    public function download($html, $fileName = null)
    {
        return PDF::loadHTML($html)->download($this->makeFileName($fileName));
    }

    private function makeFileName($fileName)
    {
        return $fileName ?: base_path('subEvent.pdf');
    }
}
