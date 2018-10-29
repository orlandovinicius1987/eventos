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
                'route' => '/events',
                'count' => app(EventsRepository::class)->count(),
            ],
            'subEvents' => [
                'name' => 'Sub-eventos',
                'route' => '/events',
                'count' => app(SubEventsRepository::class)->count(),
            ],
            'people' => [
                'name' => 'Pessoas',
                'route' => '/people',
                'count' => app(PeopleRepository::class)->count(),
            ],
            'institutions' => [
                'name' => 'Instituições',
                'route' => '/institutions',
                'count' => app(InstitutionsRepository::class)->count(),
            ],
            'partidos' => [
                'name' => 'Partidos',
                'route' => '/parties',
                'count' => app(PartiesRepository::class)->count(),
            ],
            'categories' => [
                'name' => 'Categorias',
                'route' => '/categories',
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
