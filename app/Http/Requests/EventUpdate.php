<?php

namespace App\Http\Requests;

use Illuminate\Support\Facades\Gate;

class EventUpdate extends Request
{
    /**
     * @return bool
     */
    public function authorize()
    {
        return Gate::allows('events:modify');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required',
        ];
    }
}
