<?php

namespace App\Data\Repositories;

use App\Data\Models\Topic as TopicModel;

class Topics extends Repository
{
    /**
     * @var string
     */
    protected $model = TopicModel::class;

}
