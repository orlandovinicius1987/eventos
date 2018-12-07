<?php

namespace App\Data\Repositories;

use App\Data\Models\Category;
use App\Events\PersonCategoriesChanged;

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

    /**
     * @param $categories
     * @param $person
     */
    protected function attachCategories($categories, $person): void
    {
        coollect($categories)->each(function ($category) use ($person) {
            if ($category->checked) {
                $person->categories()->attach($category->id);
            }
        });
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

    /**
     * @param $oldCategories
     * @param $person
     */
    protected function broadcastUpdate($oldCategories, $person): void
    {
        if ($oldCategories !== $person->fresh()->categories->toArray()) {
            event(new PersonCategoriesChanged($person));
        }
    }

    private function getPersonCategories($personId)
    {
        return app(People::class)
            ->findById($personId)
            ->categories();
    }

    public function unCategorize($personId, $id)
    {
        ($person = app(People::class)->findById($personId))
            ->categories()
            ->detach($id);

        event(new PersonCategoriesChanged($person));
    }

    public function categorize($personId, $categories)
    {
        $person = app(People::class)->findById($personId);

        $oldCategories = $person->categories->toArray();

        $this->attachCategories($categories, $person);

        $this->broadcastUpdate($oldCategories, $person);

        return $person;
    }
}
