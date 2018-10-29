<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Data\Repositories\Dashboard as DashboardRepository;

class Dashboard extends Controller
{
    /**
     * Get all data
     *
     * @return \Illuminate\Http\Response|Collection
     */
    public function data()
    {
        return app(DashboardRepository::class)->all();
    }
}
