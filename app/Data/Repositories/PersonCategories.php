<?php
namespace App\Data\Repositories;

use App\Data\Models\Category as CategoryModel;
use App\Data\Models\Category;
use Illuminate\Pagination\LengthAwarePaginator;

class PersonCategories extends Repository
{
    protected $model = Category::class;
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
        return app(People::class)
            ->findById($personId)
            ->categories()
            ->detach($id);
    }

    public function categorize()
    {
        //        return app(People::class)
        //            ->findById()
        //            ->categories()
        //            ->sync();
    }
}
