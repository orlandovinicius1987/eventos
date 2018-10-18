<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Data\Repositories\Addresses as AddressesRepository;
use App\Http\Requests\AddressStore;

class Addresses extends Controller
{
    /**
     * Get all data
     *
     * @return array
     */
    public function all()
    {
        return app(AddressesRepository::class)->all();
    }

    /**
     * Store
     *
     * @param AddressStore $request
     * @return mixed
     */
    public function store(AddressStore $request)
    {
        return app(AddressesRepository::class)->storeFromArray($request->all());
    }
}
