<?php

namespace App\Data\Repositories\Traits;

use App\Data\Repositories\ExportableData;
use App\Services\CSV;
use App\Services\PDF\Service as PDF;
use Illuminate\Support\Facades\DB;

trait PeopleExport
{
    public function export()
    {
        return request()->get('fileType') === 'pdf'
            ? $this->pdf()
            : $this->csv();
    }

    public function exportAll()
    {
        return $this->csvAll();
    }

    /**
     * @return array
     */
    protected function exportGetSelectList(): array
    {
        return [
            'people.id',
            'people.name as person_name',
            'people.nickname as person_nickname',
            'person_institutions.title as person_title',
            'people.birthdate as person_birthdate',
            'people.cpf as person_cpf',
            'people.notes as person_notes',
            'institutions.name as institution_name',
            'contacts.contact as contact',
            'contact_types.name as contact_type_name',
            'contact_types.code as contact_type_code',
        ];
    }

    /**
     * @return mixed
     */
    protected function exportQueryAndJoins()
    {
        return $this->newQuery()
            ->leftJoin(
                'person_institutions',
                'people.id',
                '=',
                'person_institutions.person_id'
            )
            ->leftJoin(
                'institutions',
                'person_institutions.institution_id',
                '=',
                'institutions.id'
            )
            ->leftJoin(
                'person_institutions as advisors',
                'advisors.advised_id',
                '=',
                'person_institutions.id'
            )
            ->leftJoin(
                'contacts',
                'contacts.person_institution_id',
                '=',
                'person_institutions.id'
            )
            ->leftJoin(
                'contact_types',
                'contacts.contact_type_id',
                '=',
                'contact_types.id'
            );
    }

    public function pdf()
    {
        return app(PDF::class)
            ->initialize($this->generateHtml())
            ->download(make_filename('pessoas', 'pdf'));
    }

    public function csv()
    {
        $fileName = tempnam(sys_get_temp_dir(), 'exporter_');

        file_put_contents(
            $fileName,
            $this->exportToCsv($this->getExportableData())
        );

        return response()
            ->download($fileName, make_filename('pessoas', 'csv'))
            ->deleteFileAfterSend(true);
    }

    public function csvAll()
    {
        $fileName = tempnam(sys_get_temp_dir(), 'exporter_');

        file_put_contents(
            $fileName,
            $this->exportToCsv($this->getExportableDataAll())
        );

        return response()
            ->download($fileName, make_filename('pessoas', 'csv'))
            ->deleteFileAfterSend(true);
    }

    public function generateHtml()
    {
        return view('pdf.people')
            ->with([
                'heading' => 'Mailing',
                'subHeading' => '',
                'date' => now()->format('m/d/Y H:i'),
                'people' => $this->getExportableData(),
            ])
            ->render();
    }

    public function exportToCsv($data)
    {
        return app(CSV::class)->generate($data);
    }

    public function exportFilterPeople()
    {
        return $this->disablePagination()->applyFilter(
            $this->exportQueryAndJoins()->select($this->exportGetSelectList())
        )['rows'];
    }

    public function getExportableData()
    {
        return collect($this->exportFilterPeople())
            ->groupBy('id')
            ->map(function ($person) {
                return $this->exportFlattenPerson($person);
            })
            ->map(function ($person) {
                $this->getExportableColumns()
                    ->pluck('alias')
                    ->each(function ($alias) use (&$person) {
                        if (!isset($person[$alias])) {
                            $person[$alias] = null;
                        }
                    });

                return $person;
            })
            ->map(function ($person) {
                return collect($person)->only(
                    $this->getExportableColumns()->pluck('alias')
                );
            })
            ->values()
            ->toArray();
    }

    public function getExportableDataAll()
    {
        $sql =
            'select
                    pi.id,
                    pp.name as "pessoa", 
                    inst.name as "institution", 
                    r.name as "cargo"
                           
                from 
                    people pp, 
                    person_institutions pi, 
                    institutions inst, 
                    roles r, 
                    clients cl
                where 
                    cl.id = ' .
            request()
                ->session()
                ->get('current_client')->id .
            '
                    and
                    pp.client_id = cl.id and
                    pp.id = pi.person_id and 
                    inst.id = pi.institution_id and 
                    r.id = pi.role_id    
                    order by pp.name';

        return collect(
            $this->createdata(\Illuminate\Support\Facades\DB::select($sql))
        )
            ->values()
            ->toArray();
    }

    public function getExportableColumns()
    {
        return app(ExportableData::class)
            ->generatable()
            ->whereIn('code', request()->get('options'));
    }

    protected function exportFlattenPerson($person): array
    {
        $person = $person->map(function ($contact) {
            $contact['contact_type_' . $contact['contact_type_code']] =
                $contact['contact'];

            unset($contact['contact']);
            unset($contact['contact_type_code']);
            unset($contact['contact_type_name']);

            return $contact;
        });

        $item = [];

        $person->each(function ($columns) use (&$item) {
            collect($columns)->each(function ($column, $name) use (&$item) {
                $item[$name] = $column;
            });
        });

        return $item;
    }

    /**
     * @param array $data
     */
    private function createdata(array $data)
    {
        $array = [];

        foreach ($data as $value) {
            $array[$value->id] = [
                'pessoa' => [
                    'nome' => $value->pessoa,
                    'instituicao' => $value->institution,
                    'cargo' => $value->cargo,
                ],
                'contacts' => $this->getContactsByPersonInstitutionId(
                    $value->id
                ),
                'endereco' => $this->getAddressesByPersonInstitutionId(
                    $value->id
                ),
                'assessores' => $this->getAdvisedesByPersonInstitutionId(
                    $value->id
                ),
            ];
        }

        return $array;
    }

    public function getAdvisedesByPersonInstitutionId($person_institution_id)
    {
        $sql =
            'select 
                    pp.id,
                    pp.name as "pessoa", 
                    inst.name as "institution", 
                    r.name as "cargo"
                           
                from 
                    people pp, 
                    person_institutions pi, 
                    institutions inst, 
                    roles r, 
                    clients cl
                where
                    pp.client_id = cl.id and
                    pp.id = pi.person_id and 
                    inst.id = pi.institution_id and 
                    r.id = pi.role_id and   
                    pi.advised_id =' .
            $person_institution_id .
            ' order by pp.name';

        return $this->createdata(\Illuminate\Support\Facades\DB::select($sql));
    }

    public function getContactsByPersonInstitutionId($person_institution_id)
    {
        return DB::table('contacts')
            ->select('contacts.contact', 'contact_types.name')
            ->leftJoin(
                'contact_types',
                'contacts.contact_type_id',
                '=',
                'contact_types.id'
            )
            ->where('person_institution_id', $person_institution_id)
            ->orderBy('contact_type_id')
            ->get()
            ->toArray();
    }

    public function getAddressesByPersonInstitutionId($person_institution_id)
    {
        return DB::table('addresses')
            ->select(
                'street',
                'number',
                'complement',
                'neighbourhood',
                'city',
                'state',
                'zipcode'
            )
            ->where('addressable_id', $person_institution_id)
            ->where('addressable_type', 'App\Data\Models\PersonInstitution')
            ->get()
            ->toArray();
    }
}
