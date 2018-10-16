<?php
namespace App\Data\Repositories;

use App\Data\Models\PoliticalParty as PoliticalPartyModel;

class PoliticalParties extends Base
{
    /**
     * @var string
     */
    protected $model = PoliticalPartyModel::class;
}
