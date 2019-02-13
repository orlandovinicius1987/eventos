<?php

namespace App\Http\Requests;

use Illuminate\Support\Facades\Gate;

class SubEventStore extends Request
{
    /**
     * @return bool
     */
    public function authorize()
    {
        return Gate::allows('subevents:modify');
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
            'date' => 'required',
            'time' => 'required',
            'event_id' => 'required|exists:events,id',

            'sector_id' => 'required',
        ];
    }
}
