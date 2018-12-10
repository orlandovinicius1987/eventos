<?php

namespace App\Http\Requests;

class InvitationsAcceptStore extends BaseStore
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
            'cpf' => 'required|cpf',
        ];
    }

    /**
     * @return array
     */
    public function sanitize()
    {
        $input = $this->all();
        $input['cpf'] = preg_replace(
            '/(\d\d\d)(\d\d\d)(\d\d\d)(\d\d)/',
            '$1.$2.$3-$4',
            only_numbers($this->get('cpf'))
        );
        $this->replace($input);
        return $this->all();
    }
}
