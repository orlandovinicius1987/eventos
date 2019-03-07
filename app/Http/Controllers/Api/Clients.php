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
    public function getSettings($id)
    {
        return app(ClientsRepository::class)->getSettings($id);
    }

    public function updateSettings($id)
    {
        return app(ClientsRepository::class)->updateSettings(
            $id,
            request()->all()
        );
    }
}
