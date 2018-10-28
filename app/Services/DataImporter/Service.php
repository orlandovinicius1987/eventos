<?php

namespace App\Services\DataImporter;

use App\Services\CSV;
use App\Data\Models\Role;
use App\Data\Models\Event;
use App\Data\Models\Person;
use App\Data\Models\Address;
use App\Data\Models\Contact;
use App\Data\Models\Category;
use App\Data\Models\SubEvent;
use App\Data\Models\Invitation;
use App\Data\Models\Institution;
use App\Data\Models\Categorized;
use App\Data\Repositories\Clients;
use App\Data\Repositories\Parties;
use App\Data\Models\PersonInstitution;
use App\Data\Repositories\ContactTypes;
use Illuminate\Support\Facades\Session;
use Illuminate\Validation\ValidationException;

class Service
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
        'assessor_email2' => false,
    ];

    protected $client_id;

    public function importCSV($rows, $client = null)
    {
        (new CSV())->parse($rows)->each(function ($row) use ($client) {
            if (!$this->rowIsEmpty($row)) {
                $this->importRow($row, $client);
            }
        });
    }

    protected function importRow($row, $client = null)
    {
        $this->makeClientId($client);

        $this->checkMandatoryFields($row);

        $category = $this->importCategory($row);

        $event = $this->importEvent($row);

        $subEvent = SubEvent::firstOrCreate(
            [
                'name' => 'Cerimônia',
                'event_id' => $event->id,
            ],
            [
                'date' => now(),
                'time' => now(),
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

        Categorized::create([
            'category_id' => $category->id, 
            'categorizable_id' => $person->id, 
            'categorizable_type' => Person::class,
        ]);

        $this->importAddress($row, $personInstitution);

        $this->importContacts($row, $personInstitution);

        $invitation = Invitation::firstOrCreate([
            'sub_event_id' => $subEvent->id,
            'person_institution_id' => $personInstitution->id,
        ]);

        $this->importAdvisor($row, $personInstitution);
    }

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

                'addressable_type' => PersonInstitution::class,
            ]);
        }
    }

    private function importAdvisor($row, $personInstitution)
    {
        if (!isset($row->assessor_nome) || empty($row->assessor_nome)) {
            return;
        }

        if (!isset($row->assessor_funcao)) {
            $this->throwError('O campo assessor_funcao não existe no arquivo');
        }

        $advisorInstitution = $this->importPersonInstitution(
            coollect(['tratamento' => null]),

            $this->importPerson(
                coollect([
                    'nome' => $row->assessor_nome,
                    'apelido' => null,
                    'partido' => null,
                    'tratamento' => null,
                ])
            ),

            Institution::find($personInstitution->institution_id),

            $this->imporRole(coollect(['funcao' => $row->assessor_funcao])),

            $personInstitution
        );

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
            ['contact' => $row->assessor_email3 ?? null, 'type' => 'email'],
        ])->each(function ($contact) use (
            $personInstitution,
            $advisorInstitution
        ) {
            $this->importContact(
                $contact['contact'],
                $contact['type'],
                $advisorInstitution,
                PersonInstitution::class
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
                'name' => $row->categoria,
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
                        : $row->instituicao,
            ],
            [
                'initials' =>
                    $party && $row->instituicao == $party->initials
                        ? $party->initials
                        : $row->sigla ?? null,
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
    protected function importPerson($row, $party = null)
    {
        return Person::create([
            'name' => trim($row->nome),
            'nickname' => trim(
                isset($row->apelido) ? $row->apelido : $row->nome
            ),
            'party_id' => $party ? $party->id : null,
            'title' => trim($row->tratamento),
            'client_id' => $this->client_id,
        ]);
    }

    /**
     * @param $row
     * @param $person
     * @param $institution
     * @param $role
     * @param null $advised
     * @return mixed
     */
    protected function importPersonInstitution(
        $row,
        $person,
        $institution,
        $role,
        $advised = null
    ) {
        return PersonInstitution::create([
            'person_id' => $person->id,
            'institution_id' => $institution->id,
            'role_id' => $role->id,
            'title' => $row->tratamento,
            'advised_id' => $advised ? $advised->id : null,
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
            ['contact' => $row->email4 ?? null, 'type' => 'email'],
        ])->each(function ($contact) use ($personInstitution) {
            $this->importContact(
                $contact['contact'],
                $contact['type'],
                $personInstitution
            );
        });
    }

    protected function importContact($contact, $type, $personInstitution)
    {
        if ($contact) {
            Contact::create([
                'contact' => $contact,

                'contact_type_id' => app(ContactTypes::class)->findByCode($type)
                    ->id,

                'person_institution_id' => $personInstitution->id,
            ]);
        }
    }

    /**
     * @param $client
     */
    protected function makeClientId($client): void
    {
        if ($client) {
            $this->client_id = app(Clients::class)->findByName($client)->id;
        } else {
            $this->client_id = auth()->user()->client_id;
        }

        Session::put('current_client_id', $this->client_id);
    }

    protected function rowIsEmpty($row)
    {
        return empty($row->nome);
    }

    private function throwError(string $string)
    {
        throw ValidationException::withMessages([
            'field' => $string,
        ]);
    }
}
