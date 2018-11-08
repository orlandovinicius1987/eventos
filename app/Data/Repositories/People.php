<?php

namespace App\Data\Repositories;

use Intervention\Image\Facades\Image;
use App\Data\Models\Person as PersonModel;

class People extends Repository
{
    /**
     * @var string
     */
    protected $model = PersonModel::class;

    private function dummyPhotoAddress()
    {
        return public_path('img/no-image.jpg');
    }

    private function extractImage($photo)
    {
        return substr($photo, strpos($photo, ';') + 1);
    }

    public function getPhotoResponse($id)
    {
        $photo = $this->findById($id)->photo;

        return Image::make(
            !$photo ? $this->dummyPhotoAddress() : $this->extractImage($photo)
        )->response();
    }
}
