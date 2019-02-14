<?php

namespace App\Services\DataImporter;

use App\Data\Models\ContactType;
use App\Data\Models\PersonTopic;
use App\Data\Models\Topic;
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
use Illuminate\Validation\ValidationException;

class Service
{
    const FIELDS = [
        'categoria' => false,
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
        'celular*' => false,
        'telefone*' => false,
        'email*' => false,
        'assessor_nome' => false,
        'assessor_funcao' => false,
        'assessor_celular*' => false,
        'assessor_telefone*' => false,
        'assessor_email*' => false,
    ];

    protected $client_id;

    protected $command;

    /**
     * @param $person
     * @param $category
     */
    protected function associateCategoryToPerson($person, $category): void
    {
        if ($person->categories->where('name', $category->name)->count() == 0) {
            $person->categories()->save($category);
        }
    }

    protected function capitalize($name)
    {
        //return capitalizeBrazilian($name);

        return $name;
    }

    protected function checkRow($row)
    {
        $this->checkMandatoryFields($row);

        $allowedBig = ['interesses'];
        $allowedMany = ['interesses'];

        $this->info(($name = $row['nome'] . ' - ' . $row['instituicao']));

        $row->each(function ($value, $key) use ($allowedBig, $allowedMany) {
            if (strlen($value) > 250 && !in_array($key, $allowedBig)) {
                $this->throwError("O campo {$key} está grande demais");
            }

            if (strpos($value, ';') > 250 && !in_array($key, $allowedMany)) {
                $this->throwError(
                    "Não é permitido mais de um registro no campo {$key}"
                );
            }
        });
    }

    protected function extractContacts($row, $name, $contactArray)
    {
        $contacts = collect();

        foreach (['', 1, 2, 3, 4, 5, 6, 7, 8, 9] as $number) {
            $current = "{$name}{$number}";

            if (isset($row->$current)) {
                foreach (explode(',', $row->$current) as $contact) {
                    if (filled($contact)) {
                        $contactArray['contact'] = $this->sanitize($contact);

                        $contacts->push($contactArray);
                    }
                }
            }
        }

        return $contacts;
    }

    protected function getNotes($row)
    {
        $notes = '';

        collect([
            'obs',
            'notes',
            'observacoes',
            'observacoes1',
            'observacoes2',
            'observacoes3',
            'observacoes4',
            'observacoes5',
        ])->each(function ($obs) use (&$notes, $row) {
            if (isset($row[$obs])) {
                $notes = $notes . ' ' . $this->sanitize($row[$obs]);
            }
        });

        return trim($notes);
    }

    public function importCSV($rows, $client = null, $command = null)
    {
        $this->command = $command;

        ini_set('memory_limit', '2500M');

        //        (new CSV())->parse($rows)->each(function ($row) use ($client) {
        //            if (!$this->rowIsEmpty($row)) {
        //                $this->checkRow($row, $client);
        //            }
        //        });

        (new CSV())->parse($rows)->each(function ($row) use ($client) {
            if (!$this->rowIsEmpty($row)) {
                $this->importRow($row, $client);
            }
        });
    }

    protected function importRow($row, $client = null)
    {
        $this->makeClientId($client, $row);

        if ($event = $this->importEvent($row)) {
            $subEvent = $this->importSubEvent($event);
        }

        $institution = $this->importInstitution(
            $row,
            ($party = $this->getParty($row))
        );

        $person = $this->importPerson($row, $party);

        $this->info($person->name . ' - ' . $institution->name);

        $role = $this->imporRole($row);

        $personInstitution = $this->importPersonInstitution(
            $row,
            $person,
            $institution,
            $role
        );

        if ($category = $this->importCategory($row)) {
            $this->associateCategoryToPerson($person, $category);
        }

        $this->importAddress($row, $personInstitution);

        $this->importContacts($row, $personInstitution);

        $this->importAdvisor($row, $personInstitution);

        $this->importTopics($row, $person);

        if ($event) {
            Invitation::firstOrCreate([
                'sub_event_id' => $subEvent->id,
                'person_institution_id' => $personInstitution->id,
            ]);
        }
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
        return Role::firstOrCreate([
            'name' => $this->sanitize($this->capitalize($row->funcao)),
        ]);
    }

    protected function importAddress($row, $personInstitution)
    {
        if ($row->endereco) {
            Address::create([
                'zipcode' => $this->sanitize($row->cep),

                'street' => $this->sanitize($row->endereco),

                'number' => $this->sanitize($row->numero ?? null),

                'complement' => $this->sanitize($row->complemento ?? null),

                'neighbourhood' => $this->sanitize($row->bairro),

                'city' => $this->sanitize($row->cidade),

                'state' => $this->sanitize($row->estado ?? $row->uf ?? null),

                'addressable_id' => $this->sanitize($personInstitution->id),

                'addressable_type' => PersonInstitution::class,
            ]);
        }
    }

