<?php

namespace App\Services\QRCode;

use BaconQrCode\Writer;
use BaconQrCode\Renderer\ImageRenderer;
use BaconQrCode\Renderer\Image\ImagickImageBackEnd;
use BaconQrCode\Renderer\RendererStyle\RendererStyle;

class Service
{
    protected $writer;

    public function __construct()
    {
        $renderer = new ImageRenderer(
            new RendererStyle(400),
            new ImagickImageBackEnd()
        );

        $this->writer = new Writer($renderer);
    }

    public function generateString($text)
    {
        return $this->writer->writeString($text);
    }

    public function generateFile($text, $file)
    {
        $this->writer->writeFile($text, $file);
    }
}
