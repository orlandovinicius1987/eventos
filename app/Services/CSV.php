<?php

namespace App\Services;

class CSV
{
    /**
     * @param $string
     * @return array
     */
    private function extractCSV($string): array
    {
        $string = str_replace("\n\r", "\n", $string);
        $string = str_replace("\r", "\n", $string);
        $string = explode("\n", trim($string));

        $data = collect($string)
            ->map(function ($line) {
                return str_getcsv($line, ";", '');
            })
            ->toArray();

        return $data;
    }

    private function fixHeader($array)
    {
        return coollect($array)
            ->map(function ($value) {
                return preg_replace('/[\x00-\x1F\x80-\xFF]/', '', $value);
            })
            ->toArray();
    }

    /**
     * @param $string
     * @return \PragmaRX\Coollection\Package\Coollection
     */
    public function parse($string)
    {
        $data = $this->extractCSV($string);

        $header = $this->fixHeader(array_shift($data));

        $csv = [];

        foreach ($data as $key => $row) {
            if (count($header) == count($row)) {
                $csv[] = array_combine($header, $row);
            }
        }

        $csv = coollect($csv);

        return coollect($csv);
    }
}
