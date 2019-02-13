<?php

namespace App\Http\Requests;

use Illuminate\Support\Facades\Gate;

class AddressUpdate extends Request
{
    /**
     * @return bool
     */
    public function authorize()
    {
        return Gate::allows('people:modify') || Gate::allows('subevents:modify');
    }

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
        ];
    }
}
