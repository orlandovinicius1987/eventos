<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Data\Repositories\PersonCategories as PersonCategoriesRepository;

class PersonCategories extends Controller
{
    /**
     * @param $personId
     * @return mixed
     */
    public function all($personId)
    {
        return app(PersonCategoriesRepository::class)->allByPerson($personId);
    }

    /**
     * @param $personId
     * @param $id
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
     * @param $personId
     * @return mixed
     */
    public function categorizables($personId)
    {
        return app(PersonCategoriesRepository::class)->categorizables(
            $personId
        );
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
