<?php

namespace App\Http\Requests;

use App\Data\Repositories\ContactTypes as ContactTypesRepository;
use App\Rules\Contact;

class ContactStore extends BaseStore
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

    /**
     * @return array
     */
    public function sanitize()
    {
        if (!empty($this->get('contact'))) {
            $contactType = app(ContactTypesRepository::class)->findById(
                $this->get('contact_type_id')
            );

            if (
                $contactType->code == 'mobile' ||
                $contactType->code == 'whatsapp' ||
                $contactType->code == 'phone'
            ) {
                $input = $this->all();
                $phone = $this->get('contact');
                $input['contact'] = preg_replace('/\D/', '', $phone);
                $this->replace($input);
            }
        }
        return $this->all();
    }
}
