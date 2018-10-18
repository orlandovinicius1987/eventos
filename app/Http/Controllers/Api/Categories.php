<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Data\Repositories\Categories as CategoriesRepository;
use App\Http\Requests\CategoryStore;

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
        return app(CategorysRepository::class)->storeFromArray($request->all());
    }
}
