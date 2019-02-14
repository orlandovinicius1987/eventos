<?php

namespace App\Http\Requests;

use Illuminate\Support\Facades\Gate;

class PersonTopicStore extends Request
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
                //            'person_id' => 'required',
                //            'topic_id' => 'required',
            ];
    }
}
