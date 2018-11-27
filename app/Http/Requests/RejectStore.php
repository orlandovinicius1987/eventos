<?php

namespace App\Http\Requests;

class RejectStore extends BaseStore
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'cpf' => 'cpf_cnpj',
        ];
    }
}
