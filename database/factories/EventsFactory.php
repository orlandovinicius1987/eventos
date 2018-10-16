<?php

use Faker\Generator as Faker;

use App\Data\Repositories\Users as UsersRepository;
use App\Data\Repositories\Clients as ClientsRepository;

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

$factory->define(App\Data\Models\Event::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'confirmed_by' => app(UsersRepository::class)->randomElement()->id,
        'confirmed_at' => now(),
        'client_id' => app(ClientsRepository::class)->randomElement()->id,
    ];
});
