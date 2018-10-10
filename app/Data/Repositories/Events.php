<?php
namespace App\Data\Repositories;

use App\Data\Models\Event as EventModel;
use Illuminate\Support\Facades\Cache;

class Events extends Base
{
    /**
     * @var string
     */
    protected $model = EventModel::class;
}
