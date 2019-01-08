<?php

namespace App\Services\Color;

use InvertColor\Color;

class Service
{
    public function invertToBw($hex)
    {
        $color = Color::fromHex($hex)->getRGB();

        return $color[0] * 0.299 + $color[1] * 0.587 + $color[2] * 0.114 > 175
            ? '#000000'
            : '#FFFFFF';
    }

    public function getColor($colors, $position)
    {
        $colors = $colors ? $colors : '#ffd966,#000000';

        $color = explode(',', $colors);

        $color = isset($color[$position]) ? $color[$position] : null;

        return $color
            ? $color
            : ($position === 0
                ? '#ffd966'
                : $this->invertToBw($colors));
    }
}
