<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Data\Repositories\Clients as ClientsRepository;

class Clients extends Controller
{
    /**
     * Get all data
     *
     * @return array
     */
    public function current()
    {
        return app(ClientsRepository::class)->getCurrent();
    }

    public function update($id)
    {
        return app(ClientsRepository::class)->updateCurrent(
            $id,
            request()->all()
        );
    }
}
