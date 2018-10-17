<?php

namespace App\Data\Repositories;

use App\Data\Models\SubEvent as SubeventModel;

class SubEvents extends Repository
{
    /**
     * @var string
     */
    protected $model = SubEventModel::class;
}
