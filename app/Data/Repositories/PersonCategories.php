<?php

namespace App\Data\Repositories;

use App\Data\Models\Category;

class PersonCategories extends Repository
{
    protected $model = Category::class;

    /**
     * @param $personId
     * @return mixed
     */
    public function allByPerson($personId)
    {
        return $this->applyFilter($this->getPersonCategories($personId));
    }

    public function categorizables($personId)
    {
        return $this->applyFilter(
            app(Categories::class)
                ->newQuery()
                ->whereNotIn(
                    'id',
                    $this->getPersonCategories($personId)
                        ->get()
                        ->pluck('id')
                )
        );
    }

    private function getPersonCategories($personId)
    {
        return app(People::class)
            ->findById($personId)
            ->categories();
    }

    public function unCategorize($personId, $id)
    {
        return app(People::class)
            ->findById($personId)
            ->categories()
            ->detach($id);
    }

    public function categorize($personId, $categories)
    {
        $person = app(People::class)->findById($personId);

        coollect($categories)->each(function ($category) use ($person) {
            if ($category->checked) {
                $person->categories()->attach($category->id);
            }
        });

        return $person;
    }
}
