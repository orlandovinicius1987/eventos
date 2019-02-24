<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Data\Repositories\Topics as TopicsRepository;
use App\Http\Requests\TopicStore;
use App\Http\Requests\TopicUpdate;

/**
 * Class Topics
 * @package App\Http\Controllers\Api
 */
class Topics extends Controller
{
    /**
     * Get all data
     *
     * @return \Illuminate\Http\Response|Collection
     */
    public function all()
    {
        return app(TopicsRepository::class)->all();
    }

    /**
     * Store
     *
     * @param TopicStore $request
     * @return \Illuminate\Http\Response|Collection
     */
    public function store(TopicStore $request)
    {
        return app(TopicsRepository::class)->storeFromArray($request->all());
    }

    /**
     * @param PersonUpdate $request
     * @param $id
     * @return mixed
     */
    public function update(TopicUpdate $request, $id)
    {
        return app(TopicsRepository::class)->update($id, $request->all());
    }
}
