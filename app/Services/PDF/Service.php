<?php

namespace App\Services\PDF;

use Barryvdh\DomPDF\Facade as PDF;

class Service
{
    public function generate($html, $fileName = null)
    {
        return PDF::loadHTML($html)->save($this->makeFileName($fileName));
    }

    private function makeFileName($fileName)
    {
        return $fileName ?: base_path('subEvent.pdf');
    }
}
