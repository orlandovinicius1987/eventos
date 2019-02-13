<?php

namespace App\Http\Requests;

use Illuminate\Support\Facades\Gate;

class AdvisorUpdate extends Request
{
    /**
     * @return bool
     */
    public function authorize()
    {
        return Gate::allows('people:modify');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'role_id' => 'required|exists:roles,id',
            'person_id' => 'required|exists:people,id',
            'institution_id' => 'required|exists:institutions,id',
            'advised_id' => 'required|exists:person_institutions,id',
        ];
    }
}
