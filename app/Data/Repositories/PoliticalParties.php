<?php
namespace App\Data\Repositories;

use App\Data\Models\PoliticalParty as PoliticalPartyModel;

class PoliticalParties extends Repository
{
    /**
     * @var string
     */
    protected $model = PoliticalPartyModel::class;
}
