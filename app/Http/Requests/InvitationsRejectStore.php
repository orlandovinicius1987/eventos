<?php

namespace App\Http\Requests;

class InvitationsRejectStore extends BaseStore
{
    /**
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

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
