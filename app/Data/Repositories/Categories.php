<?php
namespace App\Data\Repositories;

use App\Data\Models\Category as CategoryModel;

class Categories extends Repository
{
    /**
     * @var string
     */
    protected $model = CategoryModel::class;
}
