<?php

namespace App\Services\Markdown;

use Parsedown;

class Service
{
    protected function parse($text)
    {
        $text = str_replace("\n\r", '<br>', $text);

        $text = str_replace("\n", '<br>', $text);

        $text = str_replace("\r", '<br>', $text);

        return $text;
    }

    public function text($text)
    {
        return (new Parsedown())->text($this->parse($text));
    }
}
