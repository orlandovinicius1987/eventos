<?php

namespace App\Data\Repositories;

use App\Data\Models\User;
use App\Services\Authorization;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class Users extends Base
{
    /**
     * @var string
     */
    protected $model = User::class;

    protected $tiposUsuarios;

    /**
     * @var Authorization
     */
    private $authorization;

    /**
     * Users constructor.
     *
     * @param Authorization $authorization
     */
    public function __construct(Authorization $authorization)
    {
        $this->authorization = $authorization;
    }

    /**
     * @param $request
     *
     * @return mixed
     */
    private function credentials($request)
    {
        return $request->only(['username', 'password']);
    }

    /**
     * @param $email
     *
     * @return mixed
     */
    public function findUserByEmail($email)
    {
        return User::where('email', $email)->first();
    }

    /**
     * @param $id
     *
     * @return mixed
     */
    public function findUserById($id)
    {
        return User::find($id);
    }

    private function getUserTypeFromPermissions($permissions)
    {
        //        return UserType::first();
        return true;
        //        $other = '';
        //        $admin = false;
        //        $committeeBool = false;
        //
        //        $userTypesRepository = app(UserTypesRepository::class);
        //        $userTypesArray = $userTypesRepository->toArrayWithColumnKey(
        //            $userTypesRepository->all(),
        //            'name'
        //        );
        //
        //        foreach ($permissions as $permission) {
        //            if (isset($userTypesArray[$permission['nomeFuncao']])) {
        //                if ($permission['nomeFuncao'] == 'Administrador') {
        //                    $admin = true;
        //                } else {
        //                    $other = $permission['nomeFuncao'];
        //                }
        //            }
        //        }
        //
        //        if ($admin) {
        //            return app(UserTypes::class)->findByName('Administrador');
        //        } elseif ($other != '') {
        //            return app(UserTypes::class)->findByName($other);
        //        } elseif ($committeeBool) {
        //            return app(UserTypes::class)->findByName('Comissao');
        //        } else {
        //            return null;
        //        }
    }

    private function isAdministrador($permissions)
    {
        return $this->isType($permissions, 'Administrador');
    }

    /**
     * @param $permissions
     * @param $type
     *
     * @return bool
     */
    private function isType($permissions, $type)
    {
        return $permissions
            ->filter(function ($user) use ($type) {
                return starts_with($user['nomeFuncao'], $type);
            })
            ->count() > 0;
    }

    /**
     * @param $request
     * @param $remember
     *
     * @return User
     */
    public function updateLoginUser($request, $remember)
    {
        try {
            $credentials = extract_credentials($request);

            if (
                is_null(
                    ($user = $this->findUserByEmail(
                        ($email = "{$credentials['username']}@alerj.rj.gov.br")
                    ))
                )
            ) {
                $user = new User();

                $user->name = $credentials['username'];

                $user->username = $credentials['username'];

                $user->email = $email;
            }

            $user->password = Hash::make($credentials['password']);

            $user->save();
        } catch (\Exception $exception) {
            report($exception);

            return null;
        }

        return $user;
    }

    /**
     * @param $permissions
     *
     * @return User
     */
    public function updatePermissions($user, $permissions)
    {
        $permissionsArray = [];
        $permissions->each(function ($permission, $key) use (
            &$permissionsArray
        ) {
            $permissionsArray[$permission['nomeFuncao']] =
                $permission['evento'];
        });

        $user->permissions = json_encode($permissionsArray);
        $user->save();

        return $user;
    }

    /**
     * @param $permissions
     *
     * @return User
     */
    public function updateProfiles($user, $profiles)
    {
        $profilesArray = [];

        $profiles->each(function ($profile, $key) use (&$profilesArray) {
            $profilesArray[$profile['NOME_PERFIL']] = $profile['TIPO_PERFIL'];
        });

        $user->profiles = json_encode($profilesArray);
        $user->save();

        return $user;
    }

    /**
     * @param $type
     *
     * @return mixed
     */
    public function getByType($type)
    {
        $type = $this->tiposUsuarios->findByName($type);

        $model = $this->model;

        return $this->makeResultForSelect(
            $model::where('user_type_id', $type->id)->get(),
            'name'
        );
    }

    /**
     * @return mixed
     */
    public function all()
    {
        $query = User::orderBy('name');

        if (!is_administrator()) {
            $administrator = $this->tiposUsuarios->findByName('Administrador');

            $query->where('user_type_id', '!=', $administrator->id);
        }

        return $query->get();
    }

    public function notifiables()
    {
        return User::where('all_notifications', true)->get();
    }

    public function updateCurrentUserTypeViaPermissions($permissions)
    {
        //        $user = Auth::user();
        //        $userTypesRepository = app(UserTypesRepository::class);
        //
        //        $userTypesArray = $userTypesRepository->toArrayWithColumnKey(
        //            $userTypesRepository->all(),
        //            'name'
        //        );
        //
        //        $administrator = false;
        //        $userType = null;
        //
        //        foreach ($permissions as $permission) {
        //            if ($permission['nomeFuncao'] == 'Administrador') {
        //                $userType = $userTypesArray['Administrador'];
        //
        //                $administrator = true;
        //            }
        //        }
        //
        //        if ($userType) {
        //            $user->user_type_id = $userType->id;
        //            $user->save();
        //        } else {
        //            dd('Você não está autorizado a usar o sistema');
        //        }
    }
}
