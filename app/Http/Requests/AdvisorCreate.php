<?php

namespace App\Http\Requests;

class AdvisorCreate extends BaseCreate
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
            'advisor_type_id' => 'required|exists:advisor_types,id',
            'person_id' => 'required|exists:people,id',
        ];
    }
}
