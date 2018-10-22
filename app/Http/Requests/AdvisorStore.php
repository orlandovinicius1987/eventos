<?php

namespace App\Http\Requests;

class AdvisorStore extends BaseStore
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
            'role_id' => 'required|exists:roles,id',
            'person_institution_id' => 'required|exists:person_institutions,id',
        ];
    }
}
