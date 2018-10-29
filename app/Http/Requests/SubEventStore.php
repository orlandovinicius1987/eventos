<?php

namespace App\Http\Requests;

class SubEventStore extends BaseStore
{
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

            'zipcode' => 'required',
            'street' => 'required',
            'neighbourhood' => 'required',
            'city' => 'required',
            'state' => 'required',
            'number' => 'required',
        ];
    }
}
