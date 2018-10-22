<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Data\Repositories\Advisors as AdvisorsRepository;
use App\Http\Requests\AdvisorStore;
use App\Http\Requests\AdvisorUpdate;

class Advisors extends Controller
{
    /**
     * Get all data
     *
     * @return array
     */
    public function all()
    {
        return app(AdvisorsRepository::class)->all();
    }

    /**
     * Store
     *
     * @param AdvisorStore $request
     * @return mixed
     */
    public function store(AdvisorStore $request)
    {
        return app(AdvisorsRepository::class)->storeFromArray($request->all());
    }

    /**
     * @param AdvisorUpdate $request
     * @param $id
     * @return mixed
     */
    public function update(AdvisorUpdate $request, $id)
    {
        return app(AdvisorsRepository::class)->update($id, $request->all());
    }
}
