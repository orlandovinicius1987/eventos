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
        $clientsAllowed = app(ClientsRepository::class)->all();
        $profiles = collect(current_user()->profiles_array);

        if (!current_user()->is_administrator) {
            $clientsAllowed = $clientsAllowed->reject(function ($client) use (
                $profiles
            ) {
                return !$profiles->keys()->contains($client->name);
            });
        }

        return view('admin.index')->with('clients', $clientsAllowed);
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
