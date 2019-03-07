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
        return app(ClientModel::class)
            ->orderBy('name')
            ->get();
    }

    public function getSettings($id)
    {
        return $this->applyFilter($this->newQuery()->where('id', $id));
    }

    public function updateSettings($id, $data)
    {
        info($data);

        if ((int) $id !== get_current_client_id()) {
            return;
        }

        $client = app(Clients::class)->findById(get_current_client_id());

        $client->fill($data);

        $client->save();

        info($client->toArray());

        return $client;
    }
}
