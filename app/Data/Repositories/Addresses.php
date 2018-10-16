<?php
namespace App\Data\Repositories;

use App\Data\Models\Address as AddressModel;

class Addresses extends Base
{
    /**
     * @var string
     */
    protected $model = AddressModel::class;
}
