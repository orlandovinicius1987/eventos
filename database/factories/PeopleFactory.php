<?php

use Faker\Generator as Faker;

use App\Data\Repositories\Clients as ClientsRepository;
use App\Data\Repositories\People as PeopleRepository;

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

$factory->define(App\Data\Models\Person::class, function (Faker $faker) {
    $peopleRepository = app(PeopleRepository::class);
    return [
        'name' => $faker->name,
        //        'role_id' => app(RolesRepository::class)->randomElement()->id,
        'title' => $faker->title,
        'client_id' => app(ClientsRepository::class)->randomElement()->id
    ];
});
