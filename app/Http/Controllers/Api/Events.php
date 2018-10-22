<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Data\Repositories\Events as EventsRepository;
use App\Http\Requests\EventStore;
use App\Http\Requests\EventUpdate;

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
     * @param EventStore $request
     * @return mixed
     */
    public function store(EventStore $request)
    {
        return app(EventsRepository::class)->storeFromArray($request->all());
    }

    /**
     * @param EventUpdate $request
     * @param $id
     * @return mixed
     */
    public function update(EventUpdate $request, $id)
    {
        return app(EventsRepository::class)->update($id, $request->all());
    }
}
