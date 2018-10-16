<?php

use Faker\Generator as Faker;

use App\Data\Repositories\Users as UsersRepository;
use App\Data\Models\User as UserModel;
/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(UserModel::class, function (Faker $faker) {
    $usersRepository = app(UsersRepository::class);

    do {
        $name = strtolower($faker->unique()->firstName);
        $name = preg_replace("/([^a-zA-Z])/", "", $name);
    } while (
        !is_null(
            $usersRepository->findByEmail($name . '@alerj.rj.gov.br')
        )
    );

    $allPermissions = ['Criar' => true, 'Editar' => true, 'Ver' => true];
    $allProfiles = [
        'Administrador' => 'N',
        'Funcionario' => 'N',
        'Gestor de Eventos' => 'N',
        'Mailing' => 'N',
        'Recepcionista' => 'N',
    ];

    return [
        'name' => $name,
        'username' => $name,
        'email' => $name . '@alerj.rj.gov.br',
        'password' => bcrypt('secret'),
        'remember_token' => str_random(10),
        'permissions' => json_encode($allPermissions),
        'profiles' => json_encode($allProfiles),
    ];
});
