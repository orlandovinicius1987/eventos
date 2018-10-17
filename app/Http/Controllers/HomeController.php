<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

//TEST
use App\Data\Models\User as UserModel;
use App\Data\Repositories\Users as UsersRepository;
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
        $user = app(UsersRepository::class)->findByName('breno');

        if (!is_null($user)) {
            $user->delete();
        }

        $user = new UserModel();
        $user->username = 'breno';
        $user->name = 'breno';
        $user->email = 'breno@alerj.br';
        $user->password = 'sdasdasdasd';

        $user->profiles = json_encode(['Adm' => 'S', 'Operador' => 'N']);

        $user->permissions = json_encode([
            'edit' => 'edit',
            'create' => 'create',
        ]);

        $user->save();

        dump($user->profiles_array);
        dump($user->permissions_array);

        dump(Gate::allows('canCreate'));
        dump(Gate::allows('canEdit'));
        dump(Gate::allows('canRead'));

        dd('fim');
    }
}
