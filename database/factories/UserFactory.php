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
        $name = preg_replace('/([^a-zA-Z])/', '', $name);
    } while (
        !is_null($usersRepository->findByEmail($name . '@alerj.rj.gov.br'))
    );

    $allPermissions = [
        'forum - topics:modify' => null,
        'forum - contacttypes:read' => null,
        'cerimonial - people:modify' => null,
        'forum - people:read' => null,
        'cerimonial - sectors:modify' => null,
        'cerimonial - sectors:read' => null,
        'cerimonial - receptive' => null,
        'cerimonial - roles:read' => null,
        'forum - subevents:modify' => null,
        'forum - roles:read' => null,
        'cerimonial - costumes:modify' => null,
        'cerimonial - categories:modify' => null,
        'forum - subevents:read' => null,
        'forum - costumes:modify' => null,
        'forum - sectors:modify' => null,
        'forum - events:modify' => null,
        'forum - categories:modify' => null,
        'forum - institutions:read' => null,
        'cerimonial - subevents:modify' => null,
        'forum - events:read' => null,
        'forum - sectors:read' => null,
        'cerimonial - topics:read' => null,
        'forum - contacttypes:modify' => null,
        'cerimonial - events:read' => null,
        'cerimonial - people:read' => null,
        'forum - roles:modify' => null,
        'cerimonial - subevents:read' => null,
        'cerimonial - security' => null,
        'cerimonial - phonebook:modify' => null,
        'forum - topics:read' => null,
        'forum - receptive' => null,
        'cerimonial - contacttypes:read' => null,
        'cerimonial - roles:modify' => null,
        'forum - subevents:invite' => null,
        'cerimonial - import:modify' => null,
        'forum - costumes:read' => null,
        'cerimonial - contacttypes:modify' => null,
        'cerimonial - costumes:read' => null,
        'forum - phonebook:modify' => null,
        'forum - people:modify' => null,
        'cerimonial - phonebook:read' => null,
        'cerimonial - institutions:read' => null,
        'forum - phonebook:read":null' => null,
        'cerimonial - topics:modify' => null,
        'cerimonial - subevents:invite' => null,
        'forum - import:modify' => null,
        'cerimonial - institutions:modify' => null,
        'forum - security' => null,
        'forum - categories:read' => null,
        'cerimonial - events:modify' => null,
        'forum - institutions:modify' => null,
        'cerimonial - categories:read' => null
    ];
    $allProfiles = [
        'Administrador' => 'A',
        'Cerimonial - Administrador' => 'N',
        'Forum - Administrador' => 'N'
        //        'Funcionario' => 'N',
        //        'Gestor de Eventos' => 'N',
        //        'Mailing' => 'N',
        //        'Recepcionista' => 'N',
        //        'Cerimonial' => 'N',
    ];

    return [
        'name' => $name,
        'username' => $name,
        'email' => $name . '@alerj.rj.gov.br',
        'password' => bcrypt('secret'),
        'remember_token' => str_random(10),
        'permissions' => json_encode($allPermissions),
        'profiles' => json_encode($allProfiles)
    ];
});
