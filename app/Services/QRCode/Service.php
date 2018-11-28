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

    public function writeFile($text, $file)
    {
        $this->writer->writeFile($text, $file);
    }

    public function generateFile($fileName, $relativePath, $text)
    {
        $fullPath = storage_path($relativePath);

        if (!file_exists($fullPath)) {
            mkdir($fullPath, 0777, true);
        }

        $this->writeFile($text, $fullPath . $fileName);
    }
}
