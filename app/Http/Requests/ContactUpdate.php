<?php

namespace App\Http\Requests;

use App\Data\Repositories\ContactTypes as ContactTypesRepository;
use App\Rules\Contact;

class ContactUpdate extends BaseContact
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'person_institution_id' => 'required|exists:person_institutions,id',
            'contact_type_id' => 'required|exists:contact_types,id',
            'contact' => ['required', new Contact()],
        ];
    }
}
