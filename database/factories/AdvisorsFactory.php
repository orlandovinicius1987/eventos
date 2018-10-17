<?php

use Faker\Generator as Faker;

use App\Data\Repositories\People as PeopleRepository;
use App\Data\Repositories\AdvisorTypes as AdvisorTypesRepository;
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

$factory->define(App\Data\Models\AdvisorType::class, function (Faker $faker) {
    return [
        'name' => $faker->name
    ];
});

$factory->define(App\Data\Models\Advisor::class, function (Faker $faker) {
    Auth::login(app(UsersRepository::class)->randomElement());

    return [
        'name' => $faker->name,
        'advisor_type_id' => app(AdvisorTypesRepository::class)->randomElement()
            ->id,
        'person_id' => app(PeopleRepository::class)->randomElement()->id
    ];
});
