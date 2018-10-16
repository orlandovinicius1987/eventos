<?php

namespace App\Http\Controllers\Api;

use App\Data\Repositories\Events;
use App\Http\Controllers\Controller;

class EventsSearch extends Controller
{
    public function search()
    {
        return app(Events::class)->searchByEverything(request()->get('search'));
    }
}
