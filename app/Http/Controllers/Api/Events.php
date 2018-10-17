<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Data\Repositories\Events as EventsRepository;
use App\Http\Requests\EventCreate;

class Events extends Controller
{
    /**
     * Get all data
     *
     * @return \Illuminate\Http\Response|Collection
     */
    public function all()
    {
        return app(EventsRepository::class)->all();
    }

    /**
     * Store
     *
     * @param EventCreate $request
     * @return \Illuminate\Http\Response|Collection
     */
    public function store(EventCreate $request)
    {
        return app(EventsRepository::class)->storeFromArray($request->all());
    }
}
