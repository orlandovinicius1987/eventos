<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Data\Repositories\People as PeopleRepository;
use App\Http\Requests\NewPersonName;
use App\Http\Requests\PersonStore;
use App\Http\Requests\PersonUpdate;

class People extends Controller
{
    /**
     * Get all data
     *
     * @return array
     */
    public function all()
    {
        return app(PeopleRepository::class)->all();
    }

    /**
     * Store
     *
     * @param PersonStore $request
     * @return mixed
     */
    public function store(PersonStore $request)
    {
        return app(PeopleRepository::class)->storeFromArray($request->all());
    }

    /**
     * @param PersonUpdate $request
     * @param $id
     * @return mixed
     */
    public function update(PersonUpdate $request, $id)
    {
        return app(PeopleRepository::class)->update($id, $request->all());
    }

    /**
     * @param $id
     * @return mixed
     */
    public function photo($id)
    {
        return app(PeopleRepository::class)->getPhotoResponse($id);
    }

    /**
     * @param $id
     * @return mixed
     */
    public function phoneBook($id)
    {
        return app(PeopleRepository::class)->phoneBook($id);
    }

    public function validateName(NewPersonName $request)
    {
        return $this->emptyResponse();
    }
}
