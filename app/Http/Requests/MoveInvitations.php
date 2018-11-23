<?php

namespace App\Http\Requests;

class MoveInvitations extends BaseStore
{
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
