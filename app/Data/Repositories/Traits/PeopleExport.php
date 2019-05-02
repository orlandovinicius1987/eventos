<?php

namespace App\Data\Repositories\Traits;

use App\Data\Repositories\ExportableData;
use App\Services\CSV;
use App\Services\PDF\Service as PDF;

trait PeopleExport
{
    public function export()
    {
        return request()->get('fileType') === 'pdf'
            ? $this->pdf()
            : $this->csv();
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
}
