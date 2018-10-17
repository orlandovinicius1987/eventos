<?php
namespace App\Data\Repositories;

use App\Data\Models\AdvisorType as AdvisorTypeModel;

class AdvisorTypes extends Repository
{
    /**
     * @var string
     */
    protected $model = AdvisorTypeModel::class;
}
