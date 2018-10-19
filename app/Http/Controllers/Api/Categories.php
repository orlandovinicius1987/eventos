<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Data\Repositories\Categories as CategoriesRepository;
use App\Http\Requests\CategoryStore;
use App\Http\Requests\CategoryUpdate;

/**
 * Class Categories
 * @package App\Http\Controllers\Api
 */
class Categories extends Controller
{
    /**
     * Get all data
     *
     * @return \Illuminate\Http\Response|Collection
     */
    public function all()
    {
        return app(CategoriesRepository::class)->all();
    }

    /**
     * Store
     *
     * @param CategoryStore $request
     * @return \Illuminate\Http\Response|Collection
     */
    public function store(CategoryStore $request)
    {
        return app(CategoriesRepository::class)->storeFromArray(
            $request->all()
        );
    }

    /**
     * @param PersonUpdate $request
     * @param $id
     * @return mixed
     */
    public function update(CategoryUpdate $request, $id)
    {
        return app(CategoriesRepository::class)->update($id, $request->all());
    }
}
