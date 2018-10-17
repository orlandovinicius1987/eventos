<?php

namespace App\Http\Requests;

use Illuminate\Support\Facades\Gate;

class BaseStore extends Request
{
    /**
     * @return bool
     */
    public function authorize()
    {
        return Gate::allows('canCreate');
    }
}
