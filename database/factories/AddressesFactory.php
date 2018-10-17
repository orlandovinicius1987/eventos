<?php

use App\Data\Models\Person;
use App\Data\Models\SubEvent;
use Faker\Generator as Faker;

use App\Data\Repositories\People as PeopleRepository;
use App\Data\Repositories\SubEvents as SubEventsRepository;

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

$factory->define(App\Data\Models\Address::class, function (Faker $faker) {
    $array = ['Person', 'SubEvent'];

    $randomKey = array_rand($array);

    if ($array[$randomKey] == 'Person') {
        $addressable_id = app(PeopleRepository::class)->randomElement()->id;
        $addressable_type = Person::class;
    } elseif ($array[$randomKey] == 'SubEvent') {
        $addressable_id = app(SubEventsRepository::class)->randomElement()->id;
        $addressable_type = SubEvent::class;
    }

    $cepArray[0] = '78994000';
    $cepArray[1] = '78994800';
    $cepArray[2] = '78956000';
    $cepArray[3] = '13500110';
    $cepArray[4] = '78931000';
    $cepArray[5] = '78967800';
    $cepArray[6] = '13092150';
    $cepArray[7] = '78968000';
    $cepArray[8] = '13537000';
    $cepArray[9] = '78993000';
    $cepArray[10] = '78973000';
    $cepArray[11] = '78990000';
    $cepArray[12] = '13500000';
    $cepArray[13] = '20521110';
    $cepArray[14] = '20530350';
    $cepArray[15] = '20260160';
    $cepArray[16] = '20511170';
    $cepArray[17] = '13500313';
    $cepArray[18] = '20511330';
    $cepArray[19] = '13506555';
    $cepArray[20] = '20530350';

    $zipcode = $cepArray[array_rand($cepArray)];

    return [
        'zipcode' => $zipcode,
        'street' => 'street',
        'number' => 40,
        'complement' => 'Apt ' . $faker->randomNumber(2),
        'neighbourhood' => 'Copacabana',
        'city' => 'Rio de Janeiro',
        'state' => 'RJ',
        'addressable_id' => $addressable_id,
        'addressable_type' => $addressable_type
    ];
});
