<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\HomeUpdate;
use App\Http\Controllers\Controller;
use App\Data\Repositories\Clients as ClientsRepository;

class Home extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $allowedClients = current_user()->allowed_clients;

        // TODO: trabalhar futuramente com uma escolha de o sistema favorito, para que este seja o sistema inicial da aplicação
//        if (!get_current_client_id()) {
//            set_current_client_id($allowedClients ? $allowedClients->first()->id : null);
//        }

        return view('admin.index')->with('clients', $allowedClients);
    }

    public function changeClient(HomeUpdate $request)
    {
        if (
            $client = app(ClientsRepository::class)->findById(
                $request['clientId']
            )
        ) {
            set_current_client_id($client->id);
        }

        return redirect()->route('admin.index');
    }
}
