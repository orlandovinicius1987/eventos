<?php

namespace App\Data\Repositories;

use App\Data\Models\Role as RoleModel;

class Roles extends Repository
{
    /**
     * @var string
     */
    protected $model = RoleModel::class;
}
