<?php

use Faker\Generator as Faker;

use App\Data\Repositories\Roles as RolesRepository;
use App\Data\Repositories\Users as UsersRepository;

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

$factory->define(App\Data\Models\Advisor::class, function (Faker $faker) {
    Auth::login(app(UsersRepository::class)->randomElement());

    return [
        'name' => $faker->name,
        'role_id' => app(RolesRepository::class)->randomElement()->id,
    ];
});
