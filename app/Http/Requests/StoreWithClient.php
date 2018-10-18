<?php

namespace App\Http\Requests;

use Illuminate\Support\Facades\Gate;

class StoreWithClient extends BaseStore
{
    /**
     * @return array
     */
    public function rules()
    {
        return [
            'client_id' => 'required',
        ];
    }
}
