<?php

namespace App\Data\Repositories;

use App\Data\Models\Client as ClientModel;

class Clients extends Repository
{
    /**
     * @var string
     */
    protected $model = ClientModel::class;

    /**
     * @return mixed
     */
    public function all()
    {
        $query = app(ClientModel::class)->orderBy('name');
        return $query->get();
    }
}
