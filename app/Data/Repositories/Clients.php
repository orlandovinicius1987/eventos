<?php
namespace App\Data\Repositories;

use App\Data\Models\Client as ClientModel;
use Illuminate\Support\Facades\Cache;

class Clients extends Base
{
    /**
     * @var string
     */
    protected $model = ClientModel::class;
}
