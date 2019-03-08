<?php

namespace App\Http\Requests;

use Illuminate\Support\Facades\Gate;

class InvitationsRejectStore extends Request
{
    /**
     * @return bool
     */
    public function authorize()
    {
        // TODO: check this bug
        // Should not require login here
        // return Gate::allows('subevents:invite');

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
