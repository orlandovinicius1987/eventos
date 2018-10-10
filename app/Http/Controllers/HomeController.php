<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

//TEST
use App\Data\Models\User as UserModel;
use App\Data\Repositories\Users as UsersRepository;
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
        app(UsersRepository::class)
            ->findByColumn('name', 'breno')
            ->delete();

        $user = new UserModel();
        $user->username = 'breno';
        $user->name = 'breno';
        $user->email = 'breno@alerj.br';
        $user->password = 'sdasdasdasd';

        $user->profiles = json_encode(['Adm' => '', 'Operador' => '']);

        $user->permissions = json_encode([
            'Operar' => 'operar evento',
            'Administrar' => 'administrar evento',
        ]);

        $user->save();

        dump($user->profiles_array);
        dump($user->permissions_array);
        dd('fim');
    }
}
