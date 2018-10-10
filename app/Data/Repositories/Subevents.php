<?php
namespace App\Data\Repositories;

use App\Data\Models\Subevent as SubeventModel;
use Illuminate\Support\Facades\Cache;

class Subevents extends Base
{
    /**
     * @var string
     */
    protected $model = SubeventModel::class;
}
