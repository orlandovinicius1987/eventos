<?php

namespace App\Data\Repositories;

use Intervention\Image\Facades\Image;
use App\Data\Models\PersonInstitution;
use App\Data\Models\Person as PersonModel;
use App\Data\Scopes\Active as ActiveScope;
use App\Data\Repositories\Traits\PeopleExport;
use Illuminate\Pagination\LengthAwarePaginator;

class People extends Repository
{
    use PeopleExport;

    /**
     * @var string
     */
    protected $model = PersonModel::class;

    protected $tableAlias;

    private function dummyPhotoAddress()
    {
        return public_path('images/no-image.jpg');
    }

    private function extractImage($photo)
    {
        return substr($photo, strpos($photo, ';') + 1);
    }

    public function getPhotoResponse($id)
    {
        $photo = $this->findById($id)->photo;

        return Image::make(
            !$photo ? $this->dummyPhotoAddress() : $this->extractImage($photo)
        )->response();
    }

    public function phoneBook($id)
    {
        $person = $this->findById($id);

        $phoneBook = [];

        $person->person_institutions->each(function ($personInstitution) use (
            &$phoneBook
        ) {
            $personInstitution->contacts->each(function ($contact) use (
                $personInstitution,
                &$phoneBook
            ) {
                $phoneBook[] = [
                    'from' => $personInstitution->person->name,
                    'institution' => $personInstitution->institution->name,
                    'role' => $personInstitution->role->name,
                    'type' => $contact->contactType->name,
                    'contact' => $contact->contact,
                ];
            });

            $personInstitution->advisors->each(function ($advisor) use (
                $personInstitution,
                &$phoneBook
            ) {
                $advisor->contacts->each(function ($contact) use (
                    $personInstitution,
                    &$phoneBook,
                    $advisor
                ) {
                    $phoneBook[] = [
                        'from' => $advisor->person->name,
                        'institution' => $personInstitution->institution->name,
                        'role' => $advisor->role->name,
                        'type' => $contact->contactType->name,
                        'contact' => $contact->contact,
                    ];
                });
            });
        });

        return $this->makePaginationResult(
            new LengthAwarePaginator($phoneBook, 1, 5, 1)
        );
    }

    protected function filterCheckboxes($query, array $filter)
    {
        if (isset($filter['hasNoPhoto']) && $filter['hasNoPhoto']) {
            $query->hasNoPhoto();
        }

        if (isset($filter['showInactive']) && $filter['showInactive']) {
            $query->withoutGlobalScope(ActiveScope::class);
        }
    }

    /**
     * Filter Selects
     *
     * @param $query
     * @param array $filter
     * @return mixed
     */
    protected function filterSelects($query, array $filter)
    {
        if (isset($filter['institution']) && !is_null($filter['institution'])) {
            $query->presentInInstitution($filter['institution']);
        }

        if (isset($filter['role']) && !is_null($filter['role'])) {
            $query->presentInRole($filter['role']);
        }

        if (isset($filter['category']) && !is_null($filter['category'])) {
            $query->hasCategory($filter['category']);
        }

        if (isset($filter['topic']) && !is_null($filter['topic'])) {
            $query->hasTopic($filter['topic']);
        }

        return $query;
    }

    public function personInstitutions()
    {
        return $this->hasMany(PersonInstitution::class);
    }
}
