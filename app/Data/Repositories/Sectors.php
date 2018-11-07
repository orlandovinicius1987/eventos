<?php

namespace App\Data\Repositories;

use App\Data\Models\Sector as SectorModel;

class Sectors extends Repository
{
    /**
     * @var string
     */
    protected $model = SectorModel::class;
}
