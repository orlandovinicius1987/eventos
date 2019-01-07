<?php

namespace App\Data\Repositories;

use App\Data\Models\Topic as TopicModel;

class Topics extends Repository
{
    /**
     * @var string
     */
    protected $model = TopicModel::class;

    /**
     * @return mixed
     */
    public function all()
    {
        return app(TopicModel::class)
            ->orderBy('name')
            ->get();
    }
}
