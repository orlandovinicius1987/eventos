<?php
namespace App\Data\Repositories;

use Illuminate\Pagination\LengthAwarePaginator;
use App\Data\Repositories\People as PeopleRepository;
use App\Data\Repositories\Events as EventsRepository;
use App\Data\Repositories\Parties as PartiesRepository;
use App\Data\Repositories\SubEvents as SubEventsRepository;
use App\Data\Repositories\Categories as CategoriesRepository;
use App\Data\Repositories\Institutions as InstitutionsRepository;
use Gate;

class Dashboard extends Repository
{
    public function makeDashboardData()
    {
        $returnArray = [];

        if (Gate::check('events:read') || Gate::check('events:modify')) {
            $returnArray['events'] = [
                'name' => 'Eventos',
                'route' => '/events',
                'count' => app(EventsRepository::class)->count(),
            ];
        }
        if (Gate::check('subevents:read') || Gate::check('subevents:modify')) {
            $returnArray['subevents'] = [
                'name' => 'Sub-eventos',
                'route' => '/events',
                'count' => app(SubEventsRepository::class)->count(),
            ];
        }
        if (Gate::check('people:read') || Gate::check('people:modify')) {
            $returnArray['people'] = [
                'name' => 'Pessoas',
                'route' => '/people',
                'count' => app(PeopleRepository::class)->count(),
            ];
        }
        if (
            Gate::check('institutions:read') ||
            Gate::check('institutions:modify')
        ) {
            $returnArray['institutions'] = [
                'name' => 'Instituições',
                'route' => '/institutions',
                'count' => app(InstitutionsRepository::class)->count(),
            ];
            $returnArray['partidos'] = [
                'name' => 'Partidos',
                'route' => '/parties',
                'count' => app(PartiesRepository::class)->count(),
            ];
        }
        if (
            Gate::check('categories:read') ||
            Gate::check('categories:modify')
        ) {
            $returnArray['categories'] = [
                'name' => 'Categorias',
                'route' => '/categories',
                'count' => app(CategoriesRepository::class)->count(),
            ];
        }

        return $returnArray;
    }

    public function all()
    {
        return $this->makePaginationResult(
            new LengthAwarePaginator($this->makeDashboardData(), 1, 5, 1)
        );
    }
}
