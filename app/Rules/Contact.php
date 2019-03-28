<?php
namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;
use App\Data\Models\ContactType;

class Contact implements Rule
{
    protected $fieldNamesArray = [
        'mobile' => 'Celular',
        'whatsapp' => 'Whatsapp',
        'email' => 'E-mail',
        'phone' => 'Telefone Fixo',
    ];

    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        $contactTypeCode = app(ContactType::class)->find(
            request('contact_type_id')
        )->code;

        return $this->regexRules($contactTypeCode, request('contact'));
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        $contactTypeRepository = app(ContactType::class);
        $contactTypeCode = $contactTypeRepository->find(
            request('contact_type_id')
        )->code;

        return 'O campo contato não é um ' .
            $this->fieldNamesArray[$contactTypeCode] .
            ' válido.';
    }

    private function validatePhone($phone, $type)
    {
        switch ($type) {
            case 'mobile':
            case 'whatsapp':
                preg_match('/\+\d\d\(\d\d\)\d\d\d\d\d-\d\d\d\d/', $phone, $out1);
                preg_match('/\(\d\d\)\d\d\d\d\d-\d\d\d\d/', $phone, $out2);
                return isset($out1[0]) || isset($out2[0]);
                break;
            case 'phone':
                preg_match('/ramal/', $phone, $out);
                if(isset($out[0])){
                    preg_match('/\(\d\d\)\d\d\d\d-\d\d\d\d ramal \d\d?\d?\d?$/', $phone, $out1);
                    preg_match('/\+\d\d\(\d\d\)\d\d\d\d-\d\d\d\d ramal \d\d?\d?\d?$/', $phone, $out2);
                    return isset($out1[0]) || isset($out2[0]);
                }else{
                    preg_match('/\+\d\d\(\d\d\)\d\d\d\d-\d\d\d\d$/', $phone, $out1);
                    preg_match('/\(\d\d\)\d\d\d\d-\d\d\d\d$/', $phone, $out2);
                    return isset($out1[0]) || isset($out2[0]);
                }
                break;
            default:
                return false;
        }
    }

    /**
     * @param $contactTypeCode
     * @param $contact
     * @param $match
     * @return bool
     */
    protected function regexRules($contactTypeCode, $contact)
    {
        $pass = true;
        if (!is_null($contact)) {
            switch ($contactTypeCode) {
                case 'mobile':
                case 'whatsapp':
                    $pass = $this->validatePhone($contact, 'mobile');
                    break;
                case 'email':
                    preg_match_all(
                        "/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/m",
                        $contact,
                        $match
                    );
                    $pass = sizeof($match[0]) == 1;
                    break;
                case 'phone':
                    $pass = $this->validatePhone($contact, 'phone');
                    break;
            }
        }
        return $pass;
    }
}
