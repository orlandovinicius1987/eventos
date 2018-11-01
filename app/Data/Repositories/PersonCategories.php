<?php
namespace App\Data\Repositories;

use App\Data\Models\Category as CategoryModel;
use Illuminate\Pagination\LengthAwarePaginator;

class PersonCategories extends Repository
{
    /**
     * @param $personId
     * @return mixed
     */
    public function allByPerson($personId)
    {
        return $this->makePaginationResult(
            new LengthAwarePaginator(
                app(People::class)->findById($personId)->categories,
                1,
                5,
                1
            )
        );
    }

    public function unCategorize($personId, $id)
    {
        dd(
            app(People::class)
                ->findById($personId)
                ->categories()
                ->detach($id)
        );
    }
}
