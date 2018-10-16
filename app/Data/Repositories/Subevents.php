<?php

namespace App\Data\Repositories;

use App\Data\Models\Subevent as SubeventModel;

class Subevents extends Repository
{
    /**
     * @var string
     */
    protected $model = SubeventModel::class;
}
