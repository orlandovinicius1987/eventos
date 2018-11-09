<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Data\Repositories\Sectors as SectorsRepository;
use App\Http\Requests\SectorStore;
use App\Http\Requests\SectorUpdate;

class Sectors extends Controller
{
    /**
     * Get all data
     *
     * @return array
     */
    public function all()
    {
        return app(SectorsRepository::class)->all();
    }

    /**
     * Store
     *
     * @param SectorStore $request
     * @return mixed
     */
    public function store(SectorStore $request)
    {
        return app(SectorsRepository::class)->storeFromArray($request->all());
    }

    /**
     * @param SectorUpdate $request
     * @param $id
     * @return mixed
     */
    public function update(SectorUpdate $request, $id)
    {
        return app(SectorsRepository::class)->update($id, $request->all());
    }
}
