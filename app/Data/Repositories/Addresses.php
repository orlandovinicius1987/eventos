<?php
namespace App\Data\Repositories;

use App\Data\Models\Address as AddressModel;

class Addresses extends Repository
{
    /**
     * @var string
     */
    protected $model = AddressModel::class;
}
