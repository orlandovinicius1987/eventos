<?php

namespace App\Data\Repositories;

use App\Data\Models\ContactType;

class ExportableData extends Repository
{
    protected $fixedData = [
        [
            'code' => 'person:name',
            'title' => 'Pessoa: nome',
            'entity' => 'people.name',
            'alias' => 'person_name',
        ],

        [
            'code' => 'person:nickname',
            'title' => 'Pessoa: nome público',
            'entity' => 'people.nickname',
            'alias' => 'person_nickname',
        ],

        [
            'code' => 'person:title',
            'title' => 'Pessoa: tratamento',
            'entity' => 'person_institutions.title',
            'alias' => 'person_title',
        ],
        [
            'code' => 'person:birthdate',
            'title' => 'Pessoa: data de nascimento',
            'entity' => 'people.birthdate',
            'alias' => 'person_birthdate',
        ],
        [
            'code' => 'person:cpf',
            'title' => 'Pessoa: CPF',
            'entity' => 'people.cpf',
            'alias' => 'person_cpf',
        ],
        [
            'code' => 'person:notes',
            'title' => 'Pessoa: observações',
            'entity' => 'people.notes',
            'alias' => 'person_notes',
        ],
        [
            'code' => 'person_institution:name',
            'title' => 'Instituição: nome',
            'entity' => 'institutions.name',
            'alias' => 'institution_name',
        ],
        [
            'code' => 'person_institution:name',
            'title' => 'Cargo: nome',
            'entity' => 'roles.name',
            'alias' => 'role_name',
        ],
    ];

    public function all()
    {
        return collect($this->fixedData)->merge($this->getContactTypes());
    }

    public function generatable()
    {
        return collect($this->fixedData)->merge($this->getContactTypes(true));
    }

    protected function getContactTypes($withEntity = false)
    {
        return ContactType::all()->map(function ($row) use ($withEntity) {
            return [
                'code' => 'contact_type:' . $row->code,
                'title' => 'Tipo de contato: ' . $row->name,
                'alias' => 'contact_type_' . $row->code,
            ];
        });
    }
}
