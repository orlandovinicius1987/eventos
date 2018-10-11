<?php
namespace App\Data\Repositories;

use App\Data\Models\Person as PersonModel;
use Illuminate\Support\Facades\Cache;

class People extends Base
{
    /**
     * @var string
     */
    protected $model = PersonModel::class;
}
