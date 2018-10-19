<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Data\Repositories\Roles as RolesRepository;
use App\Http\Requests\RoleStore;
use App\Http\Requests\RoleUpdate;

class Roles extends Controller
{
    /**
     * Get all data
     *
     * @return array
     */
    public function all()
    {
        return app(RolesRepository::class)->all();
    }

    /**
     * Store
     *
     * @param RoleStore $request
     * @return mixed
     */
    public function store(RoleStore $request)
    {
        return app(RolesRepository::class)->storeFromArray($request->all());
    }

    /**
     * @param RoleUpdate $request
     * @param $id
     * @return mixed
     */
    public function update(RoleUpdate $request, $id)
    {
        return app(RolesRepository::class)->update($id, $request->all());
    }
}
