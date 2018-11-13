<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Data\Repositories\PersonInstitutions as PersonInstitutionsRepository;
use App\Http\Requests\PersonInstitutionStore as PersonInstitutionStoreRequest;
use App\Http\Requests\PersonInstitutionUpdate as PersonInstitutionUpdateRequest;
use Illuminate\Http\Request;

class PersonInstitutions extends Controller
{
    /**
     * Get all data for a person
     *
     * @return array
     */
    public function allByPerson(Request $request, $personId)
    {
        return app(PersonInstitutionsRepository::class)->allByPerson($personId);
    }

    /**
     * Get all data for Institution
     *
     * @return array
     */
    public function allByInstitution(Request $request, $institutionId)
    {
        return app(PersonInstitutionsRepository::class)->allByInstitution(
            $institutionId
        );
    }

    /**
     * Store
     *
     * @param PersonInstitutionStoreRequest $request
     * @return mixed
     */
    public function store(PersonInstitutionStoreRequest $request)
    {
        return app(PersonInstitutionsRepository::class)->storeFromArray(
            $request->all()
        );
    }

    /**
     * @param PersonInstitutionUpdateRequest $request
     * @param $id
     * @return mixed
     */
    public function update(
        $personId,
        $id,
        PersonInstitutionUpdateRequest $request
    ) {
        return app(PersonInstitutionsRepository::class)->update(
            $id,
            $request->all()
        );
    }

    /**
     * @param Request $request
     * @param $personId
     * @param $personInstitutionId
     * @return mixed
     */
    public function allAdvisorsByPersonInstitution(
        Request $request,
        $personId,
        $personInstitutionId
    ) {
        return app(
            PersonInstitutionsRepository::class
        )->allAdvisorsByPersonInstitution($personInstitutionId);
    }
}
