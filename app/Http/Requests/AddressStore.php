<?php

namespace App\Http\Requests;

class AddressStore extends BaseStore
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
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
