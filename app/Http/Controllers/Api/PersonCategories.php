<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
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
     * @param $personId
     * @return mixed
     */
    public function categorize($personId, Request $request)
    {
        return app(PersonCategoriesRepository::class)->categorize(
            $personId,
            $request->get('categories')
        );
    }
}
