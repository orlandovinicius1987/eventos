<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Data\Repositories\Events as EventsRepository;

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
     * @return \Illuminate\Http\Response|Collection
     */
    public function store()
    {
        return app(EventsRepository::class)->store(request_data());
    }
}
