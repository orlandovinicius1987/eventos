<?php

use Faker\Generator as Faker;

use App\Data\Repositories\Users as UsersRepository;
use App\Data\Repositories\Clients as ClientsRepository;
use App\Data\Repositories\Events as EventsRepository;

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

$factory->define(App\Data\Models\Subevent::class, function (Faker $faker) {
    Auth::login(app(UsersRepository::class)->randomElement());

    return [
        'name' => $faker->name,
        'date' => $faker->date,
        'time' => $faker->time,
        'invitation_text' => $faker->name,
        'credentials_text' => $faker->name,
        'thank_you_text' => $faker->name,
        'event_id' => app(EventsRepository::class)->randomElement()->id,
    ];
});
