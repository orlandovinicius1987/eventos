<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

//TEST
use App\Data\Models\User as UserModel;
use App\Data\Repositories\Users as UsersRepository;
use App\Data\Repositories\Events as EventsRepository;
use App\Data\Repositories\SubEvents as SubEventsRepository;
use App\Data\Repositories\PersonInstitutions as PersonInstitutionsRepository;
use Illuminate\Support\Facades\Gate;
//TEST

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('home');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function testRoute()
    {
        //        dd(app(EventsRepository::class)->allHasSubEventsAboutToHappen());
        //        dd(app(SubEventsRepository::class)->allAboutToHappen());
        dd(app(EventsRepository::class)->allHasSubEventsNotFinalized());
    }
}
