<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Data\Repositories\Institutions as InstitutionsRepository;
use App\Http\Requests\InstitutionStore;
use App\Http\Requests\InstitutionUpdate;

class Institutions extends Controller
{
    /**
     * Get all data
     *
     * @return array
     */
    public function all()
    {
        return app(InstitutionsRepository::class)->all();
    }

    /**
     * Store
     *
     * @param InstitutionStore $request
     * @return mixed
     */
    public function store(InstitutionStore $request)
    {
        return app(InstitutionsRepository::class)->storeFromArray(
            $request->all()
        );
    }

    /**
     * @param InstitutionUpdate $request
     * @param $id
     * @return mixed
     */
    public function update(InstitutionUpdate $request, $id)
    {
        info($request->all());
        return app(InstitutionsRepository::class)->update($id, $request->all());
    }
}
