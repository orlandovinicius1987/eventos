<?php

namespace App\Data\Repositories;

use Exception;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Query\Builder as QueryBuilder;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Builder;

abstract class Repository
{
    /**
     * @var
     */
    protected $model;

    /**
     * @param $data
     *
     * @return mixed
     */
    public function create($data)
    {
        $model = is_null(($id = isset($data['id']) ? $data['id'] : null))
            ? new $this->model()
            : $this->newQuery()
                ->where('id', $id)
                ->first();

        $model->fill($data);

        $model->save();

        return $model;
    }

    protected function allElements($queryFilter)
    {
        $array = $queryFilter->toArray();

        $array['pagination']['per_page'] = $this->count();
        $array['pagination']['current_page'] = 1;

        return coollect($array);
    }

    protected function applyFilter($query)
    {
        $queryFilter = $this->getQueryFilter();

        $this->filterText($queryFilter, $query);

        $this->order($query);

        if (
            isset($queryFilter->toArray()['pagination']['current_page']) &&
            $queryFilter->toArray()['pagination']['current_page'] == 0
        ) {
            info($queryFilter->pagination->currentPage);
            $queryFilter = $this->allElements($queryFilter);
        }

        return $this->makePaginationResult(
            $query->paginate(
                $queryFilter->pagination
                    ? $queryFilter->pagination->perPage
                    : 5,
                ['*'],
                'page',
                $queryFilter->pagination
                    ? $queryFilter->pagination->currentPage
                    : 1
            )
        );
    }

    protected function filterAllColumns($query, $text)
    {
        if (
            $this->model()
                ->getFilterableColumns()
                ->count() > 0
        ) {
            $query->where(function ($newQuery) use ($query, $text) {
                $this->model()
                    ->getFilterableColumns()
                    ->each(function ($column) use ($newQuery, $text) {
                        $newQuery->orWhere($column, 'ilike', "%{$text}%");
                    });
            });
        }

        return $query;
    }

    /**
     * @param $filter
     * @param $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    protected function filterText($filter, $query)
    {
        if (($filter = $filter['filter']['text'])) {
            $this->filterAllColumns($query, $filter);
        }

        return $query;
    }

    protected function findByAnyColumnName($name, $arguments)
    {
        return $this->makeQueryByAnyColumnName(
            'findBy',
            $name,
            $arguments
        )->first();
    }

    protected function generatePages(LengthAwarePaginator $data)
    {
        $firstPage = max($data->currentPage() - 2, 1);

        $lastPage = min($firstPage + 4, $data->lastPage());

        return range($firstPage, $lastPage);
    }

    protected function filterByAnyColumnName($name, $arguments)
    {
        return $this->applyFilter(
            $this->makeQueryByAnyColumnName('filterBy', $name, $arguments)
        );
    }

    protected function getByAnyColumnName($name, $arguments)
    {
        return $this->makeQueryByAnyColumnName(
            'getBy',
            $name,
            $arguments
        )->get();
    }

    protected function getQueryFilter()
    {
        return coollect(json_decode(request()->get('query'), true));
    }

    protected function makeQueryByAnyColumnName($startsWith, $name, $arguments)
    {
        $columnName = snake_case(Str::after($name, $startsWith));

        return $this->newQuery()->where($columnName, $arguments);
    }

    /**
     * @param array $search
     * @param array $attributes
     *
     * @return mixed
     */
    public function firstOrCreate(array $search, array $attributes = [])
    {
        return $this->model::firstOrCreate($search, $attributes);
    }

    /**
     * @return mixed
     */
    public function new()
    {
        return new $this->model();
    }

    /**
     * @return mixed
     */
    public function model()
    {
        return $this->new();
    }

    private function order($query)
    {
        if ($query instanceof QueryBuilder) {
            foreach ($this->new()->getOrderBy() as $field => $direction) {
                $query->orderBy($field, $direction);
            }
        }

        return $query;
    }

    public function transform($data)
    {
        return $data;
    }

    /**
     * @return mixed
     */
    public function all()
    {
        return $this->applyFilter($this->newQuery());
    }

    /**
     * @param $perPage
     * @param $total
     * @return float
     */
    private function maxPage($perPage, $total)
    {
        return ceil($total / $perPage);
    }

    /**
     * @param $current
     * @param $perPage
     * @param $total
     * @return int
     */
    private function fixCurrentPage($current, $perPage, $total)
    {
        if ($current > $this->maxPage($perPage, $total)) {
            return 1;
        } else {
            return $current;
        }
    }

    /**
     * Make pagination data.
     *
     * @param LengthAwarePaginator $data
     * @return array
     */
    protected function makePaginationResult(LengthAwarePaginator $data)
    {
        info($this->getQueryFilter()->toArray());

        return [
            "links" => [
                "pagination" => [
                    "total" => $data->total(),
                    "per_page" => $data->perPage(),
                    "current_page" => $data->currentPage(),
                    "last_page" => $data->lastPage(),
                    "from" => ($from =
                        ($data->currentPage() - 1) * $data->perPage() + 1),
                    "to" => $from + count($data->items()) - 1,
                    "pages" => $this->generatePages($data),
                ],
            ],

            "filter" => $this->getQueryFilter()['filter'],

            "rows" => $this->transform($data->items()),
        ];
    }

    /**
     * @param $string
     *
     * @return mixed
     */
    public function cleanString($string)
    {
        return str_replace(["\n"], [''], $string);
    }

    /**
     * @return Builder
     */
    protected function newQuery()
    {
        $query = $this->model::query();

        if (
            $this->model()
                ->getSelectColumns()
                ->count() > 0
        ) {
            $query->select(
                $this->model()
                    ->getSelectColumns()
                    ->toArray()
            );
        }

        return $query;
    }

    /**
     * @param Request $request
     * @param $model
     */
    protected function saveTags($request, $model)
    {
        if (isset($request['tags'])) {
            $model->syncTags($request['tags']);
        }
    }

    /**
     * @param $name
     * @param $arguments
     * @return mixed
     * @throws Exception
     */
    public function __call($name, $arguments)
    {
        if (starts_with($name, 'findBy')) {
            return $result = $this->findByAnyColumnName($name, $arguments);
        }

        if (starts_with($name, 'filterBy')) {
            return $result = $this->filterByAnyColumnName($name, $arguments);
        }

        if (starts_with($name, 'getBy')) {
            return $result = $this->getByAnyColumnName($name, $arguments);
        }

        throw new Exception('Method not found: ' . $name);
    }

    /**
     * Get a random element.
     *
     * @return mixed
     */
    public function randomElement()
    {
        return $this->model::inRandomOrder()->first();
    }

    /**
     * @param $array
     * @return mixed
     */
    public function storeFromArray($array)
    {
        return $this->fillAndSave($array, new $this->model());
    }

    /**
     * @param $id
     * @param $array
     * @return mixed
     */
    public function update($id, $array)
    {
        return $this->fillAndSave($array, $this->findById($id));
    }

    /**
     * @param $array
     * @param $model
     * @return mixed
     */
    protected function fillAndSave($array, $model)
    {
        $model->fill($array);

        $model->save();

        return $model;
    }

    public function count()
    {
        return $this->model::count();
    }
}
