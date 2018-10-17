<?php

namespace App\Http\Controllers\Api;

use App\Data\Models\Address;
use App\Data\Models\Advisor;
use App\Data\Models\Contact;
use App\Data\Models\Event;
use App\Data\Models\Invitation;
use App\Data\Models\Role;
use App\Data\Models\SubEvent;
use App\Data\Repositories\ContactsTypes;
use App\Services\CSV;
use App\Data\Models\Person;
use App\Data\Models\Category;
use App\Data\Models\Institution;
use App\Data\Repositories\Parties;
use App\Http\Controllers\Controller;
use App\Data\Models\PersonInstitution;
use App\Http\Requests\Import as ImportRequest;
use Illuminate\Validation\ValidationException;

class Import extends Controller
{
    const FIELDS = [
        'categoria' => true,
        'instituicao' => true,
        'tratamento' => true,
        'nome' => true,
        'funcao' => true,

        'evento' => false,
        'partido' => false,
        'endereco' => false,
        'numero' => false,
        'complemento' => false,
        'bairro' => false,
        'cep' => false,
        'cidade' => false,
        'celular' => false,
        'celular1' => false,
        'celular2' => false,
        'celular3' => false,
        'celular4' => false,
        'telefone' => false,
        'telefone1' => false,
        'telefone2' => false,
        'telefone3' => false,
        'telefone4' => false,
        'email' => false,
        'email1' => false,
        'email2' => false,
        'email3' => false,
        'email4' => false,
        'assessor_nome' => false,
        'assessor_funcao' => false,
        'assessor_telefone' => false,
        'assessor_email1' => false,
        'assessor_email2' => false
    ];

    protected function checkMandatoryFields($row)
    {
        $fields = coollect(static::FIELDS);

        $fields->each(function ($mandatory, $field) use ($row) {
            if ($mandatory) {
                if (!isset($row[$field])) {
                    $this->throwError(
                        'Está faltando o campo obrigatório "' .
                            $field .
                            '" no arquivo'
                    );
                }
            }
        });
    }

    /**
     * @param ImportRequest $request
     * @return bool|string
     */
    protected function decodeBase64File(ImportRequest $request)
    {
        list(, $file) = explode(';', $request->get('file'));

        list(, $file) = explode(',', $file);

        $file = base64_decode($file);

        return $file;
    }

    /**
     * @param $row
     * @return mixed
     */
    protected function imporRole($row)
    {
        return Role::firstOrCreate(['name' => $row->funcao]);
    }

    protected function importAddress($row, $personInstitution)
    {
        if ($row->endereco) {
            Address::create([
                'zipcode' => $row->cep,

                'street' => $row->endereco,

                'number' => $row->numero ?? null,

                'complement' => $row->complemento ?? null,

                'neighbourhood' => $row->bairro,

                'city' => $row->cidade,

                'state' => $row->estado ?? $row->uf ?? null,

                'addressable_id' => $personInstitution->id,

                'addressable_type' => PersonInstitution::class
            ]);
        }
    }

    private function importAdvisor($row, $personInstitution)
    {
        if (!isset($row->assessor_nome)) {
            return;
        }

        if (!isset($row->assessor_funcao)) {
            $this->throwError('O campo assessor_funcao não existe no arquivo');
        }

        $advisor = Advisor::firstOrCreate([
            'name' => $row->assessor_nome,

            'role_id' => $this->imporRole(
                coollect(['funcao' => $row->assessor_funcao])
            )->id,

            'person_institution_id' => $personInstitution->id
        ]);

        collect([
            ['contact' => $row->assessor_telefone ?? null, 'type' => 'phone'],
            ['contact' => $row->assessor_telefone1 ?? null, 'type' => 'phone'],
            ['contact' => $row->assessor_telefone2 ?? null, 'type' => 'phone'],
            ['contact' => $row->assessor_telefone3 ?? null, 'type' => 'phone'],
            ['contact' => $row->assessor_celular ?? null, 'type' => 'mobile'],
            ['contact' => $row->assessor_celular1 ?? null, 'type' => 'mobile'],
            ['contact' => $row->assessor_celular2 ?? null, 'type' => 'mobile'],
            ['contact' => $row->assessor_celular3 ?? null, 'type' => 'mobile'],
            ['contact' => $row->assessor_email ?? null, 'type' => 'email'],
            ['contact' => $row->assessor_email1 ?? null, 'type' => 'email'],
            ['contact' => $row->assessor_email2 ?? null, 'type' => 'email'],
            ['contact' => $row->assessor_email3 ?? null, 'type' => 'email']
        ])->each(function ($contact) use ($personInstitution, $advisor) {
            $this->importContact(
                $contact['contact'],
                $contact['type'],
                $advisor,
                Advisor::class
            );
        });
    }

    /**
     * @param $row
     * @return null
     */
    protected function importCategory($row)
    {
        return $row->categoria
            ? Category::firstOrCreate([
                'name' => $row->categoria
            ])
            : null;
    }

