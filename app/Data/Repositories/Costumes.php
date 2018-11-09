<?php

namespace App\Data\Repositories;

use App\Data\Models\Costume as CostumeModel;

class Costumes extends Repository
{
    /**
     * @var string
     */
    protected $model = CostumeModel::class;
}
