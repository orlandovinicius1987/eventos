<?php

namespace App\Data\Repositories;

use App\Data\Models\Person as PersonModel;

class People extends Repository
{
    /**
     * @var string
     */
    protected $model = PersonModel::class;
}
