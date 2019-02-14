<?php

namespace App\Http\Requests;

use App\Rules\UniqueInCurrentClient;
use Illuminate\Support\Facades\Gate;

class NewPersonName extends Request
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
            'name' => [new UniqueInCurrentClient('people')],
        ];
    }
}
