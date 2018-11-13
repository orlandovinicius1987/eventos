<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Data\Repositories\Advisors as AdvisorsRepository;
use App\Data\Repositories\PersonInstitutions as PersonInstitutionsRepository;
use App\Http\Requests\AdvisorStore;
use App\Http\Requests\AdvisorUpdate;
use Illuminate\Http\Request;

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
     * @param Request $request
     * @param $personInstitutionId
     * @return mixed
     */
    public function allByPersonInstitution(
        Request $request,
        $personId,
        $personInstitutionId
    ) {
        return app(AdvisorsRepository::class)->allByPersonInstitutionId(
            $personInstitutionId
        );
    }

    /**
     * Store
     *
     * @param AdvisorStore $request
     * @return mixed
     */
    public function store(AdvisorStore $request)
    {
        return app(PersonInstitutionsRepository::class)->storeFromArray(
            $request->all()
        );
    }

    /**
     * @param AdvisorUpdate $request
     * @param $personId
     * @param $personInstitutionId
     * @param $id
     * @return mixed
     */
    public function update(
        AdvisorUpdate $request,
        $personId,
        $personInstitutionId,
        $id
    ) {
        return app(PersonInstitutionsRepository::class)->update(
            $id,
            $request->all()
        );
    }
}