    /**
     * @param $row
     * @return mixed
     */
    protected function importEvent($row)
    {
        return Event::firstOrCreate(['name' => $row->evento]);
    }

    /**
     * @param $row
     * @param $partyInitials
     * @param $partyName
     * @return mixed
     */
    protected function importInstitution($row, $party)
    {
        return Institution::firstOrCreate(
            [
                'name' =>
                    $party && $row->instituicao == $party->initials
                        ? $party->name
                        : $row->instituicao
            ],
            [
                'initials' =>
                    $party && $row->instituicao == $party->initials
                        ? $party->initials
                        : $row->sigla ?? null
            ]
        );
    }

    /**
     * @param $row
     * @return mixed
     */
    protected function getParty($row)
    {
        return !$row->partido
            ? null
            : app(Parties::class)->findByInitials($row->partido);
    }

    /**
     * @param $row
     * @param $party
     * @return mixed
     */
    protected function importPerson($row, $party)
    {
        return Person::create([
            'name' => $row->nome,
            'nickname' => isset($row->apelido) ? $row->apelido : $row->nome,
            'party_id' => $party ? $party->id : null,
            'title' => $row->tratamento
        ]);
    }

    /**
     * @param $row
     * @param $person
     * @param $institution
     * @param $role
     * @return mixed
     */
    protected function importPersonInstitution(
        $row,
        $person,
        $institution,
        $role
    ) {
        return PersonInstitution::create([
            'person_id' => $person->id,
            'institution_id' => $institution->id,
            'role_id' => $role->id,
            'title' => $row->tratamento
        ]);
    }

    protected function importContacts($row, $personInstitution)
    {
        collect([
            ['contact' => $row->celular ?? null, 'type' => 'mobile'],
            ['contact' => $row->celular1 ?? null, 'type' => 'mobile'],
            ['contact' => $row->celular2 ?? null, 'type' => 'mobile'],
            ['contact' => $row->celular3 ?? null, 'type' => 'mobile'],
            ['contact' => $row->celular4 ?? null, 'type' => 'mobile'],
            ['contact' => $row->telefone ?? null, 'type' => 'phone'],
            ['contact' => $row->telefone1 ?? null, 'type' => 'phone'],
            ['contact' => $row->telefone2 ?? null, 'type' => 'phone'],
            ['contact' => $row->telefone3 ?? null, 'type' => 'phone'],
            ['contact' => $row->telefone4 ?? null, 'type' => 'phone'],
            ['contact' => $row->email ?? null, 'type' => 'email'],
            ['contact' => $row->email1 ?? null, 'type' => 'email'],
            ['contact' => $row->email2 ?? null, 'type' => 'email'],
            ['contact' => $row->email3 ?? null, 'type' => 'email'],
            ['contact' => $row->email4 ?? null, 'type' => 'email']
        ])->each(function ($contact) use ($personInstitution) {
            $this->importContact(
                $contact['contact'],
                $contact['type'],
                $personInstitution
            );
        });
    }

    protected function importContact(
        $contact,
        $type,
        $personInstitution,
        $contactable_type = PersonInstitution::class
    ) {
        if ($contact) {
            Contact::create([
                'contact' => $contact,

                'contact_type_id' => app(ContactsTypes::class)->findByCode(
                    $type
                )->id,

                'contactable_id' => $personInstitution->id,

                'contactable_type' => $contactable_type
            ]);
        }
    }

    protected function importRow($row)
    {
        $this->checkMandatoryFields($row);

        $category = $this->importCategory($row);

        $event = $this->importEvent($row);

        $subEvent = SubEvent::firstOrCreate(
            [
                'name' => 'Cerimônia',
                'event_id' => $event->id
            ],
            [
                'date' => now(),
                'time' => now()
            ]
        );

        $institution = $this->importInstitution(
            $row,
            ($party = $this->getParty($row))
        );

        $person = $this->importPerson($row, $party);

        $role = $this->imporRole($row);

        $personInstitution = $this->importPersonInstitution(
            $row,
            $person,
            $institution,
            $role
        );

        $this->importAddress($row, $personInstitution);

        $this->importContacts($row, $personInstitution);

        $invitation = Invitation::firstOrCreate([
            'sub_event_id' => $subEvent->id,
            'person_institution_id' => $personInstitution->id
        ]);

        $this->importAdvisor($row, $personInstitution);
    }

    protected function rowIsEmpty($row)
    {
        return empty($row->nome);
    }

    /**
     * Store
     *
     * @param ImportRequest $request
     * @return \PragmaRX\Coollection\Package\Coollection
     */
    public function store(ImportRequest $request)
    {
        $rows = (new CSV())->parse($request->get('file'));

        $rows->each(function ($row) {
            if (!$this->rowIsEmpty($row)) {
                $this->importRow($row);
            }
        });

        return $rows;
    }

    private function throwError(string $string)
    {
        throw ValidationException::withMessages([
            'field' => $string
        ]);
    }
}
