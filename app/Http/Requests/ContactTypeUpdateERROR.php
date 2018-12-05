<?php

namespace App\Http\Requests;

use App\Data\Repositories\ContactTypes as ContactTypesRepository;
use App\Rules\Contact;

class ContactTypeUpdateERROR extends BaseStore
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'contactable_id' => 'required',
            'contactable_type' => 'required',
            'contact_type_id' => 'required|exists:contacts_types,id',
            'contact' => ['required', new Contact()],
        ];
    }
}
