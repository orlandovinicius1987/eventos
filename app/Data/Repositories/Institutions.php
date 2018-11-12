<?php

namespace App\Data\Repositories;

use App\Data\Models\Institution;

class Institutions extends Repository
{
    /**
     * @var string
     */
    protected $model = Institution::class;

    public function findByInitials($initials)
    {
        return $this->model
            ::where('initials', 'ilike', str_replace(' ', '', $initials))
            ->first();
    }

    protected function filterAllColumns($query, $text)
    {
        $query->where(function ($query) use ($text) {
            $query->orWhere('initials', 'ilike', "%{$text}%");
            $query->orWhere('name', 'ilike', "%{$text}%");
            $query->orWhere('party_number', 'ilike', "%{$text}%");
        });

        return $query;
    }
}
