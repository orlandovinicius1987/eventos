<?php

namespace App\Data\Repositories;

use Illuminate\Pagination\LengthAwarePaginator;
use App\Data\Repositories\Events as EventsRepository;
use App\Data\Repositories\SubEvents as SubEventsRepository;
use App\Data\Repositories\People as PeopleRepository;
use App\Data\Repositories\Institutions as InstitutionsRepository;
use App\Data\Repositories\Parties as PartiesRepository;
use App\Data\Repositories\Categories as CategoriesRepository;

class Dashboard extends Repository
{
    public function makeDashboardData()
    {
        return [
            'events' => [
                'name' => 'Eventos',
                'count' => app(EventsRepository::class)->count(),
            ],
            'subEvents' => [
                'name' => 'Sub-eventos',
                'count' => app(SubEventsRepository::class)->count(),
            ],
            'people' => [
                'name' => 'Pessoas',
                'count' => app(PeopleRepository::class)->count(),
            ],
            'institutions' => [
                'name' => 'Instituições',
                'count' => app(InstitutionsRepository::class)->count(),
            ],
            'partidos' => [
                'name' => 'Partidos',
                'count' => app(PartiesRepository::class)->count(),
            ],
            'categories' => [
                'name' => 'Categorias',
                'count' => app(CategoriesRepository::class)->count(),
            ],
        ];
    }

    public function all()
    {
        return $this->makePaginationResult(
            new LengthAwarePaginator($this->makeDashboardData(), 1, 5, 1)
        );
    }
}