    protected function importAdvisor($row, $personInstitution)
    {
        if (!isset($row->assessor_nome) || empty($row->assessor_nome)) {
            return;
        }

        $row->assessor_funcao =
            isset($row->assessor_funcao) &&
            filled(($funcao = $this->sanitize($row->assessor_funcao)))
                ? $funcao
                : 'Assessor';

        $advisorInstitution = $this->importPersonInstitution(
            coollect(['tratamento' => null]),

            $this->importPerson(
                coollect([
                    'nome' => $this->sanitize($row->assessor_nome),
                    'apelido' => null,
                    'partido' => null,
                    'tratamento' => null,
                ])
            ),

            Institution::find($personInstitution->institution_id),

            $this->imporRole(
                coollect(['funcao' => $this->sanitize($row->assessor_funcao)])
            ),

            $personInstitution
        );

        collect()
            ->merge(
                $this->extractContacts($row, 'assessor_telefone', [
                    'type' => 'phone',
                    'type_name' => 'Telefone fixo',
                ])
            )
            ->merge(
                $this->extractContacts($row, 'assessor_celular', [
                    'type' => 'mobile',
                    'type_name' => 'Celular',
                ])
            )
            ->merge(
                $this->extractContacts($row, 'assessor_email', [
                    'type' => 'email',
                    'type_name' => 'E-mail',
                ])
            )
            ->each(function ($contact) use (
                $personInstitution,
                $advisorInstitution
            ) {
                $this->importContact(
                    $contact['contact'],
                    $contact['type'],
                    $contact['type_name'],
                    $advisorInstitution,
                    PersonInstitution::class
                );
            });
    }

    /**
     * @param $topic
     * @return null
     */
    protected function importTopic($topic)
    {
        return Topic::firstOrCreate(
            [
                'slug' => make_slug($topic),
            ],
            ['name' => $this->capitalize($this->sanitize($topic))]
        );
    }

    /**
     * @param $row
     * @return null
     */
    protected function importCategory($row)
    {
        return $row->categoria
            ? Category::firstOrCreate([
                'name' => $this->capitalize($this->sanitize($row->categoria)),
            ])
            : null;
    }

    /**
     * @param $row
     * @return mixed
     */
    protected function importEvent($row)
    {
        if (filled($row->evento)) {
            return Event::firstOrCreate([
                'name' => $this->capitalize($this->sanitize($row->evento)),
            ]);
        }

        return null;
    }

    /**
     * @param $row
     * @param $party
     * @return mixed
     */
    protected function importInstitution($row, $party)
    {
        $name = $this->capitalize(
            $party && $row->instituicao == $party->initials
                ? $this->sanitize($party->name)
                : $this->sanitize($row->instituicao)
        );

        $initials =
            $party && $row->instituicao == $party->initials
                ? $this->sanitize($party->initials)
                : $this->sanitize($row->sigla ?? null);

        return Institution::firstOrCreate(
            [
                'name' => filled($name) ? $name : 'Pessoa Física',
            ],
            [
                'initials' => filled($initials) ? $initials : 'PF',
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
        return Person::firstOrCreate(
            [
                'name' => $this->capitalize($this->sanitize($row->nome)),
            ],
            [
                'nickname' => $this->capitalize(
                    $this->sanitize(
                        isset($row->apelido) ? $row->apelido : $row->nome
                    )
                ),

                'party_id' => $this->sanitize($party ? $party->id : null),

                'title' => $this->sanitize($row->tratamento),

                'client_id' => $this->client_id,

                'notes' => $this->getNotes($row),
            ]
        );
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
        return PersonInstitution::firstOrCreate(
            [
                'person_id' => $person->id,
                'institution_id' => $institution->id,
                'role_id' => $role->id,
            ],
            [
                'title' => $this->sanitize($row->tratamento),
                'advised_id' => $advised ? $advised->id : null,
            ]
        );
    }

    protected function importContacts($row, $personInstitution)
    {
        collect()
            ->merge(
                $this->extractContacts($row, 'celular', [
                    'type' => 'mobile',
                    'type_name' => 'Celular',
                ])
            )
            ->merge(
                $this->extractContacts($row, 'telefone', [
                    'type' => 'phone',
                    'type_name' => 'Telefone fixo',
                ])
            )
            ->merge(
                $this->extractContacts($row, 'email', [
                    'type' => 'email',
                    'type_name' => 'E-mail',
                ])
            )
            ->each(function ($contact) use ($personInstitution) {
                $this->importContact(
                    $contact['contact'],
                    $contact['type'],
                    $contact['type_name'],
                    $personInstitution
                );
            });
    }

    protected function importContact(
        $contact,
        $type,
        $typeName,
        $personInstitution
    ) {
        if ($contact) {
            Contact::create([
                'contact' => $contact,

                'contact_type_id' => ContactType::firstOrCreate([
                    'name' => $typeName,
                    'code' => $type,
                ])->id,

                'person_institution_id' => $personInstitution->id,
            ]);
        }
    }

    /**
     * @param $event
     * @return mixed
     */
    protected function importSubEvent($event)
    {
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

        return $subEvent;
    }

    protected function importTopics($row, $person)
    {
        if (!isset($row->interesses) || empty($row->interesses)) {
            return;
        }

        collect(explode(',', $row->interesses))
            ->filter()
            ->map(function ($interesse) {
                return [
                    'slug' => $this->sanitize(make_slug($interesse)),
                    'name' => $this->sanitize($interesse),
                ];
            })
            ->unique('slug')
            ->each(function ($interesse) use ($person) {
                PersonTopic::firstOrCreate([
                    'person_id' => $person->id,
                    'topic_id' => $this->importTopic($interesse['name'])->id,
                    'client_id' => get_current_client_id(),
                ]);
            });
    }

    /**
     * @param $client
     */
    protected function makeClientId($client, $row)
    {
        $client = isset($row['cliente']) ? trim($row['cliente']) : $client;

        if ($client) {
            $this->client_id = app(Clients::class)->findByName($client)->id;
        } else {
            $this->client_id = get_current_client_id();
        }

        set_current_client_id($this->client_id);
    }

    protected function rowIsEmpty($row)
    {
        return empty($row->nome);
    }

    private function sanitize($string)
    {
        return trim($string);
    }

    protected function throwError(string $string)
    {
        throw ValidationException::withMessages([
            'field' => $string,
        ]);
    }

    public function info($message)
    {
        if ($this->command) {
            $this->command->info($message);
        }
    }
}
