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
    public function unCategorize($personId, $id)
    {
        return app(PersonCategoriesRepository::class)->unCategorize(
            $personId,
            $id
        );
    }

    /**
     * @param Request $request
     * @param $personInstitutionId
     * @return mixed
     */
    public function categorizables()
    {
        return app(PersonCategoriesRepository::class)->all();
    }

    /**
     * @param Request $request
     * @param $personInstitutionId
     * @return mixed
     */
    public function categorize1()
    {
        dd('categorize');
        return app(PersonCategoriesRepository::class)->categorize();
    }

    /**
     * @param Request $request
     * @param $personInstitutionId
     * @return mixed
     */
    public function categorize(Request $request)
    {
        dd($request);
        return app(PersonCategoriesRepository::class)->categorize();
    } /**
     * @param Request $request
     * @param $personInstitutionId
     * @return mixed
     */
    public function categorize2($personId, $id)
    {
        dd($personId, $id);
        return app(PersonCategoriesRepository::class)->categorize();
    }
}
