<?php
namespace App\Data\Repositories;

use App\Data\Models\Event as EventModel;
use Illuminate\Support\Facades\Cache;

class Events extends Base
{
    /**
     * @var string
     */
    protected $model = EventModel::class;

    public function searchByEverything($search)
    {
        return ($result = $this->searchByAll($search))->count() == 0
            ? $this->emptyResponse()
            : $this->response($result);
    }

    public function searchByAll($name)
    {
        $searchStringColumns = ['name'];

        $query = $this->model::query();
        foreach ($searchStringColumns as $item) {
            $query->orWhere($item, 'ilike', '%' . $name . '%');
        }
        return $query->get();
    }

    protected function emptyResponse($search = '')
    {
        return $this->response($search, 0, null);
    }

    protected function response($data, $count = 0, $messages = null)
    {
        return [
            'data' => $data,
            'success' => is_null($messages),
            'errors' => $messages,
            'count' => $count,
        ];
    }
}
