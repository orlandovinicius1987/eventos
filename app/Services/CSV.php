<?php

namespace App\Services;

class CSV
{
    public function parse($string)
    {
        return collect(explode("\n", trim($string)))->map(function($line) {
            return str_getcsv($line, ";", '"');
        });
    }
}
