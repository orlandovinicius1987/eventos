<?php

namespace App\Data\Repositories;

use App\Data\Models\Event;

class Events extends Base
{
    /**
     * @var string
     */
    protected $model = Event::class;

    public function store($data)
    {
        return $this->model::create(['name' => $data->name]);
    }
}
