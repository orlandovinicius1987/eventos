<?php

namespace App\Data\Repositories;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

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
        $model = is_null($id = isset($data['id']) ? $data['id'] : null)
            ? new $this->model()
            : $this->model::find($id);

        $model->fill($data);

        $model->save();

        return $model;
    }

    private function findByAnyColumnName($name, $arguments)
    {
        return $this->makeQueryByAnyColumnName('findBy', $name, $arguments)->first();
    }

    private function getByAnyColumnName($name, $arguments)
    {
        return $this->makeQueryByAnyColumnName('getBy', $name, $arguments)->get();
    }

    private function makeQueryByAnyColumnName($startsWith, $name, $arguments)
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

    /**
     * @return mixed
     */
    public function all()
    {
        return $this->model::all();
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
}
