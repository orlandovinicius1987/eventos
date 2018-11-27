<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    /**
     * @param $data
     * @param int $count
     * @param null $messages
     * @return array
     */
    protected function response($data, $count = 0, $messages = null)
    {
        return [
            'data' => $data,
            'success' => is_null($messages),
            'errors' => $messages,
            'count' => $count,
        ];
    }

    /**
     * @param string $search
     * @return array
     */
    protected function emptyResponse($search = '')
    {
        return $this->response($search, 0, null);
    }

    protected function flashMessage($message, $type = 'success')
    {
        $alerts = session()->get('alerts') ?: [];

        $alerts[] = ['type' => $type, 'message' => $message];

        session()->flash("alerts", $alerts);
    }

    protected function showSuccessMessage($message = null)
    {
        $this->flashMessage($message);
    }

    protected function showErrorMessage($message = null)
    {
        $this->flashMessage($message, 'danger');
    }
}
