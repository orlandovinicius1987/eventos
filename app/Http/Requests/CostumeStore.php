<?php

namespace App\Http\Requests;

use Illuminate\Support\Facades\Gate;

class CostumeStore extends Request
{
    /**
     * @return bool
     */
    public function authorize()
    {
        return Gate::allows('costumes:modify');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required',
            'description' => 'required',
        ];
    }
}
