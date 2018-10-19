<?php

namespace App\Http\Requests;

class PersonUpdate extends StoreWithClient
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        //        $parentArray = parent::rules();
        $parentArray = [];

        return array_merge($parentArray, [
            'name' => 'required',
        ]);
    }
}
