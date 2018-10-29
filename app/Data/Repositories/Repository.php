<?php

namespace App\Data\Repositories;

use Exception;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
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
            : $this->model::find($id);

        $model->fill($data);

        $model->save();

        return $model;
    }

    protected function applyFilter($query)
    {
        $queryFilter = $this->getQueryFilter();

        $this->filterText($queryFilter, $query);

        $this->order($query);

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

    protected function filterAllColumns(Builder $query, $text)
    {
        return $query->where('name', 'ilike', "%{$text}%");
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

        return $this->model::where($columnName, $arguments);
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

    private function order(Builder $query)
    {
        foreach ($this->new()->getOrderBy() as $field => $direction) {
            $query->orderBy($field, $direction);
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
                    "from" => ($from = ($data->currentPage() - 1) * $data->perPage() + 1),
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
        return $this->model::query();
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


// select count(*)
//     as aggregate
//     from "person_institutions"
//     inner join "person_institutions" on "person_institutions" . "id" = "invitations" . "person_institution_id"
//     inner join "institutions" on "person_institutions" . "institution_id" = "institutions" . "id"
//     inner join "people" on "person_institutions" . "person_id" = "people" . "id"
//     inner join "roles" on "person_institutions" . "role_id" = "roles" . "id"
//     where id not in(select person_institution_id from invitations where sub_event_id = 1)
//     and ("institutions" . "name"::text ilike % ferreira %
//     or "people" . "name"::text ilike % ferreira %
//     or "roles" . "name"::text ilike % ferreira %))



//     select
//     count (*) as aggregate
//     from
//     "person_institutions"
//     where
//     id not in (select
//     person_institution_id
//     from
//     invitations
//     where
//     sub_event_id = 1)

