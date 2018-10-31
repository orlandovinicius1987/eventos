<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Data\Repositories\PersonInstitutions as PersonInstitutionsRepository;
use App\Http\Requests\AddressStore;
use App\Http\Requests\AddressUpdate;
use App\Http\Requests\CategoryStore;
use App\Http\Requests\CategoryUpdate;
use App\Http\Requests\PersonInstitutionStore as PersonInstitutionStoreRequest;
use App\Http\Requests\PersonInstitutionUpdate as PersonInstitutionUpdateRequest;
use Illuminate\Http\Request;
use App\Data\Repositories\PersonCategories as PersonCategoriesRepository;

class PersonCategories extends Controller
{
    /**
     * @param Request $request
     * @param $personInstitutionId
     * @return mixed
     */
    public function all($personId)
    {
        return app(PersonCategoriesRepository::class)->allByPerson($personId);
    }

    /**
     * @param Request $request
     * @param $personInstitutionId
     * @return mixed
     */
    public function disassociate($personId, $id)
    {
        return app(PersonCategoriesRepository::class)->disassociate(
            $personId,
            $id
        );
    }
}
