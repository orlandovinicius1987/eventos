<?php

namespace App\Services\Markdown;

class Service
{
    protected function parse($text)
    {
        $text = str_replace("\n\r", '<br>', $text);

        $text = str_replace("\n", '<br>', $text);

        $text = str_replace("\r", '<br>', $text);

        $text = preg_replace('/(<br>)(<h\d>)/', '$2', $text);

        $text = preg_replace('/(<\/h\d>)(<br>)/', '$1', $text);

        return $text;
    }

    public function text($text)
    {
        return $this->parse((new Markdown())->text($text));
    }
}
