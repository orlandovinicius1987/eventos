<?php

namespace App\Http\Requests;

class InstitutionUpdate extends BaseStore
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
            'party_number' => 'numeric',
        ];
    }
}
