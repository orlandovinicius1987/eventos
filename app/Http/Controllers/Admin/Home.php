<?php

namespace App\Http\Controllers\Admin;

use App\Data\Repositories\Clients as ClientsRepository;
use App\Http\Controllers\Controller;
use App\Http\Requests\HomeUpdate;

class Home extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('admin.index')->with(
            'clients',
            app(ClientsRepository::class)->all()
        );
    }

    public function changeClient(HomeUpdate $request)
    {
        if (
            ($client = app(ClientsRepository::class)->findById(
                $request['clientId']
            ))
        ) {
            set_current_client_id($client->id);
        }

        return redirect()->route('admin.index');
    }
}
