<?php

namespace App\Http\Requests;

class AddressCreate extends Request
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'client_id' => 'required|exists:clients,id',
            'addressable_id' => 'required',
            'addressable_type' => 'required',
            'zipcode' => 'required',
            'street' => 'required',
            'neighbourhood' => 'required',
            'city' => 'required',
            'state' => 'required',
            'number' => 'required',
        ];
    }
}
