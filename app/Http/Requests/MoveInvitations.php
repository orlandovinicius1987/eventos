<?php

namespace App\Http\Requests;

use Illuminate\Support\Facades\Gate;

class MoveInvitations extends Request
{
    /**
     * @return bool
     */
    public function authorize()
    {
        return Gate::allows('subevents:invite');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'eventId' => 'required',
            'newSubEventId' => 'required',
            'currentSubEventId' => 'required',
        ];
    }
}
