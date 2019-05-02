<?php
namespace App\Http\Requests;

use Illuminate\Support\Facades\Gate;

class InvitationsAcceptStore extends Request
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
        return ['cpf' => 'required|cpf'];
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
