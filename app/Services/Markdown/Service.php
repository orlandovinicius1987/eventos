<?php

namespace App\Services\Markdown;

use Parsedown;

class Service
{
    public function text($text)
    {
        return (new Parsedown())->text($text);
    }
}
