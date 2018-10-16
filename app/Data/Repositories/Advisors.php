<?php
namespace App\Data\Repositories;

use App\Data\Models\Advisor as AdvisorModel;

class Advisors extends Repository
{
    /**
     * @var string
     */
    protected $model = AdvisorModel::class;
}
