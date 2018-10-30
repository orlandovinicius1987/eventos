<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Data\Repositories\PersonInstitutions as PersonInstitutionsRepository;
use App\Http\Requests\AddressStore;
use App\Http\Requests\AddressUpdate;
use App\Http\Requests\PersonInstitutionStore as PersonInstitutionStoreRequest;
use App\Http\Requests\PersonInstitutionUpdate as PersonInstitutionUpdateRequest;
use Illuminate\Http\Request;
use App\Data\Repositories\Addresses as AddressesRepository;

class PersonInstitutionsAddresses extends Controller
{
    /**
     * Store
     *
     * @param PersonInstitutionStoreRequest $request
     * @return mixed
     */
    public function store(
        AddressStore $request,
        $personId,
        $personInstitutionId
    ) {
        return app(AddressesRepository::class)->storeForPersonInstitution(
            $personInstitutionId,
            $request->all()
        );
    }

    /**
     * @param PersonInstitutionUpdateRequest $request
     * @param $id
     * @return mixed
     */
    public function update(
        AddressUpdate $request,
        $personId,
        $personInstitutionId,
        $id
    ) {
        return app(AddressesRepository::class)->update($id, $request->all());
    }

    /**
     * @param Request $request
     * @param $personInstitutionId
     * @return mixed
     */
    public function all($personId, $personInstitutionId)
    {
        return app(AddressesRepository::class)->allByPersonInstitutionId(
            $personInstitutionId
        );
    }
}
