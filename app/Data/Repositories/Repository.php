<?php

namespace App\Data\Repositories;

use Illuminate\Http\Request;

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
     * @param integer $id
     *
     * @return mixed
     */
    public function findById($id)
    {
        return $this->model::find($id);
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
     * @return mixed
     */
    public function findByName($name)
    {
        return $this->model::where('name', $name)->first();
    }
}
