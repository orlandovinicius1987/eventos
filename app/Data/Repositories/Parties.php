<?php

namespace App\Data\Repositories;

use App\Data\Models\Institution;

class Parties extends Institutions
{
    /**
     * @var string
     */
    protected $model = Institution::class;

    public function count()
    {
        return $this->model::isParty()->count();
    }
}
