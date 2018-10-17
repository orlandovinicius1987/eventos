<?php

namespace App\Http\Requests;

use Illuminate\Support\Facades\Gate;

class BaseCreate extends Request
{
    /**
     * @return bool
     */
    public function authorize()
    {
        return Gate::allows('canCreate');
    }
}
