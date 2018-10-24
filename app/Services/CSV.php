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

        $string = preg_replace('/[\x00-\x1F\x7F-\xFF]/', '', $string);

        $data = collect($string)
            ->map(function ($line) {
                return str_getcsv($line, ";", '');
            })
            ->toArray();

        return $data;
    }

    /**
     * @param $string
     * @return \PragmaRX\Coollection\Package\Coollection
     */
    public function parse($string)
    {
        $data = $this->extractCSV($string);

        $header = array_shift($data);

        $csv = [];

        foreach ($data as $key => $row) {
            $csv[] = array_combine($header, $row);
        }

        return coollect($csv);
    }
}
