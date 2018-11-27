<?php

namespace App\Http\Requests;

class AcceptStore extends BaseStore
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'cpf' => 'required|cpf_cnpj',
        ];
    }
}
