<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Data\Repositories\People as PeopleRepository;
use App\Http\Requests\PersonStore;

class People extends Controller
{
    /**
     * Get all data
     *
     * @return \Illuminate\Http\Response|Collection
     */
    public function all()
    {
        return app(PeopleRepository::class)->all();
    }

    /**
     * Store
     *
     * @param PersonStore $request
     * @return \Illuminate\Http\Response|Collection
     */
    public function store(PersonStore $request)
    {
        return app(PeopleRepository::class)->storeFromArray($request->all());
    }
}
