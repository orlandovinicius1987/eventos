<?php

namespace App\Http\Requests;

class SubEventUpdate extends BaseStore
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'id' => 'required',

            'name' => 'required',
            'date' => 'required',
            'time' => 'required',
            'event_id' => 'required|exists:events,id',

            'address.zipcode' => 'required',
            'address.street' => 'required',
            'address.neighbourhood' => 'required',
            'address.city' => 'required',
            'address.state' => 'required',
            'address.number' => 'required',
        ];
    }
}
