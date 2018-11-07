<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Data\Repositories\Costumes as CostumesRepository;
use App\Http\Requests\CostumeStore;
use App\Http\Requests\CostumeUpdate;

class Costumes extends Controller
{
    /**
     * Get all data
     *
     * @return array
     */
    public function all()
    {
        return app(CostumesRepository::class)->all();
    }

    /**
     * Store
     *
     * @param CostumeStore $request
     * @return mixed
     */
    public function store(CostumeStore $request)
    {
        return app(CostumesRepository::class)->storeFromArray($request->all());
    }

    /**
     * @param CostumeUpdate $request
     * @param $id
     * @return mixed
     */
    public function update(CostumeUpdate $request, $id)
    {
        return app(CostumesRepository::class)->update($id, $request->all());
    }
}
