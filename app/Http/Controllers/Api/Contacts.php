<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Data\Repositories\Contacts as ContactsRepository;
use App\Http\Requests\ContactStore;

class Contacts extends Controller
{
    /**
     * Get all data
     *
     * @return array
     */
    public function all()
    {
        return app(ContactsRepository::class)->all();
    }

    /**
     * Store
     *
     * @param ContactStore $request
     * @return mixed
     */
    public function store(ContactStore $request)
    {
        return app(ContactsRepository::class)->storeFromArray($request->all());
    }
}
