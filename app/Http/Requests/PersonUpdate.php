<?php

namespace App\Http\Requests;

use App\Rules\UniqueInCurrentClient;

class PersonUpdate extends Request
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
            'cpf' => ['nullable','cpf', new UniqueInCurrentClient('people')],
        ];
    }
}
