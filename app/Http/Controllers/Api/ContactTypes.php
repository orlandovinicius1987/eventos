<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ContactTypeStore;
use App\Http\Requests\ContactTypeUpdate;
use App\Data\Repositories\ContactTypes as ContactTypesRepository;

/**
 * Class ContactTypes
 * @package App\Http\Controllers\Api
 */
class ContactTypes extends Controller
{
    /**
     * Get all data
     *
     * @return \Illuminate\Http\Response|Collection
     */
    public function all()
    {
        return app(ContactTypesRepository::class)->all();
    }

    /**
     * Store
     *
     * @param ContactTypeStore $request
     * @return \Illuminate\Http\Response|Collection
     */
    public function store(ContactTypeStore $request)
    {
        return app(ContactTypesRepository::class)->storeFromArray(
            $request->all()
        );
    }

    /**
     * @param PersonUpdate $request
     * @param $id
     * @return mixed
     */
    public function update(ContactTypeUpdate $request, $id)
    {
        return app(ContactTypesRepository::class)->update($id, $request->all());
    }
}
