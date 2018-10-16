<?php
namespace App\Data\Repositories;

use App\Data\Models\Party as PoliticalPartyModel;

class PoliticalParties extends Base
{
    /**
     * @var string
     */
    protected $model = PoliticalPartyModel::class;
}
