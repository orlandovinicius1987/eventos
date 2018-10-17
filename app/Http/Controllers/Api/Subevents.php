<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Data\Repositories\Subevents as SubeventsRepository;
use App\Http\Requests\SubeventStore;
use Illuminate\Http\Request;

class Subevents extends Controller
{
    /**
     * Get all data
     *
     * @return \Illuminate\Http\Response|Collection
     */
    public function all(Request $request)
    {
        $event_id = $request->get('event_id');
        if (is_null($event_id)) {
            return app(SubeventsRepository::class)->all();
        } else {
            return app(SubeventsRepository::class)->getByEventId($event_id);
        }
    }

    /**
     * Store
     *
     * @param SubeventStore $request
     * @return \Illuminate\Http\Response|Collection
     */
    public function store(SubeventStore $request)
    {
        return app(SubeventsRepository::class)->storeFromArray($request->all());
    }
}
