<?php

namespace App\Http\Requests;

use App\Data\Repositories\ContactTypes as ContactTypesRepository;
use App\Rules\Contact;
use Illuminate\Support\Facades\Gate;

class ContactUpdate extends BaseContact
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
            'person_institution_id' => 'required|exists:person_institutions,id',
            'contact_type_id' => 'required|exists:contact_types,id',
            'contact' => ['required', new Contact()],
        ];
    }
}
