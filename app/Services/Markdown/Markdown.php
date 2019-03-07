<?php

namespace App\Services\Markdown;

use ParsedownExtra;

class Markdown extends ParsedownExtra
{
    protected function inlineImage($Excerpt)
    {
        $Inline = parent::inlineImage($Excerpt);

        if (!isset($Inline['element']['attributes']['title'])) {
            return $Inline;
        }

        $size = $Inline['element']['attributes']['title'];

        if (preg_match('/^\d+x\d+$/', $size)) {
            list($width, $height) = explode('x', $size);

            $Inline['element']['attributes']['width'] = $width;
            $Inline['element']['attributes']['height'] = $height;

            unset($Inline['element']['attributes']['title']);
        }

        return $Inline;
    }
}
